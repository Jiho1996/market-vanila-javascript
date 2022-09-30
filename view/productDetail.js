import Core from "./Core/Core.js";

export default class extends Core{
    
    template (){
        let uploadDate = new Date(this.props.createdAt);
        let date = `${uploadDate.getHours()} : ${uploadDate.getMinutes()}, ${uploadDate.toDateString()}`

        console.log(this.props)
        return `
        <div>${this.props.id}</div>
        <div>${this.props.name}</div>
        <div>${this.props.price}</div>
        <div>${this.props.seller}</div>
        <div>${this.props.description}</div>
        <img class = "product-img" src="http://127.0.0.1:8080/${this.props.imageUrl}"/>
        <div>${date}</div>
        `
    }
}