import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import { Navbar, Nav } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar bg="primary" variant="dark">
          
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Header</Nav.Link>
              <Nav.Link href="#features">Contents</Nav.Link>
              <Nav.Link href="#pricing">Footer</Nav.Link>
            </Nav>
          
        </Navbar>

        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}


export default App;

