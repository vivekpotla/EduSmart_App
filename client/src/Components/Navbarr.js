import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate,  } from 'react-router-dom';
import { authActions } from '../store';

function Navbarr() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state)=>state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(()=>
  {
    if(localStorage.getItem("userId"))
    {
      dispatch(authActions.login());
    }
  },[dispatch]);
  const userType = localStorage.getItem("userType");

  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">EduSmart</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  EduSmart
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {/*  className="justify-content-end flex-grow-1 pe-3" */}
                <Nav >
                  <Nav.Link href="">Home</Nav.Link>
                  {isLoggedIn && 
                  <>
                  {userType=== "student" && <Nav.Link href="/typing">Fastest-Fingers</Nav.Link> } 
                  <NavDropdown
                    title="Learn-Here"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/mainclass">CLASSROOMS</NavDropdown.Item>
                    <NavDropdown.Divider />
                 { userType === "faculty"  && <NavDropdown.Item href="/addclass">ADD-CLASS</NavDropdown.Item>}

        
                    </NavDropdown>
                    </>
                  }
                </Nav>
                <Nav>
                  {
                    !isLoggedIn && <>
                     <NavDropdown
                    title="Auth"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
                    </NavDropdown>
                    
                    </>
                  }
               
                 { isLoggedIn && <>
                  <Nav.Link className='nav-link text-dark' to='/' onClick={() => {
                      localStorage.removeItem("userId");
                      localStorage.removeItem("userType");
                      dispatch(authActions.logout());
                      navigate("/");
                    }}>LOGOUT</Nav.Link>
                    </>}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbarr;