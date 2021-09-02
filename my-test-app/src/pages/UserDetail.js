import React, { useEffect } from 'react';

function UserDetail(props) {

    // props에 값이 없을 때 접근시 예외처리
    // Detail로 바로 접근할 경우 데이터 요청 처리를 해야하는가?
    useEffect(() => {
        if (props.location.state === undefined) {
            props.history.push("/users");
        }
    }, []);

    if (props.location.state) {
        return (
            <div>
                <h1>{props.location.state.name}</h1>
                <h2>{props.location.state.username}</h2>
                <p>email : {props.location.state.email}</p>
            </div>
        );
    } else {
        return null;
    }
}

export default UserDetail;