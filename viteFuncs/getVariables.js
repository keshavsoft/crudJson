import ConfigJson from '../bin/Config.json' with {type: 'json'};
import { StartFunc as ReadDataSchema } from "./ReadDataSchema.js";
import { StartFunc as ReadTableSchema } from "./ReadTableSchema.js";
import path from "path";
import _ from "lodash";

const CommonTableSchema = ReadDataSchema();

const StartFunc = ({ mode, inFilesArray, inSidebarItems }) => {
    const variables = {};
    let LocalFiles = inFilesArray;
    let sidebarItems = inSidebarItems;
    let LocalFilteredSideBarItems = LocalFuncFilterSideBarItems({ inSidebarItems: sidebarItems });

    Object.keys(LocalFiles).forEach((filename) => {
        if (filename.includes('layouts/FrontEnd')) filename = `layouts/FrontEnd/${filename}`

        let LoopInsideFindSideBar = LocalFilteredSideBarItems.find(element => {
            return filename.startsWith(element.name);
        });

        if (LoopInsideFindSideBar === undefined === false) {
            let LoopInsidecolumnData = LocalFuncGetColumnData({ inTableName: filename });
            let LoopInsideTableConfig = LocalFuncGetTableConfig({ inTableName: filename });

            let LocalInsideForeignTable = LocalFuncGetForeignTable({ inTableName: LoopInsideFindSideBar.name });

            console.log("- ", filename, LocalInsideForeignTable);
            variables[filename + '.html'] = {
                web_title: "Mazer Admin Dashboard",
                filename: filename + '.html',
                sidebarItems,
                isDev: mode === 'development',
                DataPk: ConfigJson.jsonConfig.DataPk,
                tableName: LoopInsideFindSideBar.name,
                columnData: LoopInsidecolumnData,
                tableConfig: LoopInsideTableConfig,
                foreignTablecolumnData: LocalInsideForeignTable?.fileData
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

const LocalFuncGetForeignTable = ({ inTableName }) => {
    let TableSchema = CommonTableSchema;

    let LoopinsideFind = TableSchema.find(element => {
        let k1 = _.findKey(element.fileData, o => {
            return o?.references?.model === inTableName;
        });

        return k1 === undefined === false;
    });

    return LoopinsideFind;
};

const LocalFuncGetTableConfig = ({ inTableName }) => {
    let TableSchema = ReadTableSchema();

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