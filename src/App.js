import React, {useState} from 'react';

function App() {

const [inputField , setInputField] = useState({
    first_name: '',
    last_name: '',
    gmail: '',
    gender: '',
    courses:'Angular', 
    
})
const [error,setErrorMessage] = useState({
  first_name:'',
  last_name:'',
  gmail:'',
  gender:'',
})


// const inputsHandler = (e) =>{

//     const { name, value } = e.target;     
//    setInputField((prevState) => ({
//      ...prevState,
//      [name]: value,  

     
//    }));
// }

const submitButton = (e) =>{
  e.preventDefault();
    console.log(inputField)
}

const inputsHandler = (e) => {
  if(e.target.value === ''){
    setErrorMessage({...error,[e.target.name]: `${e.target.name} is  required`})

  }else{
    setErrorMessage({...error,[e.target.name]:''})
  }
  setInputField({...inputField, [e.target.name]:e.target.value});
}


return (
    <form >
      <div>
        <h1>
          Controlled Form
        </h1>
      </div>
      <div>
        <label>First Name</label>
        <input 
        type="text" 
        name="first_name" 
        onChange={inputsHandler} 
        value={inputField.first_name}/>
        </div>
        <span style={{color:'red'}}>
          {' '}
          {error.first_name}{' '}

        </span>
        <br/>
       
         
        <div>
        <label>Last Name</label>
        <input 
        type="text" 
        name="last_name" 
        onChange={inputsHandler} 
        value={inputField.last_name}/>
        </div>
        <span style={{color:'red'}}>
          {' '}
          {error.last_name}{' '}

        </span>
        <br/>
        
        <div>
        <label>Gmail &nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input 
        type="gmail" 
        name="gmail" 
        onChange={inputsHandler} 
        value={inputField.gmail}/>
        </div>
        <span style={{color:'red'}}>
          {' '}
          {error.gmail}{' '}

        </span>
        <br/>
        
        <div>
        <label>Gender</label>
        <input 
        type="radio" 
        name="gender" 
        value="male"
        onChange={inputsHandler} 
        />Male
        
        

        <input 
        type="radio" 
        name="gender" 
        value="Female"
        onChange={inputsHandler} />
        Female
        
      </div>
      <br />

      <div>
      <label> Courses : </label>
            <select
              name="courses"
              onChange={inputsHandler} 
              value={inputField.courses}
            >
              <option> Angular </option>
              <option> React </option>
              <option> Node </option>
              <option> Mongo </option>
            </select>
            </div>
          <br />
        
        <div>
        <button onClick={submitButton}>Submit</button>&nbsp;
        <button>Reset</button>
        </div>
    </form>
)
}

export default App