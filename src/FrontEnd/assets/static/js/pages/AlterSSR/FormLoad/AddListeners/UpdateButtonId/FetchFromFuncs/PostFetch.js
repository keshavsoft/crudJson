import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import UrlJson from "./url.json" assert { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = UrlJson.PostUrl;
    let LocaltableName = jVarGlobalTableName;
    let jVarLocalRowPk = getUrlQueryParams({ inGetKey: "inRowPk" });

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/${jVarLocalRowPk}`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    let data = await response.json();

    return await data;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };

