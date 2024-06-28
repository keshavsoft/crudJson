import fs from "fs";
import path, { resolve } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CommonFromFolder = resolve(__dirname, "../src/FrontEnd/TableNameSingle");

const LocalFuncGetFiles = () => {
    const root = CommonFromFolder;
    let files = {}

    fs.readdirSync(root)
        .filter(filename => filename.endsWith('.html'))
        .forEach(filename => {
            files[filename.slice(0, -5)] = resolve(root, filename)
        });

    return files;
};

const StartFunc = ({ inToPath }) => {
    let LocalHtmlFiles = LocalFuncGetFiles();

    for (const [key, value] of Object.entries(LocalHtmlFiles)) {
        let LocalFileData = fs.readFileSync(value, "utf8");

        fs.writeFileSync(`${inToPath}/${key}.html`, LocalFileData);
    };
       
};

export { StartFunc }