import React from 'react';

 const FriendList = (props) => (
 
    <div > 
      {props.friends.map((friend) => (
          <div key={friend.id}>
          <p>Name: {friend.name}</p>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
          </div>
      ))}
     
     </div>
    
 )
 export default FriendList;