import { Allura } from "next/font/google";
import styles from "./Event.module.scss";
import GradientBg from "@/app/components/Shared/GradientBg/GradientBg";
import EventBody from "@/app/components/event_comp/main/EventBody";

const allura = Allura({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--allura-font",
});
const Event = () => {
  return (
    <div className={`${styles.Event} ${allura.className}`}>
      <GradientBg />
      <EventBody />
      {/* <div className={styles.scroller}></div> */}
    </div>
  );
};

export default Event;
