const Button = ({ isLoading, text, onClick }) => {
    return <div>
        <button className="btn btn-primary" hidden={isLoading} onClick={() => {
            onClick();
        }}>
            {text}
        </button>
    </div>;
};

export default Button;
