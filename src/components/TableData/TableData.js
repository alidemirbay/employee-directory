import React from 'react'

const TableBody = ({ result }) => {
    return (
        <tbody>
            {result ? result.map(result => (
                <tr key={result.email}>
                    <td data-th="Image" className="align-middle">
                        <img
                            src={result.picture.large}
                            alt="employee"
                            className="img-responsive"
                        />
                    </td>

                    <td data-th="Name" className="name-cell align-middle">
                        {result.name.first} {result.name.last}
                    </td>
                    <td data-th="Gender" className=" align-middle">
                        {result.gender}
                    </td>
                    <td data-th="Phone" className="align-middle">
                        {result.phone}
                    </td>
                    <td data-th="Email" className="align-middle">
                        <a href={"mailto:" + result.email} target="__blank">
                            {result.email}
                        </a>
                    </td>

                </tr>

            )) : ""}
        </tbody>
    );
}

export default TableBody