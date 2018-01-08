import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatSort, MatTableDataSource} from '@angular/material';
import {TorrentService} from '../service/torrent.service';

@Component({
  selector: 'app-torrents',
  templateUrl: './torrents.component.html',
  styleUrls: ['./torrents.component.css']
})
export class TorrentsComponent implements OnInit, AfterViewInit {

  displayedColumns = ['url', 'magnet', 'downloadDirectory', 'tracked', 'created', 'lastChecked', 'lastUpdated'];
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
    // this.torrentService
      // .addTorrent()
      // .subscribe((x) => {this.getTorrents(); this.torrentURL = ''; });
    return false;
  }
}

