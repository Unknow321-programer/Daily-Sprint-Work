import { useEffect, useEffectEvent, useState } from "react";
import "../stylesheets/DeleteModal.css"
import DialogBox from "./DialogBox";
import { toast } from "react-toastify";

const DeleteModal = ({ btnId, users, setUsers }) => {

    const [displayDialog, setDisplayDialog] = useState(false);
    const [sure, setSure] = useState(false);

    useEffect(() => {
        if (sure === true) {
            const deleteuser = users.filter((user) => user.id !== btnId)
            setUsers(deleteuser);
            toast.success("user is deleted");
        }
    }, [sure])
    return (
        <>
            {
                !displayDialog &&
                <button className="delete-btn" id={btnId} value={btnId} onClick={() => setDisplayDialog(true)}>Delete</button>
            }
            {
                displayDialog &&
                <DialogBox message={"are you sure"} setSure={setSure} setDisplayDialog={setDisplayDialog} />
            }
        </>
    );
}

export default DeleteModal;