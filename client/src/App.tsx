import { useState, useEffect } from "react";
import styled from "./App.module.scss";
import axios from "axios";

/**
 * @summary App component
 * @description App component is the parent component of the application. It is responsible for fetching the data from the API and passing it to the child components.
 * @returns JSX.Element
 */



const App = () => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    axios.get('http://localhost:8080/cats').then(
      (response) => {
        setData(response.data);
      }).catch((error) => {
        console.log(error);
      }
    )
  }, []);

  return (
    <div className={styled.App}>
      <h1>React Template</h1>
      <h2>{data}</h2>
    </div>
  );
};

export default App;
