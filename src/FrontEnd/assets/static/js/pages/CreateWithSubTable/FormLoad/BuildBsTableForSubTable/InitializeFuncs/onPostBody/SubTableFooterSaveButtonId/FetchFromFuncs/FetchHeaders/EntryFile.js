import KeysJson from './Keys.json' with {type: 'json'};
import { StartFunc as StartFuncPrepareBody } from "./PrepareBody.js";

let StartFunc = () => {
    let LocalPrepareBody = StartFuncPrepareBody();
    LocalPrepareBody.RefPK = getUrlQueryParams({ inGetKey: "inRowPk" });
    KeysJson.body = JSON.stringify(LocalPrepareBody);

    return KeysJson;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };