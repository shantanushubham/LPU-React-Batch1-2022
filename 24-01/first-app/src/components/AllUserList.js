import React from "react";
import UserDetails from "./UserDetails";

class AllUserList extends React.Component {
  allUsers = [
    { name: "John", email: "john@email.com", phoneNumber: "+91-9876543210" },
    {
      name: "Shreyus",
      email: "shreyus@email.com",
      phoneNumber: "+91-7418529630",
    },
    {
      name: "Nilanjan",
      email: "nilanjan@email.com",
      phoneNumber: "+91-9638527410",
    },
  ];

  // let array = [
  //   <UserDetails key={0} user={allUsers[0]} />,
  //   <UserDetails key={1} user={allUsers[1]} />,
  //   <UserDetails key={2} user={allUsers[2]} />,
  // ];

  render() {
    return (
      <div>
        {this.allUsers.map((user, index) => (
          <UserDetails key={index} user={user} />
        ))}
      </div>
    );
  }
}
export default AllUserList;
