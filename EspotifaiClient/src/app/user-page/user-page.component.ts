import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '../services/playlists.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  playlists: string[];

  constructor(private playlistsService: PlaylistsService) { }

  ngOnInit() {
    this.playlistsService.getPlaylists().subscribe(p => {
      this.playlists = p.playlists;
    });
  }

}
