import React, { Component } from 'react'
import {Nav, Navbar} from "react-bootstrap";
import Link from "next/link";

export default class NavMenuDesktop extends Component {
  render() {
    return (
      <Navbar className="nav-bar sticky-top" variant="light" expand="lg">
      <Navbar.Brand href="/">
        <img className="nav-logo" src="/logo.png" alt="pos logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="text-center">
            <Link activeClassName="d-none" href="/">
              <div className="nav-item-div">
                <i className="fa fa-home mx-a"/> Deshboard
              </div>
            </Link>
          </Nav.Link>
          <Nav.Link className="text-center">
            <Link href="/users">
              <div className="nav-item-div">
                <i className="fa fa-user-alt mx-a"/> Users
              </div>
            </Link>
          </Nav.Link>
          <Nav.Link className="text-center">
            <Link href="/category">
              <div className="nav-item-div">
                <i className="fa fa-list-ul mx-a"/> Category
              </div>
            </Link>
          </Nav.Link>
          <Nav.Link className="text-center">
            <Link href="/product">
              <div className="nav-item-div">
                <i className="fa fa-shopping-bag mx-a"/> Product
              </div>
            </Link>
          </Nav.Link>
          <Nav.Link className="text-center">
            <Link href="/transaction">
              <div className="nav-item-div">
                <i className="fa fa-money-bill mx-a"/> Transaction
              </div>
            </Link>
          </Nav.Link>
          <Nav.Link className="text-center">
            <Link href="/report">
              <div className="nav-item-div">
                <i className="fa fa-file-invoice mx-a"/> Report
              </div>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}
