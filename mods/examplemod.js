function GetManifest(){
    return {
        name:"Example Mod",
        description:"This is an example mod",
        author:"minidogg",
        websiteURL:"https://github.com/minidogg",
        takeToWebsite: false, // If this is set to true it will open a new tab to the website URL that is provided when the mod is downloaded.
        imageURL:"https://http.cat/404",
        modVersion:[1,0,0],
        uuid: "6217052d-e110-4dff-94e5-0140e0952c6c", // generate this at https://www.uuidgenerator.net/
        // The dependencies parameter is optional and it should just contain a list of UUIDs and website links for mods it requires to run.

        // ! Dependencies been implemented into the mod loader yet.
        dependencies: [
            // The following is just an example. You shouldn't ever need to add the mod itself to the dependencies.
            {
                uuid:"6217052d-e110-4dff-94e5-0140e0952c6c", // The mods dependency
                name:"Example Mod", // The name of the mod which isn't really neccesary.
                url:"https://github.com/minidogg/sandiloader/blob/main/mods/examplemod.js", // A URL to where you can obtain the mod. We will prompt the user to fetch the mod from this url.
                fetchMod: false // This property determines whether to prompt the user to download the mod or to take the user to the url. 
            }
        ]
    }
}

function RegexCodePatches(){
    return [
        new RegexCodePatch(/\/\/ START OF CODE/, "console.log('hello from the example patch!')"),
    ]
}

// You can't use any of the ModApi or the game document outside the RunMod function or any function it calls.
// The mod parameter it gives should generally be stored in a global variable so it can be accessed anywhere.
let mod = {}
let test = "a"
function RunMod(modParam){
    mod = modParam
    console.log("Hello from the example mod!")
    ModApi.addEventListener("start", function gameStarted(a, b){
        console.log("The game started!")
    })
}