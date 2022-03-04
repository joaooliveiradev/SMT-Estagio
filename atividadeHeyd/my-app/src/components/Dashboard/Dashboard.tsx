import { useDispatch } from 'react-redux'
import { authenticate } from 'stores/AuthSlice'
const Dashboard = () => {
    const dispatch = useDispatch();
    function logout(){
        dispatch(authenticate())
    }
    return (
        <>
            <h1>Bem vindo a tela de Dashboard</h1>
            <button onClick={logout}>Deslogar</button>
        </>
    )
}

export { Dashboard }