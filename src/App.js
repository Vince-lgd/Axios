import {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [citationSimpson, setCitationSimpson] = useState('');
  const citSimpson = () =>{
  axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((res) => res.data)
    .then((data) => data[0])
    .then((data) => setCitationSimpson(data)
    
    );
};

return(
  <div className="App">
      
    <button type="button" onClick={citSimpson}>change quote</button>  
    {citationSimpson.quote}
    <img src={citationSimpson.image}></img>
    </div>
);
};


export default App;
