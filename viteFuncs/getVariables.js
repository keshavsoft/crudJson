import path from "path";

const StartFunc = ({ mode, inFilesArray, inSidebarItems }) => {
    const variables = {};
    let LocalFiles = inFilesArray;
    let sidebarItems = inSidebarItems;

    Object.keys(LocalFiles).forEach((filename) => {


        let LoopinsideFind = inSidebarItems.find(element => {
            return filename.startsWith(path.parse(element.name).name);
        });
        console.log("filename : ", filename, LoopinsideFind);
        if (filename.includes('layouts/FrontEnd')) filename = `layouts/FrontEnd/${filename}`
        variables[filename + '.html'] = {
            web_title: "Mazer Admin Dashboard",
            filename,
            sidebarItems,
            isDev: mode === 'development'
        }
    });

    return variables;
};

export { StartFunc };