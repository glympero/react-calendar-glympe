import calendarReducer from '../../reducers/calendar';
import moment from 'moment';

test('should setup default calendar values', () => {
    //@@INIT is the default action that is called from redux to initialize state
    const state = calendarReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        selectedDate: moment().startOf('month'),
    })
});

test('should set selectedDate', () => {
    const action = {
        type: 'SET_SELECTED_DATE',
        selectedDate: moment(0).add(2, 'days')
    }
    const state = calendarReducer(undefined, action);
    expect(state).toEqual({
        selectedDate: moment(0).add(2, 'days'),
    });
});
