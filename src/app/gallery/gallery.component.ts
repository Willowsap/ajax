import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
  public numCols = 3;
  public numImages = 274;
  public imagePrefix = "../../../assets/images/ajax/ajax"

  public numRows!: number;
  public images: Array<string> = [];

  public ngOnInit(): void {
    for (let i = 1; i <= this.numImages; i++) {
      this.images.push(this.imagePrefix + i + ".jpg");
    }
    this.numRows = Math.ceil(this.images.length / this.numCols);
  }

  public counter(i: number) {
    return new Array(i);
  }
}
