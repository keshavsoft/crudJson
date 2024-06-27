import { StartFunc as BuildSubTable } from "./BuildSubTable/EntryFile.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";

const StartFunc = async () => {
    await BuildSubTable();
    StartFuncAddListeners();
};

export { StartFunc };
