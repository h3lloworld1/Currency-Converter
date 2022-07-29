import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useFetch from "./components/hooks/useFetch";
import useFetchConverter from "./components/hooks/useFetchConverter";
import { dataActions } from "./store/data-slice";

import CurrencyForm from "../src/components/CurrencyRows";
import HistoryTable from "./components/HistoryTable";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [convertedValue, setConvertedValue] = useState();
  const [inputValue, setInputValue] = useState(1);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [collectedData, setCollectedData] = useState([]);

  const dispatch = useDispatch();

  const { data } = useFetch(
    "https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies"
  );

  const { converterData } = useFetchConverter(
    `https://currency-converter18.p.rapidapi.com/api/v1/convert?from=${fromCurrency}&to=${toCurrency}&amount=${inputValue}`
  );

  const exchangeData = data;

  const convertValue = () => {
    setConvertedValue(
      Math.round(converterData.result.convertedAmount * 100) / 100
    );

    setCollectedData((oldArray) => [
      ...oldArray,
      {
        from: converterData.result.from,
        to: converterData.result.to,
        amount: converterData.result.amountToConvert,
        convertedAmount: converterData.result.convertedAmount,
      },
    ]);

    dispatch(
      dataActions.userDataHandler({
        collectedData,
      })
    );
  };

  useEffect(() => {
    if (!exchangeData) {
      return undefined;
    } else {
      setCurrencyOptions(exchangeData);
      setFromCurrency(exchangeData[50].symbol);
      setToCurrency(exchangeData[0].symbol);
    }
  }, [data]);

  return (
    <div>
      <h1>Currency Converter</h1>
      <CurrencyForm
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        onChangeInput={(e) => setInputValue(e.target.value)}
        inputValue={inputValue}
      />
      <div className="equalsTxt">=</div>
      <CurrencyForm
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        inputValue={convertedValue}
        readonly="readonly"
      />
      <button className="convert_button" onClick={convertValue}>
        Convert
      </button>

      <HistoryTable data={collectedData} />
    </div>
  );
}

export default App;
