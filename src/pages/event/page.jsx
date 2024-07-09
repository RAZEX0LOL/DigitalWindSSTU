import {useParams} from "react-router-dom";

export const Page = () => {
    const {id} = useParams()

    return (
        <main>
            Мероприятие №{id}
        </main>
    );
};