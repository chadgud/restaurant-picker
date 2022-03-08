import { useState } from "react"

const AddressForm = ({ isLoading, onSubmitLoc }) => {
    const [address, setAddress] = useState('')

    const submitAddress = (e) => {
        e.preventDefault();
        onSubmitLoc(address);
    }
    return (
        <form hidden={isLoading} className="w-75 align-self-center needs-validation" onSubmit={submitAddress} noValidate>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter a location (address, city, zip, etc.)" value={address} onChange={(e) => setAddress(e.target.value)} aria-label="Enter an Address" aria-describedby="address" required />
                <button className="btn btn-primary" type="submit" id="address">Submit</button>
                <div class="invalid-feedback">
                    Please provide a location.
                </div>
            </div>
        </form>
    )
}

export default AddressForm