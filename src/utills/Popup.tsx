import React from "react";

interface PopupProps {
    msg: string | undefined,
    clearMsg: () => void
}

const Popup: React.FC<PopupProps> = props => {

    return (
        <div className="popUpDiv">
            {!props.msg ? null : <div>
                <h4>{props.msg}</h4> <i onClick={props.clearMsg} style={{ fontSize: "1.3em" }} className="bi bi-x"></i>
            </div>}
        </div>
    );
};

export default Popup
