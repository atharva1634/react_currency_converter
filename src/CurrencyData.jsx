import { useEffect, useState } from "react";

const Data = ({ onDataFetch }) => {
  const [data, setData] = useState({});
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("USD");

  const URL =
    "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ZudyGkkXA4jmHpoSORbXZSB04WTMigiGF9jfQx5O";

 useEffect(() => {
   const fetchData = async () => {
     try {
       const res = await fetch(URL);
       const result = await res.json();

       

       if (result.data) {
         setData(result.data);
         onDataFetch(result.data, from, to); // Passing data to parent component
       } 
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };

   fetchData();
 }, [onDataFetch, from, to]);
  const handleFromChange = (e) => {
    setFrom(e.target.value);
    onDataFetch(data, e.target.value, to);
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
    onDataFetch(data, from, e.target.value);
  };

  return (
    <>
      <label htmlFor="from" className="text-black mr-10">
        From
      </label>
      <select
        id="from"
        onChange={handleFromChange}
        className="bg-white text-black"
      >
        {data && Object.keys(data).map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>

      <label htmlFor="to" className="text-black mr-10">
        To
      </label>
      <select id="to" onChange={handleToChange} className="bg-white text-black">
        {data && Object.keys(data).map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>
    </>
  );
};

export default Data;
