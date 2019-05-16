import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album } from '../album.model';


@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css'],
  //styles: ['  <img  *ngIf="album.onSale"  src="assets/img/sale.png"  style="width:40px;height:40px;"/>']
})


export class AlbumCardComponent implements OnInit {
  @Input()
  album: Album;
  
  @Output()
  albumClicked: EventEmitter<Album> = new EventEmitter<Album>();
  constructor() {}

 // showAlbum() {
//    alert('Album selected: ' + this.album.artist)
//  }

  showAlbum() {
    this.albumClicked.emit(this.album);
    //this.albumClicked.emit(this.);
}
  ngOnInit() {
    if (this.album.onSale) {
      // Apply 10% discount
      this.album.price = this.album.price - (this.album.price * .10); 
      }
  }

}
