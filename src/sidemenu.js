import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
const SideMenu = () => {
  return (
    <div>
      <Card style={{ width: '60rem', left: '17rem' }}>
        <Card.Body>
          <Card.Title>General information</Card.Title>
          <Card.Text>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Purchase order number</Form.Label>
                  <Form.Control placeholder="PO-20311" />
                </Col>
                <Col>
                  <Form.Label>Purchase order date</Form.Label>
                  <Form.Control placeholder="16/09/2023" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Delivery date</Form.Label>
                  <Form.Control placeholder="24/10/2023" />
                </Col>
                <Col>
                  <Form.Label>Status</Form.Label>
                  <Form.Control placeholder="Draft" />
                </Col>
              </Row>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
      <div
        style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
      >
        <CDBSidebar textColor="#fff" backgroundColor="#011FCB">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: 'inherit' }}
            >
              Accounting
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">
                  Purchase Order
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
      <div />
    </div>
  );
};

export default SideMenu;
