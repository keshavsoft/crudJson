let StartFunc = async ({ inFromFetch }) => {
    if (inFromFetch.status === 200) {
        const data = await inFromFetch.json();
        jFLocalToURL()
        return await data;
    } else {
        swal.fire({ icon: "error", title: "Duplicate" })
    }
};

let jFLocalToURL = () => {
    const url = new URL(window.location.href);
    url.searchParams.append('FromSave', true);
    window.location.href = url.href;
};

export { StartFunc };