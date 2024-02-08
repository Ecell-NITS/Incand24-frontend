// import events from "@/_db/events";
import EventHero from "@/app/components/event_comp/hero/EventHero";
import styles from "./Events.module.scss";
import EventModal from "@/app/components/event_comp/individual/EventModal";

const EventPage = () => {
  // console.log(events[0])
  // const item = events.find((event) => {
  //   return event.id === params.eventsId;
  // });
  return (
    <div className={styles.EventPage}>
      <div className={styles.bg}>
        <EventHero title="" />
      </div>
      <div className={styles.main}>
        <EventModal />
      </div>
      <div className={styles.scroller}></div>
    </div>
  );
};

export default EventPage;
