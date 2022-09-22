import Core from "./Core/Core.js"
export default class extends Core {
    template () {
        return `
        <div id="header-area">
                <img src="../images/icons/ghmarket.JPG" />
                <a href="/uploads" id="upload-btn">업로드</a>
            </div>
            `
    }
}