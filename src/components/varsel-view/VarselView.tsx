import { useStore } from "@nanostores/react";
import { $showTidligere, initVarsler } from "@src/store/store.ts";
import type { VarselResponse } from "@src/custom-types/Varsel.ts";
import styles from "./VarselView.module.css";
import { NyeVarslerView } from "./nye-varsler-view/NyeVarslerView.tsx";
import { TidligereVarslerView } from "./tidligere-varsler-view/TidligereVarslerView.tsx";
import { Alert, Link } from "@navikt/ds-react";
import { text } from "@language/text.ts";
import { DOCUMENT_LOCALE } from "@language/language.ts";
import Error from "@components/error/Error.tsx";
import { loginStepUpUrl } from "@utils/urls.ts";
import { logLinkNavigation } from "@utils/client/analytics.ts";

interface props {
  varselResponse: VarselResponse;
  isError: boolean;
}

const VarselView = ({ varselResponse, isError }: props) => {
  const isTidligereView: boolean = useStore($showTidligere);
  varselResponse && initVarsler(varselResponse);

  return (
    <div className={styles.varselViewContainer}>
      <>
        {isError && <Error />}
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
      </>
    </div>
  );
};

export default VarselView;
