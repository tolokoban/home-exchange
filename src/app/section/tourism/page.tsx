import { makeGoto } from "@/app/routes"
import { IconBack, ViewPanel, ViewStrip } from "@tolokoban/ui"

export default function PageSection() {
    return (
        <ViewStrip fullsize orientation="column" template="*1">
            <ViewPanel
                color="primary-2"
                padding="M"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <IconBack onClick={makeGoto("/")} size="XL" />
                <h1>Tourism</h1>
            </ViewPanel>
            <ViewPanel
                color="neutral-2"
                padding="M"
                overflow="auto"
                display="grid"
                gridTemplateColumns="1fr min(95vw, 640px) 1fr"
            >
                <div></div>
                <div>
                    <p>
                        Here is an{" "}
                        <a href="https://trail-passion.net/trace/?id=72986">
                            interactive map
                        </a>{" "}
                        where you can find a selection of interesting places
                        around home. Click the pushpins to see a picture, then
                        click the "<b>More...</b>" button to have more details.
                        There is, at least, a picture and a link to google maps
                        to take you there from home.
                    </p>
                </div>
            </ViewPanel>
        </ViewStrip>
    )
}
