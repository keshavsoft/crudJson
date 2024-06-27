import { StartFunc as ShowOnDom } from "./ShowOnDom/EntryFile.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";

const StartFunc = () => {
    ShowOnDom().then();
    StartFuncAddListeners();
};

export { StartFunc };
