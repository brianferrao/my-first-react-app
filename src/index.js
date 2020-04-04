import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container  comments">
            <ApprovalCard>
                <CommentDetails 
                    author="Brian" 
                    avatar={faker.image.avatar()} 
                    postedOn="Today at 4:00PM"
                    comment="Awesome Post!!" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails 
                    author="Veva" 
                    avatar={faker.image.avatar()} 
                    postedOn="Today at 2:00PM"
                    comment="Awesome Post Again!!" />
            </ApprovalCard>            
            <ApprovalCard>
                <CommentDetails 
                    author="Leannah" 
                    avatar={faker.image.avatar()} 
                    postedOn="Today at 1:00AM"
                    comment="Awesome Post ??!!" />
            </ApprovalCard>            
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);