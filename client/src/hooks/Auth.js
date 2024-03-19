import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilCallback } from 'recoil';

export function useAuth(route,{ data }) {
    const navigate = useNavigate();
    const handleAuth = useRecoilCallback(({ set }) => async () => {
        const response = await axios.post(`http://localhost:4000/api/v1/user/${route}`, data);
        localStorage.setItem("token", response.data.token);
        navigate('/dashboard');
    });

    return handleAuth;
}
