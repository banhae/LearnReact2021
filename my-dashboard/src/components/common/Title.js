import React from 'react';
import PropTypes from 'prop-types';
/**
 * Common Comp | 글 제목을 출력
 */
const Title = ({ title }) => {
    return (
        <h2>{title}</h2>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;