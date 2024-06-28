import { StartFunc as SubTableFooterSaveButtonId } from "./SubTableFooterSaveButtonId/EntryFile.js";

const StartFunc = () => {
    SubTableFooterSaveButtonId();

    // jFLocalSetfocus();
};

const jFLocalSetfocus = () => {
    StartFuncTableFooterSaveButtonId();

    const jVarLocalTableId = jVarGlobalTableTagId;
    let jVarLocaTableHtml = document.getElementById(jVarLocalTableId);
    let jVarLocalTableFooter = jVarLocaTableHtml.querySelector("tfoot");
    let jVarLocalInput = jVarLocalTableFooter.querySelector("input[autofocus]");

    jVarLocalInput.focus();
};

export { StartFunc };