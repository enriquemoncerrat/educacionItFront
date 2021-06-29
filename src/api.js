import axios from 'axios'



 


class Api{

    constructor(url){

        this.url=url
    }

getCafe(id){

    return axios.get(this.url+'getCafe?id='+id).then(respuesta=>respuesta)
}

getAll(){
   return axios.get(this.url+'/api/getproductos').then(respuesta=> respuesta )

}


}
export default Api;