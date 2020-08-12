import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  homeImagesPath = 'http://staging.connectingdotsinfotech.com:8080/firestixAPI_dev_2/api/v2/media/fetchAllMediaSlider';
  data = [];
  constructor(private http: HttpClient) { }

  async getSliderImages(): Promise<any> {
    const response = this.http.get<any>(this.homeImagesPath).toPromise().then( res => { this.setValue(res); });
    return response;
  }

  setValue(Response: any[]) {
    this.data = Response;
  }

  getValue(): any[] {
    return this.data;
  }
}
