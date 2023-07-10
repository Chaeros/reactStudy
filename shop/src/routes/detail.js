import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav';

import {Context1} from './../App.js'

//장점
//css까지 가지 않고도 버튼을 스타일 줘서 생성 가능
//스타일이 다른 js파일로 오염되지 않음
//페이지 로딩시간 단축
let YellowBtn = styled.button`
    background : ${props => props.bg};
    color : ${props => props.bg =='blue'?'white':'black'};
    padding : 10px;
`

let OrangeBtn = styled.button`
    background : orange;
    color : black;
    padding : 10px;
`

// //기존 스타일 복사 가능/ 커스터마이징도
// let NewBtn = styled.button(YellowBtn)`

// `

let Box = styled.div`
    background : grey;
    padding : 20px;
`

function DetailCard(props){

    let [count,setCount]=useState(0)
    let [num,setNum]=useState('')

    let [alert,setAlert]=useState(true)
    let [tab,setTab]=useState(0)

    let [fade,setFade]=useState('')

    let {stock, shoes} = useContext(Context1)  // 보관함 해체해줌

    useEffect(()=>{
        setTimeout(()=>{setFade('end')},100)
        return ( setFade(''))
    },[])

    //DetailCard 컴포넌트가 mount, update 될 때 실행
    useEffect(()=>{
        console.log(2)
        // for (var i=0;i<10000;i++){
        //     console.log(1);
        // }

        if(isNaN(num)){
            alert('그러지마세요')
        }

        let a = setTimeout(()=>{setVisibleState(false);},2000)
        //useEffect가 실행되기 전에 실행시켜야할 코드 return
        return ()=>{
            console.log(1)
            clearTimeout(a)
        }
        
    },[count,num])
    //dependency 추가로 count가 변할때만 위 코드가 진행됨 
    //반대로 그냥 [] 로 안에 아무것도 없으면 mout할때 1회만 실행됨
    
    let {id}=useParams();
    var returnIndex = props.shoes.findIndex(function(data){ return data.id === Number(id)});
    let imgNum = Number(returnIndex)+1
    let [visibleState, setVisibleState] = useState(true)

    return(
        <>
            <div className={'container start '+fade}>
                {visibleState==true?<div className="alert alert-warning">
                    2초 이내 구매시 할인
                </div>:null}
                {count}
                <button onClick={()=>{setCount(count+1)}}>버튼</button>
                <Box>
                    <YellowBtn bg="blue">버튼</YellowBtn>
                    <YellowBtn bg="orange">버튼</YellowBtn>
                </Box>
                
                {stock}
                <div className="row">
                    <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+imgNum+".jpg"} width="100%" />
                    </div>
                    <div className="col-md-6">
                    <input></input>
                    <input onChange={(e)=>{setNum(e.target.value)}}/>
                    <h4 className="pt-5">{props.shoes[returnIndex].title}</h4>
                    <p>{props.shoes[returnIndex].content}</p>
                    <p>{props.shoes[returnIndex].price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                    </div>
                </div>

                {/* defaultActiveKey는 기본으로 눌려있을 버튼을 뜻한다. 
                아무것도 없으면 눌려있는 버튼이 없는 것*/}
                <Nav fill variant="tabs" defaultActiveKey="link-1">
                {/* <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item> */}
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=>{setTab(0)}}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={()=>{setTab(1)}}>버튼2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" onClick={()=>{setTab(2)}}>버튼3</Nav.Link>
                </Nav.Item>
                </Nav>

                {/*조건문 쓰고싶으면 중괄호 열고 삼항연산자, 삼항 연산자는 하나의 중괄호에 연달아 쓸수 없음*/}
                {/* {tab==0?<div>내용0</div>:null}
                {tab==1?<div>내용1</div>:null}
                {tab==2?<div>내용2</div>:null} */}

                <TabContent tab={tab}/>

            </div> 
        </>
    )
}

//html 내부에서는 if 조건문같은건 쓸 수 없기때문에 바깥에서 써야한다.
//return 해서 내부 태그들을 반환하는 것임
function TabContent({tab}){  // props 대신 이런식으로 변수를 받아올 수 있다. 여러개도 가능하다
    // if (tab==0){
    //     return <div>내용0</div>
    // }
    // else if (tab==1){
    //     return <div>내용1</div>
    // }
    // else if (tab==2){
    //     return <div>내용2</div>
    // }
    
    let [fade,setFade]=useState('')
    let {stock} = useContext(Context1)

    useEffect(()=>{
        setTimeout(()=>{setFade('end')},100)
        
        return ()=>{
            setFade('')
        }
    },[tab])  //이제 tab이 변할 때마다 useEffect 동작한다.

    return (<div className={'start '+fade}>{[<div>{stock}</div>,<div>내용1</div>,<div>내용2</div>][tab]}</div>) // 이런 방법도 있다.
}

export default DetailCard;