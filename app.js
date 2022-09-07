

class app {
    constructor(){
        this.setState();
        this.initEventListener();
    }

    async setState (){

        
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