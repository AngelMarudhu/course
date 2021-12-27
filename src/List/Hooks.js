import { useState, useEffect } from "react";
import React from "react";
import styled from "styled-components";

const Hooks = (props) => {
  const [user, setUser] = useState(null);

  const [searchBar, setSearchBar] = useState("Bret");

  useEffect(() => {
    const fetchs = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${searchBar}`
      );
      const resJson = await response.json();
      setUser(resJson[0]);
    };
    fetchs();
  }, []);
  return (
    <div>
      <Container>
        <input
          type="search"
          value={searchBar}
          onChange={(event) => setSearchBar(event.target.value)}
        ></input>

        {user ? (
          <div>
            <h3>user.name</h3>
            <h3>user.username</h3>
            <h3>user.email</h3>
          </div>
        ) : (
          <p>No User Found</p>
        )}
      </Container>
    </div>
  );
};

const Container = styled.div`
  color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  right: 0;
  left: 0;
  padding: 10px 0;

  button {
    color: white;
    background-color: green;
    border: none;
    padding: 20px;
    font-size: 20px;
    margin-top: 30px;
    cursor: pointer;
    text-align: center;
  }
  input {
    width: 100%;
    height: 70px;
    margin-top: 50px;
  }
`;

export default Hooks;
