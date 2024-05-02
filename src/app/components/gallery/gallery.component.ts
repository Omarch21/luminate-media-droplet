import { Component, Input, Inject, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Tile } from 'src/app/models/tile';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],

})
export class GalleryComponent implements OnInit{
  constructor(public dialog: MatDialog) { }
  total: number[] = [];
  tiles: Tile[] = [
    {
      text: 'one', cols: 2, rows: 2, color: 'white', images: ['../../../assets/gallery1/MAIN.jpg', '../../../assets/gallery1/image1.jpg', '../../../assets/gallery1/image2.jpg', '../../../assets/gallery1/image3.jpg',
        '../../../assets/gallery1/image4.jpg', '../../../assets/gallery1/image5.jpg', '../../../assets/gallery1/image6.jpg', '../../../assets/gallery1/image7.jpg',
        '../../../assets/gallery1/image8.jpg', '../../../assets/gallery1/image9.jpg', '../../../assets/gallery1/image10.jpg', '../../../assets/gallery1/image11.jpg',
        '../../../assets/gallery1/image12.jpg', '../../../assets/gallery1/image13.jpg', '../../../assets/gallery1/image14.jpg', '../../../assets/gallery1/image15.jpg']
    },
    { text: 'one1', cols: 2, rows: 2, color: 'white', images: ['../../../assets/340 W Superior Street/MAIN.jpg', '../../../assets/340 W Superior Street/image1.jpg','../../../assets/340 W Superior Street/image2.jpg',
    '../../../assets/340 W Superior Street/image3.jpg', '../../../assets/340 W Superior Street/image4.jpg','../../../assets/340 W Superior Street/image5.jpg',
    '../../../assets/340 W Superior Street/image6.jpg', '../../../assets/340 W Superior Street/image7.jpg','../../../assets/340 W Superior Street/image8.jpg','../../../assets/340 W Superior Street/image9.jpg',
    '../../../assets/340 W Superior Street/image10.jpg', '../../../assets/340 W Superior Street/image11.jpg','../../../assets/340 W Superior Street/image12.jpg','../../../assets/340 W Superior Street/image13.jpg',
    '../../../assets/340 W Superior Street/image14.jpg', '../../../assets/340 W Superior Street/image15.jpg']},


    { text: 'two', cols: 2, rows: 2, color: 'white', images: ['../../../assets/7845 bristol park/MAIN.jpg','../../../assets/7845 bristol park/image1.jpg','../../../assets/7845 bristol park/image2.jpg',
    '../../../assets/7845 bristol park/image3.jpg','../../../assets/7845 bristol park/image4.jpg','../../../assets/7845 bristol park/image5.jpg',
    '../../../assets/7845 bristol park/image6.jpg','../../../assets/7845 bristol park/image7.jpg','../../../assets/7845 bristol park/image8.jpg',
    '../../../assets/7845 bristol park/image9.jpg','../../../assets/7845 bristol park/image10.jpg','../../../assets/7845 bristol park/image11.jpg','../../../assets/7845 bristol park/image12.jpg'
     ]},
    { text: 'three', cols: 2, rows: 2, color: 'white', images: ['../../../assets/Ash/main.jpg','../../../assets/Ash/image1.jpg','../../../assets/Ash/image2.jpg',
    '../../../assets/Ash/image3.jpg','../../../assets/Ash/image4.jpg','../../../assets/Ash/image5.jpg','../../../assets/Ash/image6.jpg','../../../assets/Ash/image7.jpg'

    ] },
    { text: 'four', cols: 2, rows: 2, color: 'white', images: ['../../../assets/912 Marshall/MAIN.jpg','../../../assets/912 Marshall/photo1.jpg','../../../assets/912 Marshall/photo2.jpg','../../../assets/912 Marshall/photo3.jpg',
    '../../../assets/912 Marshall/photo4.jpg','../../../assets/912 Marshall/photo5.jpg','../../../assets/912 Marshall/photo6.jpg','../../../assets/912 Marshall/photo7.jpg',
  
    ] },
    { text: 'five', cols: 2, rows: 2, color: 'white', images: ['../../../assets/Parkside/MAIN.jpg','../../../assets/Parkside/photo1.jpg','../../../assets/Parkside/photo2.jpg','../../../assets/Parkside/photo3.jpg',
    '../../../assets/Parkside/photo4.jpg','../../../assets/Parkside/photo5.jpg','../../../assets/Parkside/photo6.jpg','../../../assets/Parkside/photo7.jpg',
    '../../../assets/Parkside/photo8.jpg','../../../assets/Parkside/photo9.jpg','../../../assets/Parkside/photo10.jpg','../../../assets/Parkside/photo11.jpg'
    ] },
    { text: 'six', cols: 2, rows: 2, color: 'white', images: ['../../../assets/Kilpatric/MAIN.jpg','../../../assets/Kilpatric/photo1.jpg','../../../assets/Kilpatric/photo2.jpg','../../../assets/Kilpatric/photo3.jpg',
    '../../../assets/Kilpatric/photo4.jpg','../../../assets/Kilpatric/photo5.jpg','../../../assets/Kilpatric/photo6.jpg','../../../assets/Kilpatric/photo7.jpg',
    '../../../assets/Kilpatric/photo8.jpg','../../../assets/Kilpatric/photo9.jpg','../../../assets/Kilpatric/photo10.jpg'] },
    { text: 'seven', cols: 2, rows: 2, color: 'white', images: ['../../../assets/sangamon/MAIN.jpg','../../../assets/sangamon/photo1.jpg','../../../assets/sangamon/photo2.jpg','../../../assets/sangamon/photo3.jpg',
    '../../../assets/sangamon/photo4.jpg','../../../assets/sangamon/photo5.jpg','../../../assets/sangamon/photo6.jpg','../../../assets/sangamon/photo7.jpg',
    '../../../assets/sangamon/photo8.jpg','../../../assets/sangamon/photo9.jpg','../../../assets/sangamon/photo10.jpg',] },
    { text: 'eight', cols: 2, rows: 2, color: 'white', images: ['../../../assets/Latrobe/MAIN.jpg','../../../assets/Latrobe/photo1.jpg','../../../assets/Latrobe/photo2.jpg','../../../assets/Latrobe/photo3.jpg',
    '../../../assets/Latrobe/photo4.jpg','../../../assets/Latrobe/photo5.jpg','../../../assets/Latrobe/photo6.jpg','../../../assets/Latrobe/photo7.jpg',
    '../../../assets/Latrobe/photo8.jpg','../../../assets/Latrobe/photo9.jpg', '../../../assets/Latrobe/photo10.jpg','../../../assets/Latrobe/photo11.jpg','../../../assets/Latrobe/photo12.jpg',] },
    { text: 'nine', cols: 2, rows: 2, color: 'white', images: ['../../../assets/Ridgeway/MAIN.jpg','../../../assets/Ridgeway/photo1.jpg','../../../assets/Ridgeway/photo2.jpg','../../../assets/Ridgeway/photo3.jpg',
    '../../../assets/Ridgeway/photo4.jpg','../../../assets/Ridgeway/photo5.jpg','../../../assets/Ridgeway/photo6.jpg','../../../assets/Ridgeway/photo7.jpg',
    '../../../assets/Ridgeway/photo8.jpg','../../../assets/Ridgeway/photo9.jpg', '../../../assets/Ridgeway/photo10.jpg','../../../assets/Ridgeway/photo11.jpg',] }


  ]
ngOnInit(){
  this.tiles.forEach((tile)=>{
    this.total.push(tile.images.length);
  })
  console.log(this.total);
}
  openCard(tile:any): void {
    this.dialog.open(GalleryCard, {
      width: '900px',
      height: '600px',
      data: tile
    });
  }
}
@Component({
  selector: 'gallery-card',
  templateUrl: './gallery-card.html',
  styleUrls: ['./gallery-card.css'],
})
export class GalleryCard implements OnInit {
  index: number = 1;
  total: number = 0;
  @ViewChild('pic') el!: ElementRef;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<GalleryCard>, private renderer: Renderer2, private elRef: ElementRef) { }
  ngOnInit() {
    this.total = this.data.images.length;
    const el1 = this.elRef.nativeElement.querySelector('#container');
    this.renderer.setStyle(el1, 'background-image', `url("${this.data.images[this.index - 1]}")`)

  }
  changeSlide(num: any) {
    
    
    if ((this.index + num) > this.total) {
      this.index = 1;
    }
    else if ((this.index + num) < 1) {
      this.index = this.total;
    } else {
      this.index = this.index + num;
    }
    const el1 = this.elRef.nativeElement.querySelector('#container');
    this.renderer.setStyle(el1, 'background-image', `url("${this.data.images[this.index - 1]}")`)
    this.renderer.removeClass(el1,"image-slide-animation");
    setTimeout(()=>{
        this.renderer.addClass(el1,"image-slide-animation")
    },10)
  }
  showSlides(num: any) {
    const sls = this.data.image.length;
    const slides = document.getElementsByClassName("slides");
    if (num > sls) {
      this.index = 1;
    }
    if (num < 1) {
      this.index = sls;
    }
    for (var i = 0; i < sls; i++) {

    }
  }
}
