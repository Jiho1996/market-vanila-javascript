import View from "./view/View.js";


class app {
    constructor(){
        this.setState();
        this.initEventListener();
    }

    router = () => {
        const routes = [
            {path : "/", view: Home},
            {path : "/uploads", view : Uploads},
        ]
    }
    setState (){
        new View();

    //     function timeForToday(value) {
    //         const today = new Date();
    //         const timeValue = new Date(value);
    
    //         const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    //         if (betweenTime < 1) return '방금전';
    //         if (betweenTime < 60) {
    //             return `${betweenTime}분전`;
    //         }
    
    //         const betweenTimeHour = Math.floor(betweenTime / 60);
    //         if (betweenTimeHour < 24) {
    //             return `${betweenTimeHour}시간전`;
    //         }
    
    //         const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    //         if (betweenTimeDay < 365) {
    //             return `${betweenTimeDay}일전`;
    //         }
    
    //         return `${Math.floor(betweenTimeDay / 365)}년전`;
    //  }
        
    //     const url = 'http://127.0.0.1:8080/products'
    //     const getProducts = await axios.get(url);
    //     //console.log(getProducts.data.products)
    //     const productLists = getProducts.data.products.map((item) => {
    //         // function getSoldOut(){
    //         //     let soldout = document.createElement("div")
    //         //     soldout.className = "product-blur"
    //         //     document.querySelector(`#product-card-${item.name}`).appendChild("soldout")
    //         // }
    //         // item.soldout === 1 ? getSoldOut() : ''
    //         //${item.soldout === 1 ? <div class ="product-blur"> : ''}

    //         // 서버에서 static파일 지정 덕에 소스주소를 아래와 같이해도 이미지 렌더링 가능.
    //         return `
    //     <div class = "product-card" id ="product-card-${item.name}">
    //     ${item.soldout === 1 ? `<div class ="product-blur">` : `<div>`}
    //     <img class = "product-img" src="http://127.0.0.1:8080/${item.imageUrl}"/>
    //         <div class = "product-content">
    //             <span class="product-name">${item.name}</span>
    //                 <span class="product-price">${item.price}</span>
    //                     <div class="product-seller">
    //                         <div>
    //                         <img class="product-avatar" src="images/icons/avatar.png"/>
    //                         <span id ="product-nickname">${item.seller}</span>
    //                        </div>
    //                         <span>${timeForToday(item.createdAt)}</span>
    //                         </div>
    //                             </div>
    //                             </div>
                                
    //                             </div>
    //         `
 
    //     });
    //     // const createElement = (tagName, tagContent) =>{
    //     //     let temp = document.createElement('div');
    //     //     temp.textContent = str
    //     //     return temp.innerHTML
    //     // }
    //     // const combineElements = (elements) => {f
    //     //     const $fragment = document.createDocumentFragment();
    //     //     elements.forEach((element) => $fragment.append(element))
    //     //     return $fragment
    //     // } 
    //     // ${item.soldout === 1 ? <div class ="product-blur"> : ''}



    //     document.querySelector("#product-list").innerHTML = productLists
    }

    initEventListener(){
        const uploadBtnClicked = () =>{
            location.href = "./upload.html"
        }
        document.querySelector("#upload-btn").addEventListener("click", uploadBtnClicked)
    }

}
new app()