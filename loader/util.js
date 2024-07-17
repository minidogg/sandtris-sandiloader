import { RegexCodePatch } from './typeclasses.js';
import {ModApi} from './modloader.js'

export function DOMEval( code, doc ) {
    doc = doc || document;

    var script = doc.createElement( "script" );

    script.text = code;
    doc.head.appendChild( script ).parentNode.removeChild( script );
}

export function OutsideContextEval(code, dom=true){
    if(dom==true)DOMEval(code, document)
    if(dom==false)return eval(code)
}

export function EvalApiSandbox(code, sandbox){
    sandbox.contentWindow.window.ModApi = ModApi
    sandbox.contentWindow.window.RegexCodePatch = RegexCodePatch
    return sandbox.eval(code)
}