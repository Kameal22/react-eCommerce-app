import React from "react";
import { useNavigate } from "react-router-dom";

const Proceed: React.FC = () => {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate(`/`, { replace: true });
    }, 3000)

    return (
        <div className="advBanner">
            <h1>Hope You enjoyed</h1>
        </div>
    );
};

export default Proceed;
