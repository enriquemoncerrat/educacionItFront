import axios from 'axios'

const axiosInstance = axios.create({
      headers:{
           "Access-Control-Allow-Origin" : "*",
           "Access-Control-Allow-Methods" : "GET,PUT,POST,DELETE",


      }
      });

      const headers ={
         'Content-Type': 'text/plain',
         'Accept': '*/*',


      }



class Api{

    constructor(url){

        this.url=url
    }

getCafe(id){

    return axios.get(this.url+'getCafe?id='+id).then(respuesta=>data)
}

getAll(){
   return axios.get(this.url+'/api/getproductos').then(respuesta=> respuesta.data )

}


}