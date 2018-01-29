import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatDialog, MatDialogConfig, MatSort, MatTableDataSource} from '@angular/material';
import {TorrentService} from '../service/torrent.service';
import {TorrentAddDialogComponent} from './torrent-add-dialog/torrent-add-dialog.component';
import {TorrentAddRequest} from '../model/torrent-add-request';

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

  constructor(private titleService: Title, private torrentService: TorrentService, public dialog: MatDialog) {
    titleService.setTitle('Torrents');
  }

  ngOnInit() {
    this.getTorrents();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getTorrents() {
    this.torrentService.getTorrents()
      .subscribe(t => this.dataSource.data = t.sort(function(t1, t2) {
        if (t1.lastUpdated == null) {
          return t2.lastUpdated != null ? 1 : 0;
        }
        return t2.lastUpdated != null ? t2.lastUpdated.valueOf() - t1.lastUpdated.valueOf() : -1;
      }));
  }

  openAddTorrentDialog() {
    const dialogConfig = <MatDialogConfig> {
      width: '500px',
      data: { torrentUrl: this.torrentURL }
    };
    const dialogRef = this.dialog.open(TorrentAddDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.torrentService.addTorrent(<TorrentAddRequest>result).subscribe(r => this.getTorrents());
    });
  }

  isTorrentUrlValid() {
    return this.torrentURL
      && this.torrentURL.length > 0
      && this.torrentURL.toLowerCase().indexOf('rutracker.org') > -1;
  }
}

