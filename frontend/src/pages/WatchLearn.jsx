import { useState } from 'react';

const WatchLearn = () => {
  const [videoLinks, setVideoLinks] = useState([{ link: '', title: '' }]);

  const handleAddVideo = () => {
    setVideoLinks([...videoLinks, { link: '', title: '' }]);
  };

  const handleLinkChange = (index, value) => {
    const newLinks = [...videoLinks];
    newLinks[index].link = value;
    setVideoLinks(newLinks);
  };

  const handleTitleChange = (index, value) => {
    const newLinks = [...videoLinks];
    newLinks[index].title = value;
    setVideoLinks(newLinks);
  };

  const handleOpenLink = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Watch & Learn</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Video Boxes */}
        {videoLinks.map((video, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-6 rounded-lg bg-teal-500 shadow-xl hover:scale-105 transition-transform duration-200"
            style={{ width: '250px', height: '250px' }}
          >
            <input
              type="text"
              value={video.title}
              onChange={(e) => handleTitleChange(index, e.target.value)}
              placeholder="Enter video title"
              className="p-2 rounded-md mb-4 w-full text-center"
            />
            <input
              type="text"
              value={video.link}
              onChange={(e) => handleLinkChange(index, e.target.value)}
              placeholder="Enter YouTube video link"
              className="p-2 rounded-md mb-4 w-full text-center"
            />
            <button
              onClick={() => handleOpenLink(video.link)}
              className="bg-white text-teal-500 py-2 px-4 rounded-lg mt-2 hover:bg-teal-100"
            >
              Open Video
            </button>
            <p className="mt-4 text-white text-xl font-medium">{video.title || 'Video Title'}</p>
          </div>
        ))}
      </div>

      <button
        onClick={handleAddVideo}
        className="mt-8 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400"
      >
        Add Another Video
      </button>
    </div>
  );
};

export default WatchLearn;
