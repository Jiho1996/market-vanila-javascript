
import View from "./view/View.js";
import uploads from "./upload.js";
import Main from "./view/Home/Main.js";
import NotFound from "./view/NotFound.js";
import { $ } from "./utils/dom.js";

class app {
    
    constructor(){
        this.render();
    }

    render = async () => {

        const getProducts = await axios.get('http://127.0.0.1:8080/products');
        
        this.router();
        this.initEventListener();
        new Main($('#product-list'), getProducts);
        
    }

 
    router = () => {
        //const getProducts = axios.get('http://127.0.0.1:8080/products');

        const routes = [
            {path : "/", view: View},
            {path : "/uploads", view : uploads},
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
            document.querySelector("#app").innerHTML = page.getHtml();
        }

        else{
            new match.route.view;
        }
    }

    initEventListener = () =>{

        document.addEventListener("DOMContentLoaded", () => {
            
            this.router();
        });

        window.addEventListener("popstate", this.router)
        
        document.querySelector("#upload-btn").addEventListener("click", (e) => {
            e.preventDefault();
            
            history.pushState(null, null, e.target.href)
            this.router()
            
        })
        
    }

}
new app()