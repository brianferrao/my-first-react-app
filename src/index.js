import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <label for="name" className="label">Enter Name: </label>
            <input type="text" id="name"/>
            <button style={{ backgroundColor: 'blue', color: 'white'}}>Submit</button>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);