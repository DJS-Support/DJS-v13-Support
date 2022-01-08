# Sections
- [x] [If requiring a file CLICK!](#MODULE_NOT_FOUNDFILE)
- [x] [If requiring a package CLICK!](#MODULE_NOT_FOUNDPACKAGE)

## MODULE_NOT_FOUND:PACKAGE
- [x] **If you've unsuccessfully downloaded/installed a package using npm [CLICK HERE!](#Error_Installing_Module_With_NPM)**
- [x] **If you've successfully downloaded/installed a package but haven't successfully imported it into your code [CLICK HERE!](#ErrorRequiring)**

### Error_Installing_Module_With_NPM
```javascript
- Have you imported the module? 'npm i <module name>'
- Have you typed it correctly to what's on the npm site?
- Does this module exist
- Have you ran "npm i"
- Is your npm on the newest version? 'npm install -g npm@latest'
```
**If you haven't said yes to all of these follow this**

> If you haven't imported the package, `npm i <package name>`

> If you haven't typed it correctly to what's shown on the npm site, correct it and retry

> Check npm website [NPM](https://www.npmjs.com/search?) to see if the module actually exists 

> If you haven't run "npm i" in your terminal then run it to setup your code

> Check your npm version run "npm -v" in your terminal. If it isn't 8.3.0 or higher run "npm install -g npm@latest" in your terminal

**If you've done all of this go to [Here](#ErrorRequiring)**


### Error Requiring
**Follow below if you haven't successfully imported the module in your code**
*When requiring a module or anything in javascript this should be the format:*
```javascript
const <name> = require('<module_name>')
```
Make sure to remove the **Angle Brackets < >** when replacing with your name

## MODULE_NOT_FOUND:FILE
```javascript
- Does the file exist?
- Have you saved that file
```
**If you haven't done those do them now, then continue on.**

> Is your require code look like this?
**EXAMPLE**
```javascript
const config = require('<file>')
```
**If it looks similar to that continue on**

### Directory Paths
```javascript
./ = 'Goes out of your file' 
../ = 'Goes out of the dir your file is in'
```
### How to get your file directory
**Lets say, I want to reach** `config.json` **from** `TEST.js` **like this, you would write**
<p align="left">
<a><img src="https://cdn.upload.systems/uploads/hEDx2dSE.png"/></a> 
</p>

```javascript
const config = require('../config.json')
```

**Lets say, I want to reach** `SECONDFILE.js` **from** `TEST.JS` **like this, you would write**
<p align="left">
<a><img src="https://cdn.upload.systems/uploads/pK72VYvl.png"/></a> 
</p>

```javascript
const config = require('./SECONDFILE.js')
```
**To get even further outside that you just keep adding on either `./` or `../` that's relative to the file [READ HERE!](DirectoryPaths)
