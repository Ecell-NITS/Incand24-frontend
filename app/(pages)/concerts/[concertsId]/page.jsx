// import concerts from "@/_db/concerts";
import EventHero from "@/app/components/event_comp/hero/EventHero";
import styles from "./Concerts.module.scss";

const ConcertPage = () => {
  // console.log(concerts[0])
  // const item = concerts.find((concert) => {
  //   return concert.id === params.concertsId;
  // });
  return (
    <div className={styles.main}>
      <div className={styles.bg}>
        <EventHero title="" />
      </div>

      <div className={styles.scroller}></div>
    </div>
  );
};

export default ConcertPage;
