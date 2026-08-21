import ErrorAlert from "@components/error/Error.tsx";
import ApmErrorBoundary from "@components/observability/ApmErrorBoundary";
import { DOCUMENT_LOCALE } from "@language/language.ts";
import { text } from "@language/text.ts";
import { useStore } from "@nanostores/react";
import { Alert, Link } from "@navikt/ds-react";
import type { VarselResponse } from "@src/customTypes/Varsel.ts";
import { $showTidligere, initVarsler } from "@src/store/store.ts";
import { logLinkNavigation } from "@utils/client/analytics.ts";
import { loginStepUpUrl } from "@utils/urls.ts";
import { NyeVarslerView } from "./NyeVarslerView/NyeVarslerView.tsx";
import { TidligereVarslerView } from "./TidligereVarslerView/TidligereVarslerView.tsx";
import styles from "./VarselView.module.css";

interface Props {
  varselResponse: VarselResponse;
  isError: boolean;
}

const VarselView = ({ varselResponse, isError }: Props) => {
  const isTidligereView: boolean = useStore($showTidligere);
  varselResponse && initVarsler(varselResponse);

  return (
    <div className={styles.varselViewContainer}>
      {isError && <ErrorAlert />}
      {varselResponse?.hasMaskedVarsel && (
        <Alert variant="info">
          {text.insufficientLoggingLevelAlert[DOCUMENT_LOCALE]}
          <Link
            href={loginStepUpUrl}
            onClick={() => {
              logLinkNavigation("step-up-login");
            }}
          >
            {text.insufficientLoggingLevelAlertLink[DOCUMENT_LOCALE]}
          </Link>
        </Alert>
      )}
      {isTidligereView ? <TidligereVarslerView /> : <NyeVarslerView />}
    </div>
  );
};

const VarselViewWithErrorBoundary = (props: Props) => (
  <ApmErrorBoundary fallback={<ErrorAlert />} fingerprint="varsler-render">
    <VarselView {...props} />
  </ApmErrorBoundary>
);

export default VarselViewWithErrorBoundary;
