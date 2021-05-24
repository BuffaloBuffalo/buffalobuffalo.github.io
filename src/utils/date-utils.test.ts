import {formatMonthSummaryDisplay, formatMicrodataDate} from './date-utils';


test('display month summary', () => {
    const input = '2016-09-01'
    expect(formatMonthSummaryDisplay(input)).toBe('September 2016');
})

test('microdata datetime', () => {
    const input = '2016-09-01';
    expect(formatMicrodataDate(input)).toBe('September 1, 2016');
})