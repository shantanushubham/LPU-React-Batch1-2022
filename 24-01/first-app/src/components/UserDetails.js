import React, { Component } from "react";

const UserDetails = ({ user = {} }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <h5>
        Email: {user.email}
        <br />
        Phone Number: {user.phoneNumber}
      </h5>
    </div>
  );
};

// class UserDetails extends Component {
//   render() {
//     this.props.user = {
//       name: "Alex",
//       email: "alex@email.com",
//       phoneNumber: 123456,
//     };
//     return (
//       <div>
//         <h3>{this.props.user.name}</h3>
//         <h5>
//           Email: {this.props.user.email}
//           <br />
//           Phone Number: {this.props.user.phoneNumber}
//         </h5>
//       </div>
//     );
//   }
// }

export default UserDetails;
