
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
        
        await this.router();
        this.initEventListener();
        
    }

 
    router = async () => {

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
            
            new match.route.view;

            if (location.pathname === '/') { 
                new Main($('#product-list'), await axios.get('http://127.0.0.1:8080/products')); 
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