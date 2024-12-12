import { ApiService } from "@core/services";
import { api } from "@core/config/api";

export class ChooseUsService extends ApiService {
  endpoint = api.endpoint;

  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async fetchChooseUs(params){
    return super.fetch(this.endpoint.chooseUs, {
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
