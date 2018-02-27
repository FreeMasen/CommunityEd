"use strict";
let app;
window.addEventListener('DOMContentLoaded', ev => {
    console.log('DOMContentLoaded');
    app = new App();
});
class App {
    constructor() {
        console.log('new App');
        this.registerEvents();
    }
    registerEvents() {
        console.log('register events');
        let html = this.getHTML();
        html.addEventListener('change', ev => this.refreshIframe(ev));
        let style = this.getStyle();
        html.addEventListener('change', ev => this.refreshIframe(ev));
        let iframe = this.getDisplay();
        iframe.addEventListener('loadstart', ev => this.refreshIframe(ev));
    }
    refreshIframe(ev) {
        console.log('refreshIFrame', ev);
        let iframe = this.getDisplay();
        while (iframe.contentDocument.body.hasChildNodes()) {
            iframe.contentDocument.body.removeChild(iframe.contentDocument.firstChild);
        }
        let style = iframe.contentDocument.querySelector('style');
        if (style) {
            style.parentElement.removeChild(style);
        }
        let newStyle = document.createElement('style');
        let styleInput = this.getStyle();
        let styleText = document.createTextNode(styleInput.value);
        newStyle.appendChild(styleText);
        let htmlInput = this.getHTML();
        iframe.innerHTML = htmlInput.value;
    }
    getHTML() {
        return document.getElementById('html');
    }
    getStyle() {
        return document.getElementById('style');
    }
    getDisplay() {
        return document.getElementById('display');
    }
}
if (!app)
    app = new App();
console.log('index.ts loaded');
//# sourceMappingURL=app.js.map