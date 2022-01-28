# Bridge pattern

## The problem

While developing the frontend for a social network app, we realize that we have different types of items (video, stream, post) and different ways of rendering them (only text and text+thumbnail). We would have 6 renderers, one for each combination:

- Video - Only text
- Stream - Only text
- Post - Only text
- Video - Text and thumbnail
- Stream - Text and thumbnail
- Post - Text and thumbnail

This is definitely not a good way of approaching the problem since adding a new type of rendering or a new type of item would lead to the creation of 3 new classes, considering each possible combination, and with a lot of repeated code in between.

## The solution

We may think that it's a good idea to generalize all the items as a single `ItemInterface`, making them homogeneous in content (i.e. make them all have a `title`, a `description` and an `image`). However this is probably not the way we would like them to behave. For instance, streams have a `viewers` integer attribute.

The Bridge pattern offers us a solution that consists in decoupling the "items" and the "layouts" in our problem by abstracting them both, allowing their concrete implementations to be different. This way, we would have the following structure:

- `IViewModel.ts`: Interface that generalizes the common structure of the layouts. In our case, `title()` and `image()`.

  - `StreamViewModel.ts`: Concrete implementation that defines how the `title()` should be in the case of rendering a stream (`${title} - Currently viewing: ${viewers}`), and the same for the `image()`.
  - `VideoViewModel.ts`: Concrete implementation that defines how the `title()` should be in the case of rendering a video (`${title}`), and the same for the `image()`.

- `ListView.ts`: Abstract class that generalizes the way of rendering elements. It has an `IViewModel` attribute, **where the bridge happens**, allowing concrete implementations to render the items in different ways.
  - `JustTextListView.ts`: Concrete implementation that defines how a viewModel item should be displayed, only with its title
  - `WithThumbnailListView.ts`: Concrete implementation that defines how a viewModel item should be displayed, with both its title and thumbnail
