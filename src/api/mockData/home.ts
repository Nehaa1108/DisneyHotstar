import { HomeFeed, ContentItem } from "../../types/content";

const API_URL = "https://jsonfakery.com/movies/paginated";

export async function fetchRealHomeFeed(): Promise<HomeFeed> {
  const response = await fetch(`${API_URL}?page=1`);
  const json = await response.json();
  const movies = json.data;

  const toContentItem = (movie: any): ContentItem => ({
    id: String(movie.movie_id),
    title: movie.original_title,
    posterUrl: movie.poster_path,
    backdropUrl: movie.backdrop_path,
    genres: movie.casts?.slice(0, 2).map((c: any) => c.character) ?? [],
    year: movie.release_date
      ? new Date(movie.release_date).getFullYear()
      : 2024,
    rating: movie.vote_average
      ? `${movie.vote_average.toFixed(1)} ⭐`
      : undefined,
    durationMinutes: undefined,
    isLive: false,
    description: movie.overview,
  });

  const heroBanners = movies.slice(0, 3).map((movie: any) => ({
    id: `hero-${movie.movie_id}`,
    title: movie.original_title,
    backdropUrl: movie.backdrop_path,
    tagline: movie.overview.slice(0, 60) + "...",
  }));

  const trending = movies.slice(0, 8).map(toContentItem);

  const popular = movies.slice(8, 14).map((m: any) => ({
    ...toContentItem(m),
    isLive: false,
  }));

  const blockbusters = [...movies]
    .sort((a: any, b: any) => b.vote_average - a.vote_average)
    .slice(0, 8)
    .map(toContentItem);

  return {
    heroBanners,
    rows: [
      { id: "row-trending", title: "Trending Now", items: trending },
      { id: "row-popular", title: "Popular on Hotstar", items: popular },
      {
        id: "row-blockbusters",
        title: "Top Rated Movies",
        items: blockbusters,
      },
    ],
  };
}
