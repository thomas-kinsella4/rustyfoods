import React from "react";

function AddressSearch() {
    return (
        <div id="address-search-comp">
            <input id="address-search" type="search" placeholder="Enter address"></input>
            <button className="nav-btn">Find Food</button>
        </div>
    )
}

export default AddressSearch;