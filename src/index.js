import React, { createElement, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const persons=[
  {"id":1,first_name:"Ayoub",last_name:"ALGHARRASS",age:22},
  {"id":2,first_name:"Hassan",last_name:"ALGHARRASS",age:29},
  {"id":3,first_name:"Meriam",last_name:"ALGHARRASS",age:32},
  {"id":4,first_name:"Rida",last_name:"ALGHARRASS",age:26},
  {"id":5,first_name:"Youness",last_name:"ALGHARRASS",age:28},
]

function ChangeStatus(){
  const [status,setStatus]=useState("Open")

  return (
    <div className='container'>
    
    <div className="card m-3">
      <div className="card-body">
      <h1>Stauts: {status}</h1>
      <button className='btn btn-primary m-1' onClick={()=>setStatus("Opened")}>Open</button>
      <button className='btn btn-danger m-1' onClick={()=>setStatus("Closed")}>Close</button>

      </div>
    </div>
    </div>
  )

}


function NonAuthorized(){
  return <div className="container">
          <h1 >
            401
          </h1>
  </div>
}

function Person(props){
  if(props.secretKey!="knocknoc")
    return <NonAuthorized/>
  return (
      <div className="container">
           <table className='table table-dark'>
      <thead>
        <tr>
        <th scope='col'>Id</th>
        <th scope='col'>First Name</th>
        <th scope='col'>Last Name</th>
        <th scope='col'>Age</th>
        </tr>
      </thead>

  <tbody>
        {props.listNames.map(perso=>(
        <tr key={perso.id}>
          <td scope='row'>{perso.id}</td>
          <td>{perso.first_name}</td>
          <td>{perso.last_name}</td>
          <td>{perso.age}</td>
        </tr>
        )
        )}
      </tbody>
    
    </table>
      </div>
  )
}
function App(){
  return (
    <>
    <Person secretKey="knocknoc" listNames={persons}/>
    <ChangeStatus/>
    </>
    )
    
}

ReactDOM.render(
    <App/>,    
    document.getElementById('root')
);