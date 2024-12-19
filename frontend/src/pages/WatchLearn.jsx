import { useState } from 'react';

const WatchLearn = () => {
  // Predefined video links with titles
  const [videoLinks] = useState([
    { link: 'https://youtu.be/0FcwzMq4iWg?si=rgw5V352j_Mq3_Qi', title: 'Sign Language' },
    { link: 'https://youtu.be/fnFWAzd3Kfw?si=Z_zSrq_ZRZQFZkOY', title: 'Greetings' },
    { link: 'https://youtu.be/YuX7-UvZy-8?si=9JnkDxKoD9G5k2Ke', title: 'Sign Language' },
    { link: 'https://youtu.be/uLOuMXoCW9w?si=K9dgByCf1axN1EuB', title: 'Greetings' },
    { link: 'https://youtu.be/e7qXmWzqwkw?si=ZHE5xnwxHTokswLA', title: 'Alphabets' },
    { link: 'https://youtu.be/0LIV0miyxR8?si=j2JlJYpMPC0pVnPQ', title: 'Numbers' },
  ]);
  
  const handleOpenLink = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  const handleShowAllVideos = () => {
    videoLinks.forEach((video) => {
      if (video.link) {
        window.open(video.link, '_blank');
      }
    });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-2 text-center text-teal-700 mt-4">Watch & Learn</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {videoLinks.map((video, index) => {
          // Extract YouTube Video ID for thumbnail
          const videoId = video.link.includes('youtu.be')
            ? video.link.split('/').pop().split('?')[0]
            : new URL(video.link).searchParams.get('v');

          return (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                alt={video.title || 'Video Thumbnail'}
                className="w-full h-40 object-cover rounded-lg cursor-pointer"
                onClick={() => handleOpenLink(video.link)}
              />
              {/* Title */}
              <h2 className="mt-4 text-lg font-semibold text-white text-center">
                {video.title || 'Video Title'}
              </h2>
              {/* Open Button */}
              <button
                onClick={() => handleOpenLink(video.link)}
                className="mt-4 bg-white text-teal-500 py-2 px-4 rounded-lg hover:bg-teal-100"
              >
                Start Video
              </button>
            </div>
          );
        })}
      </div>

      {/* Show All Videos Button */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={handleShowAllVideos}
          className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-400 shadow-lg transition-transform duration-300 hover:scale-105"
        >
          Show All Videos
        </button>
      </div>
    </div>
  );
};

export default WatchLearn;
