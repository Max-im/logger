export const getYear = (date: Date) => {
    return date.getFullYear();
};

export const getMonth = (date: Date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jule', 'Aug', 'Sep', 'Oct', 'Nov'];
    const index = date.getMonth();
    return months[index];
};

export const getDay = (date: Date) => {
    let day = date.getDate().toString();

    if (day.length === 1) {
        day = `0${day}`;
    }

    return day;
};
