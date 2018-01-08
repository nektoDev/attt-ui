import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSelectChange} from '@angular/material';
import {TorrentAddRequest} from '../../model/torrent-add-request';
import {MediaKind} from '../../model/media-kind.enum';

@Component({
  selector: 'app-torrent-add-dialog',
  templateUrl: './torrent-add-dialog.component.html',
  styleUrls: ['./torrent-add-dialog.component.css']
})
export class TorrentAddDialogComponent {

  torrent: TorrentAddRequest;
  defaultDownloadDirectory = '/downloads/';

  // TODO: add getting default info
  constructor(public dialogRef: MatDialogRef<TorrentAddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.torrent = new TorrentAddRequest();
    this.torrent.url = data.torrentUrl;
    this.torrent.downloadDirectory = this.defaultDownloadDirectory;
  }

  onKeyPressed() {
    this.dialogRef.close(this.torrent);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  isValidDialogData() {
    return this.torrent
      && this.torrent.url
      && this.torrent.url.length > 0
      && this.torrent.url.indexOf('rutracker.org') > -1
      && this.torrent.downloadDirectory
      && this.torrent.downloadDirectory.length > 0;
  }

  getMediaKinds() {
    return Object.keys(MediaKind);
  }

  onKindSelect() {
    this.torrent.downloadDirectory = this.defaultDownloadDirectory + MediaKind[this.torrent.kind];
  }

  onNameChange(val: string) {
    if (MediaKind.SERIES === MediaKind[this.torrent.kind]) {
      this.torrent.downloadDirectory = this.defaultDownloadDirectory + MediaKind[this.torrent.kind] + '/' + val;
    }
  }
}
