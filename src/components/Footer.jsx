import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center" >
      {/* style={{position:"fixed", bottom:0, width:"100%"}} */}
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">Made with ❤️ by {" "}
              <a  href="https://mithleshsingh.com.np/" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Mithlesh Kumar Singh</a>
            </p>
            <a className="text-dark fs-4" href="https://github.com/MITHLESH24364" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
