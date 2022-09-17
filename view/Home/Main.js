
import { $ } from "../../utils/dom.js";
import Core from "../Core/Core.js";

export default class Main extends Core {


    template () {
        function timeForToday(value) {
            const today = new Date();
            const timeValue = new Date(value);
    
            const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
            if (betweenTime < 1) return '방금전';
            if (betweenTime < 60) {
                return `${betweenTime}분전`;
            }
    
            const betweenTimeHour = Math.floor(betweenTime / 60);
            if (betweenTimeHour < 24) {
                return `${betweenTimeHour}시간전`;
            }
    
            const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
            if (betweenTimeDay < 365) {
                return `${betweenTimeDay}일전`;
            }
    
            return `${Math.floor(betweenTimeDay / 365)}년전`;
     }

        return this.props.data.products.map((item) => 
        `<div class = "product-card" id ="product-card-${item.name}">
        ${item.soldout === 1 ? `<div class ="product-blur">` : `<div>`}
        <img class = "product-img" src="http://127.0.0.1:8080/${item.imageUrl}"/>
            <div class = "product-content">
                <span class="product-name">${item.name}</span>
                    <span class="product-price">${item.price}</span>
                        <div class="product-seller">
                            <div>
                            <img class="product-avatar" src="images/icons/avatar.png"/>
                            <span id ="product-nickname">${item.seller}</span>
                           </div>
                            <span>${timeForToday(item.createdAt)}</span>
                            </div>
                                </div>
                                </div>
                                
                                </div>
            `
    )
    }
}