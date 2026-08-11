import { useEffect, useState } from "react";

import "../stylesheets/EditModal.css"
const EditModal = ({ editRow, setEditRow, id, users, setUsers }) => {
    const [rowData, setRowData] = useState({});
    const [loadInputs, setLoadInputs] = useState(false);

    const handleBtnClick = () => {
        if (editRow) {
            // aaplyed changes after clicking on saving button
            
            users.filter((user) => {
                if (user.id === id) {
                    user.name = rowData.name;
                    user.email = rowData.email;
                    user.company.name = rowData.company.name;
                    user.phone = rowData.phone;
                    user.website = rowData.website;
                }
            })

            setEditRow(false);
            setLoadInputs(false);

        } else {
            // load data into rowdata
            setLoadInputs(true);
            setEditRow(true);
            
        }
        
    }

    useEffect(() => {
        let tempdata = {};
        const userdata = users.filter((user) => user.id === id);
        Object.assign(tempdata, userdata[0]);
        setRowData(tempdata);
    }, [])

    return (
        <section className={loadInputs ? "edit-section" : ""}>
            {!loadInputs &&
                <div className="edit-container">

                    <button className="edit-btn" onClick={handleBtnClick} >{loadInputs ? "Save" : "Edit"}</button>

                </div>
            }

            {loadInputs &&
                <div className="edit-over-container">
                    <div className="form-container">
                        <div className="input-group">
                            <label htmlFor="projectname">Name</label>
                            <input type="text" id="projectname" name="projectvalue" value={rowData.name} onChange={(e) => setRowData({ ...rowData, name: e.target.value })} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="client">Client</label>
                            <input type="text" id="client" name="client" value={rowData.company.name} onChange={(e) => setRowData({ ...rowData, company: { name: e.target.value } })} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="projectowner">Owner</label>
                            <input type="text" id="projectowner" name="projectowner" value={rowData.email} onChange={(e) => setRowData({ ...rowData, email: e.target.value })} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="contact">Contact</label>
                            <input type="text" id="contact" name="contact" value={rowData.phone} onChange={(e) => setRowData({ ...rowData, phone: e.target.value })} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="website">Website</label>
                            <input type="text" id="website" name="website" value={rowData.website} onChange={(e) => setRowData({ ...rowData, website: e.target.value })} />
                        </div>
                        <button onClick={handleBtnClick}>Save</button>
                    </div>
                </div>
            }
        </section>
    );
}

export default EditModal;