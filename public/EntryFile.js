import menu from './menu.json' assert { type: "json"};
// import header from './header.json' assert { type: "json"};

import nunjucks from "nunjucks";
import fs from "fs-extra";
import path from "path";
import { existsSync, mkdirSync } from 'fs';

const toFolderName = "bin";

var env = nunjucks.configure();

let startsWith = (str, targetStr) => {
    if (!str.length) return false
    return str.startsWith(targetStr)
};

env.addGlobal('startsWith', startsWith);

let html = fs.readFileSync("Normal.html", 'utf8');

const InsertHtml = ({ inMenuItem }) => {
    let menuItem = inMenuItem;

    if ("template" in menuItem) {
        html = fs.readFileSync(`Template/Html/${menuItem.template}`, 'utf8');
    }
    else {
        html = fs.readFileSync("Normal.html", 'utf8');
    };

    let data = nunjucks.renderString(html,
        { menu, menuItem }
    );
    let folder = menuItem.url.slice(0, -5);

    if (!fs.existsSync(`/${folder}`)) fs.mkdirSync(`bin/${folder}`);

    fs.writeFileSync(`bin/${folder}/${menuItem.url}`, data);
};

const LoopMenu = (inMenuJson) => {
    inMenuJson.forEach(menuItem => {
        if ("children" in menuItem) {
            menuItem.children.forEach(child => {
                let LocalFileName = ("template" in child) ? child.template : "Normal.html";
                let html = fs.readFileSync(`Template/${LocalFileName}`, 'utf8');

                let data = nunjucks.renderString(html,
                    { menu, menuItem: child }
                );
                // let folder = child.url.slice(0, -5);
                let folder = path.parse(child.url).name;

                if (!fs.existsSync(`bin/${folder}`)) fs.mkdirSync(`bin/${folder}`);
                fs.writeFileSync(`bin/${folder}/${child.url}`, data);
            });
        }
        else {
            InsertHtml({ inMenuItem: menuItem });
        };
    });
};

const createDirIfNotExists = dir =>
    !existsSync(dir) ? mkdirSync(dir) : undefined;

let StartFunc = () => {
    if (existsSync(toFolderName)) {
        console.log("Delete the bin folder first!");
        return;
    };

    mkdirSync(toFolderName);
    copyAssets();

    LoopMenu(menu);

    console.log(`Inserted to the bin folder : ${menu.length} menu items`);
};

const copyAssets = () => {
    fs.cp(`./Template`, `./${toFolderName}`, { recursive: true }, (err) => {
        if (err) {
            console.error(err);
        }
    });
};

StartFunc();
// console.log(menu);