const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

app.on('window-all-closed', function(){
	if(process.platform != 'darwin')
		app.quit();
});

app.on('ready', function(){
	mainWindow = new BrowserWindow({width:800, height:600});

	mainWindow.loadUrl('file://' + __dirname + '/index.html');

	mainWindow.on('closed', function(){
		mainWindow = null;
	});
});