import { ListView } from './ListView';

export class WithThumbnailListView extends ListView {
  render(): void {
    console.log('\n----------------------------------');
    console.log(`${this.viewModel.title()}`);
    console.log(`${this.viewModel.image()}`);
    console.log('----------------------------------\n');
  }
}
