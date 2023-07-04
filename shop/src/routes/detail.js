import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from 'styled-components'

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

    //DetailCard 컴포넌트가 mount, update 될 때 실행
    useEffect(()=>{
        console.log('안녕')
        // for (var i=0;i<10000;i++){
        //     console.log(1);
        // }

        setTimeout(()=>{setVisibleState(false);console.log('2초 지남')},2000)
        
        
    })  

    

    let [count,setCount]=useState(0)

    
    let {id}=useParams();
    var returnIndex = props.shoes.findIndex(function(data){ return data.id === Number(id)});
    let imgNum = Number(returnIndex)+1
    let [visibleState, setVisibleState] = useState(true)

    return(
        <>
            <div className="container">
                {visibleState==true?<div className="alert alert-warning">
                    2초 이내 구매시 할인
                </div>:null}
                {count}
                <button onClick={()=>{setCount(count+1)}}>버튼</button>
                <Box>
                    <YellowBtn bg="blue">버튼</YellowBtn>
                    <YellowBtn bg="orange">버튼</YellowBtn>
                </Box>
                
                <div className="row">
                    <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+imgNum+".jpg"} width="100%" />
                    </div>
                    <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[returnIndex].title}</h4>
                    <p>{props.shoes[returnIndex].content}</p>
                    <p>{props.shoes[returnIndex].price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                    </div>
                </div>
            </div> 
        </>
    )
}

export default DetailCard;