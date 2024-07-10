import { makeGoto } from "@/app/routes";
import { IconBack, ViewPanel, ViewStrip } from "@tolokoban/ui";

export default function PageSection() {
  return (
    <ViewStrip fullsize orientation="column" template="*1">
      <ViewPanel
        color="primary-3"
        padding="M"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconBack onClick={makeGoto("/")} size="XL" />
        <h1>Internet</h1>
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
          <h2>WiFi and RJ45 connection</h2>
          <p>Internet is delivered by the FreeBox, under the TV.</p>
          <img src="image/freebox-1.jpg" alt="FreeBox" />
          <p>
            Press the down arrow repeatedly until you see a WiFi QrCode, or the
            WEB key.
          </p>
          <img src="image/freebox-2.jpg" alt="FreeBox" />
          <p>
            If there is any trouble with the internet connexion (can happend
            after a power outage), use the same down arrow button until you see{" "}
            <code>"Reboot"</code>. Then, press the right arrow button.
          </p>
          <img src="image/freebox-3.jpg" alt="FreeBox" />
          <p>
            Wifi is not the only way to have a connection.
            <br />
            You can use RJ45 cables. There are plugs in two rooms upstair, one
            room downstair and on the mezzanine where the desktop is.
          </p>
          <img src="image/rj45.jpg" alt="Network plug" />
          <h2>TV computer</h2>
          <p>
            There is a computer connected to the TV. Press the orange button to
            start/stop it. Short press to start/stop hibernation. Long press to
            start/stop completely (take more time, but mandatory after a power
            outage).
          </p>
          <img src="image/zotac.jpg" alt="TV computer" />
          <p>
            Make sure the TV output is set to HDMI-1. For this, use the{" "}
            <b>AV</b> button on the remote control.
          </p>
          <img src="image/tv-3.jpg" alt="AV" />{" "}
          <img src="image/tv-2.jpg" alt="AV" />
          <p>
            Then, you can connect with the <b>Home Exchange</b> user. The
            password is <code>hx</code>.
          </p>
          <img src="image/tv-1.jpg" alt="AV" />
          <p>There is a wireless mini-keyboard with this computer.</p>
          <h2>Using the desktop computer to work remotely</h2>
          <p>
            The user is <b>Home Exchange</b> with the same password as the one
            used for the TV computer: <code>hx</code>.
          </p>
          <p>
            In summer, it's best to close the curtains, open the window and
            start the pink fan.
          </p>
          <img src="image/work-1.jpg" alt="remote" />
          <img src="image/work-2.jpg" alt="remote" />
        </div>
      </ViewPanel>
    </ViewStrip>
  );
}
