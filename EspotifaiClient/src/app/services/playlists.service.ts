import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  constructor(private http: HttpClient) { }

  getPlaylists() {
    return this.http.get<any>(`${environment.baseUrl}/playlists`);
  }
}
