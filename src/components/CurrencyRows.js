import React from "react";

export default function MainPage(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    inputValue,
    onChangeInput,
    readonly,
  } = props;

  return (
    <div>
      <input
        type="number"
        readOnly={readonly}
        className="input"
        value={inputValue}
        onChange={onChangeInput}
      />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions &&
          currencyOptions.map((option, i) => (
            <option key={i} value={option.symbol}>
              {option.symbol}
            </option>
          ))}
      </select>
    </div>
  );
}
