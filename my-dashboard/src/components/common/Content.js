import React from 'react';
import PropTypes from 'prop-types';
/**
 * Common Comp | 글 내용을 출력
 */
const Content = ({ body }) => {

    return (
        <p>{body}</p>
    );
};

Content.propTypes = {
    body: PropTypes.string.isRequired
};

export default Content;