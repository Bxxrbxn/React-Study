import './App.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './pages/Detail.js';
import axios from 'axios';
import Cart from './pages/Cart.js';

function App() {

  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Menu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route path="/" element={
        <div>
                {/* 대문 사진 div 박스*/}
      <div className="main-bg"></div>
      <div className="Container">
        <div className="row">

        {/* <Card shoes={shoes[0]} i={1}></Card>
        <Card shoes={shoes[1]} i={2}></Card>
        <Card shoes={shoes[2]} i={3}></Card>  */}

        {
          shoes.map((a, i)=>{
            return(
            <Card shoes={shoes[i]} i={i}></Card>
            )
          })}
            </div>
          </div>
        </div>
        } />

        <Route path="*" element={<div>없는 페이지임</div>} />

        <Route path="/detail/:id" element={
          <Detail shoes={shoes} />
          } />
        <Route path="/cart" element={<Cart/>} />

      </Routes>


      <button onClick={()=> {
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((결과)=>{ 

        /* 괄호 벗겨 줘서 데이터 합쳐 줌 */
          let copy = [...shoes, ...결과.data];
          setShoes(copy); 
        })
        
       }}>더보기</button>
       
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props){
  return (
    <div className="col-md-4">
    <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) + '.jpg'} width="80%"/>
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.price}</p>
  </div>
  )
}


export default App;
