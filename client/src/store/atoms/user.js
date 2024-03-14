import { atom, atomFamily, selector, selectorFamily } from "recoil";
import axios from 'axios';

export const usersDetailsAtomFamily = atom({
    key: "usersDetailsAtomFamily",
    default: ''
})

export const userDetailsSelectorFamily = selector({
    key: "userDetailsSelectorFamily",
    get: async ({get}) => {
        const user = get(usersDetailsAtomFamily);
        const res = await axios.get(`http://localhost:4000/api/v1/user/bulk?filter=${user}`);
        return res.data.users;
    } 
})
