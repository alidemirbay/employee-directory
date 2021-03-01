import React from 'react'
import TableData from '../TableData/TableData'
const Table = ({ result }) => {
    return (

        <div className="datatable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        <th className="col" style={{ width: "20%" }}>PICTURE</th>
                        <th className="col" style={{ width: "10%" }}>NAME</th>
                        <th className="col" style={{ width: "20%" }}>GENDER</th>
                        <th className="col" style={{ width: "20%" }}>PHONE</th>
                        <th className="col" style={{ width: "30%" }}>EMAIL</th>
                    </tr>
                </thead>

                <TableData result={result} />
            </table>
        </div>
    );
}

export default Table
