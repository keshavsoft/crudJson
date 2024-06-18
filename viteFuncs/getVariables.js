import path from "path";

const StartFunc = ({ mode, inFilesArray, inSidebarItems }) => {
    const variables = {};
    let LocalFiles = inFilesArray;
    let sidebarItems = inSidebarItems;

    Object.keys(LocalFiles).forEach((filename) => {
        let LoopinsideFind = sidebarItems.find(element => {
            return filename.startsWith(path.parse(element.name).name);
        });

        let LoopInsidecolumnData = {};
        let LoopInsideTableName = "";
        let LoopInsideDataPk;

        if (LoopinsideFind === undefined === false) {
            LoopInsidecolumnData = LoopinsideFind.fileData;
            LoopInsideTableName = LoopinsideFind.nameWithOutExtension;
            LoopInsideDataPk = LoopinsideFind.DataPk;
        };

        // console.log("LoopinsideFind : ", LoopinsideFind);

        if (filename.includes('layouts/FrontEnd')) filename = `layouts/FrontEnd/${filename}`

        variables[filename + '.html'] = {
            web_title: "Mazer Admin Dashboard",
            filename,
            sidebarItems,
            tableName: LoopInsideTableName,
            columnData: LoopInsidecolumnData,
            isDev: mode === 'development',
            DataPk: LoopInsideDataPk
        }
    });

    return variables;
};

export { StartFunc };