import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Detail(props) {

  let [count, setCount] = useState(0)
  let [alert, setAlert] = useState(true)
  let {id} = useParams();

  /* 탭 UI state */
  let [탭, 탭변경] = useState(0)


  useEffect(()=>{
    setTimeout(()=>{ setAlert(false) }, 2000)
  }, [count])

    return(
        <div className="container">
          {
            alert == true
            ? <div className="alert alert-warning">
            2초 이내 구매시 할인
          </div>
          :null
          }
          <button onClick={()=> { setCount(count+1) }}>버튼</button>
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>

      
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={()=> { 탭변경(0) }}
            eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=> { 탭변경(1) }}
            eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=> { 탭변경(2) }}
            eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>
        </Nav>

        <TabContent 탭={탭}/>


      </div> 
    )
}

function TabContent({탭}){

  let [fade, setFade] = useState('')

  /* [탭] 변경되면 안의 코드 실행해 줌 */
  /* state 변경 함수가 가까이에 있으면 동작X 코드마다 재렌더링 안 해 줌 */
  useEffect(()=>{
    setTimeout(()=>{ setFade('end') }, 100)
    return ()=>{
      setFade('')
    }
  }, [탭])
    
  return (<div className={'start ' + fade}>

  { [<div>내용0</div>, <div>내용1</div>, 
  <div>내용2</div>][탭] }

  </div>)
}



export default Detail;