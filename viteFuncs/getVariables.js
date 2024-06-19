import ConfigJson from '../bin/Config.json' with {type: 'json'};
import { StartFunc as ReadDataSchema } from "./ReadDataSchema.js";
import path from "path";

const StartFunc = ({ mode, inFilesArray, inSidebarItems }) => {
    const variables = {};
    let LocalFiles = inFilesArray;
    let sidebarItems = inSidebarItems;
    let TableSchema = ReadDataSchema();

    let LoopinsideFind = TableSchema.find(element => {
        return "Customers".startsWith(path.parse(element.name).name);
    });

    let LoopInsidecolumnData = {};

    if (LoopinsideFind === undefined === false) {
        LoopInsidecolumnData = LoopinsideFind.fileData;
    };

    console.log("TableSchema : ", TableSchema);
    Object.keys(LocalFiles).forEach((filename) => {
        if (filename.includes('layouts/FrontEnd')) filename = `layouts/FrontEnd/${filename}`

        variables[filename + '.html'] = {
            web_title: "Mazer Admin Dashboard",
            filename: filename + '.html',
            sidebarItems,
            isDev: mode === 'development',
            DataPk: ConfigJson.jsonConfig.DataPk,
            tableName: "Customers",
            columnData: LoopInsidecolumnData
        }
    });

    return variables;
};

export { StartFunc };