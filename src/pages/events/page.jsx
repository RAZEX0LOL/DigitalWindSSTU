import {EVENTS_MOCK} from "../../api/mocks/event";
import {Event} from "../../components/eventsPage/Event";
import cl from './styles.module.css';

export const Page = () => {
    return (
        <main className={cl.page}>
            <h1 className={cl.title}>Мероприятия</h1>
            <div className={cl.events}>
                {EVENTS_MOCK.map(event => (
                    <Event key={event.id} event={event}/>
                ))}
            </div>
        </main>
    );
};