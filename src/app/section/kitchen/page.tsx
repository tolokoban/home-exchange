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
      <ViewPanel color="neutral-5" padding="M" overflow="auto"></ViewPanel>
    </ViewStrip>
  );
}
