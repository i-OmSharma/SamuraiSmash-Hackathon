import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set root element for accessibility

const WatchLearn = () => {
  const [videoLinks] = useState([
    { link: 'https://youtu.be/0FcwzMq4iWg?si=rgw5V352j_Mq3_Qi', title: 'Sign Language' },
    { link: 'https://youtu.be/fnFWAzd3Kfw?si=Z_zSrq_ZRZQFZkOY', title: 'Greetings' },
    { link: 'https://youtu.be/YuX7-UvZy-8?si=9JnkDxKoD9G5k2Ke', title: 'Sign Language' },
    { link: 'https://youtu.be/uLOuMXoCW9w?si=K9dgByCf1axN1EuB', title: 'Greetings' },
    { link: 'https://youtu.be/e7qXmWzqwkw?si=ZHE5xnwxHTokswLA', title: 'Alphabets' },
    { link: 'https://youtu.be/0LIV0miyxR8?si=j2JlJYpMPC0pVnPQ', title: 'Numbers' },
  ]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const openModal = (link) => {
    setCurrentVideo(link);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentVideo('');
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-2 text-center text-teal-700 mt-4">Watch & Learn</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {videoLinks.map((video, index) => {
          const videoId = video.link.split('/').pop().split('?')[0];

          return (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                alt={video.title || 'Video Thumbnail'}
                className="w-full h-40 object-cover rounded-lg cursor-pointer"
                onClick={() => openModal(video.link)}
              />
              <h2 className="mt-4 text-lg font-semibold text-white text-center">
                {video.title || 'Video Title'}
              </h2>
              <button
                onClick={() => openModal(video.link)}
                className="mt-4 bg-white text-teal-500 py-2 px-4 rounded-lg hover:bg-teal-100"
              >
                Play Video

              </button>
            </div>
          );
        })}
      </div>

      {/* Video Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="w-full max-w-5xl mx-auto mt-16 bg-white rounded-lg shadow-lg p-6"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
      >
        <div className="relative">
          <iframe
            src={`${currentVideo.replace('youtu.be', 'www.youtube.com/embed')}?autoplay=1`}
            className="w-full h-[500px] lg:h-[700px] rounded-md"
            frameBorder="0"
            allow="autoplay; fullscreen"
            title="Video Player"
          ></iframe>
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
          >
            ✕
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default WatchLearn;
