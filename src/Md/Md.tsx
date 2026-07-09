import { useLangValue } from "@tolokoban/react-state";
import { Theme } from "@tolokoban/ui";
import Markdown from "markdown-to-jsx";

import Styles from "./Md.module.css";

const $ = Theme.classNames;

export interface MdProps {
	className?: string;
	en: string;
	fr: string;
}

export default function Md({ className, en, fr }: MdProps) {
	const lang = useLangValue();

	return (
		<div className={$.join(className, Styles.md)}>
			<Markdown>{lang === "fr" ? fr : en}</Markdown>
		</div>
	);
}
