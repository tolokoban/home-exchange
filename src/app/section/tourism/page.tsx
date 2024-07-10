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
                        where you can find a selection of interesting places and
                        shops around home. Click the pushpins to see a picture,
                        then click the "<b>More...</b>" button to have more
                        details. There is, at least, a picture and a link to
                        google maps to take you there from home. The farest
                        point is less than 1h15 car ride.
                    </p>
                    <p>
                        You can use this map on your phone and use the GPS
                        button on it if you are walking: this is a trekking map
                        where the trails are drawn in purple.
                    </p>
                    <p>
                        If you like to walk, but don't want to go far, then the
                        Salève is a good choice.
                        <br />I use to run a lot in this mountain: there are a
                        lot of trails. The side you see from the house is
                        covered in forest, but the other side has more cliffs.
                    </p>
                    <p>
                        If you are adventurous, you can reach the summit from
                        home by feet. It will take about two hours and there is
                        7 km and 700 D+ (4.3 mi and 2200 feet elevation).
                        <br />
                        <a href="https://trail-passion.net/trace/?id=72996">
                            Follow this track on you phone if you don't want to
                            get lost
                        </a>
                        .
                    </p>
                    <p>
                        But you can also reach the top by car in 10 minutes and
                        start walking from there. it will be mostly flat (as
                        flat as the top of a mountain can be, of course 😄), and
                        you will have the view of the Mont-Blanc on one side and
                        the view on the lake on the other side.
                    </p>
                    <p>
                        There is a Buddhist monastery that also serves food (
                        <a href="https://sanghasaleve.wixsite.com/shedrubchoekhorling">
                            website
                        </a>
                        ). You can attend the prayers on sunday morning at 10
                        AM.
                        <a href="https://www.google.fr/maps/dir/234+Route+de+Cruseilles,+La+Muraz,+France/Shedrub+Choekhor+Ling,+Route+des+3+Lacs,+Monnetier-Mornex,+France/@46.1209135,6.1470819,13z/data=!3m1!4b1!4m18!4m17!1m5!1m1!1s0x478c70d3b271ea41:0xd7d8f23761799673!2m2!1d6.203462!2d46.120422!1m5!1m1!1s0x478c708e25f02475:0xd91162f41d39b391!2m2!1d6.1883634!2d46.1476089!2m3!6e0!7e2!8j1720630080!3e0?entry=ttu">
                            How to go there
                        </a>
                        .
                        <br />I like to go there when I run. I just stay outside
                        and listen to the chanted prayers (there is a
                        loudspeaker for those who are too shy to enter 😉).
                    </p>
                </div>
            </ViewPanel>
        </ViewStrip>
    )
}
