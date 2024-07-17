export class CodeSandbox{
    constructor(){
        this.iframe = document.createElement("iframe")
        this.iframe.style.display = "none"
        this.iframe.src = "about:blank"
        this.iframe.classList.add("CodeSandbox")
        document.body.appendChild(this.iframe)

        this.contentWindow = this.iframe.contentWindow
    }
    DOMeval(code){
        let doc = this.contentWindow.document
        DOMEval(code, doc)
    }
    eval(code){
        return this.contentWindow.window.eval(code)
    }
    destroy(){
        this.iframe.remove()
        delete this
    }
}
