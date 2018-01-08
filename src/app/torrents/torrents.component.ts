import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatDialog, MatDialogConfig, MatSort, MatTableDataSource} from '@angular/material';
import {TorrentService} from '../service/torrent.service';
import {Torrent} from '../model/torrent';
import {TorrentAddDialogComponent} from './torrent-add-dialog/torrent-add-dialog.component';
import {TorrentAddRequest} from "../model/torrent-add-request";

@Component({
  selector: 'app-torrents',
  templateUrl: './torrents.component.html',
  styleUrls: ['./torrents.component.css']
})
export class TorrentsComponent implements OnInit, AfterViewInit {

  displayedColumns = ['url', 'magnet', 'downloadDirectory', 'tracked', 'created', 'lastChecked', 'lastUpdated'];
  dataSource = new MatTableDataSource();
  torrentURL = 'https://rutracker.org/forum/viewtopic.php?t=5487552';

  @ViewChild(MatSort) sort: MatSort;

  constructor(private titleService: Title, private torrentService: TorrentService, public dialog: MatDialog) {
    titleService.setTitle('Torrents');
  }

  ngOnInit() {
    this.getTorrents();
  }

  ngAfterViewInit() {
  }

  getTorrents() {
    this.torrentService.getTorrents()
      .subscribe(t => this.dataSource.data = t.sort((t1, t2) => t2.created.valueOf() - t1.created.valueOf()));
  }

  openAddTorrentDialog() {
    const dialogConfig = <MatDialogConfig> {
      width: '500px',
      data: { torrentUrl: this.torrentURL }
    };
    const dialogRef = this.dialog.open(TorrentAddDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.torrentService.addTorrent(<TorrentAddRequest>result).subscribe(r => this.getTorrents());
    });
  }

  isTorrentUrlValid() {
    return this.torrentURL
      && this.torrentURL.length > 0
      && this.torrentURL.toLowerCase().indexOf('rutracker.org') > -1;
  }
}

