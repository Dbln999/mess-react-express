import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetch = () => {
  return axios.get("/chat/get");
};

export const Messages = ({ form }) => {
  const { isLoading, data, isFetching, error, refetch } = useQuery(
    "message",
    fetch,
    {
        refetchInterval: 5000
    }

  );

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      {data?.data.map((msg) => {
        const messageClassName =
          "message" + (msg.user === form.user ? "-green" : "");
        return (
          <div key={msg._id} className={`${messageClassName} my-2 w-25`}>
            <div className="userName mx-3">{msg.user}</div>
            <div className="mx-4 fs-5">{msg.title}</div>
            <div className="text-end mx-4">{msg.date}</div>
          </div>
        );
      })}
    </>
  );
};
