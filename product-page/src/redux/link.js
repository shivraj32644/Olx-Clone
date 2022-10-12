import axios  from 'axios'
var url = `http://localhost:5000/data`;


export const axiosdata = ({_page,_limit,_sort,_order,id}) => {
    return axios.get(`http://localhost:5000/data`, {
        params: {
            _page,
            _limit,
            _sort,
            _order,
            id

        }
    })
}
export const axiosdata2 = () => {
    return axios.get(`http://localhost:5000/data`
       
    )
}