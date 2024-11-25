import React from 'react';
import axios from 'axios';

function UserList() {

  React.useEffect(() => {
    axios.get('http://54.146.218.73:3000/cnm-api/users').then((response) => {
      return console.log(response.data);
      
    }).catch(error => {
      return console.error(error);
    })
  }, []);
}

export default UserList;