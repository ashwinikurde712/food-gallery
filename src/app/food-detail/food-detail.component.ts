import { Component, OnInit, Input } from '@angular/core';
import { FlickrService } from '../flickr.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
  public chosenFood: any = {};
  public userReview: any = {};
  public initialStars: number = 0;
  constructor(private flickrService: FlickrService,private _sharedService: SharedService, private router: Router) { }
  ngOnInit() {
    //this.item = this.flickrService.item;
    if(localStorage.getItem('pid'+this._sharedService.chosenFood.id)!=null) {
      this.userReview = JSON.parse(localStorage.getItem('pid'+this._sharedService.chosenFood.id));
      this.initialStars = this.userReview.reviewStars;
    }
    this.flickrService.getDishInfo(this._sharedService.chosenFood.id).subscribe(result => {
      this.chosenFood = result.photo;
      console.log(this.chosenFood);
    },error => {
      console.log(error);
    });

  }
   getImageUrl() {
    return this.flickrService.formFlickrData(this.chosenFood);
  }
  onRatingSet(stars:any) {
    this.userReview.reviewStars = stars;
  }

  createPhotoReview() {
    console.log(this.userReview);

    if(this.userReview["reviewText"] || this.userReview["reviewText"].length!==0) {
      localStorage.setItem('pid'+this.chosenFood.id,JSON.stringify(this.userReview));
      this.flickrService.createToast("Review added successfully","green");
      this.router.navigate(['/FoodGallary']); 
    }
    else {
      this.flickrService.createToast("Please provide your opinion","red");
    }
  }
}
