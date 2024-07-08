import { makeGoto } from "@/app/routes";
import { IconBack, ViewPanel, ViewStrip } from "@tolokoban/ui";

export default function PageSection() {
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
        <h1>Doors</h1>
      </ViewPanel>
      <ViewPanel color="neutral-5" padding="M" overflow="auto">
        <p>
          The house has been build in 1979 on a sloping ground and it's made
          mostly of wood.
          <br />
          So the doors can have their temper at times.
        </p>
        <p>Here are some videos to help you open and close them.</p>
      </ViewPanel>
    </ViewStrip>
  );
}
