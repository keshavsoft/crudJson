import ConfigJson from '../bin/Config.json' with {type: 'json'};
import { StartFunc as ReadDataSchema } from "./ReadDataSchema.js";
import { StartFunc as ReadTableSchema } from "./ReadTableSchema.js";
import path from "path";

const StartFunc = ({ mode, inFilesArray, inSidebarItems }) => {
    const variables = {};
    let LocalFiles = inFilesArray;
    let sidebarItems = inSidebarItems;
    let LocalFilteredSideBarItems = LocalFuncFilterSideBarItems({ inSidebarItems: sidebarItems });

    let jVarLocalTableSchema = LocalFuncGetTableData();
    // console.log("jVarLocalTableSchema ", jVarLocalTableSchema, LocalFilteredSideBarItems);
    let LoopInsidecolumnData = LocalFuncGetColumnData();

    Object.keys(LocalFiles).forEach((filename) => {
        if (filename.includes('layouts/FrontEnd')) filename = `layouts/FrontEnd/${filename}`

        let LoopInsideFindSideBar = LocalFilteredSideBarItems.find(element => {
            return filename.startsWith(element.name);
        });

        if (LoopInsideFindSideBar === undefined === false) {

            // console.log("filename ", filename, LoopInsideFindSideBar);
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

const StartFunc_Keshav_22Jun2024 = ({ mode, inFilesArray, inSidebarItems }) => {
    const variables = {};
    let LocalFiles = inFilesArray;
    let sidebarItems = inSidebarItems;
    let TableSchema = ReadDataSchema();
    let jVarLocalTableSchema = ReadTableSchema();
    console.log("jVarLocalTableSchema : ", jVarLocalTableSchema.children);

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

const LocalFuncFilterSideBarItems = ({ inSidebarItems }) => {
    let LocalReturnArray;

    LocalReturnArray = inSidebarItems.filter(element => {
        return "children" in element;
    });

    return LocalReturnArray;
};

const LocalFuncGetColumnData = () => {
    let TableSchema = ReadDataSchema();

    let LoopinsideFind = TableSchema.find(element => {
        return "Customers".startsWith(path.parse(element.name).name);
    });

    let LoopInsidecolumnData = {};

    if (LoopinsideFind === undefined === false) {
        LoopInsidecolumnData = LoopinsideFind.fileData;
    };

    return LoopInsidecolumnData;
};


const LocalFuncGetTableData = () => {
    let TableSchema = ReadTableSchema();

    let LoopinsideFind = TableSchema.find(element => {
        return "Customers".startsWith(path.parse(element.name).name);
    });

    let LoopInsidecolumnData = {};

    if (LoopinsideFind === undefined === false) {
        LoopInsidecolumnData = LoopinsideFind.fileData;
    };

    return LoopInsidecolumnData;
};

export { StartFunc };