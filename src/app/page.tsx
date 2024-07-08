import { ColorName, ViewPanel, ViewStrip, ViewTouchable } from "@tolokoban/ui";
import { makeGoto } from "./routes";
import { RoutePath } from "./types";

import Styles from "./page.module.css";

export default function Page() {
  return (
    <ViewPanel
      display="grid"
      placeItems="center"
      fullsize
      position="absolute"
      color="neutral-5"
    >
      <ViewStrip orientation="column" template="*1" color="primary-1" fullsize>
        <ViewPanel padding="M" color="primary-5">
          <h1>Survival Guide v1.0</h1>
        </ViewPanel>
        <ViewPanel
          className={Styles.orientation}
          display="flex"
          justifyContent="space-around"
          alignItems="stretch"
          gap="0"
          flexWrap="wrap"
        >
          <Section label="Doors" color="primary-4" link="/section/doors" />
          <Section label="Kitchen" color="primary-6" link="/section/kitchen" />
          <Section
            label="Internet"
            color="primary-3"
            link="/section/internet"
          />
          <Section label="Garbage" color="primary-7" link="/section/garbage" />
          <Section label="Tourism" color="primary-2" link="/section/tourism" />
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
