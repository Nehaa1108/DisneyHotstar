import { HomeFeed } from "../types/content";
import { fetchRealHomeFeed } from "./mockData/home";
import {
  UserProfile,
  mockUserProfile,
  mockMenuItems,
  ProfileMenuItem,
} from "./mockData/profile";
import { MovieDetail } from "../types/content";
export async function prepareApp(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 600));
}

export async function fetchHomeFeed(): Promise<HomeFeed> {
  return fetchRealHomeFeed();
}

export async function fetchTrendingSearches() {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return [
    { id: "s1", label: "Rush Hour" },
    { id: "s2", label: "Waterworld" },
    { id: "s3", label: "Charlie's Angels" },
    { id: "s4", label: "The Thin Red Line" },
    { id: "s5", label: "Repo Men" },
  ];
}

export async function searchContent(query: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const { fetchRealHomeFeed: _ } = await import("./mockData/home");
  const feed = await fetchRealHomeFeed();
  const all = feed.rows.flatMap((r) => r.items);
  const normalized = query.trim().toLowerCase();
  return all.filter((item) => item.title.toLowerCase().includes(normalized));
}

export async function fetchUserProfile(): Promise<UserProfile> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return mockUserProfile;
}

export async function fetchMenuItems(): Promise<ProfileMenuItem[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockMenuItems;
}

export async function fetchMovieDetail(id: string): Promise<MovieDetail> {
  const response = await fetch(
    `https://jsonfakery.com/movies/paginated?page=1`,
  );
  const json = await response.json();
  const movies = json.data;

  const movie = movies.find((m: any) => String(m.movie_id) === id) ?? movies[0];

  return {
    id: String(movie.movie_id),
    title: movie.original_title,
    posterUrl: movie.poster_path,
    backdropUrl: movie.backdrop_path,
    genres: movie.casts
      ?.slice(0, 3)
      .map((c: any) => c.character)
      .filter(Boolean) ?? ["Drama"],
    year: movie.release_date
      ? new Date(movie.release_date).getFullYear()
      : 2024,
    rating: movie.vote_average?.toFixed(1) ?? "N/A",
    durationMinutes: Math.floor(Math.random() * 60) + 90,
    description: movie.overview,
    casts: (movie.casts ?? []).slice(0, 10).map((c: any) => ({
      id: c.id,
      name: c.name,
      character: c.character,
      profileUrl: c.profile_path,
    })),
  };
}
