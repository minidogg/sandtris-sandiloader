function GetManifest(){
    return {
        name:"Tiny Bricks",
        description:"Makes the bricks half the size",
        author:"minidogg",
        websiteURL:"https://github.com/minidogg",
        takeToWebsite: false,
        imageURL:"https://http.cat/404",
        modVersion:[1,0,0],
        uuid: "5c758d88-e499-47c7-a1a7-300c7fe16eb6", // generate this at https://www.uuidgenerator.net/
    }
}

function RegexCodePatches(){
    return [
        new RegexCodePatch(/let BrickSize = 8/, "let BrickSize = 4")
    ]
}

// You can't use any of the ModApi or the game document outside the RunMod function or any function it calls.
// The mod parameter it gives should generally be stored in a global variable so it can be accessed anywhere.
let mod = {}
let test = "a"
function RunMod(modParam){
    mod = modParam
}