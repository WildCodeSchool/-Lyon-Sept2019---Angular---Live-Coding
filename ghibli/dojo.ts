import { Movie } from './movie';
import { GHIBLI } from './ghibli-mock';

/**
 * Return a Map of director's movies indexed by directors name.
 * @param movies movies array
 */
function directors(movies: Movie[]): Map<string, Movie[]> {
  let results = new Map<string, Movie[]>();

  for (let movie of movies) {
    if (!results.has(movie.director)) {
      results.set(movie.director, []);
    }

    results.get(movie.director).push(movie);
  }

  return results;
}

/**
 * Return an array of the 3 best movies among the array of movies in parameter.
 * @param movies array of movies
 */
function bestMovies(movies: Movie[]): {title: string; rt_score:string}[] {
  // Trier par meilleur film
  movies.sort((movie1: Movie, movie2: Movie) => {
    return parseInt(movie2.rt_score) - parseInt(movie1.rt_score);
  });

  // Renvoyer les 3 premiers
  return movies.slice(0, 3).map(movie => {
    return { title: movie.title, rt_score: movie.rt_score }
  });
}

/**
 * Using the 2 previous functions, return the 3 best movies by director.
 */
function bestMoviesByDirector(movies: Movie[]): Map<string, {title: string; rt_score:string}[]> {
  const directorsMovies: Map<string, Movie[]> = directors(movies);

  let results = new Map<string, {title: string; rt_score:string}[]>();
  for (const [directorName, directorMovies] of directorsMovies.entries()) {
    results.set(directorName, bestMovies(directorMovies));
  }

  return results;
}

console.log(bestMoviesByDirector(GHIBLI));