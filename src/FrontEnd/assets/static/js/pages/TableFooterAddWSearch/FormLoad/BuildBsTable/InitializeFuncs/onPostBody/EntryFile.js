import { StartFunc as StartFuncTableFooterSaveButtonId } from "./TableFooterSaveButtonId/EntryFile.js";

const StartFunc = () => {
    StartFuncTableFooterSaveButtonId();

    jFLocalSetfocus();
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