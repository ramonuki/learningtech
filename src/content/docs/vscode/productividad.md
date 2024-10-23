---
title: Productividad con VSCode
description: Esta es una página en mi sitio impulsado por Starlight
---
# Productividad con VSCode
Find features and keyboard shortcuts in the Command Palette
View > Command Palette... (Ctrl+Shift+P)
Quick Open recent files or search by filename
Ctrl+P to show the Quick Open dropdown
Go to Line in a file
type filename:line number
Go to Symbol in a file
type filename@symbol name
View Quick Open options
type ?
Quick Open multiple files
press Right Arrow to open the selected file but leave the dropdown available
Multi-cursor selection
Alt+Click on Windows and Linux, Option+Click on macOS to add a new cursor
Shift+Alt+Up Shift+Alt+Down to add a new cursor above or below the current position
Ctrl+Shift+L to add cursors to all matches of the current selection
Auto Save changes
File > Auto Save
Open the Settings editor
File > Preferences > Settings (Ctrl+,)
Set Format On Type
check Editor: Format on Type
Set Format On Paste
check Editor: Format on Paste
IntelliSense smart code completions
trigger IntelliSense with Ctrl+Space
N




:::note
 How do I turn on word wrap?
You can control word wrap through the `editor.wordWrap` setting. By default, `editor.wordWrap` is off but if you set to it to on, text will wrap on the editor's viewport width.
```js
    "editor.wordWrap": "on"
```
You can toggle word wrap for the VS Code session with **Alt+Z**.

You can also add vertical column rulers to the editor with the `editor.rulers` setting, which takes an array of column character positions where you'd like vertical rulers.

As in other editors, commands such as **Cut** and **Copy** apply to the whole wrapped line. Triple-click selects the whole wrapped line. Pressing Home twice moves the cursor to the very beginning of the line. Pressing **End** twice moves the cursor to the very end of the line.

How can I avoid placing extra cursors in word wrapped lines?
If you'd like to ignore line wraps when adding cursors above or below your current selection, you can pass in `{ "logicalLine": true }` to args on the keybinding like this:
```js
{
  "key": "shift+alt+down",
  "command": "editor.action.insertCursorBelow",
  "when": "textInputFocus",
  "args": { "logicalLine": true },
},
{
  "key": "shift+alt+up",
  "command": "editor.action.insertCursorAbove",
  "when": "textInputFocus",
  "args": { "logicalLine": true },
},
```



- Find features and keyboard shortcuts in the Command Palette
  - **View > Command Palette...** (`Ctrl+Shift+P`)
- Quick Open recent files or search by filename
  - `Ctrl+P` to show the Quick Open dropdown
- Go to Line in a file
  - type `filename:line number`
- Go to Symbol in a file
  - type `filename@symbol name`
- View Quick Open options
  - type `?`
- Quick Open multiple files
  - press `Right Arrow` to open the selected file but leave the dropdown available
- Multi-cursor selection
  - `Alt+Click` on Windows and Linux, `Option+Click` on macOS to add a new cursor
  - `Shift+Alt+Up` `Shift+Alt+Down` to add a new cursor above or below the current position
  - `Ctrl+Shift+L` to add cursors to all matches of the current selection
- Auto Save changes
  - **File > Auto Save**
- Open the Settings editor
  - **File > Preferences > Settings** (`Ctrl+,`)
- Set Format On Type
  - check **Editor: Format on Type**
- Set Format On Paste
  - check **Editor: Format on Paste**
- IntelliSense smart code completions
  - trigger IntelliSense with `Ctrl+Space`


