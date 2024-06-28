import UrlJson from './url.json' with {type: 'json'};

let StartFunc = ({ inRowPk }) => {
    let LocalRowPk = inRowPk;

    window.location.href = `${jVarGlobalTableName}${UrlJson.RedirectToUrl}?inRowPk=${LocalRowPk}`;
};

export { StartFunc }