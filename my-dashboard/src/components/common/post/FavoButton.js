import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { postFavoToggled } from 'redux/actions'
import { ReactComponent as Favorite } from 'static/assets/icons/favorite_24dp.svg';
// TODO: 뭐가 더 좋은지...json vs local contant value (Type manager js?)
import Colors from 'static/colors.json'
/**
 * Common Comp | 즐겨찾기 버튼
 * --
 * @param {*} favorite
 */

const FavoButton = ({ postId, favorite }) => {
    const [buttonColor, setButtonColor] = useState(null);
    const dispatch = useDispatch();

    // 버튼 클릭 이벤트
    function onToggledButton() {
        dispatch(postFavoToggled(postId));

        switch (buttonColor) {
            case Colors.ORANGE:
                setButtonColor(Colors.GRAY);
                break;
            case Colors.GRAY:
                setButtonColor(Colors.ORANGE);
                break;
            default:
                break;
        }
    };

    // useEffect로 첫 로드에 버튼 색깔 설정
    useEffect(() => {
        if (favorite) {
            setButtonColor(Colors.ORANGE);
        } else {
            setButtonColor(Colors.GRAY);
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