import { Injectable } from '@angular/core';
import {Torrent} from '../model/torrent';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TorrentService {

  constructor(private http: HttpClient) {

  }

  getTorrents(): Observable<Torrent[]> {
    return this.http.get<Torrent[]>('http://localhost:8080/torrent');
  }

  addTorrent(torrent: Torrent): Observable<Torrent[]> {
    return this.getTorrents();
  }
}
