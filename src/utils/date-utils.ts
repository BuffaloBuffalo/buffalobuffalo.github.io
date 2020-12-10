// import { parseFromTimeZone, formatToTimeZone } from 'date-fns-tz';
import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz';
// import {format, parseISO} from 'date-fns';
// const TIMEZONE_OPTS = { timeZone: 'America/New_York' };
const TIMEZONE = 'America/New_York';
export function formatMonthSummaryDisplay(dateString: string): string {
    const date = zonedTimeToUtc(dateString, TIMEZONE); //parseISO(dateString);
    return format(utcToZonedTime(date, TIMEZONE), 'MMMM uuuu', { timeZone: TIMEZONE });
}
export function formatMicrodataDate(dateString: string): string {
    const date = zonedTimeToUtc(dateString, TIMEZONE); //parseISO(dateString);
    return format(utcToZonedTime(date, TIMEZONE), 'MMMM d, uuuu', { timeZone: TIMEZONE });
    // const date = new Date(dateString); // parseISO(dateString);
    // return formatToTimeZone(date, 'MMMM d, uuuu', TIMEZONE_OPTS)
}