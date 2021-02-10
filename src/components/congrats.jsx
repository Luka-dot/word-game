import PropTypes from 'prop-types';
import React from 'react';

const Congrats = (props) => {
    if (props.success) {
        return (
        <div data-test="component-congrats">
            <spam data-test="congrats-message">
                Congratulation, you have Won!
            </spam>
        </div>
    );
    } else {
        return (
            <div data-test="component-congrats" />
        )
    }
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}

export default Congrats;