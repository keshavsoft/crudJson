import { StartFunc as BuildVertical } from "./BuildVertical/EntryFile.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";

const StartFunc = async () => {
    await BuildVertical();
    
    StartFuncAddListeners();
};

export { StartFunc };
