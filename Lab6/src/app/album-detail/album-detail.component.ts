import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

import { Album } from '../album';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album$: Observable<Album>;
  isEditMode = false;

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.album$ = this.albumsService.getAlbum(id);
  }

  enableEditMode() {
    this.isEditMode = true;
  }

  saveAlbum(album: Album) {
    this.albumsService.updateAlbum(album).subscribe(() => {
      this.isEditMode = false;
    });
  }

  cancelEdit() {
    this.isEditMode = false;
  }

  goBack() {
    this.location.back();
  }

}
