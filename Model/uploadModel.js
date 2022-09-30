import { URL } from "../constants.js"
import { $ } from "../utils/dom.js"
import Uploads from "../view/Upload/Uploads.js";

export default class{
    constructor(){
        this.render()
    }

    onSubmit (){
        let strURL = 'http://127.0.0.1:8080/products'

        const init = {
            method : "POST",
            body : JSON.stringify({
                name : document.getElementById("upload-name").value,
                description : document.getElementById("product-description").value,
                seller : "someone",
                price : parseInt(document.getElementById("upload-price").value),
                imageUrl : URL.ImageUrl.imageUrl
        
            }),
            headers:{
                'Content-Type' : 'application/json'
            }
        }

        fetch(strURL, init)
        .then(() => {   
            location.href = `./`
        }
        ).catch(()=>{
            alert("error!")
        })
    }
    


    async render (){
        // new Uploads($('#app'));
        this.initEventListener();
    }
    initEventListener () {
        console.log($("#pic-submit-button"))
        $("#pic-submit-button").addEventListener("click", this.setImage)
        this.getImage();
        $("#submit-button").addEventListener("click", this.onSubmit)
    }

    getImage(){
        const inputImage = document.getElementById("upload-img-placeholder")
            inputImage.addEventListener("change", (e) => {
                console.log(e.target.value);
                console.log("go!")
                // console.log(document.getElementById("upload-name").value)
                // console.log(document.getElementById("upload-price").value)
                // console.log(document.getElementById("product-description").value)
                readImage(e.target)
        function readImage(input){

            if (input.files && input.files[0]){
                const reader = new FileReader()

                reader.onload = e => {
                    const previewImage = document.querySelector("#preview-image");
                    previewImage.src = e.target.result
                }
                reader.readAsDataURL(input.files[0])
            }
        }
    
            })
    }
    
    setImage(){
            
            let strURL = 'http://127.0.0.1:8080/image'
            //'https://jiho-market-app.herokuapp.com
            
            let form_data = new FormData()
        
            form_data.append("image", document.querySelector("#upload-img-placeholder").files[0])
    
            //form_data.append("")

            const init = {
                method: 'POST',
                body: form_data
            }
        
            fetch(strURL, init)
                .then(async (res) => {
                    if (res.status == 200) {
                        console.log("success")
                        URL.ImageUrl = await res.json()
                        
                    } else {
                        console.error(`HTTP ERROR! status${res.status}`)
                        alert(`${res.status}`)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
    }
    }

