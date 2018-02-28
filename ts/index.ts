let app: App;
window.addEventListener('DOMContentLoaded', ev => {
    console.log('DOMContentLoaded');
    app = new App();
});

class App {
    constructor() {
        console.log('new App');
        // this.updateHTMLDisplay();
        this.refreshIframe(null);
        this.registerEvents();
    }

    registerEvents() {
        console.log('register events');
        let htmlDisplay = this.getHTMLDisplay();
        let html = this.getHTMLInput();
        // htmlDisplay.addEventListener('focus', ev => html.focus());
        // html.addEventListener('keyup', ev => this.updateHTMLDisplay());

        let style = this.getStyle();
    }

    // updateHTMLDisplay() {
    //     let display = this.getHTMLDisplay();
    //     let input = this.getHTMLInput()
    //     display.innerHTML = input.innerHTML;
    // }

    refreshIframe(ev: number) {
        console.log('refreshIFrame', ev);
        let iframe = this.getDisplay();
        if (iframe.hasChildNodes())
            iframe.removeChild(iframe.firstChild);
        let newStyle = document.createElement('style') as HTMLStyleElement;
        let styleInput = this.getStyle();
        let styleText = document.createTextNode(styleInput.value);
        newStyle.appendChild(styleText);
        let htmlInput = this.getHTMLInput();
        let newDoc = new DOMParser().parseFromString(htmlInput.innerText.replace(/\n/g, '').replace(/>\s+</g, ''), 'text/html');
        newDoc.head.appendChild(newStyle);
        iframe.contentDocument.head.innerHTML = newDoc.head.innerHTML;
        iframe.contentDocument.body.innerHTML = newDoc.body.innerHTML;
        // setTimeout(ev => this.refreshIframe(ev), 500);
    }

    getHTMLDisplay(): HTMLElement {
        return document.getElementById('html-code');
    }

    getHTMLInput(): HTMLDivElement {
        return document.getElementById('html') as HTMLDivElement;
    }

    getStyle(): HTMLTextAreaElement {
        return document.getElementById('style') as HTMLTextAreaElement;
    }

    getDisplay(): HTMLIFrameElement {
        return document.getElementById('display') as HTMLIFrameElement;
    }
}