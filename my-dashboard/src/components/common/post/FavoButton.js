import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Favorite } from 'static/assets/icons/favorite_24dp.svg';
/**
 * Common Comp | 즐겨찾기 버튼을 그리는 컴포넌트
 */
const FavoButton = ({ favorite }) => {
    const [buttonColor, setButtonColor] = useState(null);

    // TODO : (검토필요) 상수 중앙 집중 관리..?
    const ORANGE = "orange";
    const GRAY = "gray";

    // TODO : 디스패치 콜할 것
    // 버튼 클릭 이벤트
    function onToggledButton() {
        switch (buttonColor) {
            case ORANGE:
                setButtonColor(GRAY);
                break;
            case GRAY:
                setButtonColor(ORANGE);
                break;
            default:
                break;
        }
    };

    // useEffect로 첫 로드에 버튼 색깔 설정
    useEffect(() => {
        if (favorite) {
            setButtonColor(ORANGE);
        } else {
            setButtonColor(GRAY);
        }
        //favorite 값이 바뀔 때 마다 useEffect를 호출
    }, [favorite]);

    return (
        <div>
            <Favorite fill={buttonColor} onClick={onToggledButton} />
        </div>
    );
};

FavoButton.propTypes = {
    favorite: PropTypes.bool.isRequired
};

export default FavoButton;