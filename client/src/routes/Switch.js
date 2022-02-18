import Button from "../components/Button"
import { useNavigate, useLocation } from "react-router-dom"


const Switch = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const readyPlayerTwo = () => {
        navigate('/decide', {
            state: {
                ...state,
                fromSwitch: true
            }
        })
    }
    return (
        <div className="switch h-100 d-flex flex-column justify-content-center text-center text-white">
            <h3>Time to Switch!</h3>
            <p>Your choices have been recorded. When your friend is ready, click below.</p>
            <Button text='Ready' onClick={readyPlayerTwo} />
        </div>
    )
}

export default Switch