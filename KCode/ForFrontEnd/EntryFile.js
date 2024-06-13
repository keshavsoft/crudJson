import path, { resolve } from 'path'
import { fileURLToPath } from 'url';

import { StartFunc as StartFuncReadDataSchema } from "../ReadDataSchema.js";
import { StartFunc as StartFuncGetHtmlFiles } from "./viteFuncs/getHtmlFiles.js";
import { StartFunc as StartFuncBuildSideBarJson } from "./viteFuncs/BuildSideBarJson.js";

import { StartFunc as StartFuncCopyHtmlFiles } from "./PrepareHtmlFiles/CopyHtmlFiles.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const StartFunc = () => {
    const LocalTableNames = StartFuncReadDataSchema();

    const files = StartFuncGetHtmlFiles({ inRootFolder: __dirname });

    let sidebarItems = StartFuncBuildSideBarJson({ inFilesArray: files, inTablesArray: LocalTableNames.children });

    StartFuncCopyHtmlFiles({ inSideBarArray: sidebarItems });

    return sidebarItems;
};

// let k1 = StartFunc();

// console.log("aaaaaaaaaaa : ", k1);

export { StartFunc }