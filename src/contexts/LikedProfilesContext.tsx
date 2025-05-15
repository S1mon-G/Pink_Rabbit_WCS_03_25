import { type ReactNode, createContext, useContext, useState } from "react";
import type { Profile } from "../Interfaces/Profile";
import profilesData from "../assets/data/profiles.json";

interface LikedProfilesContextProps {
	profiles: Profile[];
	likedProfiles: Profile[];
	setLikedProfiles: React.Dispatch<React.SetStateAction<Profile[]>>;
}

export const ProfileContext = createContext<LikedProfilesContextProps>({
	profiles: [],
	likedProfiles: [],
	setLikedProfiles: () => {},
});

export function LikedProfilesProvider({ children }: { children: ReactNode }) {
	const [profiles] = useState(profilesData);
	const [likedProfiles, setLikedProfiles] = useState<Profile[]>([]);
	return (
		<ProfileContext.Provider
			value={{ profiles, likedProfiles, setLikedProfiles }}
		>
			{children}
		</ProfileContext.Provider>
	);
}

export const useLikedProfiles = () => {
	return useContext(ProfileContext);
};
