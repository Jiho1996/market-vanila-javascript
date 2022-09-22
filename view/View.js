import Core from "./Core/Core.js";
import Main from "./Home/Main.js";
import Banner from "./Home/Banner.js";
import { $ } from "../utils/dom.js";
import Header from "./Header.js";

export default class View extends Core{
    render(){
        const makeProductsFrame = () => {
            let productList = document.createElement('div');
            productList.id = 'product-list'
            $('#app').appendChild(productList)
        };
        
        new Header($("#header"));
        new Banner($("#app"));

        makeProductsFrame();
        
    }
}