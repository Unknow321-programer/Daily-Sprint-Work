import "../stylesheets/DialogBox.css"
const DialogBox = ({ message, setSure, setDisplayDialog }) => {
    const handleBtn = (e) => {
        const clickedBtn = e.target.value;
        clickedBtn === "delete" ? setSure(true) : setSure(false);
        setDisplayDialog(false);
    }
    return (
        
            <div className="dialog-container">
                <span>{message}</span>
                <button onClick={handleBtn} value={"delete"}>Yes</button>
                <button onClick={handleBtn} value={"do not delete"}>Cancle</button>
            </div>

    );
}

export default DialogBox;