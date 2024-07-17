import { DOMEval } from "./util.js"

export class Mod{
    constructor(name, description, author, websiteURL, logoURL, version, uuid, code){
        this.name = name;
        this.description = description;
        this.logoURL = logoURL;
        this.author = author;
        this.websiteURL = websiteURL;
        this.uuid = uuid;
        this.code = code;
        this.enabled = true;
        this.version = version;
        /**
         * @type {CodeSandbox}
         */
        this.sandbox;
    }
}

/**
 * @description YOU SHOULD NOT EVERY CREATE AN INSTANCE OF THIS. There should only be one instance of the ModApi at a time.
 */
export class ModApiType{
    #createdHooks;
    #rootMod;
    constructor(){
        this.version = [0, 1, 0] 

        /**
         * An array of Mod objects representing the installed mods.
         * @type {Array<Mod>}
         */
        this.mods = []
        this.hooks = {}
        this.#createdHooks = {}
        this.window = window;

        this.#rootMod = new Mod("Mod API", "", "SANDILOADER Team", "https://github.com/minidogg", "", "")
        this.basehooks()
    }
    basehooks(){
        this.registerHook("start", this.#rootMod)
    }
    registerHook(name, mod){
        if(this.#createdHooks[name]){
            alert("There is a conflict between "+this.#createdHooks[name].name+" and "+mod+"!")
            throw new Error("A hook with the name: '"+name+"' already exists! This is a conflict between "+this.#createdHooks[name].name+" and "+mod)
        }
        this.#createdHooks[name] = mod
        this.hooks[name] = []
    }
    dispatchEventToHook(name, ...params){
        this.hooks[name].forEach(listener=>{
            listener(...params)
        })
    }
    addEventListener(hookName, callback, ignoreWarn=false){
        if(!this.hooks[hookName]){
            if(ignoreWarn==false&&!this.#createdHooks[hookName])console.warn("The hook with name: "+hookName+" hasn't been created yet! You can hide this warning by setting the ignoreWarn parameter to true.")
            this.hooks[hookName] = []
        }
        this.hooks[hookName].push(callback)
    }

    // TODO: Make a custom prompt and alert box.
    prompt(...args){
        return prompt(...args)
    }
    alert(...args){
        return alert(...args)
    }
}

/**
 * @description This is a simple class made for creating code patches using regex.
 */
export class RegexCodePatch{
    constructor(regex, newCode){
        this.regex = regex
        this.code = newCode
    }
}
