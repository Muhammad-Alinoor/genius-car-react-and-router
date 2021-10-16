import React from 'react';
import { Link } from 'react-router-dom';
import notfound from "../../images/notFound.png"
const NotFound = () => {
    return (
        <div style={{ backgroundImage: `url(${notfound})`, backgroundRepeat: "no-repeat", height: "500px", backgroundPosition: "center", marginTop: "50px" }}>
            <Link to="/home"><button style={{ position: "relative", top: "430px" }}>Back to Home</button></Link>
        </div>
    );
};

export default NotFound;