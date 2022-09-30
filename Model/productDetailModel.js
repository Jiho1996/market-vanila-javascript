export const productDetailModel = async (id) => {
    const getProductsDetail = await axios.get(`http://127.0.0.1:8080/products/${id}`)

    return getProductsDetail.data.product;
}