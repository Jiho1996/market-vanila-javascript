

class app {
    constructor(){
        this.setState();
        this.initEventListener();
    }

    async setState (){

        function timeForToday(value) {
            const today = new Date();
            const timeValue = new Date(value);
    
            const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
            if (betweenTime < 1) return '방금전';
            if (betweenTime < 60) {
                return `${betweenTime}분전`;
            }
    
            const betweenTimeHour = Math.floor(betweenTime / 60);
            if (betweenTimeHour < 24) {
                return `${betweenTimeHour}시간전`;
            }
    
            const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
            if (betweenTimeDay < 365) {
                return `${betweenTimeDay}일전`;
            }
    
            return `${Math.floor(betweenTimeDay / 365)}년전`;
     }
        const url = 'http://localhost:8080/products'
        const getProducts = await axios.get(url);
        const productLists = getProducts.data.products.map((item) => {
            return `
        <div class = "product-card">
        <img class = "product-img" src="${item.imageUrl}"/>
            <div class = "product-content">
                <span class="product-name">${item.name}</span>
                    <span class="product-price">${item.price}</span>
                        <div class="product-seller">
                            <div>
                            <img class="product-avatar" src="images/icons/avatar.png"/>
                            <span id ="product-nickname">${item.seller}</span>
                           </div>
                            <span>${timeForToday(item.createdAt)}</span>
                            </div>
                                </div>
                                </div>
            `
        });
        // const createElement = (tagName, tagContent) =>{
        //     let temp = document.createElement('div');
        //     temp.textContent = str
        //     return temp.innerHTML
        // }
        // const combineElements = (elements) => {
        //     const $fragment = document.createDocumentFragment();
        //     elements.forEach((element) => $fragment.append(element))
        //     return $fragment
        // }

        document.querySelector("#product-list").innerHTML = productLists
    }

    initEventListener(){
        const uploadBtnClicked = () =>{
            location.href = "./upload.html"
        }
        document.querySelector("#upload-btn").addEventListener("click", uploadBtnClicked)
    }

}
new app()