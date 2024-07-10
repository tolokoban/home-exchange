import { makeGoto } from "@/app/routes"
import { IconBack, ViewPanel, ViewStrip } from "@tolokoban/ui"

export default function PageSection() {
    return (
        <ViewStrip fullsize orientation="column" template="*1">
            <ViewPanel
                color="primary-7"
                padding="M"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <IconBack onClick={makeGoto("/")} size="XL" />
                <h1>Garbage</h1>
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
                    <p>
                        Most of the garbage goes into the trash bins on the
                        cemetary parking (point <b>1</b> on the map below).
                    </p>
                    <p>
                        It's not mandatory (though much appreciated) but you can
                        do selective sorting of waste if you like to.
                        <br />
                        For this you can use the two black boxes like this:
                    </p>
                    <ul>
                        <ol>All the glass (bottles, broken glasses, etc.).</ol>
                        <ol>All the paper, aluminium cans, and plastics.</ol>
                    </ul>
                    <p>
                        If the boxes are full, you can emty them in the trash
                        bins in the village center (point <b>2</b> on the map
                        below).
                    </p>
                    <img
                        src="image/garbage.webp"
                        alt="Map of the trash bins"
                        style={{ width: "min(95vw, 640px)" }}
                    />
                </div>
            </ViewPanel>
        </ViewStrip>
    )
}
