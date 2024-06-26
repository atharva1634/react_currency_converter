import React, { useState } from "react";
import Data from "./CurrencyData";

function CurrencyConvert() {
  const [amount, setAmount] = useState(1);
  const [convertAmount, setConvertAmount] = useState(0);
  const [rates, setRates] = useState({});
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("USD");

  const handleDataFetch = (ratesData, fromCurrency, toCurrency) => {
    setRates(ratesData);
    setFrom(fromCurrency);
    setTo(toCurrency);
  };

  const convert = () => {
    if (rates[from] && rates[to]) {
      const rate = rates[to] / rates[from];
      const result = amount * rate;
      setConvertAmount(result);
    }
  };

  return (
    <>
      <div className="max-w-xl mx-auto my-10 p-5 bg-gray-200 shadow-md rounded-lg">
        <h1 className="text-black font-bold text-3xl">Currency Converter</h1>
        <div className="mt-4">
          <Data onDataFetch={handleDataFetch} />
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount:
          </label>
          <input
            type="number"
            className="bg-white w-full p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1 text-black"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            value={amount}
          />
        </div>
        <div className="flex justify-end mt-6">
          <button
            className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-md"
            onClick={convert}
          >
            Convert
          </button>
        </div>
        <div className="mt-4 text-lg font-medium text-right text-green-600">
          Converted Amount is: {convertAmount}
        </div>
      </div>
    </>
  );
}

export default CurrencyConvert;
