const { app, BrowserWindow, Menu, MenuItem } = require('electron')
const path = require('path')
const url = require('url')
const Positioner = require('electron-positioner')

let positioner
let win

function createWindow () {
  win = null
  positioner = null

  win = new BrowserWindow({
    width: 120,
    height: 24,
    alwaysOnTop: true,
    frame: false,
    focusable: false,
    fullscreenable: false,
    hasShadow: false,
    icon: path.join(__dirname, 'assets/icons/png/64x64.png'),
    maximizable: false,
    minimizable: false,
    resizable: false,
    skipTaskbar: true, // false,
    visibleOnAllWorkspaces: true,
    textAreasAreResizable: false,
    title: 'tiny clock',
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: false
    }
  })

  async function positionWin () {
    positioner.move('topRight')
    let [x, y] = win.getPosition()
    x -= 78
    y += 0
    win.setPosition(x, y)
  }

  positioner = new Positioner(win)
  positionWin()

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'app/index.html'),
    protocol: 'file:',
    slashes: true
  }))
  app.dock.hide()
  win.on('resize', positionWin)

  win.on('closed', () => {
    win = null
    positioner = null
  })

}

app.on('ready', createWindow)

var menu = new Menu()
menu.append(new MenuItem({ label: 'quit', click: function() { app.quit() }}))
app.on("web-contents-created", (...[, webContents]) => {
  webContents.on("context-menu", (event, click) => {
    event.preventDefault()
    menu.popup(webContents)
  }, false)
})

