import React from "react";
import "../../styles/searchBarStyles/searchBarLink.scss";
import { Link } from "react-router-dom";

interface searchBarProps {
    name: string,
    iconClass: string
}

const SearchBarLink: React.FC<searchBarProps> = props => {

    return (
        <div className="searchBarLinkDiv">
            <Link className="searchBarLink" to={`/searchResult/${props.name}`}>
                <i className={props.iconClass} style={{ fontSize: "1.4em" }}></i>
                <p>{props.name}</p>
            </Link>
        </div >
    );
};

export default SearchBarLink;
