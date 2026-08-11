import { Plus } from "lucide-react";
import { useState } from "react";

import "../stylesheets/AddProjectModal.css";
import { toast } from "react-toastify";

const AddProjectModal = ({ users, setUsers }) => {

    const [error, setError] = useState({
        projectName: "",
        client: "",
        projectOwner: "",
        contact: "",
        website: ""
    });

    const [newRecords, setNewRecords] = useState({
        projectName: "",
        client: "",
        projectOwner: "",
        contact: "",
        website: "",
        status: "Active",
        createdDate: new Date().getFullYear() + "/" + new Date().getMonth() + "/" + new Date().getDate(),
        priority: "High",
    });
    const [loadAddProject, setLoadAddProject] = useState(false);

    const validateInputs = () => {
        const onlyCharPattern = /^[a-zA-Z\s]+$/;
        const contactPattern = /^[0-9]{10}$/;
        const emailPattern = /^[\S]+[\@]+[\S]+[\.]+[\S]+$/;
        let errors = {
            projectName: "",
            client: "",
            projectOwner: "",
            contact: "",
            website: ""
        }
        let flag = true;
        if (!onlyCharPattern.test(newRecords.projectName)) {
            errors.projectName = "Please enter valid project name";
            flag = false;
        }

        if (!onlyCharPattern.test(newRecords.client)) {
            errors.client = "Please enter valid client";
            flag = false;
        }

        if (!emailPattern.test(newRecords.projectOwner)) {
            errors.projectOwner = "Please enter valid project owner";
            flag = false;
        }

        if (!contactPattern.test(newRecords.contact)) {
            errors.contact = "Please enter valid contact details";
            flag = false;
        }

        if (!onlyCharPattern.test(newRecords.website)) {
            error.website = "please enter valid website";
            flag = false;
        }
        setError(errors);
        return flag;
    }
    const handleAddProjectClick = () => {
        
        if (validateInputs()) {
            const id = Math.max(...(users.map((user) => user.id)));
            console.log(id);
            setUsers([...users, {
                id: id + 1,
                name: newRecords.projectName,
                company: { name: newRecords.client },
                email: newRecords.projectOwner,
                phone: newRecords.contact,
                website: newRecords.website,
            }])
            setLoadAddProject(false);
            toast.success("Project added fine!");
        }
        else {
            toast.error("Invalid details");
        }
    };

    return (
        <>
            {!loadAddProject &&
                <button className="addBtn" onClick={() => setLoadAddProject(true)}>Add Project <Plus size={18} /></button>
            }
            {loadAddProject &&
                <section className="add-project">
                    <div className="form-container">
                        <div className="input-group">
                            <label htmlFor="projectname">Project Name</label>
                            <input type="text" id="projectname" name="projectvalue" value={newRecords.projectName} onChange={(e) => setNewRecords({ ...newRecords, projectName: e.target.value })} />
                        </div>
                        <div className="error">{error.projectName}</div>
                        <div className="input-group">
                            <label htmlFor="client">Client</label>
                            <input type="text" id="client" name="client" value={newRecords.client} onChange={(e) => setNewRecords({ ...newRecords, client: e.target.value })} />
                        </div>
                        <div className="error">{error.client}</div>
                        <div className="input-group">
                            <label htmlFor="projectowner">Project Owner</label>
                            <input type="text" id="projectowner" name="projectowner" value={newRecords.projectOwner} onChange={(e) => setNewRecords({ ...newRecords, projectOwner: e.target.value })} />
                        </div>
                        <div className="error">{error.projectOwner}</div>
                        <div className="input-group">
                            <label htmlFor="contact">Contact</label>
                            <input type="text" id="contact" name="contact" value={newRecords.contact} onChange={(e) => setNewRecords({ ...newRecords, contact: e.target.value })} />
                        </div>
                        <div className="error">{error.contact}</div>
                        <div className="input-group">
                            <label htmlFor="website">Website</label>
                            <input type="text" id="website" name="website" value={newRecords.website} onChange={(e) => setNewRecords({ ...newRecords, website: e.target.value })} />
                        </div>
                        <div className="error">{error.website}</div>
                        <div className="input-group">
                            <label htmlFor="status">Status</label>
                            <input list="statuses" id="status" name="status" value={newRecords.status} onChange={(e) => setNewRecords({ ...newRecords, status: e.target.value })} />
                            <datalist id="statuses">
                                <option value={"Active"} />
                                <option value={"Deactive"} />
                            </datalist>
                        </div>
                        <div className="input-group">
                            <label htmlFor="date">Created Date</label>
                            <input type="date" id="date" name="date" value={newRecords.createdDate} onChange={(e) => setNewRecords({ ...newRecords, createdDate: e.target.value })} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="priority">Priority</label>
                            <input list="priorities" id="priority" name="priority" value={newRecords.priority} onChange={(e) => setNewRecords({ ...newRecords, priority: e.target.value })} />
                            <datalist id="priorities">
                                <option value={"High"} />
                                <option value={"Medium"} />
                                <option value={"Low"} />
                            </datalist>
                        </div>
                        <div className="input-group">
                            <button onClick={handleAddProjectClick} className="addProject">Add Project</button>
                            <button onClick={() => setLoadAddProject(false)} className="cancelProject">Cancel</button>
                        </div>
                    </div>
                </section>
            }
        </>
    );
}

export default AddProjectModal;