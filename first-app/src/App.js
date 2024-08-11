//import logo from './logo.svg';
//import './App.css';
//import { useState } from 'react';
//import { BrowserRouter, Route, Routes, Link, useParams, useSearchParams} from "react-router-dom"
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
//import React from 'react';
//import {Container, Form, Button} from 'react-bootstrap';
// //embbeded functions (remember order)
// function Deeptest (prop) {
//   return (
//     <p>
//       Extra: {prop.extra}
//     </p>
//   );
// }
// //Functions with Properties
// function PropTest (prop){
//   return (
//     <p>
//       This is a test of Properties
//       <p>Name: {prop.name}</p>
//       <p>Date: {prop.date}</p>
//       <Deeptest extra={prop.deeptest} />
//     </p>

//   );

// }
// //Event Handling
// function Greeting(prop) {
//   function helloClick() {
//     alert(`Hello, ${prop.name}!`);
//   }
//   return (
//     <button onClick={helloClick}>
//       Say Hello
//     </button>
//   )
// }
// //Conditional Event Handling
// function ConGreeting(prop) {
//   function greetClick (event) {
//     const greeting = event.target.id === 'helloBtn'
//       ? "Hello" : "Hey";

//     alert(`${greeting}, ${prop.name}!`);
//   }

//   return (
//     <div>
//       <button id='helloBtn' onClick={greetClick}>
//         Say Hello
//       </button>
//       <button id='heyBtn' onClick={greetClick}>
//         Say Hey
//       </button>
//     </div>

//   );
// }
// //Passing Argurments
// function ArgGreeting(prop) {
//   function greetClick(greeting) {
//     alert(`${greeting}, ${prop.name}`);
//   }
//   return (
//     <div>
//       <button onClick={ () => greetClick("Hello")} >
//         Say Hello
//       </button>
//       <button onClick={ () => greetClick("Hey")}>
//         Say Welcome
//       </button>
//     </div>

//   );
// }
// ///State Changes
// function StateGreeting (prop) {
//   const [greeting, setgreeting] = useState("Hi!");

//   return (
//     <div>
//       <p>
//         {greeting}
//       </p>
//       <button onClick={ () => setgreeting(`Hello, ${prop.name}!`)}>
//         Say Hello
//       </button>
//       <button onClick={ () => setgreeting(`Hey, ${prop.name}`)}>
//         Say Hey
//       </button>
//     </div>
//   );
// }
// //Multiple State Variables
// function Movie() {
//   const [title, setTitle] = useState("Schindler's List");
//   const [rating, setRating] = useState("R");
//   const [releaseYear, setReleaseYear] = useState(1993);

//   function changeMovie () {
//     setTitle("Hidden Figures")
//     setRating("PG-13)");
//     setReleaseYear(2016);
//   }

//   return (
//     <>
//       <h1>Favorite Movie</h1>
//       <p>
//         {title}, {rating}, {releaseYear}
//       </p>
//       <button onClick={changeMovie}>
//         Change Movie
//       </button>
//     </>
//   );
// }
// //Objects in States
// function ObjMovie() {
  
//   const [movie, setMovie] = useState({
//     title: "Inception",
//     rating: "PG-13", 
//     releaseYear: 2010
//   });

//   function changeTitle() {
//     setMovie(prevState => ({
//       ...prevState, title: "Titanic"
//     }));
//   }

//   return (
//     <>
//       <h1>
//         Favorite Movie 2
//       </h1>
//       <p>
//         {movie.title}, {movie.rating}, {movie.releaseYear}
//       </p>
//       <button onClick={changeTitle}>
//         Change Title
//       </button>
//     </>
//   );

// }
// //Conditional Rendering
// function Light(prop) {
//   if (prop.on) {
//     return <p> Light is on!</p>
//   } else {
//     return <p> Light is off!</p>
//   }
// }
// //REMEMBER TERNARY OPERATORS 

// //condition ? expression1 : expression2, after evaluating the condition, 
// //the operator returns the first expression if the condition is true and 
// //the second if false  

// //Tenary Operations
// function Light2(prop) {
//   return (
//     <>
//     { prop.on ? 
//       <p>Light is on!</p>
//     :
//       <p>Light is off!</p>
//     }
//     </>
//   );
// }
// // //Logical && operator
// // && may be used to render conditional content by placing an expression 
// // on the left side of && and JSX to render on the right side of &&. When 
// // expression true the JSX ren, false it does not
// function Account(props) {
//   return (
//      <>
//         <h1>Account Information</h1>
//         { props.balance > 0 && 
//            <p>You owe ${props.balance}.</p>
//         }
//      </>
//   );
// }
// //Lists and map() function
// function CourseList() {
//   const courseTitles = ["African History", "Greek II", "Basic Chemistry"];

//   return (
//     <ol>
//       {courseTitles.map(course => <li>{course}</li>)}
//     </ol>
//   );
// }
// //Keys "key" <-Keyword
// function Courselist2() {
//   const courses = [
//     {id: 1, title: "African History"},
//     {id: 2, title: "Greek II"},
//     {id: 3, title: "Basic Chemistry"}
//   ];

//   return (
//     <ol>
//       {courses.map(course => 
//         <li key={course.id}>
//           {course.title}
//         </li>
//       )}
//     </ol>
//   );

// }
// //Forms
// function RegistrationForm() {
//   function handleSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     alert(`Username: ${form.username.value}`);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>
//         <label htmlFor="username">
//           Username?
//         </label>
//         <input 
//           type='text'
//           id='username' />
//       </p>
//       <input type='submit' value='Register' />
//     </form>
//   );
// }
// //Controlled Inputs, ie a value variable is already assigned for user inputs
// function RegistrationForm2() {
//   const [username, setUsername] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//     alert(`Username: ${username}`);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>
//         <label htmlFor='username'>
//           Username?
//         </label>
//         <input
//           type='text'
//           id='username'
//           value={username}
//           onChange={(e) => setUsername(e.target.value)} />
//       </p>
//       <input type='submit' value="Register" />
//     </form>

//   );
// }
// //multiple inputs
// //two strats
//   //Create seperate state variables for each input
//   //create a single state object for all inputs
// function MultiVarForm(){
//   const [inputs, setInputs] = useState({});

//   function handleSubmit(event) {
//     event.preventDefault();
//     alert(`Username: ${inputs.username}\nEmail: ${inputs.email}`);
//   }

//   function handleChange(event) {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name] : value}));
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <p>
//         <label htmlFor='username'>
//           Username2?
//         </label>
//         <input type='text' 
//         id='username'
//         name='username'
//         value={inputs.username || ""}
//         onChange={handleChange} />
//       </p>
//       <p>
//         <label htmlFor='email'>
//           Email?
//         </label>
//         <input type='text'
//           id='email'
//           name='email'
//           value={inputs.email || ""}
//           onChange={handleChange} />
        
//       </p>
//       <input type='submit' value='Register'></input>
//     </form>
//   );
// }
// //Other form widgets
// function WidRegistrationForm() {
//   const [inputs, setInputs] = useState({
//     shirtSize: "Medium",
//     notifications: true
//   });

//   function handleSubmit (event) {
//     event.preventDefault();
//     alert(`Username: ${inputs.username}\n` +
//       `Email: ${inputs.email}\n` +
//       `Shirt size: ${inputs.shirtSize}\n` +
//       `Notifications: ${inputs.notifications}\n` +
//       `Bio: ${inputs.bio}`
//     );
//   }

//   function handleChange(event) {
//     const name = event.target.name;
//     const value = event.target.type === "checkbox" ?
//       event.target.checked : event.target.value; //conidtional within variable assignment
//     setInputs(values => ({...values, [name]: value}));
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//        <p>
//           <label htmlFor="username">
//              Username?
//           </label>
//           <input 
//              type="text" 
//              id="username"
//              name="username"
//              value={inputs.username || ""}
//              onChange={handleChange} />
//        </p>
//        <p>
//           <label htmlFor="email">
//              Email?
//           </label>
//           <input 
//              type="text" 
//              id="email"
//              name="email"
//              value={inputs.email || ""}
//              onChange={handleChange} />
//        </p>
//        <p>
//           <label htmlFor="shirtSize">
//              Shirt size?
//           </label>
//           <select id="shirtSize" name="shirtSize" 
//              value={inputs.shirtSize} onChange={handleChange}>
//              <option value="Small">Small</option>
//              <option value="Medium">Medium</option>
//              <option value="Large">Large</option>
//           </select>
//        </p>
//        <p>
//           <label htmlFor="notifications">
//              Receive notifications?
//           </label>
//           <input type="checkbox" id="notifications" name="notifications"
//              checked={inputs.notifications} onChange={handleChange} />
//        </p>
//        <p>
//           <label htmlFor="bio">
//              Short bio?
//           </label>
//           <textarea id="bio" name="bio" 
//              value={inputs.bio} onChange={handleChange} />
//        </p>

//        <input type="submit" value="Register" />
//     </form>
//   );
// }
// //ToDO
// //extension for TodoList
// function TodoItems(props) {
// //the delete function here requires it be built within the parent 
// //function TodoList
//   const todoItems = props.items;

//   return (
//      <ol>
//         {todoItems.map((item) =>
//            <li key={item.key}>
//               {item.text} &nbsp;
//               <button onClick={() => props.delete(item.key)}> 
//                 X
//               </button> 
//            </li>
//         )}
//      </ol>
//   );
// }
// //MainFunctionToDO
// // function TodoList() {

// //   const [task, setTask] = useState("");
// //   const [taskItems, setTaskItems] = useState([]);

// //   function addItem (event) {
// //     event.preventDefault();
// //     const newItem = {
// //       key: Date.now(),
// //       text: task
// //     };

// //     setTaskItems(prevItems => [...prevItems, newItem]);
// //   }
// //   //deletes task
// //   function deleteItem(key) {
// //     setTaskItems(prevItems => prevItems.filter(
// //       item => item.key !== key));
// //   }

// //   return (
// //     <>
// //       <h1>Todo List</h1>
// //       <form onSubmit={addItem}>
// //         <label htmlFor='task'> Task?</label>
// //         <input id='tasks' type='text' 
// //           value={task} onChange={(e) => setTask(e.target.value)} />
// //           <button type='submit'>Add</button>
// //       </form>
// //       <TodoItems items={taskItems} 
// //         delete={deleteItem} />
// //     </>
// //   );
// // }

// //Same TodoList Func but with Usability improvements
// function TodoList() {

//   const [task, setTask] = useState("");
//   const [taskItems, setTaskItems] = useState([]);

//   //adds items
//   function addItem (event) {
//     event.preventDefault();
    
//     //new additions to addItem
//     if(task.trim() !== "") {
//       const newItem = {
//         key: Date.now(),
//         text: task
//       };

//       setTaskItems(prevItems => [...prevItems, newItem]);
//       setTask("");
//     }

//     event.target.task.focus();
//   }
  
//   //deletes task
//   function deleteItem(key) {
//     setTaskItems(prevItems => prevItems.filter(
//       item => item.key !== key));
//   }

//   return (
//     <>
//       <h1>Todo List</h1>
//       <form onSubmit={addItem}>
//         <label htmlFor='task'> Task?</label>
//         <input id='task' type='text' 
//           autoFocus
//           value={task} onChange={(e) => setTask(e.target.value)} />
//           <button type='submit'>Add</button>
//       </form>
//       <TodoItems items={taskItems} 
//         delete={deleteItem} />
//     </>
//   );
// }

// //webpages == MULTI PAGE DEVELOPMENT ===
// function Home (){
//   return (
//     <p>
//       This is the HOME page
//     </p>
//   )
// }
// function About() {
//   return (
//   <p>
//     this is the ABOUT page
//   </p>
//   );
// }
// function Products() {
//   return (
//     <p>
//       this is the PRODUCTS page
//     </p>
    
//   );
// }
// function NotFound() {
//   return (
//     <p>
//       NOT FOUND
//     </p>
//   );
// }
// //webpages

// //URL information extraction using useParams()
// const products = [
//   {id: 111, name: "Blaze", desc: "About Blaze..."},
//   {id: 222, name: "Coment", desc: "About Comet..."},
//   {id: 333, name: "Doodle", desc: "About Doodle..."},
//   {id: 444, name: "Bloom", desc: "Add a pleasing smell to any room."}
// ];
// function ProductDetails() {
//   const { productId } = useParams();
//   const product = products.find(prod => prod.id == productId);
//   //lines 553 - 560 direct to a new format when an improper url is 
//   //inputed   
//   return (
//     <>
//       <h1>Product Details</h1>
//       { product ?
//         <>
//           <p>Name: {product.name}</p>
//           <p>Description: {product.desc}</p>
//         </>
//         :
//         <p>Product Not Found.</p>
//       }
//     </>
//   );
// }
// //Search Parameters
// function ProductSearch() {
//   const [searchParams, setSearchParams] = useSearchParams();

//   let searchResults = [];

//   //if user has entered search text, find what matches
//   if (searchParams.get("prod")) {
//     searchResults = products.filter(product => {
//       const searchText = searchParams.get("prod").toLowerCase();
//       return product.name.toLowerCase().includes(searchText);
//     });
//   }

//   return (
//     <>
//       <h1>Product Search</h1>
//       <input 
//         type='search'
//         placeholder='Search'
//         value={searchParams.get("prod") || ""}
//         onChange={(e) => setSearchParams({ "prod" : e.target.value })} />
//       <ol>
//         {searchResults.map(product => 
//           <li key={product.id}>
//             <Link to={`/products/${product.id}`} />
//               {product.name}
//           </li>
//         )}
//       </ol>
//     </>
//   );
// }
// //New App() function for MULTI PAGE
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/products' element={<Products />} />
//         <Route path='/products/:productId' element={<ProductDetails />} />
//         <Route path='*' element={<NotFound />} />
//         <Route path='/products/search' element={<ProductSearch />} />
//       </Routes>
//       <div>Does this also appear on every webpage?</div>
//       <div>This page serves as the primary and everything is loaded to it</div>
//       <div>Versus the old style where it would straight up load a new page</div>
//       <div>Are these get requests with update requests for essentially the </div>
//       <div>same page?</div>
//       <NavBar />
//     </BrowserRouter>
//   );
// }
// function NavBar() {
//   return (
//     <nav>
//       <div>This is a persistent nav bar</div>
//       <ul>
//         <li>
//           <Link to='/'>Home</Link>
//         </li>
//         <li>
//           <Link to='/products'>Products</Link>
//         </li>
//         <li>
//           <Link to='/about'>About</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }
// //END OF ===MULTIPAGE//SEARCH//DETAILS===

//React with BootStrap 
// function App() {

//   function handleSubmit(event) {
//      event.preventDefault();
//      const form = event.target;
//      alert(`Name: ${form.fullName.value}\n` +
//         `Email: ${form.email.value}\n` +
//         `Notif: ${form.notifications.checked}`);
//   }

//   return (
//      <Container>
//         <h2>User Registration</h2>
//         <Form onSubmit={handleSubmit}>
//            <Form.Group className="mb-3" controlId="fullName">
//               <Form.Label>Full name</Form.Label>
//               <Form.Control type="text" placeholder="First Last" />
//            </Form.Group>            
//            <Form.Group className="mb-3" controlId="email">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" placeholder="user@email.com" />
//               <Form.Text className="text-muted">
//                  Your email address will never be shared.
                 
//               </Form.Text>
//            </Form.Group>
//            <Form.Group className="mb-3" controlId="notifications">
//               <Form.Check type="checkbox" label="Receive email notifications" />
//            </Form.Group>
//            <Button type="submit">
//               Submit
//            </Button>
//         </Form>
//      </Container>
//   );
// }

//REACT with BootStrap Modals Chp: 15.12
//Modal component displays a modal dialog box on top of the underlying page
// import Button from "react-bootstrap/Button"
// import Modal from "react-bootstrap/Modal"
// import { useState } from "react";

// function App() {
//   const [show, setShow] = useState(false);

//   const hideModal = () => setShow(false);
//   const showModal = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={showModal}>
//         Send email
//       </Button>

//       <Modal show={show} onHide={hideModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Sending</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to send the email?
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={hideModal}>
//             Yes
//           </Button>
//           <Button variant="secondary" onClick={hideModal}>
//             No
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

//Fetching Data Chp 15.13
//Calling fetch
//useEffect's dependency array
// import { useEffect, useState } from "react";

// function App() {
//   const [forecast, setForecast] = useState([{ high: 0 }]);
//   //dependcy array
//   const [zip, setZip] = useState('90210');

//   //dependcy array 
//   function handleSubmit(event) {
//     event.preventDefault();
//     setZip(event.target.zip.value);
//   }



//   useEffect(() => {
//     async function fetchForecast() {
//       const url = `https://wp.zybooks.com/weather.php?zip=${zip}`; //dependecny array 
//       const response = await fetch(url);
//       if (response.ok) {
//         const result = await response.json();
//         if (result.success) {
//           setForecast(result.forecast);
//         }
//       }
//     }

//     fetchForecast();
//   }, [zip]);

//   return (
//     <>
//       <h1>Five Day Weather Forecast For {zip}</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="number" id="zip" />
//         <button type="submit">Submit</button>
//       </form>
//       <ol>
//         {forecast.map((day, index) => (
//           <li key={index}>
//             High: {day.high}, Low: {day.low}, Desc: {day.desc}
//           </li>
//         ))}
//       </ol>
//     </>
//   );
// } //end of 

import { useEffect, useState } from "react";

function App() {
  const [forecast, setForecast] = useState([]);
  const [zip, setZip] = useState("90210");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setZip(event.target.zip.value);
  }

  useEffect(() => {
    async function fetchForecast() {
      setForecast([]);
      setIsLoading(true);
      setErrorMessage("");

      const url = `https://wp.zybooks.com/weather.php?zip=${zip}`;
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        if(result.success) {
          setForecast(result.forecast);
        } else {
          setErrorMessage(result.error);
        }
      } else {
        setErrorMessage("Error in the response.");
      }
      
      setIsLoading(false);
    }
  
    fetchForecast();
  }, [zip]);

  return (
    <>
      <h1>Five Day Weather Forecast For {zip}</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" id="zip" />
        <button type="submit">Submit</button>
      </form>

      {errorMessage.length > 0 && <p>{errorMessage}</p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ol>
          {forecast.map((day, index) => (
            <li key={index}>
              High: {day.high}, Low: {day.low}, Desc: {day.desc}
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
/////////MAIN FUNCTION//////////////
// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>
//           So this is dynamically loaded? That is wild. 
//         </p>
//         <p>
//           <PropTest name="Daniel"
//               date="05/30/2024"
//               deeptest="So I can change this to whatever" />
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         {/* <Greeting name='Jose' />
//         <ConGreeting name="Jeff" />
//         <ArgGreeting name="Dan" />
//         <StateGreeting name='Dildo' />
//         <Movie />
//         <ObjMovie />
//          */}

//          {/* <Light on={true}/>
//          <CourseList />
//          <Courselist2 />
//          <RegistrationForm />
//          <RegistrationForm2 />
//          <MultiVarForm /> */}
//          <WidRegistrationForm />
//          <TodoList />
         

//       </header>
//     </div>
//   );
// }
//Executes from bottom up
//END OF BASIC MAIN APP
export default App;
