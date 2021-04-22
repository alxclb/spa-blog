import React from "react";
import "./image.scss";
import img80 from "../../images/80.png";
import img100 from "../../images/100.png";

export const Image = ({ src, alt = "image", maxWidth = "80" }) => {
    let placeholder =
        maxWidth === "80" ? img80 : img100;
    return (
        <div className="image-wrapper">
            {src ? (
                <img src={src} alt={alt} />
            ) : (
                <img src={placeholder} alt={alt} />
            )}
        </div>
    );
};
