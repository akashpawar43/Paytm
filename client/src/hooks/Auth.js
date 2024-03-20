import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilCallback, useSetRecoilState } from 'recoil';
import { alertAtom } from '../store/atoms/user';

export function useAuth(route, { data }) {
    const navigate = useNavigate();
    const setAlert = useSetRecoilState(alertAtom);
    const handleAuth = useRecoilCallback(({ set }) => async () => {
        try {
            const response = await axios.post(`http://localhost:4000/api/v1/user/${route}`, data);
            localStorage.setItem("token", response.data.token);
            setAlert({ display: true, color: "green", message: response.data.message });
            setTimeout(()=> {
                navigate('/dashboard');
            }, 1000)
        } catch (error) {
            setAlert({ display: true, color: "red", message: error.response.data.message });
        }
        setTimeout(() => {
            setAlert({ display: false, message: '', color: "" });
        }, 3000);
    });

    return handleAuth;
}
