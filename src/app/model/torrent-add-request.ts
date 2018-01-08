import {MediaKind} from "./media-kind.enum";

export class TorrentAddRequest {
  url: string;
  downloadDirectory: string;
  kind: MediaKind;
  name: string;

  constructor() {}
}
