function GetManifest(){
    return {
        name:"Static Powder",
        description:"Makes the powder not go to the sides.",
        author:"minidogg",
        websiteURL:"https://github.com/minidogg",
        takeToWebsite: false,
        imageURL:"https://http.cat/404",
        modVersion:[1,0,0],
        uuid: "cc06b6f2-6a46-4299-bc13-aa6a1cfc90e9", // generate this at https://www.uuidgenerator.net/
    }
}

function RegexCodePatches(){
    return [
        new RegexCodePatch(/function AddSingleBrick\(pixelArray, x, y, colorId, isStatic\) {/, "function AddSingleBrick(pixelArray, x, y, colorId, isStatic) {\nisStatic=true;\n")
    ]
}

// You can't use any of the ModApi or the game document outside the RunMod function or any function it calls.
// The mod parameter it gives should generally be stored in a global variable so it can be accessed anywhere.
let mod = {}
let test = "a"
function RunMod(modParam){
    mod = modParam
}