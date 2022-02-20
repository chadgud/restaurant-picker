import Button from "../components/Button"
import { useNavigate, useLocation } from "react-router-dom"

const Recorded = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const getResult = () => {
        navigate('/result', {
            state: {
                ...state
            }
        })
    }
    return (
        <div className="switch h-100 d-flex flex-column justify-content-center text-center text-white">
            <h3>Your choices have been submitted!</h3>
            <p>Click below to see your match.</p>
            <Button text='See Match' onClick={getResult} />
        </div>
    )
}

export default Recorded