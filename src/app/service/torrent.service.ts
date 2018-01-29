import { Injectable } from '@angular/core';
import {Torrent} from '../model/torrent';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {TorrentAddRequest} from '../model/torrent-add-request';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()
export class TorrentService {

  torrentURL = environment.attt_host + '/torrent';

  constructor(private http: HttpClient, private messages: MessageService) {

  }

  getTorrents(): Observable<Torrent[]> {
    return this.http.get<Torrent[]>(this.torrentURL).pipe(
      catchError(this.handleError('Fetching torrents', []))
    );
  }

  addTorrent(torrent: TorrentAddRequest): Observable<any> {
    return this.http.post(this.torrentURL, torrent).pipe(
      tap(_ => this.messages.success(`Torrent ${torrent.name} has been added`)),
      catchError(this.handleError('Add torrent', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.messages.error(`${operation} failed: ${error.error.message}`);
      return of(result as T);
    };
  }
}
