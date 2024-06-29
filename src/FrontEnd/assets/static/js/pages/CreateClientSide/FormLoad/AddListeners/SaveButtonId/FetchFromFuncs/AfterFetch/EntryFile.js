import UrlJson from './url.json' with {type: 'json'};

let StartFunc = () => {
    window.location.href = `${UrlJson.RedirectToUrl}`;
};

export { StartFunc }