// TODO : JSON Placeholder에서 API호출해서 초기값을 설정할 것
const initState = {
    posts: [
        {
            id: 1,
            title: 'dummy1',
            content: 'bla bla bla bla bla bla bla bla bla',
            favorite: false,
        },
        {
            id: 2,
            title: 'dummy2',
            content: 'cla cla cla cla cla cla cla cla cla',
            favorite: true,
        },
        {
            id: 3,
            title: 'dummy3',
            content: 'dla dla dla dla dla dla dla dla dla',
            favorite: false,
        },
    ]
}
/**
 * Redux Reducer | 글의 상태변경 이벤트(Action)를 처리
 */
const postReducer = (state = initState, action) => {

    // TODO : 액션에서 constant 값으로 케이스 값을 처리할 것
    switch (action) {
        default:
            return state;
    }
}

export default postReducer;