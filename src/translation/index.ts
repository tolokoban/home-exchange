import { useTanslatorGeneric } from "@tolokoban/react-state";
import FR from "./translation.fr";

export function useTranslation(): typeof FR {
	return useTanslatorGeneric(FR, {
		en: () => import("./translation.en"),
	});
}
