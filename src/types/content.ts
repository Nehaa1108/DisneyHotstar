export interface ContentItem {
  id: string;
  title: string;
  posterUrl: string;
  backdropUrl?: string;
  genres: string[];
  year: number;
  rating?: string;
  durationMinutes?: number;
  isLive?: boolean;
  description: string;
}

export interface ContentRowData {
  id: string;
  title: string;
  items: ContentItem[];
}

export interface HeroBannerItem {
  id: string;
  title: string;
  backdropUrl: string;
  tagline?: string;
}

export interface HomeFeed {
  heroBanners: HeroBannerItem[];
  rows: ContentRowData[];
}

export interface SearchSuggestion {
  id: string;
  label: string;
}

export interface CastMember {
  id: string;
  name: string;
  character: string;
  profileUrl: string;
}

export interface MovieDetail {
  id: string;
  title: string;
  posterUrl: string;
  backdropUrl: string;
  genres: string[];
  year: number;
  rating: string;
  durationMinutes: number;
  description: string;
  casts: CastMember[];
}
