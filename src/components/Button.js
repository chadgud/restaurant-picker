const Button = ({ isLoading, text, onClick }) => {
    return <div hidden={isLoading}>
        <button className="btn btn-primary" onClick={() => {
            onClick();
        }}>
            {text}
        </button>
    </div>;
};

export default Button;
