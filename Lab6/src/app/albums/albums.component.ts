import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Album } from '../album';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums$: Observable<Album[]>;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.albums$ = this.albumsService.getAlbums();
  }

  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums$ = this.albumsService.getAlbums();
    });
  }

}
