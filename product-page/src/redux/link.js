import axios  from 'axios'
var url = `http://localhost:5000/data`;



// pass global params here without destructure


export const axiosdata = (params) => {
    return axios.get(`http://localhost:5000/data`, {
        params: params
    })
}
export const axiosdata2 = () => {
    return axios.get(`http://localhost:5000/data`
       
    )
}