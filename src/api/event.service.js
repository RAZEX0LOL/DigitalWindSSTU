import {request} from "./request";

/**
 * @typedef {Object} Event
 * @description Модель мероприятия
 * @property {number} id - Идентификатор события.
 * @property {string} title - Название события.
 * @property {string} date - Дата события.
 * @property {string} img - Изображение события.
 * @property {string} text - Описание события.
 * @property {number} countAvailablePlaces - Количество доступных мест на событие.
 */

export class EventService {

    /**
     * @param {Object} params - Параметры запроса.
     * @param {number} params.limit - Максимальное количество событий.
     * @param {number} params.offset - Смещение от начала списка событий.
     * @return {Promise<{data: Event[]}>}
     * */
    getEvents(params) {
        return request.get('/events', {
            params,
        })
    }

    static instance = new EventService()
}