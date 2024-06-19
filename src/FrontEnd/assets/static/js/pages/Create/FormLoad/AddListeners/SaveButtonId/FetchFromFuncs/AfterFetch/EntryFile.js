let StartFunc = () => {
    // const url = new URL(window.location.href);

    let new_url = window.location.href.replace("-Create.html", "-Show.html");
    // console.log("aaaaaaaaaa : ", k1);
    // const params1 = new URLSearchParams(url.search);
    // let NewURl = new URL("../ShowAll/ShowAll.html", url);
    // const new_url = new URL(`${NewURl.href}?${params1}`);
     window.location.href = new_url;
};

export { StartFunc }