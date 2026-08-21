import { afterEach, describe, expect, it, vi } from "vitest";

const captureException = vi.fn();

vi.mock("@nais/apm", () => ({
  captureException: (...args: unknown[]) => captureException(...args),
}));

import postInaktiver from "@components/VarseList/VarselCard/postInaktiver";

describe("postInaktiver", () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.unstubAllGlobals();
  });

  it("should capture an HTTP failure without including the event id", async () => {
    const fetch = vi.fn().mockResolvedValue(new Response(null, { status: 503 }));
    vi.stubGlobal("fetch", fetch);

    await postInaktiver("event-id-must-not-be-captured");

    expect(captureException).toHaveBeenCalledOnce();
    expect(captureException).toHaveBeenCalledWith(expect.any(Error), {
      fingerprint: "varsel-inaktivering",
      context: { status: 503 },
    });
    expect(JSON.stringify(captureException.mock.calls)).not.toContain("event-id-must-not-be-captured");
  });

  it("should capture a rejected request", async () => {
    const requestError = new TypeError("Failed to fetch");
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(requestError));

    await postInaktiver("event-id-must-not-be-captured");

    expect(captureException).toHaveBeenCalledOnce();
    expect(captureException).toHaveBeenCalledWith(requestError, {
      fingerprint: "varsel-inaktivering",
    });
  });
});
