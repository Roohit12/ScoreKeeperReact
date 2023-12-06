// let name;
// let email;
// let about;

// const handleNameChange = (e) => {
//   name = e.target.value;
//   rootElement.render(<App />);
// };
// const handleEmailChange = (e) => {
//   email = e.target.value;
//   rootElement.render(<App />);
// };
// const handleAboutChange = (e) => {
//   about = e.target.value;
//   rootElement.render(<App />);
// };

// const Card = () => (
//   <div className="card">
//     <h3>Name: {name}</h3>
//     <p>Email: {email}</p>
//     <p>About: {about}</p>
//   </div>
// );

// const Cards = () => (
//   <div className="App">
//     <Card />
//     <div className="inputs">
//       <input placeholder="Name" onChange={handleNameChange} />
//       <input
//         type="email"
//         placeholder="Email"
//         onChange={handleEmailChange}
//       />
//       <textarea
//         placeholder="About"
//         onChange={handleAboutChange}
//       ></textarea>
//     </div>
//   </div>
// );

// var isShown=true;
//  function setShow(){
//    isShown=!isShown;
//    rootElement.render(<Apps/>)
//  }

  
//   const Apps = () => (
  
//     <>
//       <h1>Coding Ninjas</h1>
//       <button onClick={setShow}> {isShown?"Hide Element Below":"Show Element Below"}</button>
      

//    {isShown && <p>para linguil lreum anishgm</p>}
//     </>
//   ); 
  


 
 let score=0;
 let wicket=0;
 let BallwiseRes=[];
 let hit=0;
 let inputRef= React.createRef();

 function add(num){
         hit=num;

       
        rootElement.render(<App/>)
      }
       
 
 function wicketAdd(){

       hit="w";
        rootElement.render(<App/>)
      }
 

 const ScoreButtons=()=>(
       <div>
        <button onClick={()=>add(0)}>0</button>
        <button onClick={()=>add(1)}>1</button>
        <button onClick={()=>add(2)}>2</button>
        <button onClick={()=>add(3)}>3</button>
        <button onClick={()=>add(4)}>4</button>
        <button onClick={()=>add(5)}>5</button>
        <button onClick={()=>add(6)}>6</button>
        <button onClick={wicketAdd}>wicket</button>
        </div>
 )

 const Result=()=>(
  <div>

    {
    BallwiseRes.map((res,index)=>(
      <>
      {index % 6 === 0?<br/>:null}
        <span key={index}>{res === 0? <strong>.</strong>:res}</span>&nbsp;&nbsp;&nbsp;</>))}
  </div>
 )

 function handleSubmit(event){
  event.preventDefault();
    
  if(hit=="w"){
    wicket+=1;
  }else
    score += hit;

    BallwiseRes.unshift(
      <span>
        {`${hit} ,${inputRef.current.value}`}
      </span>
      );
    hit=0;
    inputRef.current.value="";

    rootElement.render(<App />);

  }

 const Form =() =>(
    <form onSubmit={handleSubmit}>
      <input value={hit} />
      <input  ref={inputRef} placeholder="Add a comment" />
      <button>Submit</button>
    </form>
 )


 const App = () =>(
        <>
        <h1>Score Tracker</h1>
        <h2>Score : {score}/{wicket}</h2>
        <ScoreButtons/>
        <br/>
        
        <Form/>
        <hr/>

        {BallwiseRes.map((res,index)=>(
          <p key={index}>{res}</p>
        ))}

        </>
)



const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);




 
