import { IViewModel } from './IViewModel';

export class VideoViewModel implements IViewModel {
  video: any;

  constructor(video: any) {
    this.video = video;
  }

  title(): string {
    return `(VIDEO) ${this.video.title}`;
  }
  image(): string {
    return this.video.image;
  }
}
