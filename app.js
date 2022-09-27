
import View from "./view/View.js";
import uploads from "./upload.js";
import Main from "./view/Home/Main.js";
import NotFound from "./view/NotFound.js";
import { $ } from "./utils/dom.js";
import Search from "./search.js";

class app {
    
    constructor(){
        this.render();
    }

    render = async () => {
        
        await this.router();
        this.initEventListener();
        
    }

 
    router = async () => {
        $("#app").innerHTML = '';

        console.log(location.pathname)
        const routes = [
            {path : "/", view: View},
            {path : "/uploads", view : uploads},
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
            
            new match.route.view;

            if (location.pathname === '/') { 
                const getProducts = await axios.get('http://127.0.0.1:8080/products')
                new Main($('#product-list'), getProducts); 
            }
            
        
    }

    initEventListener = () =>{
        
        document.addEventListener("DOMContentLoaded", () => {
            this.router();
        });

        $("#input-search").addEventListener("click", () => {
            new Search(null, $("#app"));
            
        })
        $("#logo").addEventListener("click", (e)=>{
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
            history.pushState(null, null, e.target.href)
            this.router()
            
        })
        
    }

}
new app()