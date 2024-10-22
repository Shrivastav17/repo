import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import '../Components/css/style.css';
import { useSelector, useDispatch } from 'react-redux';
import useDecodeTokenValue from '../Functions/UseDecodeTokenValue';
import { logOutDataTransfer } from '../Redux/Reducers/LogOutSlice';
import { logout } from '../Redux/action/logoutaction';
// import '../Components/css/style.css';


export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const storageToken = useSelector(state => state.storage.value);
  const [name, setName] = useState("");

  const ans = useDecodeTokenValue(storageToken);
  const localStorageData = localStorage.getItem('tokenValue');
  const ans1 = useDecodeTokenValue(localStorageData);

  useEffect(() => {
    const updateName = () => {
      const result = ans?.data?.name || "";
      setName(result);

      if (!result) {
        const result1 = ans1?.data?.name || "";
        setName(result1);
      }
    };

    updateName();

    const checkTokenExpiration = () => {
      if (!ans && !ans1) {
        dispatch(logout()); // Dispatching logout action to clear the token from Redux store
        localStorage.removeItem('tokenValue'); // Clearing token from localStorage
        navigate('/login'); // Redirecting to login page
      }
    };

    checkTokenExpiration();

  }, [ans, ans1, dispatch, navigate]);



  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('tokenValue');
    name(""); // Clear the name immediately
    navigate('/login');
  };


  return (
    <Navbar expand="lg" className="bg-body-tertiary header">
      <Container>
        <Navbar.Brand href="#home" className='title'>REPO FLAGGING</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              name ? (
                <>
                  {/* <li><Nav.Link href="#home"><Link className='sub-title' to={"/repo"}>Home</Link></Nav.Link></li> */}
                  {/* <li><Nav.Link href="#home"><Link className='sub-title' to={"/register"}>Register</Link></Nav.Link></li> */}
                  <li><Nav.Link href="#home"><Link className='sub-title' to={"/repo"}>Repo Data</Link></Nav.Link></li>
                  <li><Nav.Link href="#home"><Link className='sub-title' to={"/admin"}>Admin</Link></Nav.Link></li>
                  <li><Nav.Link href="#home"><Link className='sub-title' onClick={handleLogout}>Logout ({name})</Link></Nav.Link></li>
                </>
              ) : (
                <Nav.Link href="#home"><Link className='sub-title' to={"/login"}>Login</Link></Nav.Link>
              )
            }
            <Nav.Link href="#home"><Link className='sub-title' to={"/register"}>Register</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
