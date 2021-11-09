import React from "react";
import './App.css';
import Table from "./Table";
import {SelectColumnFilter} from "./Components/SelectColumnFilter";
import data from './data/generated.json';
import COLUMNS from './data/COLUMNS';
const getData = () => data;

function App() {
  const columns = React.useMemo(
    () => COLUMNS,
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <>
      <div className="App">
        <Table columns={columns} data={data} />
      </div>
    </>
  );
}

export default App;
