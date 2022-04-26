import { Component } from 'react';
import { useDispatch } from 'react-redux';
import './css/dropDownMenu.css'
import { fetchFreeSearch } from './MoviesPage';
import { useState } from 'react';




const DropDownMenu = () => {

    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    return (
        <div className='div-search'>
             <div>
             <input className="input" type="text" onInput={e => setInput(e.target.value)} placeholder="Search..." />
             <button onClick={() => fetchFreeSearch(dispatch, input)} >Search</button>
        </div>
      
        <div className="dropMenu">
            

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <button className="dropButton">Category  <i style={{ marginLeft: '2rem' }} className="fa fa-caret-down"></i></button>

            <div className="dropContent">
                <p>Horror</p>
                <p>Comedy</p>
                <p>Drama</p>
                <p>Family</p>
                <p>Cartoons</p>
            </div>
        </div>

        </div>
       
    )

}

class App extends Component {
    state = {
        open: false,
    };
   handleButtonClick = () => {
        this.setState((state) => {
            return {
                open: !state.open
            };
        });
    };
}

export default DropDownMenu;
