import { setSelectedDate } from '../../actions/calendar';

import moment from 'moment';

test('should setup setting selectDate to undefined', () => {
    const action = setSelectedDate();
    expect(action).toEqual({
        type: 'SET_SELECTED_DATE',
        selectedDate: undefined
    });
});

test('should setup setting selectDate', () => {
    
    const action = setSelectedDate(moment(0));
    expect(action).toEqual({
        type: 'SET_SELECTED_DATE',
        selectedDate: moment(0)
    });
});
