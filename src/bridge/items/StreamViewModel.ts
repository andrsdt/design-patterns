import { IViewModel } from './IViewModel';

export class StreamViewModel implements IViewModel {
  stream: any;

  constructor(stream: any) {
    this.stream = stream;
  }

  title(): string {
    return `(STREAM) ${this.stream.title}. Currently viewing: ${this.stream.viewers}`;
  }

  image(): string {
    return this.stream.image;
  }
}
