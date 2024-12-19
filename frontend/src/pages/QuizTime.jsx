const QuizTime = () => {
  const games = [
    {
      title: "Maths",
      link: "https://kunjgit.github.io/GameZone/Games/Math_Game/",
      image: "https://schoolizer.com/img/articles_photos/17062655360.jpg",
    },
    {
      title: "Shapes",
      link: "https://kunjgit.github.io/GameZone/Games/Guess_The_Random_Shape/",
      image: "https://i.pinimg.com/736x/c4/fa/79/c4fa790289f356957fa44f0bbaf2b737.jpg",
    },
    {
      title: "Animals",
      link: "https://kunjgit.github.io/GameZone/Games/Animal_Match_Game/",
      image: "https://img.freepik.com/free-vector/cute-animals-white_1308-35096.jpg?t=st=1734615262~exp=1734618862~hmac=f087a6a6d21648bb50502c0f8fb80c424edaaccbe5a588b8051fdb5539546402&w=740",
    },
    {
      title: "Colors",
      link: "https://kunjgit.github.io/GameZone/Games/Which_Color/play.html",
      image: "https://www.designpoolpatterns.com/wp-content/uploads/2023/09/Color_Wheel-01-scaled-2-1090x500.jpg",
    },
    {
      title: "Color Matching",
      link: "https://kunjgit.github.io/GameZone/Games/color_matching_application/",
      image: "https://static-cse.canva.com/blob/1145173/image77.jpg",
    },
    {
      title: "Word Association",
      link: "https://kunjgit.github.io/GameZone/Games/Word_Association_Game/",
      image: "https://play-lh.googleusercontent.com/c2Ie9UaD1d9EFi2bdKnFNH8udqXf7aGdlFSmbW_J35JD5eHiQrJTOVpB21FrNzRd6GzL",
    },
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-orange-600">Quiz Time</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {games.map((game, index) => (
          <div
            key={index}
            className="relative border border-transparent rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center bg-white bg-opacity-80">
              <h2 className="text-xl font-bold mb-3 text-gray-800">{game.title}</h2>
              <a
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-400 to-red-500 text-white py-2 px-4 rounded-lg transition-all hover:from-red-500 hover:to-orange-400 hover:shadow-lg hover:shadow-red-300 inline-block font-medium"
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

export default QuizTime;
