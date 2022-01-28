import { IViewModel } from '../items/IViewModel';

export abstract class ListView {
  // Here happens the bridge. This way, ListViewModel depends of a generic
  // interface, not a concrete implementation (video, stream, community post,
  // etc). This allows us to tream them all the same way.
  viewModel: IViewModel;

  constructor(viewModel: IViewModel) {
    this.viewModel = viewModel;
  }

  render(): void {
    // Here we will define the concrete way of rendering the item. This is:
    // with thumbnail, with animated image, with description, etc. We will
    // define all this in the concrete implementations of ListItemView
    console.log('default abastract render. Needs a concrete implementation!');

    // Concrete implementations (JustTextListView, WithThumbnailListView...)
    // will be able to access this.viewModel.title() and this.viewModel.image()
    // so they can render the item, without having to worry about them being
    // a video, a stream, a post, etc.
  }
}
