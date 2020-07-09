import React, { useCallback } from "react";
import { User } from "../interfaces/User";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import api from "../services/api";
import { mutate as mutateGlobal } from "swr";

const UserList: React.FC = () => {
  const { data, mutate } = useFetch<User[]>("/users");

  const handleChangeUsername = useCallback(
    (id: number) => {
      api.put(`/users/${id}`, { name: "Nicole" });
      const updatedList = data?.map((user) => {
        if (user.id === id) {
          return { ...user, name: "Nicole" };
        }
        return user;
      });

      mutate(updatedList, false);
      mutateGlobal(`/users/${id}`, { id, name: "Nicole" });
    },
    [data, mutate]
  );

  return (
    <div>
      <ul>
        {data?.map((user) => (
          <>
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
            <button onClick={() => handleChangeUsername(user.id)}>
              {" "}
              Change user name{" "}
            </button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
