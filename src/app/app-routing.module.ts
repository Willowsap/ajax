import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookComponent } from "./book/book.component";
import { GalleryComponent } from "./gallery/gallery.component";

const routes: Routes = [
  { path: '', component: BookComponent },
  { path: 'gallery', component: GalleryComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
