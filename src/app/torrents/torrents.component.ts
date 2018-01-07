import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-torrents',
  templateUrl: './torrents.component.html',
  styleUrls: ['./torrents.component.css']
})
export class TorrentsComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id', 'name'];
  dataSource = new MatTableDataSource(TORRENTS_DATA);
  torrentURL = '';

  @ViewChild(MatSort) sort: MatSort;

  constructor(private titleService: Title) {
    titleService.setTitle('Torrents');
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  addTorrent() {
    console.log(this.dataSource.data);
    const copiedData = this.dataSource.data.slice();
    copiedData.push({id: '11', name: this.torrentURL});
    this.dataSource.connect().next(copiedData);
    return false;
  }
}

export interface Torrent {
  id: string;
  name: string;
}

const TORRENTS_DATA: Torrent[] = [
  {id: '1', name: 'xxx'},
  {id: '2', name: 'www'},
  {id: '3', name: 'xxe'},
  {id: '4', name: 'ewq'},
];
