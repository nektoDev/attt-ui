import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatSort, MatTableDataSource} from '@angular/material';
import {TorrentService} from '../service/torrent.service';
import {merge} from 'rxjs/observable/merge';
import {catchError, startWith} from 'rxjs/operators';
import {switchMap} from 'rxjs/operator/switchMap';
import {map} from 'rxjs/operator/map';
import {getRandomString} from 'selenium-webdriver/safari';

@Component({
  selector: 'app-torrents',
  templateUrl: './torrents.component.html',
  styleUrls: ['./torrents.component.css']
})
export class TorrentsComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id', 'name'];
  dataSource = new MatTableDataSource();
  torrentURL = '';

  @ViewChild(MatSort) sort: MatSort;

  constructor(private titleService: Title, private torrentService: TorrentService) {
    titleService.setTitle('Torrents');
  }

  ngOnInit() {
    this.getTorrents();
  }

  ngAfterViewInit() {
  }

  getTorrents() {
    this.torrentService.getTorrents().subscribe(t => this.dataSource.data = t);
  }

  addTorrent() {
    this.torrentService
      .addTorrent({id: '11', name: this.torrentURL})
      .subscribe((x) => {this.getTorrents(); this.torrentURL = '';});
    return false;
  }
}

