// ? This whole thing is probaly going to be redone in the future using some custom system for generating a single html file with css and html so that no JS has to be involved on the client side.

import { GetModManifest } from "../loader/getmanifest.js"

const submitMod = document.getElementById("submitMods")
submitMod.addEventListener("click", ()=>{
    window.open('https://github.com/minidogg/sandtris-sandiloader/blob/main/docs/submitmods.md')
})

const modItemHTML = `
    <a href="https://github.com/minidogg/sandiloader" target="_blank" class="modLink">
        <img src="https://http.cat/404" class="modImg">
    </a>
    <div class="modInfo scroll">
        <p class="modName"></p>
        <p class="modAuthor"></p>
        <p class="modDescription"></p>
    </div>
    <div class="modButtons">
        <button class="copyLink greenbutton">Copy Link</button>
        <button class="copyCode bluebutton">Copy Code</button>
    </div>
`

async function AddMod(modURL){
    try{
        // Get the code and manifest
        console.log("Adding: "+modURL)
        let code = await (await fetch(modURL)).text()
        let manifest = GetModManifest(code, modURL)

        // Create the div and add the classes and html to it
        let div = document.createElement("div")
        div.innerHTML = modItemHTML
        div.classList.add("modItem", "scroll")

        // Change the content of the div's children.
        div.querySelector(".modLink").href = manifest.websiteURL
        div.querySelector(".modImg").src = manifest.imageURL
        div.querySelector(".modName").textContent = `${manifest.name} v${manifest.modVersion.join(".")}`
        div.querySelector(".modAuthor").textContent = manifest.author
        div.querySelector(".modDescription").textContent = manifest.description

        // Give the copy link button functionality
        div.querySelector(".copyLink").addEventListener("click", ()=>{
            navigator.clipboard.writeText(modURL)
        })

        // Add the div to the mods div.
        document.getElementById("mods").appendChild(div)
    }catch(err){
        console.warn(err)
        alert("Something went wrong when adding mod from the following URL: "+modURL)
    }
}

const modsJson = await (await fetch("/modBrowser/data/_mods.json")).json()
const modBaseURL = window.location.protocol+"//"+window.location.host+"/modBrowser/data/"
modsJson.reverse().forEach(async modFilePath => {
    let url = encodeURI(modBaseURL+modFilePath)
    await AddMod(url)
});