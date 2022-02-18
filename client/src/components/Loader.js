

const Loader = ({ isLoading }) => {
    return (
        <div hidden={!isLoading}>
            {/* from loading.io */}
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader