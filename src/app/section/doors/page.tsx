import { makeGoto } from "@/app/routes"
import { IconBack, ViewPanel, ViewStrip } from "@tolokoban/ui"

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
                        The house has been build in 1979 on a sloping ground and
                        it's made mostly of wood.
                        <br />
                        So the doors can have their temper at times.
                    </p>
                    <p>Here are some videos to help you open and close them.</p>
                    <ul>
                        <li>
                            <b>Main entrance</b> (
                            <a href="video/door-entrance.mp4">see video</a>)
                            <br />
                            The door handle has to go up to let the key turn.
                        </li>
                        <li>
                            <b>Kitchen door</b> (
                            <a href="video/door-kitchen.mp4">see video</a>)
                        </li>
                        <li>
                            <b>Balcony door</b> (
                            <a href="video/door-balcony.mp4">see video</a>)
                            <br />
                            If you keep the handle horizontal and close the
                            door, then you can open it from outside by just
                            pushing slighly on it.
                        </li>
                        <li>
                            <b>Lower room door</b> (
                            <a href="video/door-room.mp4">see video</a>)
                        </li>
                    </ul>
                </div>
            </ViewPanel>
        </ViewStrip>
    )
}
