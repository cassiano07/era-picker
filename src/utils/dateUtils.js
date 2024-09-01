export const generateRandomKey = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

// (0 para janeiro, 11 para dezembro)
export const getDaysInMonth = (year, month) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return daysInMonth
}

export const getFirstDayOfMonth = (year, month) => {
  const date = new Date(year, month, 1);
  return date.getDay();
}

export const getDaysInPreviousMonth = (year, month) => {
  const previousMonth = month - 1;
  const adjustedYear = previousMonth === 0 ? year - 1 : year;
  const adjustedMonth = previousMonth === 0 ? 12 : previousMonth;
  const daysInMonth = getDaysInMonth(adjustedYear, adjustedMonth);
  return daysInMonth
}

export const getCalendar = (year, month) => {
  const daysInMonth = getDaysInMonth(year, month);
  const daysInPreviousMonth = getDaysInPreviousMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const days = [];

  for (let i = daysInPreviousMonth - firstDay + 1; i <= daysInPreviousMonth; i++) {
    days.push(i);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const totalDays = days.length;
  const daysNeeded = (totalDays % 7 === 0) ? 0 : 7 - (totalDays % 7);
  for (let i = 1; i <= daysNeeded; i++) {
    days.push(i);
  }

  return days;
};