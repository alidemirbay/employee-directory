import React from 'react'
import Tablebody from '../TableBody/TableBody'
const Table = ({ result }) => {
    return (

        <div className="datatable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        <th className="col" style={{ width: "10%" }}>PICTURE</th>
                        <th className="col" style={{ width: "10%" }}>NAME</th>
                        <th className="col" style={{ width: "10%" }}>GENDER</th>
                        <th className="col" style={{ width: "20%" }}>PHONE</th>
                        <th className="col" style={{ width: "20%" }}>EMAIL</th>
                    </tr>
                </thead>

                <Tablebody result={result} />
            </table>
        </div>
    );
}

export default Table
