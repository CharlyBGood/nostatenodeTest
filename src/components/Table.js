import React from "react";
import "../stylesheets/Table.css"


function Table(props) {
    return (
        <div className="table-container">
            <table className="links-table">
                <thead className="table-header">
                    <tr>
                        <th>LINK</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                </tbody>
            </table>
        </div>

    );
}

export default Table;