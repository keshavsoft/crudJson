let StartFunc = () => {
    // if ((jFTableFooterItemNameId()) === false) {
    //     return false;
    // };

    return true;
};

const jFTableFooterItemNameId = () => {
    let jVarLocalFactory = document.getElementById('TableFooterItemNameId');

    if (jVarLocalFactory.value === "") {
        jVarLocalFactory.classList.add("is-invalid");
        jVarLocalFactory.focus();
        return false;
    };

    if ((jVarLocalFactory.value === "") === false) {
        jVarLocalFactory.classList.remove("is-invalid");
        return true;
    };
    return true;
};


export { StartFunc }