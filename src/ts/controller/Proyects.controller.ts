import { getPhotosQuery } from '../graphql/Proyects';
import { request} from 'graphql-request';
class ProyectController{
  private baseUrl : string;
  constructor(baseUrl: string){
    this.baseUrl =  baseUrl;
  }

  async getLanguageAssets (){
    console.log('asdasdsa');
    const {getPhtos} = await request(this.baseUrl, getPhotosQuery);
    return getPhtos;
  }

}


export default ProyectController;