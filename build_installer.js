const { MSICreator } = require('electron-wix-msi');
const path = require('path');

const APP_DIR = path.resolve(__dirname, './RadioNet-win32-x64');
const OUT_DIR = path.resolve(__dirname, './windows_installer');


const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,

    descrpition: 'Play All Radio Stations In 1 App For Free!',
    exe: 'RadioNet',
    name: 'RadioNet',
    manufacturer: 'Jessi Flessi',
    version: '1.0.0',


    ui: {
        chooseDirectory: true
    },
});

MSICreator.create().then(function(){

    MSICreator.compile();
});
