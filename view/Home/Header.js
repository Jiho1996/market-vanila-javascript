import Core from "../Core/Core.js"
export default class extends Core {
    template () {
        return `
        <div id="header-area">
                <img id = "logo" src="../images/icons/ghmarket.JPG" />
                <div class="search">
                    <form class = "form-search">
                    <input id ="input-search" style="border:none;" type="text" placeholder="검색어 입력">
                    
                    </form>
                    
                </div>
                <a href="/uploads" id="upload-btn">업로드</a>
            </div>
            `
    }
    
}