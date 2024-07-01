import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

let StartFunc = async () => {
  if (StartFuncCheckBeforeFetch()) {
    let jVarLocalBodyData = StartFuncPreparePostData();

    let response = await StartFuncFetchFunc({
      inBodyData: jVarLocalBodyData,
    });

    await StartFuncAfterFetch({ inFromFetch: response, inBodyData: jVarLocalBodyData, });
  }
}

export { StartFunc };
