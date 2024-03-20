import { atom, selector } from "recoil";
import axios from 'axios';

// get balance and user details 
export const balanceAtom = atom({
    key: "balanceAtom",
    default: selector({
        key: "balanceSelector",
        get: async ({ get }) => {
            const token = localStorage.getItem("token");
            const response = await axios.get('http://localhost:4000/api/v1/account/balance', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data;
        }
    })
})


// All User Details like firstName, lastName and Id
export const usersDetailsAtom = atom({
    key: "usersDetailsAtom",
    default: ''
})

export const userDetailsSelector = selector({
    key: "userDetailsSelector",
    get: async ({ get }) => {
        const user = get(usersDetailsAtom);
        const res = await axios.get(`http://localhost:4000/api/v1/user/bulk?filter=${user}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
        return res.data.users;
    }
});

// storing amount money user want to send
export const amountAtom = atom({
    key: "amountAtom",
    default: ""
});

// SignIn state to store username, password 
export const signInAtom = atom({
    key: "signInAtom",
    default: {
        username: "",
        password: ""
    }
})

// signUp state to store firstname, lastname, username, password 
export const signUpAtom = atom({
    key: "signUpAtom",
    default: {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
    }
})

// alert state
export const alertAtom = atom({
    key: "alertAtom",
    default: {
        display: false,
        message: "",
        color: ""
    }
});


// export const signInSelector = selector({
//     key: "signInSelector",
//     get: ({ get }) => {
//         const username = get(usernameAtom);
//         const password = get(passwordAtom);
//         return { username, password };
//     }
// })

// tried some debouncing logic but didn't work
// const debounc = (func, dalay) => {
//     let timeout;
//     return (...args) => {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//             func(...args);
//         }, dalay)
//     }
// };

// export const debounceSelector = selector({
//     key: "debounceSelector",
//     get: ({get}) => {
//         const userDetailsSelectorValue = get(userDetailsSelector);
//         return debounc(() => get(userDetailsSelector), 5000)(userDetailsSelectorValue);
//     }
// });




