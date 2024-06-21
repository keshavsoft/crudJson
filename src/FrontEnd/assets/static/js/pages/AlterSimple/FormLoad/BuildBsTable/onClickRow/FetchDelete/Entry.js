import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as CheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async ({ inRowPk }) => {
    let jVarLocalFromCheck = CheckFunc();

    if (jVarLocalFromCheck) {
        let jVarLocalDataNeeded = await StartFuncFetchFuncs({ inRowPk });

        if (jVarLocalDataNeeded !== null) {
            if (jVarLocalDataNeeded) {
                StartFuncAfterFetch();
            };
        };
    };
};

export { StartFunc }