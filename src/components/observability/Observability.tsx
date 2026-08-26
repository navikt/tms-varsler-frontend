import { init } from "@nais/apm";
import { useEffect } from "react";

const Observability = () => {
  useEffect(() => {
    init({
      app: "tms-varsler-frontend",
      namespace: "min-side",
      tracing: true,
      sessionReplay: { enabled: false },
      screenshotOnError: false,
    });
  }, []);

  return null;
};

export default Observability;
