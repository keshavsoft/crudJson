import { StartFunc as StartFuncRefreshBSTableId } from "./SaveButtonId/EntryFile.js";
import { StartFunc as StartFuncBsSubTable } from "./BsSubTable/EntryFile.js";

let StartFunc = () => {
    StartFuncRefreshBSTableId();
    StartFuncBsSubTable();
};

export { StartFunc };