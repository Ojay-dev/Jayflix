
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IMovie } from './model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // private _moviesUrl:string = "https://yts.lt/api/v2/list_movies.json?quality=3D";
  // private _moviesUrl:string = "../../assets/api/movies.json";
  // private _moviesUrl:string = "https://raw.githubusercontent.com/Ojay-dev/Jayflix/master/src/assets/api/movies.json";
  private _moviesUrl:string = "/api/movies";

  constructor(private _http:HttpClient) {

  }
  getMovies():Observable<IMovie[]> {
    return this._http.get<IMovie[]>("/api/movies")
      .pipe(catchError(this.handleError<IMovie[]>('getMovies', [])));
  }

  getMovie(id:number):Observable<IMovie> {
    return this._http.get<IMovie>("/api/movies/" + id)
      .pipe(catchError(this.handleError<IMovie>('getMovie')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}

const MOVIES:IMovie[] = [
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

// const MOVIES2 = [
//   {
//     Title: "Joker",
//     Year: "2019",
//     Rated: "R",
//     Released: "04 Oct 2019",
//     Runtime: "121 min",
//     Genre: "Crime, Drama, Thriller",
//     Director: "Todd Phillips",
//     Writer: "Todd Phillips, Scott Silver",
//     Actors: "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy",
//     Plot: "A gritty character study of Arthur Fleck, a man disregarded by society.",
//     Language: "English",
//     Country: "USA, Canada",
//     Awards: "N/A",
//     Poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
//     Ratings: [{
//       Source: "Internet Movie Database",
//       Value: "9.1/10"
//     }, {
//       Source: "Rotten Tomatoes",
//       Value: "77%"
//     }, {
//       Source: "Metacritic",
//       Value: "58/100"
//     }],
//     Metascore: "58",
//     imdbRating: "9.1",
//     imdbVotes: "87,202",
//     imdbID: "tt7286456",
//     Type: "movie",
//     DVD: "N/A",
//     BoxOffice: "N/A",
//     Production: "Warner Bros. Pictures",
//     Website: "N/A",
//     Response: "True"
//   },
//   {
//     Title: "The Lion King",
//     Year: "2019",
//     Rated: "PG",
//     Released: "19 Jul 2019",
//     Runtime: "118 min",
//     Genre: "Animation, Adventure, Drama, Family, Musical",
//     Director: "Jon Favreau",
//     Writer: "Jeff Nathanson (screenplay by), Brenda Chapman (story), Irene Mecchi (characters), Jonathan Roberts (characters), Linda Woolverton (characters)",
//     Actors: "Chiwetel Ejiofor, John Oliver, James Earl Jones, John Kani",
//     Plot: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
//     Language: "English",
//     Country: "USA",
//     Awards: "N/A",
//     Poster: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
//     Ratings: [{
//       Source: "Internet Movie Database",
//       Value: "7.1/10"
//     }, {
//       Source: "Rotten Tomatoes",
//       Value: "53%"
//     }, {
//       Source: "Metacritic",
//       Value: "55/100"
//     }],
//     Metascore: "55",
//     imdbRating: "7.1",
//     imdbVotes: "102,621",
//     imdbID: "tt6105098",
//     Type: "movie",
//     DVD: "11 Oct 2019",
//     BoxOffice: "N/A",
//     Production: "Walt Disney Pictures",
//     Website: "N/A",
//     Response: "True"
//   },
//   {
//     Title: "Spider-Man: Far from Home",
//     Year: "2019",
//     Rated: "PG-13",
//     Released: "02 Jul 2019",
//     Runtime: "129 min",
//     Genre: "Action, Adventure, Sci-Fi",
//     Director: "Jon Watts",
//     Writer: "Chris McKenna, Erik Sommers, Stan Lee (based on the Marvel comic book by), Steve Ditko (based on the Marvel comic book by)",
//     Actors: "Tom Holland, Samuel L. Jackson, Jake Gyllenhaal, Marisa Tomei",
//     Plot: "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
//     Language: "Italian, Czech, English",
//     Country: "USA",
//     Awards: "N/A",
//     Poster: "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
//     Ratings: [{
//       Source: "Internet Movie Database",
//       Value: "7.7/10"
//     }, {
//       Source: "Rotten Tomatoes",
//       Value: "90%"
//     }, {
//       Source: "Metacritic",
//       Value: "69/100"
//     }],
//     Metascore: "69",
//     imdbRating: "7.7",
//     imdbVotes: "187,214",
//     imdbID: "tt6320628",
//     Type: "movie",
//     DVD: "17 Sep 2019",
//     BoxOffice: "N/A",
//     Production: "Sony Pictures",
//     Website: "https://www.spidermanfarfromhome.movie",
//     Response: "True"
//   },
//   {
//     Title: "Toy Story 4",
//     Year: "2019",
//     Rated: "G",
//     Released: "21 Jun 2019",
//     Runtime: "100 min",
//     Genre: "Animation, Adventure, Comedy, Family, Fantasy",
//     Director: "Josh Cooley",
//     Writer: "John Lasseter (original story by), Andrew Stanton (original story by), Josh Cooley (original story by), Valerie LaPointe (original story by), Rashida Jones (original story by), Will McCormack (original story by), Martin Hynes (original story by), Stephany Folsom (original story by), Andrew Stanton (screenplay by), Stephany Folsom (screenplay by)",
//     Actors: "Tom Hanks, Tim Allen, Annie Potts, Tony Hale",
//     Plot: "When a new toy called "
//     Forky " joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.",
//     Language: "English",
//     Country: "USA",
//     Awards: "N/A",
//     Poster: "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SX300.jpg",
//     Ratings: [{
//       Source: "Internet Movie Database",
//       Value: "8.1/10"
//     }, {
//       Source: "Rotten Tomatoes",
//       Value: "97%"
//     }, {
//       Source: "Metacritic",
//       Value: "84/100"
//     }],
//     Metascore: "84",
//     imdbRating: "8.1",
//     imdbVotes: "96,147",
//     imdbID: "tt1979376",
//     Type: "movie",
//     DVD: "01 Oct 2019",
//     BoxOffice: "N/A",
//     Production: "Disney/Pixar",
//     Website: "N/A",
//     Response: "True"
//   },
//   {
//     Title: "Aladdin",
//     Year: "2019",
//     Rated: "PG",
//     Released: "24 May 2019",
//     Runtime: "128 min",
//     Genre: "Adventure, Family, Fantasy, Musical, Romance",
//     Director: "Guy Ritchie",
//     Writer: "John August (screenplay by), Guy Ritchie (screenplay by)",
//     Actors: "Will Smith, Mena Massoud, Naomi Scott, Marwan Kenzari",
//     Plot: "A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.",
//     Language: "Arabic, English",
//     Country: "USA",
//     Awards: "N/A",
//     Poster: "https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_SX300.jpg",
//     Ratings: [{
//       Source: "Internet Movie Database",
//       Value: "7.1/10"
//     }, {
//       Source: "Metacritic",
//       Value: "53/100"
//     }],
//     Metascore: "53",
//     imdbRating: "7.1",
//     imdbVotes: "133,674",
//     imdbID: "tt6139732",
//     Type: "movie",
//     DVD: "N/A",
//     BoxOffice: "N/A",
//     Production: "N/A",
//     Website: "N/A",
//     Response: "True"
//   },
//   {
//     Title: "Maleficent: Mistress of Evil",
//     Year: "2019",
//     Rated: "PG",
//     Released: "18 Oct 2019",
//     Runtime: "118 min",
//     Genre: "Adventure, Family, Fantasy",
//     Director: "Joachim Rønning",
//     Writer: "Micah Fitzerman-Blue (screenplay by), Noah Harpster (screenplay by), Linda Woolverton (screenplay by), Linda Woolverton (story by)",
//     Actors: "Angelina Jolie, Elle Fanning, Imelda Staunton, Michelle Pfeiffer",
//     Plot: "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
//     Language: "English",
//     Country: "USA",
//     Awards: "N/A",
//     Poster: "https://m.media-amazon.com/images/M/MV5BZjJiYTExOTAtNWU0Yi00NzJjLTkwOTgtOTU2NWM1ZjJmYWVhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
//     Ratings: [{
//       Source: "Rotten Tomatoes",
//       Value: "51%"
//     }],
//     Metascore: "N/A",
//     imdbRating: "N/A",
//     imdbVotes: "N/A",
//     imdbID: "tt4777008",
//     Type: "movie",
//     DVD: "N/A",
//     BoxOffice: "N/A",
//     Production: "Walt Disney Pictures",
//     Website: "N/A",
//     Response: "True"
//   },
//   {
//     Title: "Rambo: Last Blood",
//     Year: "2019",
//     Rated: "R",
//     Released: "20 Sep 2019",
//     Runtime: "89 min",
//     Genre: "Action, Adventure, Thriller",
//     Director: "Adrian Grunberg",
//     Writer: "Matthew Cirulnick (screenplay by), Sylvester Stallone (screenplay by), Dan Gordon (story by), Sylvester Stallone (story by), David Morrell (based on the character created by)",
//     Actors: "Sylvester Stallone, Paz Vega, Sergio Peris-Mencheta, Adriana Barraza",
//     Plot: "Rambo must confront his past and unearth his ruthless combat skills to exact revenge in a final mission.",
//     Language: "English, Spanish",
//     Country: "USA, Spain, Bulgaria",
//     Awards: "N/A",
//     Poster: "https://m.media-amazon.com/images/M/MV5BNTAxZWM2OTgtOTQzOC00ZTI5LTgyYjktZTRhYWM4YWQxNWI0XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg",
//     Ratings: [{
//       Source: "Internet Movie Database",
//       Value: "6.8/10"
//     }, {
//       Source: "Metacritic",
//       Value: "26/100"
//     }],
//     Metascore: "26",
//     imdbRating: "6.8",
//     imdbVotes: "17,078",
//     imdbID: "tt1206885",
//     Type: "movie",
//     DVD: "N/A",
//     BoxOffice: "N/A",
//     Production: "N/A",
//     Website: "N/A",
//     Response: "True"
//   },
//   {
//     Title: "Fast & Furious Presents: Hobbs & Shaw",
//     Year: "2019",
//     Rated: "PG-13",
//     Released: "02 Aug 2019",
//     Runtime: "137 min",
//     Genre: "Action, Adventure",
//     Director: "David Leitch",
//     Writer: "Chris Morgan (screenplay by), Drew Pearce (screenplay by), Chris Morgan (story by), Gary Scott Thompson (based on characters created by)",
//     Actors: "Dwayne Johnson, Jason Statham, Idris Elba, Vanessa Kirby",
//     Plot: "Lawman Luke Hobbs and outcast Deckard Shaw form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.",
//     Language: "English, Samoan, Russian",
//     Country: "USA",
//     Awards: "N/A",
//     Poster: "https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
//     Ratings: [{
//       Source: "Internet Movie Database",
//       Value: "6.7/10"
//     }, {
//       Source: "Rotten Tomatoes",
//       Value: "67%"
//     }, {
//       Source: "Metacritic",
//       Value: "60/100"
//     }],
//     Metascore: "60",
//     imdbRating: "6.7",
//     imdbVotes: "74,896",
//     imdbID: "tt6806448",
//     Type: "movie",
//     DVD: "15 Oct 2019",
//     BoxOffice: "N/A",
//     Production: "Universal Pictures",
//     Website: "N/A",
//     Response: "True"
//   }
// ]
