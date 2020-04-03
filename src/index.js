import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails';
import faker from 'faker';


const App = () => {
    return (
        <div className="ui comments">
            <CommentDetails 
                author="Brian" 
                avatar={faker.image.avatar()} 
                postedOn="Today at 4:00PM"
                comment="Awesome Post!!" />
            <CommentDetails 
                author="Veva" 
                avatar={faker.image.avatar()} 
                postedOn="Today at 2:00PM"
                comment="Awesome Post Again!!" />
            <CommentDetails 
                author="Leannah" 
                avatar={faker.image.avatar()} 
                postedOn="Today at 1:00AM"
                comment="Awesome Post ??!!" />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);