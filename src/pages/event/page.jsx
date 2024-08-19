import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { EventService } from "../../api/event.service";
import { TemporalDate } from "../../shared/utils/date";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import cl from './style.module.css';
import { ROUTES } from "../../router.config";

export const Page = () => {
  const { id } = useParams()
  const [event, setEvent] = useState(null)

  const handleGetEventData = useCallback(async () => {
    const { data } = await EventService.instance.getEventById(id)

    setEvent(data)

    console.log(data)
  }, [id])

  useEffect(() => {
    handleGetEventData()
  }, [handleGetEventData])

  return (
    <>
      <Header />
      <main className={cl.main}>
        <h1 className={cl.title}>{event?.title}</h1>
        <p className={cl.date}>{TemporalDate.format(new Date(event?.dateStart), 'DD.MM.YYYY')}</p>
        <div className={cl.content}>
          <img src={event?.img} className={cl.img} alt={event?.title} />
          <div>
            <div className={cl.info}>
              <span className={cl.badge}>{event?.targetAudience}</span>
              <span className={cl.badge}>{event?.location}</span>
              {event?.countAvailablePlaces > 0 && <span className={cl.badge}>Свободных мест: {event?.countAvailablePlaces}</span>}
            </div>
            <p className={cl.text}>{event?.text}</p>
            {event?.countAvailablePlaces > 0 && <Link to={ROUTES.redirect.eventRegister}><button className={cl.button}>Зарегистрироваться</button></Link>}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
