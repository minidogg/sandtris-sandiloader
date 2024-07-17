const popupHtml = `
        <div class="box">
            <div class="logo is-animation">
                <span>S</span>
                <span>A</span>
                <span>N</span>
                <span>D</span>
                <span>T</span>
                <span>R</span>
                <span>I</span>
                <span>S</span>
            </div>
            <p class="popupText">Best hex value?</p>
            <div class="popupInput">
                <input type="text" placeholder="Enter hex value" class="namebox">
                <button type="button" class="greenbutton">Submit</button>
            </div>
        </div>
`
const pageContainer = document.getElementById("cnv")

export function makePopup(popupText, popupInput){
    let dialog = document.createElement("dialogue")
    dialog.classList.add("page")
    
    dialog.innerHTML = popupHtml
    dialog.querySelector(".popupText").innerHTML = popupText
    dialog.querySelector(".popupInput").innerHTML = popupInput


    pageContainer.appendChild(dialog)
    dialog.open = true
    return dialog;
}