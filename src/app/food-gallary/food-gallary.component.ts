import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../flickr.service';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-gallary',
  templateUrl: './food-gallary.component.html',
  styleUrls: ['./food-gallary.component.css']
})
export class FoodGallaryComponent implements OnInit {
   public foodList: any = [];
  public pageNumber: number = 1;
  public showLoader: boolean = false;
  constructor(private flickrService: FlickrService ,private _sharedService:SharedService, private router: Router) { }

  ngOnInit() {
    this.getFoodList();
  }
  getFoodList() {
    this.showLoader = true;
    this.flickrService.getDishPics(this.pageNumber).subscribe(result => {
      this.foodList = result.photos.photo;
      this.showLoader = false;
    })
  }

  getImageUrl(food:any): string {
    return this.flickrService.formFlickrData(food);
  }

  checkAlreadyReviewed(id:string): number {
    return this._sharedService.getInitialStars(id);
  }

  foodSelected(food:any) {
    this._sharedService.updateChosenFood(food);
    this.router.navigate(['/foodDetails']);
  }
}
