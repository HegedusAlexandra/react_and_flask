// Filename - App.js

// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/rooms")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching room data:", error));
  }, []);

  return (
    <div className="w-[100%]">
      <Layout>
        <Landing data={data}/>
      </Layout>
    </div>
  );
}

export default App;
