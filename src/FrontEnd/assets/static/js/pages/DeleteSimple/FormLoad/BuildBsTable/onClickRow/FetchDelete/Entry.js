import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as CheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async ({ inRowPk }) => {
    let jVarLocalFromCheck = CheckFunc();

    if (jVarLocalFromCheck === false) return;
    
    let jVarLocalFetchResponse = await StartFuncFetchFuncs({ inRowPk });

    if (jVarLocalFetchResponse.status === 200) {
        StartFuncAfterFetch();
    };
};

export { StartFunc }