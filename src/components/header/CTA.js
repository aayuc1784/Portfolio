import React from "react";
import resume from "../../assets/resume-offcampus.pdf"

const CTA = () => {
    return (
        <div className="cta">
            <a href={resume} download className="btn">Download Resume</a>
            <a href="#contact" className="btn btn-primary">Let's Connect</a>
        </div>
    )
}

export default CTA
