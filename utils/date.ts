const getOrdinalSuffix = (day: number): string => {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

export const calculateNightCount = (startDate: Date, endDate: Date): number => {
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    throw new Error('Invalid date format');
  }

  if (endDate < startDate) {
    throw new Error('Check-out date must be after check-in date');
  }

  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const nightCount = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return nightCount;
};

export const formatDateRange = (startDate: Date, endDate: Date): string => {
  return `${startDate.getUTCDate()}${getOrdinalSuffix(startDate.getUTCDate())} - ${endDate.getUTCDate()}${getOrdinalSuffix(endDate.getUTCDate())} ${startDate.toLocaleString('default', { month: 'long' })} ${startDate.getFullYear()}`;
};

export function formatDayAndDate(
  day: number,
  date: Date,
  showWeekDay: boolean = false
): string {
  const dayOfMonth = date.getUTCDate();
  const suffix = getOrdinalSuffix(dayOfMonth);
  const weekday = date.toLocaleString('default', { weekday: 'long' });
  const month = date.toLocaleString('default', { month: 'short' });

  return `Day ${day} - ${showWeekDay ? `${weekday} ` : ' '}${dayOfMonth}${suffix} ${month}`;
}

export const formatTimeAndDate = (date: Date): string => {
  return date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    month: 'short',
    day: 'numeric',
    hour12: true,
  });
};

export const createDayIndicators = (fromDate: Date, toDate: Date) => {
  const start = new Date(fromDate);
  const end = new Date(toDate);
  const dailyIndicators = [];

  for (
    let date = start, day = 1;
    date <= end;
    date.setDate(date.getDate() + 1), day++
  ) {
    dailyIndicators.push({
      id: date.toISOString(),
      day: day,
      date: new Date(date),
    });
  }

  return dailyIndicators;
};

export const isEqualDate = (date1: Date, date2: Date): boolean => {
  const tempDate1 = new Date(date1);
  const tempDate2 = new Date(date2);
  return tempDate1.getTime() === tempDate2.getTime();
};

export const formatTime = (timeString: string | null | undefined) => {
  if (!timeString) return null;

  // Extract just the time part (09:00:00)
  const time = timeString.split('+')[0];

  // Convert to local time format (9:00 AM)
  return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};
