import { WriteProductReviewComponent } from './components/product-detail-page/write-product-review/write-product-review.component';
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: ':id', component: ProductDetailPageComponent },
  { path: ':id/write_review', component: WriteProductReviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
