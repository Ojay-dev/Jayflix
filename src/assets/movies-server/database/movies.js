
var movies = [
  {
    id: 13242,
    title: "The Secret Life of Pets 2",
    year: 2019,
    rating: 6.5,
    runtime: 86,
    genres: [
      "Adventure",
      "Animation",
      "Comedy",
      "Family"
    ],
    summary: "Max faces some major changes after his owner Katie gets married and now has a child. On a family trip to the countryside, Max meets a farm dog named Rooster, and both attempt to overcome his fears. Meanwhile, Gidget tries to rescue Max's favorite toy from a cat-packed apartment, and Snowball sets on a mission to free a white tiger named Hu from a circus.",
    mpa_rating: "PG",
    medium_cover_image: "https://yts.lt/assets/images/movies/the_secret_life_of_pets_2_2019/medium-cover.jpg",
    large_cover_image: "https://yts.lt/assets/images/movies/the_secret_life_of_pets_2_2019/large-cover.jpg",
  },
  {
    id: 12176,
    title: "Captain Marvel",
    year: 2019,
    rating: 7,
    runtime: 123,
    genres: [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    summary: "After crashing an experimental aircraft, Air Force pilot Carol Danvers is discovered by the Kree and trained as a member of the elite Starforce Military under the command of her mentor Yon-Rogg. Six years later, after escaping to Earth while under attack by the Skrulls, Danvers begins to discover there's more to her past. With help from S.H.I.E.L.D. agent Nick Fury, they set out to unravel the truth.",
    mpa_rating: "PG-13",
    medium_cover_image: "https://yts.lt/assets/images/movies/captain_marvel_2019/medium-cover.jpg",
    large_cover_image: "https://yts.lt/assets/images/movies/captain_marvel_2019/large-cover.jpg",
  },
  {
    id: 13106,
    title: "Avengers: Endgame",
    year: 2019,
    rating: 8.5,
    runtime: 181,
    genres: ["Action", "Adventure", "Sci-Fi"],
    summary: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face...",
    mpa_rating: "PG-13",
    medium_cover_image: "https://yts.lt/assets/images/movies/avengers_endgame_2019/medium-cover.jpg",
    large_cover_image: "https://yts.lt/assets/images/movies/avengers_endgame_2019/large-cover.jpg"
  },
  {
    id: 9947,
    title: "Venom",
    year: 2018,
    rating: 6.7,
    runtime: 112,
    genres: [
      "Action",
      "Sci-Fi",
      "Thriller"
    ],
    summary: "After a faulty interview with the Life Foundation ruins his career, former reporter Eddie Brock's life is in pieces. Six months later, he comes across the Life Foundation again, and he comes into contact with an alien symbiote and becomes Venom, a parasitic antihero.",
    mpa_rating: "PG-13",
    medium_cover_image: "https://yts.lt/assets/images/movies/venom_2018/medium-cover.jpg",
    large_cover_image: "https://yts.lt/assets/images/movies/venom_2018/large-cover.jpg",
  },
  {
    id: 9423,
    title: "Incredibles 2",
    year: 2018,
    rating: 7.7,
    runtime: 118,
    genres: [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Family",
    "Sci-Fi"
    ],
    summary: "While the Parr family has accepted its collective calling as superheroes, the fact remains that their special heroism is still illegal. After they are arrested after unsuccessfully trying to stop the Underminer, their future seems bleak. However, the wealthy Deavor siblings of Devtech offer new hope with a bold project to rehabilitate the public image and legal status of Supers, with Elastigirl being assigned on point to be the shining example. Now having agreed for now to stay at home to care of the kids, Mr. Incredible finds domestic life a daunting challenge, especially with baby Jack-Jack's newly emerged powers making him almost impossible to manage. However, Elastigirl soon has her own concerns dealing with the menace of a new supervillain, Screenslaver, who is wreaking havoc with his mind control abilities. Now, Elastigirl must solve the mystery of this enemy, who has malevolent designs on the world with the Parr family and friends key targets of this evil.",
    mpa_rating: "PG",
    medium_cover_image: "https://yts.lt/assets/images/movies/incredibles_2_2018/medium-cover.jpg",
    large_cover_image: "https://yts.lt/assets/images/movies/incredibles_2_2018/large-cover.jpg",
  },
  {
    id: 11107,
    title: "Aquaman",
    year: 2018,
    rating: 7,
    runtime: 143,
    genres: [
    "Action",
    "Adventure",
    "Fantasy",
    "Sci-Fi"
    ],
    summary: "Arthur Curry, half human half from Atlantis, goes on a trip of a lifetime. Not only does this adventure compel him to come to terms with his real identity, but it also forces him to discover whether he is entirely worthy of fulfilling his own destiny: becoming a king.",
    mpa_rating: "PG-13",
    medium_cover_image: "https://yts.lt/assets/images/movies/aquaman_2018/medium-cover.jpg",
    large_cover_image: "https://yts.lt/assets/images/movies/aquaman_2018/large-cover.jpg",
  },
  {
    id: 10960,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    rating: 8.4,
    runtime: 117,
    genres: [
      "Action",
      "Adventure",
      "Animation",
      "Family",
      "Sci-Fi"
    ],
    summary: "Miles Morales is a New York teen struggling with school, friends and, on top of that, being the new Spider-Man. When he comes across Peter Parker, the erstwhile saviour of New York, in the multiverse, Miles must train to become the new protector of his city.",
    mpa_rating: "PG",
    medium_cover_image: "https://yts.lt/assets/images/movies/spider_man_into_the_spider_verse_2018/medium-cover.jpg",
    large_cover_image: "https://yts.lt/assets/images/movies/spider_man_into_the_spider_verse_2018/large-cover.jpg",
  },
  {
    id: 9539,
    title: "The Meg",
    year: 2018,
    rating: 5.7,
    runtime: 113,
    genres: [
    "Action",
    "Horror",
    "Sci-Fi",
    "Thriller"
    ],
    summary: "Five years ago, expert sea diver and Naval Captain Jonas Taylor encountered an unknown danger in the unexplored recesses of the Mariana Trench that forced him to abort his mission and abandon half his crew. Though the tragic incident earned him a dismissal from service, what ultimately cost him his career, his marriage and any semblance of honor was his unsupported and incredulous claims of what caused it - an attack on his vessel by a mammoth, 70-foot sea creature, believed to be extinct for more than a million years. But when a submersible lies sunk and disabled at the bottom of the ocean - carrying his ex-wife among the team onboard - he is the one who gets the call. Whether a shot at redemption or a suicide mission, Jonas must confront his fears and risk his own life and the lives of everyone trapped below on a single question: Could the Carcharodon Megalodon - the largest marine predator that ever existed - still be alive - and on the hunt?",
    mpa_rating: "PG-13",
    medium_cover_image: "https://yts.lt/assets/images/movies/the_meg_2018/medium-cover.jpg",
    large_cover_image: "https://yts.lt/assets/images/movies/the_meg_2018/large-cover.jpg",
  },
]

module.exports = movies;
