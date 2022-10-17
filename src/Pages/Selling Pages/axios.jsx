import axios from "axios"

const handleAddSellPosts=(data={})=>{
    console.log("post command got-->")
    return axios.post(`http://localhost:5000/sellPosts`,{
        user_id: data.user_id,
        ad_id: data.ad_id,
        category: data.category,
        car_name: data.car_name,
    })
}
export default handleAddSellPosts