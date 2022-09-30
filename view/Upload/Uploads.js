import Core from "../Core/Core.js"

export default class Uploads extends Core{
    template (){
        return `

    <link href="./upload.css" type="text/css" rel="stylesheet" />

    
    <div id="upload-container">
        <img id="preview-image">

        <input id="upload-img-placeholder" type="file" accept ="image/*"/>
        <input id = "pic-submit-button" type="submit">

        <label for="index_image">이 곳에서 이미지 파일을 선택하세요.</label>
    </div>
                <div class="upload-label">
                <Input id="upload-name" size="large" placeholder="상품 이름"></Input>
                </div>
                </form>
             
                <form>
                <div class="upload-label">
        
                    <Input id="upload-price" placeholder="상품 가격"></Input>
                </div>
                </form>
          
                <form>
                
                <input id="product-description" placeholder="상품 소개를 적어주세요."></input>
              
                </form>
                
                    <input id ="submit-button" size="large" type="submit">
                </input>
                
            </form>
        </div>

        `
    }
}