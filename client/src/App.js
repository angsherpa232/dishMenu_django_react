import React, { useState, useEffect } from "react";

import "./App.css";
import Table from "./components/Table";
import FilterTable from "./components/FilterTable";
import ErrorBox from "./components/ErrorBox";
import axios from "axios";

function App() {
  // State for dishes list
  const [dishes, setDishes] = useState([]);
  // State for sorting order
  const [sortBy, setSortBy] = useState("desc");
  // State for search keyword
  const [searchValue, setSearchValue] = useState(null);
  // State to keep track of dishes length
  const [error, setError] = useState(null);

  // Fetch the data and populate the dishes array
  useEffect(() => {
    axios
      .get("/api/")
      .then(response => {
        setDishes(response.data);
      })
      .catch(error => setError(error.message));
  }, []);

  // Handle async call for sorting
  const handleAsyncCallForSorting = (sortKey, byDesc) => {
    let url = searchValue ? `/api/?name=${searchValue}&` : `/api/?`;
    let sortDesc = byDesc ? "-" : "";
    axios
      .get(`${url}ordering=${sortDesc}${sortKey}`)
      .then(response => setDishes(response.data))
      .catch(error => setError(error.message));
    setSortBy(sortBy === "asc" ? "desc" : "asc");
  };

  // Sort handler
  const onSort = (event, sortKey) => {
    if (sortBy === "asc") {
      handleAsyncCallForSorting(sortKey);
    } else {
      handleAsyncCallForSorting(sortKey, "desc");
    }
  };

  // Search button onClick handler
  const onClickHandler = value => {
    axios
      .get(`/api/?name=${value}`)
      .then(response => {
        response.data.length === 0 ? setError("error") : setError(null);
        setDishes(response.data);
      })
      .catch(error => setError(error.message));
    setSearchValue(value);
  };

  return (
    <>
      <FilterTable onClickHandler={onClickHandler} />
      {error ? <ErrorBox /> : <Table dishes={dishes} onSort={onSort} />}
    </>
  );
}

export default App;
