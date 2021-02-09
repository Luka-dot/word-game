import React from 'react';

export default (props) => {
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