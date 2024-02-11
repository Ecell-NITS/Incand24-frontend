import EventHero from "@/app/components/event_comp/hero/EventHero";
import styles from "./Event.module.scss";
import Timeline from "@/app/components/event_comp/Timeline/Timeline";
const Event = () => {
  return (
    <div className={styles.Event}>
      <EventHero />
      <Timeline />
      <div className={styles.scroller}></div>
    </div>
  );
};

export default Event;
