import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Favorite } from 'static/assets/icons/favorite_24dp.svg';

const FavoButton = ({ favorite }) => {

    if (favorite) {
        return (
            <div>
                <Favorite />
            </div>
        );
    } else {
        return (
            <div>
                <Favorite fill="orange" onClick={favoClick} />
            </div>
        );
    }
};

const favoClick = () => {
    console.log("clicked");
}

FavoButton.propTypes = {
    favorite: PropTypes.bool.isRequired
};

export default FavoButton;