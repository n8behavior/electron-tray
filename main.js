const {app, Menu, Tray} = require('electron')

let tray = null
app.on('ready', () => {
  tray = new Tray('tray-icon.jpg')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Show Unanswered', type: 'normal'},
    {label: 'Show My Responses', type: 'normal'},
    {type: 'separator'},
    {label: 'Do Not Disturb', type: 'checkbox'},
    {label: 'Settings', type: 'normal'}
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
})
