// import React from "react";
// import { Link } from "react-router-dom";
// import { Footer, Navbar } from "../components";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {

//   const navigate = useNavigate();

//   const [users, setUsers] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');

//   const handleChange = (event) => {
//     setUsers({ ...users, [event.target.name]: event.target.value });
//     setError('');
//   };

//   const doLogin = () => {
//     const trimmedEmail = users.email.trim();
//     const trimmedPassword = users.password.trim();

//     if (trimmedEmail === 'admin@gmail.com' && trimmedPassword === 'admin') {
//       localStorage.setItem('isLogin', "1");
//       console.log('Login successful');
//       navigate('/');
//     } else {
//       setError('Incorrect email or password');
//     }
//   };

//   useEffect(() => {
//     const isLogin = localStorage.getItem('isLogin');
//     if (isLogin === '1') {
//       navigate('/login'); // Redirect to index if already logged in
//     }
//   }, [navigate]);

//   return (
//     <>
//       <Navbar />
//       <div className="container my-3 py-3">
//         <h1 className="text-center">Login</h1>
//         <hr />
//         <div className="row my-4 h-100">
//           <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//             <form>
//               <div className="my-3">
//                 <label htmlFor="email">Email address</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   name="email"
//                   value={users.email}
//                   onChange={handleChange}
//                   placeholder="name@example.com"
//                 />
//               </div>
//               <div className="my-3">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   name="password"
//                   value={users.password}
//                   onChange={handleChange}
//                   placeholder="Password"
//                 />
//               </div>
//               <div className="my-3">
//                 <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link></p>
//               </div>
//               {error && <p className="text-danger">{error}</p>}
//               <div className="text-center">
//                 <button className="my-2 mx-auto btn btn-dark" type="button" onClick={doLogin}>
//                   Login
//                 </button>
//               </div>
//             </form>
           
//           </div>
//         </div>
//       </div>
//       <br />
//       <br />
//       <Footer />
//     </>
//   );
// };

// export default Login;







// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { Footer, Navbar } from "../components";

// const Login = () => {
//   const navigate = useNavigate();
//   const [users, setUsers] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');

//   const handleChange = (event) => {
//     setUsers({ ...users, [event.target.name]: event.target.value });
//     setError('');
//   };

//   const doLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/login', {
//         email: users.email,
//         password: users.password
//       });

//       if (response.status === 200) {
//         localStorage.setItem('isLogin', "1");
//         navigate('/');
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         setError('Incorrect email or password');
//       } else {
//         setError('Error logging in');
//         console.error(error);
//       }
//     }
//   };

//   useEffect(() => {
//     const isLogin = localStorage.getItem('isLogin');
//     if (isLogin === '1') {
//       navigate('/'); // Redirect to home if already logged in
//     }
//   }, [navigate]);

//   return (
//     <>
//       <Navbar />
//       <div className="container my-3 py-3">
//         <h1 className="text-center">Login</h1>
//         <hr />
//         <div className="row my-4 h-100">
//           <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//             <form>
//               <div className="my-3">
//                 <label htmlFor="email">Email address</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   name="email"
//                   value={users.email}
//                   onChange={handleChange}
//                   placeholder="name@example.com"
//                 />
//               </div>
//               <div className="my-3">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   name="password"
//                   value={users.password}
//                   onChange={handleChange}
//                   placeholder="Password"
//                 />
//               </div>
//               <div className="my-3">
//                 <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link></p>
//               </div>
//               {error && <p className="text-danger">{error}</p>}
//               <div className="text-center">
//                 <button className="my-2 mx-auto btn btn-dark" type="button" onClick={doLogin}>
//                   Login
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <br />
//       <br />
//       <Footer />
//     </>
//   );
// };

// export default Login;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Footer, Navbar } from "../components";

const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setUsers({ ...users, [event.target.name]: event.target.value });
    setError('');
  };

  const doLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: users.email,
        password: users.password
      });

      if (response.status === 200) {
        localStorage.setItem('isLogin', "1");
        navigate('/');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Incorrect email or password');
      } else {
        setError('Error logging in');
        console.error(error);
      }
    }
  };

  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin === '1') {
      navigate('/'); // Redirect to home if already logged in
    }
  }, [navigate]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      doLogin();
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onKeyDown={handleKeyDown}>
              <div className="my-3">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={users.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                />
              </div>
              <div className="my-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={users.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link></p>
              </div>
              {error && <p className="text-danger">{error}</p>}
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="button" onClick={doLogin}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Login;
