import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EventService } from "../../../../api/event.service";
import HeaderJury from "../../../../components/adminPage/HeaderAdmin"
import { ROUTES } from "../../../../router.config";
import { TemporalDate } from "../../../../shared/utils/date";
import cl from './style.module.css';

const PER_PAGE = 15;

export const EventsPage = () => {
  const [events, setEvents] = useState([])
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleDateFormat = (event) => {
    const dateStart = new Date(event.dateStart);
    const dateEnd = new Date(event.dateEnd);

    if (dateStart.getDate() === dateEnd.getDate() && dateStart.getMonth() === dateEnd.getMonth() && dateStart.getFullYear() === dateEnd.getFullYear()) {
      return `${TemporalDate.format(new Date(event.dateStart), 'DD MMMM HH:MN')} - ${TemporalDate.format(new Date(event.dateEnd), 'HH:MN')}`;
    }
    return TemporalDate.format(new Date(event.dateStart), 'DD MMMM') + ' - ' + TemporalDate.format(new Date(event.dateEnd), 'DD MMMM HH:MN');
  }

  const handleGetEvents = useCallback(async () => {
    const { data } = await EventService.instance.getEvents({
      limit: PER_PAGE,
      offset: (currentPage - 1) * PER_PAGE
    })
    setEvents(data)
  }, [currentPage])

  useEffect(() => {
    handleGetEvents()
  }, [currentPage])

  return (
    <>
      <HeaderJury />
      <main className={cl.main}>
        <div className="container-works-list">
          <table className={cl.table}>
            <thead>
              <tr>
                <th>Название</th>
                <th>Дата</th>
                <th>Локация</th>
                <th>Кол-во свободных мест</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index}>
                  <td>{event.title}</td>
                  <td>{handleDateFormat(event)}</td>
                  <td>{event.location}</td>
                  <td>{event.countAvailablePlaces}</td>
                  <td>
                    <Link to={ROUTES.redirect.adminEventEdit(event.id)}><button className={cl.button}>редактировать</button></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <button onClick={previousPage}>◀</button>
          {[...Array(Math.ceil(events.length / PER_PAGE))].map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
          <button onClick={nextPage}>▶</button>
        </div>
      </main>
    </>
  )
}
