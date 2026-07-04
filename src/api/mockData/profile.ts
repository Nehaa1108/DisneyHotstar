export interface ProfileMenuItem {
  id: string;
  icon: string;
  label: string;
  value?: string;
  hasChevron: boolean;
}

export interface UserProfile {
  name: string;
  email: string;
  avatarUrl: string;
  plan: string;
  planExpiry: string;
}

export const mockUserProfile: UserProfile = {
  name: "Sann",
  email: "sann@email.com",
  avatarUrl:
    "https://tse1.mm.bing.net/th/id/OIP.7kB7NUa0LrjIroqgW0J2-AHaGp?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  plan: "Premium",
  planExpiry: "Dec 2026",
};

export const mockMenuItems: ProfileMenuItem[] = [
  {
    id: "downloads",
    icon: "download-outline",
    label: "My Downloads",
    hasChevron: true,
  },
  {
    id: "watchlist",
    icon: "bookmark-outline",
    label: "Watchlist",
    hasChevron: true,
  },
  {
    id: "history",
    icon: "time-outline",
    label: "Watch History",
    hasChevron: true,
  },
  {
    id: "language",
    icon: "language-outline",
    label: "App Language",
    value: "English",
    hasChevron: true,
  },
  {
    id: "quality",
    icon: "videocam-outline",
    label: "Video Quality",
    value: "Auto",
    hasChevron: true,
  },
  {
    id: "notifications",
    icon: "notifications-outline",
    label: "Notifications",
    hasChevron: true,
  },
  {
    id: "help",
    icon: "help-circle-outline",
    label: "Help & Support",
    hasChevron: true,
  },
  {
    id: "about",
    icon: "information-circle-outline",
    label: "About",
    value: "v1.0.0",
    hasChevron: false,
  },
];
