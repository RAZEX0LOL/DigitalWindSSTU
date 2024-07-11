import { EVENTS_MOCK } from "./mocks/event";
import { request } from "./request";

/**
 * @typedef {Object} Event
 * @description Модель мероприятия
 * @property {number} id - Идентификатор мероприятия.
 * @property {string} title - Название мероприятия.
 * @property {string} dateStart - Дата начала мероприятия.
 * @property {string} dateEnd - Дата мероприятия.
 * @property {string} authorName - Дата мероприятия.
 * @property {string} authorJob - Дата мероприятия.
 * @property {string} targetAudience - Дата мероприятия.
 * @property {string} location - Дата мероприятия.
 * @property {string} img - Изображение мероприятия.
 * @property {string} text - Описание мероприятия.
 * @property {number} countAvailablePlaces - Количество доступных мест на мероприятие.
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

  /** 
   * @param {number | string} id
   * @return {Promise<{data: Event}>}
   * */
  async getEventById(id) {
    return new Promise((res, rej) => {
      const item = EVENTS_MOCK.find(el => +el.id === +id);

      if (!item) return rej()

      return res({ data: item })
    })
  }

  static instance = new EventService()
}
