import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],

})
export class ImageListComponent implements OnInit {

  constructor(private _imageService:ImageService) { }



 images:any[];
 imagesFound:boolean=false;
 searching:boolean=false;

 handleSucces(data){
 	this.imagesFound=true;
 	this.images=data.hits;

 }



 searchImages(query:string){
 	this.searching=true;
 	return this._imageService.getImage(query)
 	.subscribe(
 		data => this.handleSucces(data),
 		error => console.log(error),
 		() => this.searching=false,

 		)
 }
  ngOnInit() {
  }

}
