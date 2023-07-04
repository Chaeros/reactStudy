import logo from './logo.svg';
import './App.css';

import './App.css';
import data from './data.js';

//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Row,Col} from 'react-bootstrap';

import appleImagePath from './img/apple.PNG';
import iPhone14ProImage from './img/iPhone14ProImage.PNG';
import { useState } from 'react';

import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

import DetailCard from './routes/detail';

import React from 'react'

function App() {

  let [shoes]=useState(data)
  let [img]=useState(["data:image/jpeg;base64,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",
                       iPhone14ProImage,process.env.PUBLIC_URL+"/logo192.png"])
  let navigate = useNavigate(); // 페이지 이동 쉽게 가능 Link태그 대신

  var returnValue = data.find(function(val){ return val.id >= 0});
  console.log(returnValue);

  var returnValue = data.findIndex(function(val){ return val.id ===0});
  console.log(returnValue);

  var returnValue2 = data.filter(function(val){ return val.id >= 1});
  console.log(returnValue2);

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Apple Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>Back</Nav.Link>

            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>

      

      <Routes>
        <Route path="/" element={
        <div>
          메인페이지임
          <div className="main-bg"></div>
          <div className="container">
            <Container>
              <Row>
                {shoes.map(function(a,i){
                  return(
                    <Col>
                      <Product shoes={shoes} i={i} img={img}/>
                      </Col>
                  )
                })}
              </Row>
            </Container>
          </div>
        </div>}/>
        <Route path="/detail/:id" element={<DetailCard shoes={shoes} />}/>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<div>위치정보</div>}/>
        </Route>

        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주분시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}/>
        </Route>
        
        {/* <Route path="/about/member" element={<About/>}/>
        <Route path="/about/location" element={<About/>}/> */}

        {/* * 위로 나온 모든 경로들 제외하고 나머니 모든 경로들에 대해 적용(일명 404 페이지) */}
        <Route path="*" element={<div>404error 없는 페이지입니다.</div>}/>
      </Routes>

      {/* <div className="main-bg" style={{backgroundImage : 'url('+appleImagePath+')'}}></div> */}
      
      {/* <Button variant="primary">Primary</Button>{' '} */}
    </div>
  );
}

export default App;

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Product(props){
  return (
    <div>
      <img src={props.img[props.i]} width="80%"/>
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content}</p>
    </div>
  )
}

class Detail2 extends React.Component{
  componentDidMount(){

  }
     

}