import cl from "../style.module.css";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../router.config";
import {TemporalDate} from "../../../../shared/utils/date";

/**
 * @description Компонент для отображения события.
 * @component
 * @param {Object} props - Объект пропсов компонента.
 * @param {Event} props.event - Событие, которое должно быть отображено.
 */
export const Event = ({event}) => {
    return (
        <div className={cl.event} key={event.id}>
            <img className={cl.event__img} src={event.img} alt="Error"/>
            <div className={cl.event__content}>
                <h3 className={cl.event__title}>{event.title}</h3>
                <p className={cl.event__text}>{event.text}</p>
                <p className={cl.event__text}>Дата проведение: <b>{TemporalDate.format(new Date(event.dateStart), 'DD.MM.YYYY')}</b></p>

                <Link className={cl.event__button} to={ROUTES.redirect.event(event.id)}>
                    Подробнее
                </Link>
            </div>
        </div>
    );
};