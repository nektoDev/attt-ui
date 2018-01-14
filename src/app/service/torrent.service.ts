import { Injectable } from '@angular/core';
import {Torrent} from '../model/torrent';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {TorrentAddRequest} from '../model/torrent-add-request';
import {environment} from '../../environments/environment';

@Injectable()
export class TorrentService {

  torrentURL = environment.attt_host + '/torrent';

  constructor(private http: HttpClient) {

  }

  getTorrents(): Observable<Torrent[]> {
    return this.http.get<Torrent[]>(this.torrentURL);
  }

  addTorrent(torrent: TorrentAddRequest): Observable<any> {
    return this.http.post(this.torrentURL, torrent);
  }
}
