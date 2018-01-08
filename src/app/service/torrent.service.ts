import { Injectable } from '@angular/core';
import {Torrent} from '../model/torrent';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {TorrentAddRequest} from "../model/torrent-add-request";

@Injectable()
export class TorrentService {

  constructor(private http: HttpClient) {

  }

  getTorrents(): Observable<Torrent[]> {
    return this.http.get<Torrent[]>('http://192.168.1.11:8081/attt/torrent');
  }

  addTorrent(torrent: TorrentAddRequest): Observable<any> {
    return this.http.post('http://192.168.1.11:8081/attt/torrent', torrent);
  }
}
