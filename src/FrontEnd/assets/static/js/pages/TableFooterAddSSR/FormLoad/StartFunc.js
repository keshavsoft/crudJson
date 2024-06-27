import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";

const StartFunc = () => {
    jFLocalShowTableName();
    StartFuncBuildBsTable();
    StartFuncAddListeners();
};

let jFLocalShowTableName = () => {
    let jVarLocalRefreshBSTableId = document.getElementById('RefreshBSTableId');

    jVarLocalRefreshBSTableId.querySelector("h4").innerHTML = jVarGlobalTableName;
};

export { StartFunc };
