import React, { Component } from 'react';
import axios from 'axios';

class Task4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      this.setState({ users: response.data.users });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>User Details</h1>
        {users.length > 0 ? (
          users.map((user, index) => (
            <div key={index}>
              <div>
                <img src={user.image} alt="User" style={{ width: '200px', height: '200px' }} />
              </div>
              <div>
                <p><strong>Name: </strong>{user.firstName} {user.lastName}</p>
                <p><strong>Email: </strong>{user.email}</p>
                <p><strong>Phone number: </strong>{user.phone}</p>
                <p><strong>Address: </strong>{user.address.address}, {user.address.city}, {user.address.state} {user.address.postalCode}</p>
                <p><strong>Gender: </strong>{user.gender}</p>
                <p><strong>Age: </strong>{user.age}</p>
                <p><strong>Height: </strong>{user.height} cm</p>
                <p><strong>Weight: </strong>{user.weight} kg</p>
                <p><strong>Eye Color: </strong>{user.eyeColor}</p>
                <p><strong>Hair Color: </strong>{user.hair.color}</p>
              </div>
              <hr /> {/* Add a horizontal line to separate each user */}
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    );
  }
}

export default Task4;
