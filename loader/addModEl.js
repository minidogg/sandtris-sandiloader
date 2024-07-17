import { interalApi } from "./modloader.js"
const templateModElementString = `
<a href="https://github.com/minidogg/sandiloader" target="_blank" class="modLink">
    <img src="https://http.cat/404" class="modImg" />
</a>
<div class="modInfo">
    <p class="modName">Static Powder</p>
    <p class="modAuthor">minidogg</p>
    <p class="modDescription">Makes the powder not go to the sides.</p>
</div>
<div class="modControls">
    <input type="checkbox" class="modCheckbox">
    <br>
    <button type="button" class="redbutton modDelete">X</button>
</div>
`

/**
 * 
 * @param {Mod} mod 
 */
// ! This code could cause a potential error when put in a foreach loop. I should probaly fix that if it is a problem.
export function AddModElement(mod){
    let {updateData, mods} = interalApi
    // Make the mod item div.
    let div = document.createElement("div")
    div.classList.add("modItem")
    div.classList.add("_MODITEM_"+mod.uuid)
    div.innerHTML = templateModElementString

    // Change the mod info
    div.querySelector(".modName").textContent = `${mod.name} v${mod.version.join(".")}`
    div.querySelector(".modAuthor").textContent = mod.author
    div.querySelector(".modDescription").textContent = mod.description

    // Get the checkbox and the delete button
    let checkbox = div.querySelector(".modCheckbox")
    let deleteButton = div.querySelector(".modDelete")

    // Checkbox functionality
    checkbox.checked = mod.enabled
    checkbox.onchange = ()=>{
        mod.enabled = checkbox.checked
        updateData()
    }

    // Delete button functionality
    deleteButton.onclick = ()=>{
        let confirmDelete = ModApi.prompt(`Are you sure you want to delete ${mod.name} v${mod.version.join(".")}? (Type in "yes" to confirm)`).toLowerCase()==="yes"
        if(confirmDelete){
            let modIndex =  mods.findIndex(e=>e.uuid==mod.uuid)
            delete mods[modIndex]
            div.remove()
            updateData()
            ModApi.alert("Deleted the mod!")
        }else{
            ModApi.alert("Canceled mod deletion!")
        }
    }

    // Add the mod item div to the modlist div.
    document.getElementById("modlist").appendChild(div)
}