import Core from "./Core/Core.js";
import Main from "./Main.js";
import { $ } from "../utils/dom.js";

export default class View extends Core{
    async render(){
        const getProducts = await axios.get('http://127.0.0.1:8080/products');
        new Main($('#product-list'), getProducts);
    }
}