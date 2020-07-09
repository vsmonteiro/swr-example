import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../interfaces/User";
import api from "../services/api";
import { useFetch } from "../hooks/useFetch";

const UserDetail: React.FC = () => {
  const { id } = useParams();
  const { data: user } = useFetch(`/users/${id}`);

  if (!user) {
    return <p> Carregando... </p>;
  }

  return (
    <div>
      <p> id: {user.id} </p>
      <p> name: {user.name} </p>
    </div>
  );
};

export default UserDetail;
