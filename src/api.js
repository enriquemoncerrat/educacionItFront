import axios from 'axios'

const axiosInstance = axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
  });
const headers = {
    'Content-Type': 'text/plain',
    'Accept': '*/*',
    "Access-Control-Allow-Origin": "*"
};
class Api{

constructor(url){

      this.url=url
}

get(id){
    return axios.get(this.url+'/getproductoId?id='+id).then(respuesta=>respuesta.data)
}
getDesc(descripcion){
    return axios.get(this.url+'listar-productos-descripcion?descripcion='+descripcion).then(respuesta=>respuesta.data)
}
getall(){
    return axiosInstance.get(this.url+'getproductos').then(respuesta=>respuesta.data)
}
post(data){
    return axios.post(this.url+'/postProducto',data).then(respuesta=>respuesta.data)
}
put(id,data){
    return axios.put(this.url+id,data).then(respuesta=>respuesta.data)
}
delete(id){
    return axios.delete(this.url+'eliminar?id='+id).then(respuesta=>respuesta.data)
}

}
export default Api;