import axios from "utils/axios";

export const getPosts = async () => {
    try {
        const resopnse = await axios.get('/posts').then((res) => res.data);

        return resopnse;
    } catch (e) {
        // TODO : 예외처리
        console.log(e);
    }
};