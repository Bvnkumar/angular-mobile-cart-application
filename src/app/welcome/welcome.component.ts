import { Component, OnInit } from '@angular/core';
import { AppGlobals, CommentEntry, Product } from '../app.global';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  //Need to get the data using service concept then remove this array
  productList;
  param;
  duplicateProduct: Product | null = null;
  isDuplicateModalOpen = false;
  selectedReviewProduct: Product | null = null;
  isReviewModalOpen = false;
  reviewText = '';
  reviewRating = 0;
  productReviews: CommentEntry[] = [];

  constructor(
    public appglobal: AppGlobals,
    public route: Router,
    private router: ActivatedRoute
  ) {
    this.productList = this.appglobal.productList;
    this.router.params.subscribe(params => params.id ? this.param = params.id : "");
  }

  ngOnInit() {
  }

  get cartCount(): number {
    return this.appglobal.cartProduts.reduce((total, id) => {
      const product = this.appglobal.productList.find(item => item.id === id);
      return total + (product ? product.quantity : 0);
    }, 0);
  }
  addCart(id: number) {
    const selectedProduct = this.appglobal.productList.find(product => product.id === id);
    if (!selectedProduct) {
      return;
    }

    if (this.appglobal.cartProduts.lastIndexOf(id) <= -1) {
      selectedProduct.quantity = 1;
      this.appglobal.cartProduts.push(id);
      this.triggerCartCountZoom();
    } else {
      this.duplicateProduct = selectedProduct;
      this.isDuplicateModalOpen = true;
    }
  }

  confirmAddDuplicateProduct(): void {
    if (!this.duplicateProduct) {
      return;
    }

    this.duplicateProduct.quantity += 1;
    this.triggerCartCountZoom();
    this.closeDuplicateModal();
  }

  closeDuplicateModal(): void {
    this.duplicateProduct = null;
    this.isDuplicateModalOpen = false;
  }

  openReviews(product: Product): void {
    this.selectedReviewProduct = product;
    this.isReviewModalOpen = true;
    this.reviewText = '';
    this.reviewRating = 0;
    this.refreshProductReviews();
  }

  closeReviewModal(): void {
    this.isReviewModalOpen = false;
    this.selectedReviewProduct = null;
    this.reviewText = '';
    this.reviewRating = 0;
    this.productReviews = [];
  }

  submitReview(): void {
    if (!this.selectedReviewProduct) {
      return;
    }

    const trimmedReview = this.reviewText ? this.reviewText.trim() : '';
    if (!trimmedReview) {
      alert('Enter a proper value');
      return;
    }

    this.appglobal.comments.push({
      id: this.selectedReviewProduct.id,
      comment: trimmedReview,
      rating: this.reviewRating
    });

    this.reviewText = '';
    this.reviewRating = 0;
    this.refreshProductReviews();
  }

  onReviewRatingChange(rating: number): void {
    this.reviewRating = rating || 0;
  }

  getStars(rating: number): number[] {
    return Array.from({ length: rating || 0 }, (_, index) => index);
  }

  private refreshProductReviews(): void {
    if (!this.selectedReviewProduct) {
      this.productReviews = [];
      return;
    }

    this.productReviews = this.appglobal.comments.filter(comment => comment.id === this.selectedReviewProduct?.id);
  }

  private triggerCartCountZoom(): void {
    const cartCountElement = document.getElementsByClassName('cart-count')[0] as HTMLElement;
    if (!cartCountElement) {
      return;
    }

    cartCountElement.classList.add('zoom');
    setTimeout(function () {
      cartCountElement.classList.remove('zoom');
    }, 1000);
  }

  sortByPrice(a) {
    console.log(a)
    this.sortProducts(this.appglobal.productList,a.value)
  }

  sortProducts(items, order) {
    if (order == "LH") {
      items.sort(function (a, b) {
        return a.price - b.price;
      });
    } else {
      items.sort(function (a, b) {
        return b.price - a.price;
      });
    }



  }
  clearAll() {
    this.appglobal.cartProduts = [];
    this.route.navigate(["login"])
  }

  getStyle(category) {
    if (category == "block") {
      if (this.param) {
        return {
          'col-xs-12': true, 'col-md-12': true
        }
      } else {
        return {
          'col-xs-6': true, 'col-md-4': true

        }
      }
    } 
  }

  getPriceStyles(){
      if (this.param) {
        return {'col-xs-4': true, 'col-xs-offset-3': true}
      } else {
        return { 'col-xs-12': true, 'col-xs-offset-3': true, 'col-md-6': true, 'col-md-offset-0': true }


      }
    

  }
  getCartStyles(){
      if (this.param) {
        
        return {'col-xs-4': true, 'col-xs-offset-4': true,'col-md-12':true,'col-md-offset-3':true}
      } else {
        return { 'col-xs-12': true, 'col-xs-offset-0.5': true, 'col-md-6': true, 'col-md-offset-0': true }


      }
  }


  //For add cart div -- col-xs-12 col-xs-offset-0 col-md-4 col-md-offset-3
  //for add cart span--
  //For price div --col-xs-4 col-xs-offset-4 col-md-4 col-md-offset-0
}
