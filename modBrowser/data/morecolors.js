function GetManifest(){
    return {
        name:"More Colors",
        description:"Adds 4 more colors.",
        author:"minidogg",
        websiteURL:"https://github.com/minidogg",
        takeToWebsite: false,
        imageURL:"https://http.cat/404",
        modVersion:[1,0,0],
        uuid: "e91a2d46-370b-47ca-9e31-bba33ff23784", // generate this at https://www.uuidgenerator.net/
    }
}

function RegexCodePatches(){
    return [
        new RegexCodePatch(/(?<=blockHueOptions = \[.*?)\]/, ",76, 149, 268, 360]")
    ]
}

// You can't use any of the ModApi or the game document outside the RunMod function or any function it calls.
// The mod parameter it gives should generally be stored in a global variable so it can be accessed anywhere.
let mod = {}
let test = "a"
function RunMod(modParam){
    mod = modParam
}