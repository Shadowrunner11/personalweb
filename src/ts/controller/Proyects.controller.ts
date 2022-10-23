import GET_GALLERY from '../../graphql/queries/getGalery.querie.gql';
import HTTPClient from '../service/HTTPClient';

class ProyectController{
  private paginate: { next: () => any; };
  private client: HTTPClient;

  constructor(client: HTTPClient){
    this.client = client;
  }

  getTestLibrary(){
    const service = this. client;

    async function* createAsyncGenerator(){
      let globalNext = true;
      let page = 1;
      while(globalNext){
        const res = await service.graphql('/graphql', GET_GALLERY, {
          page
        });

        const {
          data:{
            characters: {
              info:{next},
              results
            }
          }
        } = await res.json();

        globalNext = next;
        page++;

        yield await Promise.resolve(results);
      }
    }

    this.paginate ??= createAsyncGenerator();

    return this.paginate.next();
  }
}


export default ProyectController;