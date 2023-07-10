import React from 'react'
import './App.css';
import BasicInfo from './components/basicinfo';

// Very Easy

//   class App extends React.Component {
//     render(){
//     return (
//       <div className="App">
//        <p>Avyanna King</p>
//        <p>123-456-7890</p>
//        <p>01-02-2000</p>
//        <p>Ballerina</p>
//       </div>
//     );
//   }
// }

  

// Easy

  // class App extends React.Component {
  //   constructor(props){
  
  //   super(props);

  //   this.state = {
  //   person: {}
  //    };
  //   }

  //   render(){
  //   return (
  //     <div className="App">
  //      <p>Avyanna King</p>
//        <p>123-456-7890</p>
//        <p>01-02-2000</p>
//        <p>Ballerina</p>
  //     </div>
  //   );
  // }
  // }

// Medium + Hard

 class App extends React.Component {
   constructor(props){
  
   super(props);
   this.state = {
   people: [
    {
    name: 'Mike King', 
    number: '111-111-1111',
    dob: '02-02-2001',
    job: 'CEO'
   },
   {
    name: 'Nancy Adam', 
    number: '222-222-2222',
    dob: '03-03-2003',
    job: 'Software Engineer'
   },
   {
    name: 'Jill Scott', 
    number: '333-333-3333',
    dob: '04-04-2004',
    job: 'CEO'
   },
   {
    name: 'Hilary Banks', 
    number: '444-444-4444',
    dob: '05-05-2005',
    job: 'Software Engineer'
   },
  ]
    };
   }
   render() {
    const {people} = this.state
    return (
     <>
     {people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
     </>
   );
  }
 }




export default App;
