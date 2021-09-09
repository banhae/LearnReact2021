import React from 'react';
import PropTypes from 'prop-types';
/**
 * 타입 : 공용 컴포넌트
 * 용도 : 포스트 제목을 출력함
 */
const Title = ({ title }) => {
    return (
        <h2>{title}</h2>
    );
};

Title.defaultProps = {
    title: "Title is empty"
}

Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;