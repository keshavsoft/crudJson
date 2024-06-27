import ConfigJson from '../bin/Config.json' with {type: 'json'};
import { StartFunc as ReadDataSchema } from "./ReadDataSchema.js";
import path from "path";

const StartFunc = ({ mode, inFilesArray, inSidebarItems }) => {
    const variables = {};
    let LocalFiles = inFilesArray;
    let sidebarItems = inSidebarItems;
    let LocalFilteredSideBarItems = LocalFuncFilterSideBarItems({ inSidebarItems: sidebarItems });

    // let LoopInsidecolumnData = LocalFuncGetColumnData();

    Object.keys(LocalFiles).forEach((filename) => {
        if (filename.includes('layouts/FrontEnd')) filename = `layouts/FrontEnd/${filename}`

        let LoopInsideFindSideBar = LocalFilteredSideBarItems.find(element => {
            return filename.startsWith(element.name);
        });

        if (LoopInsideFindSideBar === undefined === false) {
            let LoopInsidecolumnData = LocalFuncGetColumnData({ inTableName: filename });

            console.log("LoopInsidecolumnData ", filename, LoopInsidecolumnData);
            variables[filename + '.html'] = {
                web_title: "Mazer Admin Dashboard",
                filename: filename + '.html',
                sidebarItems,
                isDev: mode === 'development',
                DataPk: ConfigJson.jsonConfig.DataPk,
                tableName: LoopInsideFindSideBar.name,
                columnData: LoopInsidecolumnData
            };
        };
    });

    return variables;
};

const LocalFuncFilterSideBarItems = ({ inSidebarItems }) => {
    let LocalReturnArray;

    LocalReturnArray = inSidebarItems.filter(element => {
        return "children" in element;
    });

    return LocalReturnArray;
};

const LocalFuncGetColumnData = ({ inTableName }) => {
    let TableSchema = ReadDataSchema();

    let LoopinsideFind = TableSchema.find(element => {
        return inTableName.startsWith(path.parse(element.name).name);
    });

    let LoopInsidecolumnData = {};

    if (LoopinsideFind === undefined === false) {
        LoopInsidecolumnData = LoopinsideFind.fileData;
    };

    return LoopInsidecolumnData;
};

export { StartFunc };