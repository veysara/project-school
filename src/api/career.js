import { ApiService } from '@core/services';
import { api } from '@core/config/api';
export class CareerService extends ApiService {
  endpoint = api.endpoint;

  constructor() {
    super();
  }

  async fetchCareer(params){
    return super.fetch(this.endpoint.career, {
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
    });
  }
  async fetchCareerDetail(params){
    return super.fetch(this.endpoint.careerDetail, {
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
                // console.log(results);
                return results;
                
            }
        ]
    });
  }
}
