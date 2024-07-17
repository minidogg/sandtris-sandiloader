import isDev from './isdev.js'

// Imports
import { ModApiType, Mod, RegexCodePatch } from './typeclasses.js'
import { OutsideContextEval, EvalApiSandbox } from "./util.js"
import { AddModElement } from './addModEl.js'
import { makePopup } from './popup.js'
import { RegisterMod } from './registerMod.js'
import {CodeSandbox} from './codesandbox.js'


// Exports
export const ModApi = new ModApiType()
window.ModApi = ModApi
export const interalApi = {}

// Log that the mod loader is starting
console.log(`%cStarting Sandiloader v${ModApi.version.join(".")}`, "font-size:30px;color:yellow;")

// Get mods
console.log("Retrieving mods from localStorage...")
/**
 *@type {Array<Mod>}
 */
let mods = JSON.parse(localStorage.getItem("mods"))
interalApi.mods = mods

// Function to update data
function updateData() {
    console.log("Running updateData()...")
    mods = mods.filter(e => e != null||e!=undefined)
    ModApi.mods = Object.freeze(mods)
    localStorage.setItem("mods", JSON.stringify(mods.map(sandbox => ({ ...sandbox, sandbox: undefined }))));
    console.log("Finished running updateData()")
}
interalApi.updateData = updateData

// Add all the mod elements
console.log("Adding mod elements...")
mods.forEach((mod) => {
    AddModElement(mod)
})

// Mod Browser Button
let modBrowserButton = document.getElementById("openModBrowser")
modBrowserButton.addEventListener("click", ()=>{
    window.open("/modBrowser")
})

// Add Mod Button
let addModButton = document.getElementById("addModButton")
addModButton.addEventListener("click", async()=>{
    let urlPrompt = prompt("Mod URL")
    if(urlPrompt==null){
        alert("Cancelled adding mod")
        return
    }
    console.log("Fetching mod code from URL "+urlPrompt)
    try{
        let modCode = await fetch(urlPrompt)
        console.log("Got following response object when fetching mod: ", modCode)

        // TODO: Add more if statements so that its easier to figure out what went wrong.
        if(modCode.status==404){
            alert("404, not found")
        }

        modCode = await modCode.text()
        RegisterMod(modCode)
    }catch(err){
        console.warn(err)
        console.warn("If you are the host of the site, make sure you have CORS enabled.")
        alert("Something went wrong fetching the mod from the url.")
    }
})

// Add the example mod
if (mods.length == 0 && isDev) {
    console.log("Adding the example mod...")
    RegisterMod(await (await fetch("/mods/examplemod.js")).text(), "Test Mod")
}

// Add the example mod
if (mods.length == 0 && localStorage.getItem("loadTemp")=="temp") {
    console.log("Adding the temp mod...")
    RegisterMod(await (await fetch("/mods/temp.js")).text(), "Test Mod")
}

// Initialize active mods
console.log("Preparing enabled mods...")
const ActiveMods = mods.filter((mod) => mod.enabled)
ActiveMods.forEach((mod) => {
    mod.sandbox = new CodeSandbox()
    EvalApiSandbox(mod.code, mod.sandbox)
})

// Get sketch.js
console.log("Retrieving sketch.js...")
let sketchJs = await (await fetch("/sketch.js")).text()

// Run mod patches function
function runModPatches(mods) {
    mods.forEach((mod) => {
        const patches = EvalApiSandbox("RegexCodePatches()", mod.sandbox)
        patches.forEach((patch) => {
            sketchJs = sketchJs.replace(patch.regex, patch.code)
        })
    })
}

// Run mod patches
console.log("Patching sketch.js...")
runModPatches(ActiveMods)

// Start sketch.js
console.log("Starting sketch.js...")
OutsideContextEval(sketchJs)

// Run mods
console.log("Running mods...")
ActiveMods.forEach((mod) => {
    EvalApiSandbox("RunMod()", mod.sandbox)
})

// Finished
console.log(`%c Finished Starting Sandiloader v${ModApi.version.join(".")}`, "font-size:20px;color:lime;")

