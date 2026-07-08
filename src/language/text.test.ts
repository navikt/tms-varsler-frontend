import { describe, expect, it } from "vitest";
import { dynamicText, text } from "./text";

describe("dynamicText.tidligereVarslerHeading", () => {
  it("should render the bokmål heading with counts", () => {
    expect(dynamicText.tidligereVarslerHeading.nb(3, 10)).toBe("Viser 3 av 10 tidligere varsler");
  });

  it("should render the english heading with counts", () => {
    expect(dynamicText.tidligereVarslerHeading.en(3, 10)).toBe("Showing 3 of 10 previous notifications");
  });

  it("should render the nynorsk heading with counts", () => {
    expect(dynamicText.tidligereVarslerHeading.nn(3, 10)).toBe("Viser 3 av 10 tidlegare varsel");
  });
});

describe("dynamicText.notificationChannel", () => {
  it("should translate SMS and EPOST and join with 'og' in bokmål", () => {
    expect(dynamicText.notificationChannel(["SMS", "EPOST"], "nb").nb).toBe(
      `Varslet via ${text.SMS.nb} og ${text.EPOST.nb}`,
    );
  });

  it("should translate the channels and join with 'and' in english", () => {
    expect(dynamicText.notificationChannel(["SMS", "EPOST"], "en").en).toBe(
      `Notified via ${text.SMS.en} and ${text.EPOST.en}`,
    );
  });

  it("should handle a single channel", () => {
    expect(dynamicText.notificationChannel(["SMS"], "nb").nb).toBe("Varslet via SMS");
  });
});
