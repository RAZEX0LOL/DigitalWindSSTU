export class TemporalDate {
  /**
   * @param {number} month - Месяц.
   * @return {string} Название месяца.
   * */
  static #getMonthName(month) {
    const date = new Date(new Date().getFullYear(), month, 1);
    return date.toLocaleString('ru-RU', { month: 'long' });
  }

  /**
   * Returns a formatted date string based on the provided format.
   * @param {Date} date - The date to format.
   * @param {string} format - The format string to use for the date.
   * @example "DD.MM.YYYY"
   * @return {string} The formatted date string.
   */
  static format(date, format) {
    const day = date.getDate().toString()
    const month = date.getMonth().toString()
    const year = date.getFullYear().toString()
    const hour = date.getHours().toString()
    const minutes = date.getMinutes().toString()
    return format
      .replaceAll('DD', this.#formatDateText(day))
      .replaceAll(/(MMMM)/g, this.#getMonthName(month))
      .replaceAll(/(MM)/g, this.#formatDateText(month))
      .replaceAll(/(YYYY)/g, year)
      .replaceAll(/(YY)/g, year.slice(-2))
      .replaceAll(/(HH)/g, this.#formatDateText(hour))
      .replaceAll(/(MN)/g, this.#formatDateText(minutes))
  }

  /**
   * @param {Date} date - Дата.
   * @return {string} Дата c добавлением 0 в начале.
   * */
  static #formatDateText(date) {
    return date.toString().padStart(2, '0');
  }

  /**
   * @param {Date | string} dateFirst - Первая дата.
   * @param {Date | string} dateSecond - Вторая дата.
   * @return {boolean} Первая дата больше второй.
   * */
  static compare(dateFirst, dateSecond) {
    if (dateFirst instanceof Date && dateSecond instanceof Date) {
      return dateFirst.getTime() >= dateSecond.getTime();
    }
    return new Date(dateFirst).getTime() >= new Date(dateSecond).getTime()
  }

}
