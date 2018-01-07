import { Injectable } from '@angular/core';
import {Torrent} from '../model/torrent';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class TorrentService {
  TORRENTS_DATA: Torrent[] = [
    {id: '1', name: 'xxx'},
    {id: '2', name: 'www'},
    {id: '3', name: 'xxe'},
    {id: '4', name: 'ewq'},
  ];

  constructor() { }

  getTorrents(): Observable<Torrent[]> {
    return of(this.TORRENTS_DATA);
  }

  addTorrent(torrent: Torrent): Observable<Torrent[]> {
    this.TORRENTS_DATA.push(torrent);
    return of(this.TORRENTS_DATA);
  }
}
