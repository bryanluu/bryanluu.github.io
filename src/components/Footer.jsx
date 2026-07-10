import React from "react";

function Footer(props) {
    const currentYear = new Date().getFullYear();

    return <footer class="d-flex justify-content-center">© Bryan Luu {currentYear}. All rights reserved.</footer>
}

export default Footer;