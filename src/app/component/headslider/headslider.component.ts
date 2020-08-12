import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpserviceService } from '../../service/httpservice.service';
import { SliderModel } from '../../model/slidermodel';
import { CategoryimageService } from '../../service/categoryimage.service';
import { MediaType } from 'src/app/model/mediatype';
import { Details } from '../../model/details';
import { Slider } from '../../model/slider';
declare var $: any;
@Component({
  selector: 'app-headslider',
  templateUrl: './headslider.component.html',
  styleUrls: ['./headslider.component.css']
})
export class HeadsliderComponent implements OnInit {
  rowImages = [];
  otherImages = [];
  Images: SliderModel[] = [];
  PopularIamges: Slider[] = [];
  MediaType: MediaType[] = [];
  ads: Slider[] = [];
  originals: Slider[] = [];
  action: Slider[] = [];
  comedies: Slider[] = [];
  blockbuster: Slider[] = [];
  images: Array<any> = [];
  constructor(
    private service: HttpserviceService,
    private category: CategoryimageService
  ) { }

  async ngOnInit() {
    await this.service.getSliderImages();
    await this.category.getDetailsImages();
    this.rowImages = this.service.getValue();
    this.otherImages = this.category.getCategory();
    for(var image of this.rowImages) {
      var url = 'http://staging.connectingdotsinfotech.com:8080/firestixAPI_dev_2/api/v1/files/download/' + image.landscapePosterId ;
      var pic = new SliderModel();
      pic.id = image.id;
      pic.title = image.title;
      pic.landscapePosterId = url;
      this.Images.push(pic);
    }
    for(var image of this.otherImages['popularMediaContent']) {
      var url = 'http://staging.connectingdotsinfotech.com:8080/firestixAPI_dev_2/api/v1/files/download/' + image.landscapePosterId ;
      var slide = new Slider();
      slide.title = image.title;
      slide.thumbImage = url;
      slide.image= url;
      this.PopularIamges.push(slide);
    }
    for(var media of this.otherImages['mediaContentByCategory']){
      var Media= new MediaType();
      Media.type = media.id;
      Media.landscapePosterId = [];
      for(var type of media['mediaContentList']){
        var slide = new Slider();
        slide.title=type.title;
        slide.thumbImage ='http://staging.connectingdotsinfotech.com:8080/firestixAPI_dev_2/api/v1/files/download/'
        + type.landscapePosterId;
        slide.image= 'http://staging.connectingdotsinfotech.com:8080/firestixAPI_dev_2/api/v1/files/download/'
        + type.landscapePosterId;
        Media.landscapePosterId.push(slide);
      }
      this.MediaType.push(Media);
    }
    for (var med of this.MediaType) {
      if (med.type === 'ads') {
        this.ads = med.landscapePosterId;
      } else if (med.type === 'originals') {
        this.originals = med.landscapePosterId;
      } else if (med. type === 'action-adventure') {
        this.action = med.landscapePosterId;
      } else if (med.type === 'comedies') {
        this.comedies = med.landscapePosterId;
      } else if (med.type === 'blockbuster-films') {
        this.blockbuster = med.landscapePosterId;
      }
    }
  }
}
