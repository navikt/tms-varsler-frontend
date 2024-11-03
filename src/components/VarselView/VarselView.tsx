import {useStore} from "@nanostores/react";import {$showTidligere, initVarsler, setError} from "@src/store/store.ts";import type {VarselResponse} from "@src/customTypes/Varsel.ts";import styles from "./VarselView.module.css"import {NyeVarslerView} from "./NyeVarslerView/NyeVarslerView.tsx";import {TidligereVarslerView} from "./TidligereVarslerView/TidligereVarslerView.tsx";interface props {    varselResponse: VarselResponse,    isError: boolean}const VarselView = ({varselResponse, isError}: props) => {    const isTidligereView: boolean = useStore($showTidligere);    if (isError) {        setError()    }    initVarsler(varselResponse);    return(    <div className={styles.varselViewContainer}>        <>            {isTidligereView ? <TidligereVarslerView/> :                <NyeVarslerView/>}        </>    </div>)}export default VarselView;