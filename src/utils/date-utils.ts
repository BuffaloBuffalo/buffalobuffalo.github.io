import {format, parseISO} from 'date-fns';

export function formatMonthSummaryDisplay(dateString: string): string {
    const date = parseISO(dateString);
    return format(date, 'MMMM uuuu');
}
export function formatMicrodataDate(dateString: string): string {
    const date = parseISO(dateString);
    return format(date, 'MMMM d, uuuu')
}