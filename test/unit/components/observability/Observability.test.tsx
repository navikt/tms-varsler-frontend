import { render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

const init = vi.fn();

vi.mock("@nais/apm", () => ({
  init: (...args: unknown[]) => init(...args),
}));

import Observability from "@components/observability/Observability";

describe("Observability", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize PII-safe browser telemetry with tracing", () => {
    render(<Observability />);

    expect(init).toHaveBeenCalledOnce();
    expect(init).toHaveBeenCalledWith({
      app: "tms-varsler-frontend",
      namespace: "min-side",
      tracing: true,
      sessionReplay: { enabled: false },
      screenshotOnError: false,
    });
  });
});
