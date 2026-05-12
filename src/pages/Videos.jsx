import ReactPlayer from 'react-player';

const videos = [
  {
    id: 1,
    title: "The Beauty of the Universe - NASA",
    url: "https://www.youtube.com/watch?v=6V7g4d4fZ0M",
    description: "Stunning visuals of space exploration"
  },
  {
    id: 2,
    title: "Black Holes Explained",
    url: "https://www.youtube.com/watch?v=4d3z7g9v7zA",
    description: "Understanding black holes and event horizons"
  },
  {
    id: 3,
    title: "James Webb Space Telescope Latest Images",
    url: "https://www.youtube.com/watch?v=5p1v9v9v9vA",
    description: "Latest discoveries from JWST"
  }
];

function Videos() {
  return (
    <div className="max-w-7xl mx-auto p-6 pt-10">
      <h1 className="text-5xl font-bold text-center mb-4">Educational Astronomy Videos</h1>
      <p className="text-center text-gray-400 mb-12 text-xl">Watch and learn about the wonders of the universe</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {videos.map(video => (
          <div key={video.id} className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700">
            <div className="aspect-video">
              <ReactPlayer
                url={video.url}
                width="100%"
                height="100%"
                controls
                light={true}
                playing={false}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{video.title}</h3>
              <p className="text-gray-400">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;