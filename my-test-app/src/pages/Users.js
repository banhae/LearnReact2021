import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link,
    Route,
    Switch,
    useRouteMatch,
} from 'react-router-dom'
import UserDetail from './UserDetail';

function Users() {
    /**
     * Hook state 변수 선언
     * --------------------
     * users : users 데이터를 담기 위함
     * loading : load 상태(state) 관리를 위함
     * error : error 상태 관리를 위함
     */
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    // 중첩 라우팅을 위해서 url, path를 받아옴
    const { url, path } = useRouteMatch()

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // state 초기화
                setError(null);
                setUsers(null);
                setLoading(true);

                // axios를 통해 jsonplaceholder에 users 데이터 GET 요청
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');

                // json 데이터를 users에 값을 넣음
                setUsers(response.data);
            } catch (e) {
                // 예외상항 발생시 setError를 통해 error값을 넣음
                setError(e);
            }

            setLoading(false);
        };

        fetchUsers();
        // 첫 컴포넌트 마운트 시에만 render하도록 빈 배열[] 넣기
    }, []);

    // 각 상황에 맞게 처리하기 위해 if문을 따로 선언함
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Something wrong</div>;
    if (!users) return <div>Oops...</div>;

    // TODO: map vs foreach
    return (
        <div className='user-links'>
            <ul>
                {users.map(({ name, id }) => (
                    <li key={id}>
                        <Link to={`${url}/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>

            <Switch>
                <Route path={`${path}/:userId`}><UserDetail /></Route>
            </Switch>
        </div>
    );
}

export default Users;