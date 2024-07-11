import { makeGoto } from "@/app/routes";
import { IconBack, ViewPanel, ViewStrip } from "@tolokoban/ui";

export default function PageSection() {
  return (
    <ViewStrip fullsize orientation="column" template="*1">
      <ViewPanel
        color="primary-6"
        padding="M"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconBack onClick={makeGoto("/")} size="XL" />
        <h1>Kitchen</h1>
      </ViewPanel>
      <ViewPanel
        color="neutral-5"
        padding="M"
        overflow="auto"
        display="grid"
        gridTemplateColumns="1fr min(95vw, 640px) 1fr"
      >
        <div></div>
        <div>
          <ul>
            <li>
              <b>The induction cooktop</b> (
              <a href="video/kitchen.mp4">see video</a>)
              <br />
              It's very sensitive to water. The smallest drop and it will start
              beeping. If it happens, just clean it up and restart it.
            </li>
            <li>There is a hoven and a microwave in the right column.</li>
            <li>
              If you have too much sun, there is a button on the left side of
              the hoven column to control the electric curtain.
            </li>
          </ul>
        </div>
      </ViewPanel>
    </ViewStrip>
  );
}
