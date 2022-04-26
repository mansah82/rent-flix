import { Component } from 'react';
import './css/dropDownMenu.css'




const DropDownMenu = () => {


    return (
        <div className='div-search'>
             <div>
 <input className='input' type="text" placeholder="Search.." />
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