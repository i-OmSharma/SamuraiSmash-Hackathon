const PlayLearn = () => {
  const games = [
    {
      title: "Tower of Hanoi",
      link: "https://kunjgit.github.io/GameZone/Games/Tower_Of_Hanoi/",
      image: "https://static.scientificamerican.com/sciam/cache/file/63593F80-AE39-4EA1-B5BEC7B2678F8EE1_source.jpg?w=1200",
    },
    {
      title: "Number Sliding Puzzle",
      link: "https://kunjgit.github.io/GameZone/Games/Number_Sliding_Puzzle_Game/",
      image: "https://play-lh.googleusercontent.com/3WmU2VWi9SJDJA_OACS0tQ0TejcmVr91ICmyvyW1hS5SLbQCk9G1_ogYRxLWVbUylQ",
    },
    {
      title: "Magic Square",
      link: "https://kunjgit.github.io/GameZone/Games/Magic_Square/",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_usGgf-jRqO27J9xsqId_12_osbkz6Dk0RA&s",
    },
    {
      title: "Tower Stack",
      link: "https://kunjgit.github.io/GameZone/Games/Tower_Stack/",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLLPs4KxGShBGtalQmTWxwGH6lVAPcTE3uBdiqoSwUjkgaZhn4SbTREIVkF_WWXdBCQHg&usqp=CAU",
    },
    {
      title: "Traffic Run",
      link: "https://kunjgit.github.io/GameZone/Games/Traffic_Run/",
      image: "https://www.shutterstock.com/image-vector/expressway-traffic-jam-illustration-260nw-2254296941.jpg",
    },
    {
      title: "Maze Game",
      link: "https://kunjgit.github.io/GameZone/Games/MazeGame/",
      image: "https://img.freepik.com/free-vector/maze-game-with-panda-bamboo_1308-31337.jpg?t=st=1734618305~exp=1734621905~hmac=c295beac09d8c477ce68b16f2cd73bfc4138c6e2545c54180d676f4022f9c730&w=900",
    },
    {
      title: "Tilting Maze",
      link: "https://kunjgit.github.io/GameZone/Games/Tilting_Maze/",
      image: "https://c8.alamy.com/comp/FATWPB/simple-maze-game-level-background-FATWPB.jpg",
    },
    {
      title: "Word Association",
      link: "https://kunjgit.github.io/GameZone/Games/Word_Association_Game/",
      image: "https://play-lh.googleusercontent.com/c2Ie9UaD1d9EFi2bdKnFNH8udqXf7aGdlFSmbW_J35JD5eHiQrJTOVpB21FrNzRd6GzL",
    },
    {
      title: "Color Matching",
      link: "https://kunjgit.github.io/GameZone/Games/color_matching_application/",
      image: "https://static-cse.canva.com/blob/1145173/image77.jpg",
    },
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-teal-300 via-yellow-300 to-teal-600 min-h-screen">
      <h1 className="text-4xl font-bold mb-12 text-center text-white">Play & Learn</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <div
            key={index}
            className="bg-blue-600 text-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:scale-105 hover:shadow-lg hover:shadow-teal-400/50 transition-all"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-3">{game.title}</h2>
              <a
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-teal-400 to-indigo-500 text-white py-2 px-6 rounded-lg inline-block hover:scale-105 hover:shadow-lg hover:shadow-teal-400/50 transition-all"
              >
                Play
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayLearn;
