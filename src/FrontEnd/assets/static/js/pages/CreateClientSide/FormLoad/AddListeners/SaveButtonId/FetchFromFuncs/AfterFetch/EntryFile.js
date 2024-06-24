import UrlJson from './url.json' with {type: 'json'};

let StartFunc = () => {
    window.location.href = `${jVarGlobalTableName}${UrlJson.RedirectToUrl}`;
};

export { StartFunc }