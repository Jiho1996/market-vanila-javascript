
import View from "./view/View.js";
import Main from "./view/Home/Main.js";
import NotFound from "./view/NotFound.js";
import { $ } from "./utils/dom.js";
import Search from "./view/Home/Search.js";
import uploadModel from "./Model/uploadModel.js";
import Uploads from "./view/Upload/Uploads.js";
import { productDetailModel } from "./Model/productDetailModel.js";
import productDetail from "./view/productDetail.js";
import {variables} from "./constants.js"

class app {
    constructor(){
        this.render();
    }
 
    router = async () => {
        
        $("#app").innerHTML = '';

        const routes = [
            {path : "/", view: View},
            {path : "/uploads", view : Uploads},
            {path : "/search", view : Search},
        ]

        const pageMatches = routes.map((route) => {
            return {
                route, // route: route
                isMatch: route.path === location.pathname,
            };
        });
        
        let match = pageMatches.find((pageMatch) => pageMatch.isMatch);
        
        if (!match) {
            
            match = {
                route: location.pathname,
                isMatch: true,
            };
            const page = new NotFound();
            $("#app").innerHTML = page.getHtml();
        }

            
            if (location.pathname === '/uploads'){
                
                new Uploads($('#app'));
                new uploadModel();

            }

            if (location.pathname === '/') { 
                
                const getProducts = await axios.get('http://127.0.0.1:8080/products')
                if (variables.initialApproach){new View();variables.initialApproach = false;}
                this.makeProductsFrame();
                new Main($('#product-list'), getProducts); 
                this.initEventListener();
            }

            if (location.pathname === '/search'){
                new Search(null);
            }
            

    }
    makeProductsFrame = () => {
        let productList = document.createElement('div');
        productList.id = 'product-list'
        $('#app').appendChild(productList)
    }
    initEventListener = () =>{
        
        // document.addEventListener("DOMContentLoaded", () => {
        //     this.router();
            
        // });

        $("#product-list").addEventListener("click", async (e) => {
            history.pushState(null, null, `./products/${e.target.id}`)
            const getProductDetail = await productDetailModel(e.target.id);
            new productDetail($('#app'), getProductDetail);
        } )

        $("#input-search").addEventListener("click", () => {
            history.pushState(null, null, '/search');
            this.router();
            
            
        })
        $("#logo").addEventListener("click", ()=>{
            history.pushState(null, null, '/');
            this.router();
            
        })

        window.addEventListener("popstate", this.router)

        $("#input-search").addEventListener("keypress", async (e) => {
            if (e.key !== "Enter"){
                
                return;
            }
            e.preventDefault();
            let value = e.target.value
            const getProducts = await axios.get('http://127.0.0.1:8080/products')
            new Search(getProducts, value); 
            
            
        })
        
        $("#upload-btn").addEventListener("click", (e) => {
            e.preventDefault();
            history.pushState(null, null, e.target.href);
            
            this.router();
            
        })
        
    }

    render = async () => {
        
        await this.router();
        
    }
    
}

new app();