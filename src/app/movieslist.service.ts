import { Injectable } from '@angular/core';
import { Movie } from './app.component';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MovieslistService {
  // [x: string]: any;
  //   movies: Array<Movie> = [
  // {
  //       src: 'https://pbs.twimg.com/media/F3B4q0baEAgPLGj?format=jpg&name=large',
  //       moviename: 'Guntur Kaaram',
  //           rating: 9.1,
  //       content:
  //         'Guntur Kaaram is an upcoming Indian Telugu-language action drama film written and directed by Trivikram Srinivas, and produced by S. Radha Krishna under Haarika & Hassine Creations. It stars Mahesh Babu, Sreeleela, Meenakshi Chaudhary, Jagapathi Babu and Ramya Krishna',
  //     },
  //     {
  //       src: 'https://telugustop.com/wp-content/uploads/2023/06/Jr-NTR-Devara.jpeg',
  //       moviename: 'Devara',
  //       rating: 9.1,
  //       content:
  //         'Devara is an upcoming Indian action-drama written and directed by Koratala Siva. Produced by Sudhakar Mikkilineni and Kosaraju Harikrishna under the banners Yuvasudha Arts and N. T. R. Arts, the film stars N. T. Rama Rao Jr. and Janhvi Kapoor in the lead roles with Saif Ali Khan as the main antagonist.',
  //     },
  //     {
  //       src: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/2/2022_2$largeimg_750308347.jpg',
  //       moviename: 'Bheemla Nayak',
  //       rating: 9.1,
  //       content:
  //         'A battle begins between SI Bheemla Nayak, a righteous policeman, and Daniel Shekhar, an-ex havildar, when Daniel tricks Bheemla into surrendering to corruption.',
  //     },
  //     {
  //       src: 'https://www.koimoi.com/wp-content/new-galleries/2022/05/netizens-call-mahesh-babu-starrer-sarkaru-vaari-paata-a-blockbuster-0001.jpg',
  //       moviename: 'Sarkaru vaari paata',
  //       rating: 9.1,
  //       content:
  //         "Upon loaning a huge sum to his fraudulent lover in Miami, Mahi is forced to retrieve the amount from her father, who is a politician in Vizag. However, Mahi's visit unravels a giant banking scandal.",
  //     },
  //     {
  //       moviename: 'Vikram',
  //       src: 'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
  //       rating: 8,
  //       content:
  //         'Members of a black ops team must track and eliminate a gang of masked murderers.',
  //     },
  //     {
  //       moviename: 'RRR',
  //       src: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG',
  //       rating: 8,
  //       content:
  //         'RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.',
  //     },
  //     {
  //       moviename: 'Iron man 2',
  //       src: 'https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg',
  //       rating: 8,
  //       content:
  //         'With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.',
  //     },
  //     {
  //       moviename: 'No Country for Old Men',
  //       src: 'https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg',
  //       rating: 8,
  //       content:
  //         "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
  //     },
  //     {
  //       moviename: 'Jai Bhim',
  //       src: 'https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg',
  //       content:
  //         'A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case',
  //       rating: 8,
  //     },
  //     {
  //       moviename: 'The Avengers',
  //       rating: 8,
  //       content:
  //         "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
  //       src: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg',
  //     },
  //     {
  //       moviename: 'Interstellar',
  //       src: 'https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg',
  //       rating: 8,
  //       content:
  //         'When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.',
  //     },
  //     {
  //       moviename: 'Baahubali',
  //       src: 'https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg',
  //       rating: 8,
  //       content:
  //         'In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.',
  //     },
  //     {
  //       moviename: 'Ratatouille',
  //       src: 'https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=',
  //       rating: 8,
  //       content:
  //         'Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.',
  //     },
  //     {
  //       moviename: 'Thor: Ragnarok',
  //       src: 'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg',
  //       content:
  //         'When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.',
  //       rating: 8,
  //     },
  //   ];

  movies: Array<Movie> = [];

  //   newMovie = {
  //     src: '',
  //     moviename: '',
  //     rating: '',
  //     content: '',
  //   };

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.movies;
  }

  getMovieListFromMockAPI() {
    return this.http.get<Movie[]>(
      'https://64f6f41e9d7754084952d8a0.mockapi.io/cricket'
    );
  }

  searchMovieList(name: string) {
    return this.http.get<Movie[]>(
      `https://64f6f41e9d7754084952d8a0.mockapi.io/cricket?search=${name}`
    );
  }

  getMovieById(id: string) {
    return this.http.get<Movie>(
      `https://64f6f41e9d7754084952d8a0.mockapi.io/cricket/${id}`
    );
  }

  addMovie(newMovie: Movie) {
    return this.http.post(
      `https://64f6f41e9d7754084952d8a0.mockapi.io/cricket`,
      newMovie
    );
  }

  updateMovie(updateMovie: Movie, id: string) {
    return this.http.put(
      `https://64f6f41e9d7754084952d8a0.mockapi.io/cricket/${id}`,
      updateMovie
    );
  }

  // updateMovie(updatedMovie: Movie) {
  //   console.log(this.movies);
  //   const id = updatedMovie.id;
  //   const index = this.movies.findIndex((mv) => mv.id === id);
  //   this.movies.splice(index, 1, updatedMovie);
  //   // this.movies.push(newMovie);
  // }

  deleteMovieById(id: string) {
    return this.http.delete<Movie>(
      `https://64f6f41e9d7754084952d8a0.mockapi.io/cricket/${id}`
    );
  }

  setMovies(newMovie: Movie) {
    this.movies.push(newMovie);
  }
}
