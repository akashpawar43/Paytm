import { atom, atomFamily, selector, selectorFamily } from "recoil";
import axios from 'axios';


export const signUpAtom = atom({
    key: "signupAtom",
    default: {
        firstName: "",
        lastName: "",
        username: "",
        password: ""
    }
})

export const signUpSelector = selector({
    key: "signUpSelector",
    get: async ({get}) => {
        const signUp = get(signUpAtom);
        const res = await axios.post('http://localhost:4000/api/v1/user/signup', {signUpAtom})
        return res.data;
    }
})

export const balanceAtom = atom({
    key: "balanceAtom",
    default: selector({
        key: "balanceSelector",
        get: async ({get}) => {
            const token = localStorage.getItem("token")
            const response = await axios.get('http://localhost:4000/api/v1/account/balance', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return response.data;
        }
    })
})







// All User Details like firstName, lastName and Id
export const usersDetailsAtomFamily = atom({
    key: "usersDetailsAtomFamily",
    default: ''
})

export const userDetailsSelectorFamily = selector({
    key: "userDetailsSelectorFamily",
    get: async ({get}) => {
        const user = get(usersDetailsAtomFamily);
        // await new Promise(r => setTimeout(r, 5000));
        const res = await axios.get(`http://localhost:4000/api/v1/user/bulk?filter=${user}`);
        return res.data.users;
    } 
})
