import { content } from './constants/db';
import { StreamViewModel } from './items/StreamViewModel';
import { VideoViewModel } from './items/VideoViewModel';
import { JustTextListView } from './layouts/JustTextListView';
import { WithThumbnailListView } from './layouts/WithThumbnailListView';

export default function main() {
  console.log('\n=============== START Bridge pattern ===============\n');

  const videos = content.filter((item) => item.type === 'video');
  const streams = content.filter((item) => item.type === 'stream');

  videos.forEach((video) => {
    Math.random() > 0.5
      ? new JustTextListView(new VideoViewModel(video)).render()
      : new WithThumbnailListView(new VideoViewModel(video)).render();
  });

  streams.forEach((stream) => {
    Math.random() > 0.5
      ? new JustTextListView(new StreamViewModel(stream)).render()
      : new WithThumbnailListView(new StreamViewModel(stream)).render();
  });

  console.log('\n=============== END Bridge pattern ===============\n');
}
