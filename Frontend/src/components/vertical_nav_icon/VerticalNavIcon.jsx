import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./vertical_nav_icon.css";

function VerticalNavIcon(props) {
    const { navigate: content } = props;
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const element = document.getElementById(`${content.id}`);
        function handleMouseOver() {
            setHovered(true);
        }

        function handleMouseOut() {
            setHovered(false);
        }

        element.addEventListener("mouseover", handleMouseOver);
        element.addEventListener("mouseout", handleMouseOut);

        return () => {
            element.removeEventListener("mouseover", handleMouseOver);
            element.removeEventListener("mouseout", handleMouseOut);
        };
    }, [content.id]);

    return (
        <li>
            <div className="image-icon">
                <Link to={content.to} id={content.id}>
                    <img src={content.icon} alt="" />
                    <span className={hovered ? "open" : ""}>{content.name}</span>
                </Link>
            </div>
        </li>
    );
}

export default VerticalNavIcon;
