import moment from 'moment';

const calendarReducerDefaultState = {
    selectedDate: moment().startOf('month')
}

const calendarReducer = (state = calendarReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_DATE':
            return {
                selectedDate: action.selectedDate
            }
        default:
            return state;
    }
};

export default calendarReducer;