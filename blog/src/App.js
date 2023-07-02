// warnig 무시
/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목,글제목변경] = useState(['나_Hi','다_안녕하세요','가_채로입니다']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal,setModal] =useState(false);

  //map 안에는 모두 콜백함수를 씀
  //앞의 array 자료 갯수만큼 함수안의 코드를 실행해줌
  //함수의 파라미터는 array안에 있던 자료임
  //return에 뭔가 적으면 array로 담아준다
  
  var newArray =[1,2,3].map(function(a){
    return a*10
  })
  console.log(newArray)

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id>블로그임</h4>
      </div>

      <button onClick={()=>{
        let copy=[...글제목];
        copy[0]='Hi3';
        글제목변경(copy);
      }}>글수정</button>

      <button onClick={()=>{
        let copy=[...글제목];
        copy.sort();
        글제목변경(copy);
      }}>정렬버튼</button>

      <span onClick={()=>{글제목변경(['Hi2','안녕하세요2','채로입니다2'])}}>😂</span>

      {/* <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{따봉변경([따봉[0]+1,따봉[1],따봉[2]])}}>👍</span>{따봉[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}<span onClick={()=>{따봉변경([따봉[0],따봉[1]+1,따봉[2]])}}>👍</span>{따봉[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{글제목[2]}<span onClick={()=>{따봉변경([따봉[0],따봉[1],따봉[2]+1])}}>👍</span>{따봉[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        //a는 하나씩, i는 0부터 반복될때마다 1씩 증가하는 수
        글제목.map(function(a,i){
          return(
            <div className="list">
              <h4 onClick={()=>{setModal(!modal)}}>{a}
                <span onClick={()=>{
                  let copy=[...따봉]
                  copy[i]=따봉[i]+1
                  따봉변경(copy)}}>👍</span>{따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {/* {
        [0,1,2].map(function(a){
          return(
            <div className="list">
              <h4>{글제목[a]}</h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      } */}

      {
        //리액트는 array 안에 html 담아놔도 잘 보여줌
        [<div>안녕</div>,<div>안녕</div>,<div>안녕</div>]
      }

      {
        //if대신 삼항연산자 사용
        modal==true?<Modal/>:null
      }
      
      {/* <Modal></Modal>
      <Modal/> */}

    </div>
  );
}

let Modal2 = () => {
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

//컴포넌트라고 불림
//return 안은 항상 div 컨테이너 하나에 묶여있어야함. 2개 이상 태그쓰면 에러
function Modal(){
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
