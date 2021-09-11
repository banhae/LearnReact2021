import React from 'react';
import PropTypes from 'prop-types';
/**
 * 타입 : 공용 컴포넌트
 * 용도 : 포스트 내용을 출력함
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