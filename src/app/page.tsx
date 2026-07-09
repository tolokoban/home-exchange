import { useLang } from "@tolokoban/react-state";
import {
	ColorName,
	ViewButton,
	ViewPanel,
	ViewStrip,
	ViewTouchable,
} from "@tolokoban/ui";
import { useTranslation } from "@/translation";
import Styles from "./page.module.css";
import { makeGoto } from "./routes";
import { RoutePath } from "./types";

export default function Page() {
	const [lang, setLang] = useLang();
	const tr = useTranslation();

	return (
		<ViewPanel
			display="grid"
			placeItems="center"
			fullsize
			position="absolute"
			color="neutral-5"
		>
			<ViewStrip orientation="column" template="*1" color="primary-1" fullsize>
				<ViewPanel
					padding="M"
					color="primary-5"
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<h1>{tr.title} v1.0</h1>
					<ViewButton
						onClick={() => {
							setLang(lang === "fr" ? "en" : "fr");
						}}
					>
						{lang === "fr" ? "English version" : "Version française"}
					</ViewButton>
				</ViewPanel>
				<ViewPanel
					className={Styles.orientation}
					display="flex"
					justifyContent="space-around"
					alignItems="stretch"
					gap="0"
					flexWrap="wrap"
				>
					<Section
						label={tr.sectionDoors}
						color="primary-4"
						link="/section/doors"
					/>
					<Section
						label={tr.sectionKitchen}
						color="primary-6"
						link="/section/kitchen"
					/>
					<Section
						label={tr.sectionInternet}
						color="primary-3"
						link="/section/internet"
					/>
					<Section
						label={tr.sectionGarbage}
						color="primary-7"
						link="/section/garbage"
					/>
					<Section
						label={tr.sectionTourism}
						color="primary-2"
						link="/section/tourism"
					/>
				</ViewPanel>
			</ViewStrip>
		</ViewPanel>
	);
}

interface SectionProps {
	label: string;
	link: RoutePath;
	color: ColorName;
}

function Section({ label, link, color }: SectionProps) {
	return (
		<ViewTouchable onClick={makeGoto(link)}>
			<ViewPanel
				color={color}
				padding="M"
				display="grid"
				placeItems="center"
				flex="1 1 auto"
			>
				<div>{label}</div>
			</ViewPanel>
		</ViewTouchable>
	);
}
