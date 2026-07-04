import { useEffect, useState } from "react";
import { UserProfile, ProfileMenuItem } from "../api/mockData/profile";
import { fetchUserProfile, fetchMenuItems } from "../api/services";

interface UseProfileResult {
  profile: UserProfile | null;
  menuItems: ProfileMenuItem[];
  isLoading: boolean;
  isError: boolean;
}

export function useProfile(): UseProfileResult {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [menuItems, setMenuItems] = useState<ProfileMenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const [profileData, menuData] = await Promise.all([
          fetchUserProfile(),
          fetchMenuItems(),
        ]);
        setProfile(profileData);
        setMenuItems(menuData);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  return { profile, menuItems, isLoading, isError };
}
