const { app, BrowserWindow } = require('electron');

let mainWindow;
const createWindow = function(){
	mainWindow = new BrowserWindow({
		width: 1024,
		height: 768,
		minWidth: 640,
		minHeight: 480,
		icon: __dirname + "/src/icon.ico"
	});
	mainWindow.setMenu(null);
	mainWindow.loadURL('http://localhost:1337/');
};

app.on('ready', function(){
	createWindow();
});

app.on('window-all-closed', function(){
	app.quit();
});

app.on('activate', function(){
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
