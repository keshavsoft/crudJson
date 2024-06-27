import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import { StartFunc as InitializeFuncs } from "./InitializeFuncs/EntryFile.js";

const StartFunc = () => {
    StartFuncTableTag();
    InitializeFuncs().then();
};

export { StartFunc };
