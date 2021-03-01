import React, { useContext } from "react";
import ButtonContext from '../../utils/ButtonContext'

const SearchBar = ({ setSearch }) => {
    const handleSort = useContext(ButtonContext);

    return (
        <div style={{ marginRight: 50 }} className="searchbox float-right">
            <div className="d-flex flex-row ">
                <label className=" " htmlFor="filter">Filter By: </label>
                <input
                    id="filter"
                    className=" "
                    type="text"
                    placeholder="Last Name"
                    onChange={(event) => setSearch(event.target.value)}
                />
            </div>
            <div className="d-flex flex-row my-2">
                <label className="  " htmlFor="filter">Sort By: </label>
                <button className="btn btn-primary d-block" onClick={handleSort} >Last Name</button>
            </div>

        </div >

    )
}

export default SearchBar
