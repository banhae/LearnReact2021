import axios from "utils/axios";

export const getPosts = async () => {
    try {
        const resopnse = await axios.get('/posts');

        return resopnse.data;
    } catch (e) {
        // TODO : 예외처리
    }
};