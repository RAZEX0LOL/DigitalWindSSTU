export const convertDate = (dateString) => {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    // Разбиваем строку даты на составляющие
    const [day, month, year] = dateString.split('.');

    // Преобразуем месяц в строку
    const monthString = months[parseInt(month, 10) - 1];

    // Возвращаем строку в нужном формате
    return `${parseInt(day, 10)} ${monthString} ${year} года`;
};