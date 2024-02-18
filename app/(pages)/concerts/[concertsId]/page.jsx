// "use client";

// import { useEffect } from "react";
import events from "@/_db/concerts";
import EventHero from "@/app/components/event_comp/hero/EventHero";
import styles from "./Events.module.scss";
import EventModal from "@/app/components/event_comp/individual/EventModal";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

export function generateStaticParams() {
  return events.map((event) => ({
    concertsId: event.id,
  }));
}

const EventPage = ({ params }) => {
  const item = events.find((event) => {
    return event.id === params.concertsId;
  });

  const navlink = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
    {
      name: "Sponsors",
      href: "/sponsors",
    },
    {
      name: "Team",
      href: "/team",
    },
  ];

  // useEffect(() => {
  //   document.title = `${item.header} | Incandescence 2024`;
  // }, [item.header]);
  // console.log(item);
  return (
    <div className={styles.EventPage}>
      <Navbar navlink={navlink} defaultDark />
      <div className={styles.bg}>
        <EventHero title="" />
      </div>
      <div className={styles.main}>
        <EventModal data={item} />
      </div>
      <Footer />

      {/* <div className={styles.scroller}></div> */}
    </div>
  );
};

export default EventPage;
