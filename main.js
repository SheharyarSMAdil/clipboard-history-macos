const { app, BrowserWindow, clipboard, globalShortcut, ipcMain } = require('electron');
let mainWindow;
let clipboardHistory = [];


function createWindow() {
    mainWindow = new BrowserWindow({
        vibrancy: 'fullscreen-ui',
        width: 400,
        height: 600,
        // autoHideMenuBar: true,
        show: false, // Start hidden
        alwaysOnTop: true, // Keep the window on top
        frame: false, // Remove window frame for a cleaner look
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('./src/index.html');
    mainWindow.on('blur', () => {
        mainWindow.hide(); // Hide when focus is lost
    });
    // mainWindow.setMenu(null);

    
}


function monitorClipboard() {
    let lastText = clipboard.readText();
    setInterval(() => {
        const currentText = clipboard.readText();
        if (currentText !== lastText) {
            lastText = currentText;
            clipboardHistory.unshift(currentText);
        }
        clipboardHistory= clipboardHistory && [...new Set(clipboardHistory)]
        if (clipboardHistory.length > 30) {
            clipboardHistory.pop(); // Remove the oldest entry
        }
    }, 1000); // Check every second
}

app.on('ready', () => {
    createWindow();
    monitorClipboard();

    // Register global shortcut for showing clipboard history
    globalShortcut.register('Shift+Command+V', () => {
        mainWindow.webContents.send('show-clipboard-history', clipboardHistory);
        mainWindow.show();
        mainWindow.focus();
    });
});

app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});
