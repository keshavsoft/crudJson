import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as StartFuncShowAlerts } from "./ShowAlerts.js";

const StartFunc = () => {
    StartFuncShowAlerts();
    StartFuncBuildBsTable();
    StartFuncAddListeners();
};

export { StartFunc };
