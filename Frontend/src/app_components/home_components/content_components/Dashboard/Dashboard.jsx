// Dashboard.jsx

// Importing Libraries
  import React, { useEffect, useState } from "react";
  import { Link } from "react-router-dom";    // Allows to pass links on objects for navigation

// Import other components
  import { ref, onValue } from "firebase/database";                         // Import Firebase database functions
  import { sensor_db } from "../../../../Firebase Database/FirebaseConfig"; // Import realtime database from Firebase Config

  import SensorReadings from "./dashboard_components/GaugeDisplay";         // For Current Sensor Reading Visualization
  import PredictionStage from "./dashboard_components/PredictionStage";     // For Prediction
  import LiveStreamPage from "../LiveStream/LiveStream";                    // For mini-live monitoring

const Dashboard = () => {

  // State environmental variables
  const [temperaturevalue, setTemperature] = useState(null);
  const [humidityvalue, setHumidity] = useState(null);
  const [pHvalue, setPH] = useState(null);
  const [tdsvalue, setTDS] = useState(null);

  // Function for getting data from realtime database
  useEffect(() => {
    // Allows tab name to change
    document.title = "Dashboard | Verde";       
    
    // States constant reference for sensor readings location
    // whereas it is stored in sensor_db within the readings node
    const readingsRef = ref(sensor_db, "readings");

    // Real-time Listener for Sensor Readings
    onValue(readingsRef, (snapshot) => {
      // Check if data exists in the snapshot
      if (snapshot.exists()) {
        const data = snapshot.val(); // Extract Readings
        const latestReadingId = Object.keys(data)[Object.keys(data).length - 1]; // Extract last updated data
        const latestReading = data[latestReadingId];  // Retrieving Data

        // Updating Variable states
        setTemperature(latestReading.temperature);
        setHumidity(latestReading.humidity);
        setPH(latestReading.ph);
        setTDS(latestReading.tds);
      }
    });

    return () => {}; // Clear
  }, []);

  return (
    // Dashboard Container
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 p-6 min-h-[620px]">
      {/**Sensor Readings Container */}
      <SensorReadings
        temperature={temperaturevalue}
        humidity={humidityvalue}
        pH={pHvalue}
        tds={tdsvalue}
      />
      {/**Container for the prediction and mini-live */}
      <div className="flex flex-col gap-4 h-full max-h-[620px]">
        <div className="flex-1">
          <PredictionStage />
        </div>
        <Link to="/livestream" className="flex-1 block">
          <div className="w-full h-full cursor-pointer">
            <LiveStreamPage showControls={false} />
          </div>
        </Link>
      </div>

    </div>
  );
};

  export default Dashboard;