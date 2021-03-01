import React, { useState, useEffect } from 'react'
import useAPI from '../../utils/useAPI'
import SearchBar from '../SearchBar/SearchBar'
import Header from '../Header/Header'
import ButtonContext from '../../utils/ButtonContext'
import Table from '../Table/Table'

const Wrapper = () => {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [sorted, setSorted] = useState(false);

    useAPI(setResult)

    useEffect(() => {
        // const filteredEmployees = result.filter(employee => employee.name.last
        //     .toLowerCase().indexOf(search.toLowerCase()) !== -1)

        const filteredEmployees = result.filter(employee =>
            search.toLowerCase() === employee.name.last.slice(0, search.length).toLowerCase())

        setFiltered(filteredEmployees)

    }, [search, result])



    const handleSort = () => {
        if (!sorted) {
            setFiltered(result.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1));
            setSorted(true);
        } else {
            setFiltered(result.sort((a, b) => (a.name.last > b.name.last) ? -1 : 1));
            setSorted(false);
        }
    }


    return (
        <div>
            <ButtonContext.Provider value={handleSort}>
                <Header />
                <SearchBar setSearch={setSearch} />
                <Table result={search ? filtered : result} />
            </ButtonContext.Provider>
        </div>
    )
}

export default Wrapper
