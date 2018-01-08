export interface Torrent {
  id: string;
  hash: string;
  name: string;
  url: string;
  magnet: string;
  downloadDirectory: string;
  tracked: boolean;
  created: Date;
  lastChecked: Date;
  lastUpdated: Date;
}
