import { useState } from 'react';

const PlayLearn = () => {
  const [gameTitle, setGameTitle] = useState('');
  const [gameLink, setGameLink] = useState('');

  const handleAddGame = () => {
    if (gameTitle && gameLink) {
      // Handle game creation
      alert(`Game "${gameTitle}" added!`);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Play & Learn</h1>
      <input
        type="text"
        value={gameTitle}
        onChange={(e) => setGameTitle(e.target.value)}
        placeholder="Enter game title"
        className="p-3 border border-gray-300 rounded-lg mb-4"
      />
      <input
        type="text"
        value={gameLink}
        onChange={(e) => setGameLink(e.target.value)}
        placeholder="Enter game link"
        className="p-3 border border-gray-300 rounded-lg mb-4"
      />
      <button
        onClick={handleAddGame}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400"
      >
        Add Game
      </button>
    </div>
  );
};

export default PlayLearn;
