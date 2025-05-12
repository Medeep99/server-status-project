import React, { useEffect, useState } from "react";
import axios from "axios";
import MatchMakingBoard from "./MatchMakingBoard";
import DataTable from "./DataTable";

const ServerData = ({
  urlData = process.env.REACT_APP_API_URL,
  interfaceData = process.env.REACT_APP_API_INTERFACE,
  methodData = process.env.REACT_APP_API_METHOD,
  apiKey = process.env.REACT_APP_SERVER_STATUS_APP_API_KEY,
  apiVersion = process.env.REACT_APP_API_VERSION
}) => {

  const apiUrl = `${urlData}/${interfaceData}/${methodData}/${apiVersion}/?key=${apiKey}`;
  const [data, setData] = useState(null);        // For storing response data
  const [loading, setLoading] = useState(true);  // For loading state
  const [error, setError] = useState(null); 

  useEffect(() => {
  fetchData();
   const interval = setInterval(() => {
      fetchData();
    }, 600000); //get data every 10 minutes

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(apiUrl);
      setData(response.data); // JSON response is in response.data
    } catch (error) {
      console.error("API Error:", error);
      setError(error);
    }
    setLoading(false);
  };

  console.log("The Data is" + data)
  const serverData = data? data : null;


  return (
    <div>
      {serverData && serverData.result ? (
      <>
        <MatchMakingBoard
          matchmakingData={serverData.result.matchmaking}
          timeData={serverData.result.app.timestamp}
        />
        <DataTable tableData={serverData.result.datacenters} />
      </>
    ) : loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>Error fetching server data.</p>
    ) : null}
    </div>
  );
};

export default ServerData;
