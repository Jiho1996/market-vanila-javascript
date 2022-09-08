import { URL } from "./constants.js"

class upload{
    constructor(){
        
        this.render()


        
    }

    onSubmit (){

        let strURL = 'http://localhost:8080/products'

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
        .then((result) => {
            location.href = "./"
            console.log(result)
        })
    }
    


    async render (){
        document.querySelector("#pic-submit-button").addEventListener("click", this.setImage)
        console.log(URL.ImageUrl.imageUrl)
        this.getImage();
        document.querySelector("#submit-button").addEventListener("click", this.onSubmit)
    }

    getImage(){
        const inputImage = document.getElementById("upload-img-placeholder")
            inputImage.addEventListener("change", (e) => {
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
        
            let strURL = 'http://localhost:8080/image'
            
            let form_data = new FormData()

            form_data.append("image", document.querySelector("#upload-img-placeholder").files[0])
        

            //form_data.append("")

            // for (var pair of form_data.entries()) {
            //     console.log(pair[0]+ ', ' + pair[1]); 
            // }
            const init = {
                method: 'POST',
                // headers: {
                //     // 'Content-Type': 'application/x-www-form-urlencoded',
                //     // 'credentials': 'same-origin'
                // },
                body: form_data
            }
        
            fetch(strURL, init)
                .then(async (res) => {
                    if (res.status == 200) {
                        console.log("success")
                        URL.ImageUrl = await res.json()
                        
                    } else {
                        console.error(`HTTP ERROR! status${res.status}`)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        

    }
    }



new upload();