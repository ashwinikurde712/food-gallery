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
  public showLoader = false;
  public pageNumber: number;
  constructor(private flickrService: FlickrService, private _sharedService: SharedService, private router: Router) { }

  ngOnInit() {
    this.pageNumber = this._sharedService.pageNumber;
    this.getFoodList();

  }
  getFoodList() {
    this.showLoader = true;
    this.flickrService.getDishPics(this.pageNumber).subscribe(result => {
      this.foodList = result.photos.photo;
      this._sharedService.pageNumber = this.pageNumber;
      this.showLoader = false;
    });
  }

  getImageUrl(food: any): string {
    return this.flickrService.formFlickrData(food);
  }

  checkAlreadyReviewed(id: string): number {
    return this._sharedService.getInitialStars(id);
  }

  foodSelected(food: any) {
    this._sharedService.updateChosenFood(food);
    this.router.navigate(['/foodDetails']);
  }
}
