import { StartFunc as StartFuncGetFetch } from "./GetFetch/EntryFile.js";

const StartFunc = async () => {
    let jVarLocalData = await StartFuncGetFetch();
  
    return jVarLocalData;
};

export { StartFunc };
