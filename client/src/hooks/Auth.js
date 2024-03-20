import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilCallback, useRecoilState, useSetRecoilState } from 'recoil';
import { alertAtom, signInAtom, signUpAtom } from '../store/atoms/user';

export function useAuth(route, { data }) {
    const navigate = useNavigate();
    const setAlert = useSetRecoilState(alertAtom);
    const [signIn, setSignIn] = useRecoilState(signInAtom);
    const [signUp, setSignUp] = useRecoilState(signUpAtom);
    const handleAuth = useRecoilCallback(({ set }) => async () => {
        try {
            const response = await axios.post(`http://localhost:4000/api/v1/user/${route}`, data);
            localStorage.setItem("token", response.data.token);
            setAlert({ display: true, color: "green", message: response.data.message });
            setTimeout(()=> {
                setAlert({ display: false, message: '', color: "" });
                navigate('/dashboard');
            }, 1000)
        } catch (error) {
            setAlert({ display: true, color: "red", message: error.response.data.message });
        }
        setSignIn({ ...signIn, username: "", password: "" });
        setSignUp({ ...signUp, username: "", password: "", firstName: "", lastName: "" });
    });

    return handleAuth;
}
