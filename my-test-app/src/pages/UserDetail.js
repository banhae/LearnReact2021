import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

// TODO : Props로 데이터 넘겨 받을 수 있지 않을까..?
function UserDetail() {
    /**
     * Hook state 변수 선언
     * --------------------
     * userDetail : userDetail 데이터를 담기 위함
     * loading : load 상태(state) 관리를 위함
     * error : error 상태 관리를 위함
     */
    const [userDetail, setUserDetail] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    // TODO : warning 고치기
    //React Hook useEffect has a missing dependency: 'userId'. Either include it or remove the dependency array
    const { userId } = useParams();

    useEffect(() => {
        const fetchUserDetail = async () => {
            try {
                // state 초기화
                setError(null);
                setUserDetail(null);
                setLoading(true);

                // axios를 통해 jsonplaceholder에 userDetail 데이터 GET 요청
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);

                // json 데이터를 userDetail에 값을 넣음
                setUserDetail(response.data);
            } catch (e) {
                // 예외상항 발생시 setError를 통해 error값을 넣음
                setError(e);
            }

            setLoading(false);
        };

        fetchUserDetail();
        // 첫 컴포넌트 마운트 시에만 render하도록 빈 배열[] 넣기
    }, []);

    // 각 상황에 맞게 처리하기 위해 if문을 따로 선언함
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Something wrong</div>;
    if (!userDetail) return <div>Oops...</div>;

    return (
        <div>
            <h1>{userDetail.name}</h1>
            <h2>{userDetail.username}</h2>
            <p>email : {userDetail.email}</p>
        </div>
    );
}

export default UserDetail;