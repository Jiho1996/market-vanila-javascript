
import View from "./view/View.js";
import Main from "./view/Home/Main.js";
import NotFound from "./view/NotFound.js";
import { $ } from "./utils/dom.js";
import Search from "./view/Home/Search.js";
import uploadModel from "./Model/uploadModel.js";
import Uploads from "./view/Upload/Uploads.js";

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
                new View();
                new Main($('#product-list'), getProducts); 
                this.initEventListener();
            }
            
            //else { new match.route.view; }
            // if (location.pathname === '/uploads'){
            //     new uploadModel();
            // }
        
    }

    initEventListener = () =>{
        
        document.addEventListener("DOMContentLoaded", () => {
            this.router();
            
        });

        $("#input-search").addEventListener("click", () => {
            new Search(null);
            
        })
        $("#logo").addEventListener("click", ()=>{
            location.href = './'
            
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