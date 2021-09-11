import React from 'react';
import PropTypes from 'prop-types';
/**
 * Common Comp | 글 내용을 출력
 */
const Content = ({ content }) => {

    return (
        <p>{content}</p>
    );
};

Content.propTypes = {
    content: PropTypes.string.isRequired
};

export default Content;