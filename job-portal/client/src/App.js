import React from "react";
import "./App.css";
import Jobs from "./Jobs";

async function fetchJobs(updateCb) {
  const res = await fetch("http://localhost:3001/jobs");
  const json = await res.json();

  updateCb(json);

  console.log({ json });
}

function App() {
  const [jobList, updateJobs] = React.useState([]);

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, []);

  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
