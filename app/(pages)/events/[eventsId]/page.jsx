import events from "@/_db/events";
import EventHero from "@/app/components/event_comp/hero/EventHero";
import styles from "./Events.module.scss";
import EventModal from "@/app/components/event_comp/individual/EventModal";

const EventPage = ({ params }) => {
  const item = events.find((event) => {
    return event.id === params.eventsId;
  });
  // console.log(item)
  return (
    <div className={styles.EventPage}>
      <div className={styles.bg}>
        <EventHero title="" />
      </div>
      <div className={styles.main}>
        <EventModal data={item} />
      </div>
      {/* <div className={styles.scroller}></div> */}
    </div>
  );
};

export default EventPage;
