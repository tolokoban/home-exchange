import { IconBack, ViewPanel, ViewStrip } from "@tolokoban/ui";
import { makeGoto } from "@/app/routes";
import Md from "@/Md";
import { useTranslation } from "@/translation";
import EN from "./en.md";
import FR from "./fr.md";

export default function PageSection() {
	const tr = useTranslation();

	return (
		<ViewStrip fullsize orientation="column" template="*1">
			<ViewPanel
				color="primary-4"
				padding="M"
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				<IconBack onClick={makeGoto("/")} size="XL" />
				<h1>{tr.sectionDoors}</h1>
			</ViewPanel>
			<ViewPanel
				color="neutral-5"
				padding="M"
				overflow="auto"
				display="grid"
				gridTemplateColumns="1fr min(95vw, 640px) 1fr"
			>
				<div />
				<Md en={EN} fr={FR} />
			</ViewPanel>
		</ViewStrip>
	);
}
