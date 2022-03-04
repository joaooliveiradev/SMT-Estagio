import { useDispatch} from 'react-redux'
import { authenticate} from 'stores/AuthSlice'
const Login = () => {
    const dispatch = useDispatch()
    function login() {
        dispatch(authenticate())
    }
    return (
        <>
            <h1>Tela de Login</h1>
            <button onClick={login}>Logar</button>
        </>
    )
}

export { Login }