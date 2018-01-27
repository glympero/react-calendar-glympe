import React from 'react';
import { connect } from 'react-redux';
import { setSelectedDate } from '../actions/calendar';
import { SingleDatePicker } from 'react-dates';

class Calendar extends React.Component {
    state = {
        focused: null,
    }

    onSelectedDateChange = (selectedDate ) => {
        this.props.dispatch(setSelectedDate(selectedDate));
    }

    handleChange = (selectedDate) => {
        this.props.dispatch(setSelectedDate(selectedDate));
    }

    render() {
        return (
            <div className="form-group">
                <SingleDatePicker
                    date={this.props.calendar.selectedDate} 
                    onDateChange={this.onSelectedDateChange} 
                    focused={this.state.focused}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    onFocusChange={({ focused }) => this.setState({ focused })}
                    enableOutsideDays={true}
                />
            </div>
        )
    }   
}

const mapStateToProps = (state) => {
    return {
        calendar: state.calendar
    };
};

export default connect(mapStateToProps)(Calendar);

 