import React, { useState } from "react";
import { Input } from "antd";
import Axios from "axios";

const App = () => {
  const [bankData, setBankData] = useState([]);
  const [cityName, setCityName] = useState("");
  const bankFinder = (city) => {
    Axios.get(`https://vast-shore-74260.herokuapp.com/banks?city=${city}`).then(
      (res) => {
        console.log(res.data);
        setBankData(res.data);
      }
    );
  };
  return (
    <div>
      <div className="text-3xl text-center font-bold">Bank Search</div>
      <div>
        <form>
          <div className="text-center">
            Enter City
            <Input
              placeholder="Mumbai"
              value={cityName}
              onChange={(e) => setCityName(e.target.value.toUpperCase())}
              label="Enter City"
              style={{
                background: "#e8e8e8",
                padding: 10,
                borderRadius: 10,
                marginRight: 10,
                marginLeft: 10,
                width: 80,

                borderColor: "#fff",
                fontSize: 10,
              }}
            ></Input>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                bankFinder(cityName);
              }}
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="text-center text-xl font-bold">Bank List</div>
      <div>
        <table>
          <tr
            style={{
              background: "#0a1754",
              color: "white",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            <th>S NO</th>
            <th>Bank Name</th>
            <th>IFSC Code</th>
            <th>Bank ID</th>
            <th>Branch</th>
            <th>City</th>
            <th>District</th>
            <th>State</th>
            <th>Address</th>
          </tr>
          {bankData.map((value, index) => (
            <tr>
              <th>{index + 1}</th>
              <th>{value?.bank_name}</th>
              <th>{value?.ifsc}</th>
              <th>{value?.bank_id}</th>
              <th>{value?.branch}</th>
              <th>{value?.city}</th>
              <th>{value?.district}</th>
              <th>{value?.state}</th>
              <th>{value?.address}</th>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default App;
