import Core from "./Core/Core.js";
import Main from "./Home/Main.js";
import Banner from "./Home/Banner.js";
import { $ } from "../utils/dom.js";

export default class View extends Core{
    async render(){
        const getProducts = await axios.get('http://127.0.0.1:8080/products');
        new Banner($("#app"), '');
        let productList = document.createElement('div');
        productList.id = 'product-list'
        $('#app').appendChild(productList)
        new Main($('#product-list'), getProducts);
        
    }
}