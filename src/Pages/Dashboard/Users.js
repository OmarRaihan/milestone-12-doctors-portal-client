import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const { data: users, isLoading, refetch } = useQuery("users", () => fetch("https://protected-beach-11702.herokuapp.com/user", {
      method: 'GET',
      headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
  })
  .then((res) => res.json()));
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-2xl my-2">All Users: {users.length}</h2>
      <div className="overflow-x-auto my-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow 
              key={user._id} 
              user={user}
              refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
