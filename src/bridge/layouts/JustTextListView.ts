import { ListView } from './ListView';

export class JustTextListView extends ListView {
  render(): void {
    console.log('\n----------------------------------');
    console.log(`${this.viewModel.title()}`);
    console.log('----------------------------------\n');
  }
}
