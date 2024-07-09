import {Link} from "react-router-dom";
import {ROUTES} from "../../router.config";
import cl from './styles.module.css';
import {TemporalDate} from "../../shared/utils/date";
/**
 * @description Компонент для отображения события.
 * @component
 * @param {Object} props - Объект пропсов компонента.
 * @param {Event} props.event - Событие, которое должно быть отображено.
 */
export const Event = ({event}) => {

    const handleDateFormat = () => {
        const dateStart = new Date(event.dateStart);
        const dateEnd = new Date(event.dateEnd);

        if(dateStart.getDate() === dateEnd.getDate() && dateStart.getMonth() === dateEnd.getMonth() && dateStart.getFullYear() === dateEnd.getFullYear()) {
            return `${TemporalDate.format(new Date(event.dateStart), 'DD MMMM HH:MN')} - ${TemporalDate.format(new Date(event.dateEnd), 'HH:MN')}`;
        }
        return TemporalDate.format(new Date(event.dateStart), 'DD MMMM') + ' - ' + TemporalDate.format(new Date(event.dateEnd), 'DD MMMM HH:MN');
    }

    return (
        <div className={cl.item}>
            <div className={cl.date}>
                <h2>{TemporalDate.format(new Date(event.dateStart), 'DD MMMM')}</h2>
                <hr/>
            </div>
            <img className={cl.image} src={event.img} alt={event.title}/>
            <div className={cl.info}>
                <Link className={cl.info__link} to={ROUTES.redirect.event(event.id)}><h3
                    className={cl.info__title}>"{event.title}"</h3></Link>
                <br/>
                <p className={cl.text}><b>{event.authorName}</b> - {event.authorJob}</p>
                <p className={cl.text}><b>Дата проведение:</b> {handleDateFormat()}</p>
                <p className={cl.text}><b>Место проведение:</b> {event.location}</p>
                <p className={cl.text}><b>Целевая аудитория:</b> {event.targetAudience}</p>
                <p className={cl.text}><b>Максимальное количество участников:</b> {event.countAvailablePlaces}</p>
                <p className={cl.description}>{event.text}</p>
            </div>
            {event.countAvailablePlaces > 0 && TemporalDate.compare(event.dateEnd, new Date()) && <button className={cl.button}>Зарегистрироваться</button>}
        </div>
    );
};