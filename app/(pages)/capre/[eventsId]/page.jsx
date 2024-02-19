// "use client"

// import { useEffect } from "react";
import events from "@/_db/capre";
import EventHero from "@/app/components/event_comp/hero/EventHero";
import styles from "./Events.module.scss";
import EventModal from "@/app/components/event_comp/individual/EventModal";
import Footer from "@/app/components/Footer/Footer";
import Navbar from "@/app/components/Navbar/Navbar";

export function generateStaticParams() {
  return events.map((event) => ({
    eventsId: event.id,
  }));
}
export const metadata = {
  title: "Capre Diem | Incandescence 2024",
  description: "Bollywood night of Incandescence",
};

const EventPage = ({ params }) => {
  const { eventsId } = params;
  const item = events.find((event) => {
    return event.id === eventsId;
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

  if (typeof document !== "undefined") {
    document.title = `${item.header} | Incandescence 2024`;
    // console.log("running");
  }

  // useEffect(() => {
  //   document.title = `${item.header} | Incandescence 2024`;
  // }, [item.header]);
  // console.log(item)
  return (
    <div className={styles.EventPage}>
      <Navbar navlink={navlink} defaultDark />

      <div className={styles.bg}>
        <EventHero title="" />
      </div>
      <div className={styles.main}>
        <EventModal data={item} previousRoute="events" />
      </div>

      {/* <div className={styles.scroller}></div> */}
      <Footer />
    </div>
  );
};

export default EventPage;
