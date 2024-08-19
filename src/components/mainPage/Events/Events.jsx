import cl from './style.module.css';
import eventTitle from '../../../assets/events-title.svg'
import {useEffect, useState} from "react";
import cn from 'classnames';
import {Event} from "./ui/Event";
import {EVENTS_MOCK} from "../../../api/mocks/event";
import {EventService} from "../../../api/event.service";
import {AxiosError} from "axios";


export const Events = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [events, setEvents] = useState(EVENTS_MOCK)

    const handleLoadEvents = async () => {
        try {
            const {data} = await EventService.instance.getEvents()
            console.log(data)
            // setEvents(data);
        } catch (e) {
            if (e instanceof AxiosError) {
                alert(e.message)
            }
        }
    }

    useEffect(() => {
        handleLoadEvents()
    }, []);

    return (
        <section className={cl.section}>
            <img src={eventTitle} alt={'Error'}/>
            <div className={cl.events}>
                {events[currentSlide] && (
                    <Event event={events[currentSlide]}/>
                )}
            </div>
            <div className={cl.dots}>
                {
                    Array.from({length: events.length}).map((_, index) => (
                        <div className={cn(cl.dot, {
                            [cl.dot_active]: index === currentSlide
                        })} key={index} onClick={() => setCurrentSlide(index)}></div>
                    ))
                }
            </div>
        </section>
    )
}
