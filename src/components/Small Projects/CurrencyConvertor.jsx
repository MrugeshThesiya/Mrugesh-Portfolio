import { useEffect, useState } from "react";

let BackgroundImage =
  "https://images.unsplash.com/photo-1500316124030-4cffa46f10f0?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function useGetCurrencyInfo(currency) {
  const [data, setData] = useState({});
  let url = `https://api.exchangerate-api.com/v4/latest/${currency}`;
  useEffect(() => {
    fetch(url)
      .then((info) => info.json())
      .then((info) => setData(info["rates"]))
      .catch((error) => {
        console.error(error);
      });
  }, [url]);

  return data;
}

function InputBox({
  label,
  val,
  onChangeVal,
  Currency,
  onChangeCurrency,
  enabled,
}) {
  let data = useGetCurrencyInfo(Currency);
  let currencyList = Object.keys(data);

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="text-black outline-none w-full bg-transparent py-1.5"
          type="number"
          min="0"
          step="0.01"
          placeholder="Amount"
          value={val}
          onChange={(e) => onChangeVal(e.target.value)}
          disabled={!enabled}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="text-black rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={Currency}
          onChange={(e) => {
            onChangeCurrency(e.target.value);
          }}
        >

          {/* <option selected value={Currency}>
            {Currency}
          </option> */}

          {currencyList.map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function CurrencyConvertor() {
  const [to, setTo] = useState("INR");
  const [toVal, setToVal] = useState(0.00);
  const [from, setFrom] = useState("USD");
  const [fromVal, setFromVal] = useState(0.00);
  const data = useGetCurrencyInfo(from);

  function convert() {
    const amount = fromVal * data[to];
    setToVal(amount.toFixed(2));
  }

  function swap() {
    setTo(from);
    setFrom(to);
    let num = Number(toVal)
     setFromVal(num.toFixed(2));
    setToVal(fromVal);
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-[90%] md:w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                val={fromVal}
                onChangeVal={setFromVal}
                Currency={from}
                onChangeCurrency={setFrom}
                enabled={true}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                val={toVal}
                onChangeVal={setToVal}
                Currency={to}
                onChangeCurrency={setTo}
                enabled={false}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={convert}
            >
              {`Convert from ${from} to ${to}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConvertor;
