import React, { useState, useEffect } from "react";

import "./App.css";
import Table from "./components/Table";
import axios from "axios";

function App() {
  // State for dishes list
  const [dishes, setDishes] = useState([]);

  // Fetch the data and populate the dishes array
  useEffect(() => {
    axios
      .get("/api/")
      .then(response => {
        setDishes(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return <Table dishes={dishes} onSort={() => {}} />;
}

export default App;
