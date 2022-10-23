import { contentTypes, methods } from '../types/client';
import { parse } from '../utils/graphql';

class HTTPClient{
  private baseUrl: string;
  private globalConfig : Omit<RequestInit, 'method'>;

  constructor(baseUrl: string, globalConfig?:Omit<RequestInit, 'method'>){
    if(!baseUrl)
      throw new Error('Not correct data');
    this.baseUrl = baseUrl;
    this.globalConfig = globalConfig ?? {};
  }

  private request(url: string, method: string, config: RequestInit = {}){
    return fetch(new Request(this.baseUrl + url, {
      method,
      ...this.globalConfig,
      ...config
    }));
  }

  get(url: string, config: RequestInit = {}){
    return this.request(url, methods.Get, config);
  }

  post(url: string, config: RequestInit = {}){
    return this.request(url, methods.Post, config);
  }

  graphql(url: string, query: string, variables: Record<string, any>){
    return this.post(url, {
      headers: new Headers({
        'Content-type': contentTypes.Json,
      }),
      body:parse(query, variables)
    });
  }

}

export default HTTPClient;