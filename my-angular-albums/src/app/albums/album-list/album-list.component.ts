import { Component, OnInit } from '@angular/core';

import { Album } from "../album.model";

import { ALBUMS } from "../albums.data";
import { AlbumService } from '../shared/album.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

 // constructor() { }
//  albumsArray: Album[];
  numbers: number[];

  constructor(private albumService: AlbumService) { };

  /*getAlbums() {
    this.albumService.getAlbums()
    .subscribe(
        albums => this.albumsArray = albums,
        error => console.log("Error: ", error));
  }*/
  albumsArray: Observable<Album[]>;
  getAlbums() {
    this.albumsArray = this.albumService.getAlbums();
}
  ngOnInit(): void {
 //   this.albumsArray = ALBUMS;
  this.getAlbums();
   }

  parentFunctionHandler(album) {
    alert('Album name: ' + album.albumName +'Album id: ' + album.id+ ' was sent from the album card component');
  }
 
}
