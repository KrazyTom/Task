import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryimageService {
  details = [];
  popular = [];
  detailsImagesPath = 'http://staging.connectingdotsinfotech.com:8080/firestixAPI_dev_2/api/v2/media/getHomeScreenMediaContentPopularAndUICategory';
  constructor(private http: HttpClient) { }
  async getDetailsImages(): Promise<any> {
    const response = this.http.get<any>(this.detailsImagesPath).toPromise().then( res => 
      {
        this.setDetailsImages(res);
        this.popular=res['popularMediaContent']; 
      });
    return response;
  }

  setDetailsImages(Response: any[]) {
    this.details = Response;
  }

  getCategory(): any[] {
    return this.details;
  }

  getPopularCategory(): any[] {
    return this.popular;
  }
}
