import { ApiService } from "@core/services";
import { api } from "@core/config/api";

export class ConsaltanService extends ApiService {
  endpoint = api.endpoint;

  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async fetchConsaltan(params){
    return super.fetch(this.endpoint.consaltan, {
      params: params,
      retries: 2,
      transformResponse: [
        function (data) {
          if(!data){
            return {
              contents: [],
              sucess: false,
            };
          }
          const results = JSON.parse(data).data;
          console.log(results);
          return results;
        }
      ]
    })
  }
}
