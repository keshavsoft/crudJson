import { StartFunc as StartFuncRefreshBSTableId } from "./RefreshBSTableId/EntryFile.js";
import { StartFunc as formFile } from "./formFile/EntryFile.js";

let StartFunc = () => {
    StartFuncRefreshBSTableId();
    formFile();
};

export { StartFunc };