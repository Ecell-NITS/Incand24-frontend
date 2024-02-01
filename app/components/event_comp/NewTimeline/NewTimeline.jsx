import { Poppins } from "next/font/google";
import Image from "next/image";
// import EventCard from "../Card/EventCard";
import data from "@/_db/events";
import styles from "./NewTimeline.module.scss";

const poppins = Poppins({
  weight: ["400", "600"],
  display: "swap",
  subsets: ["latin"],
});

const NewTimeline = () => {
  return (
    <div className={styles.timeline}>
      <div className={styles.timelineItem}>
        <div className={styles.timelineMilestone}></div>
      </div>

      {data.map((event) => {
        return (
          <div key={event.id} className={styles.timelineItem}>
            <div className={`${poppins.className} ${styles.cardWrapper}`}>
              <div className={styles.desc}>
                {`${event.text.slice(0, 100)}...`}
                <button>know more</button>
              </div>
              <div className={`${styles.Card}`}>
                <div className={styles.index}>
                  {event.id < 10 ? `0${event.id}` : event.id}
                </div>
                <div className={styles.image}>
                  <Image src="/images/Logo.png" alt="" fill sizes="auto" priority />
                </div>
                <span className={styles.title}>{event.header}</span>
              </div>
            </div>
            <div className={styles.timelineMilestone}></div>
          </div>
        );
      })}

      {/* <div className={styles.timelineItem}>
        <div className={styles.timelineMilestone}></div>
      </div> */}
    </div>
  );
};

export default NewTimeline;
