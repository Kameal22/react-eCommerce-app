import React from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
    linkPath: string,
    description: string,
    iconName: string
}

const NavMenuItem: React.FC<MenuItemProps> = props => {
    return (
        <div className="createAccDiv">
            <Link to={props.linkPath} className="navLink">
                <h4 className="navMenuLink">{props.description}</h4>
            </Link>
            <i className={props.iconName} style={{ fontSize: "1.2em" }}></i>
        </div>
    );
};

export default NavMenuItem;