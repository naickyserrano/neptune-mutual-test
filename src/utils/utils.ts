// Cryptocurrencies Base Value
const NEP = 1
const BUSD = 3

const cryptoConversion = (cryptocurrency: string, value: string): number => {
  const currentValue = Number(value) // convert current value to number
  let convertedValue = 0

  switch (
    cryptocurrency // apply conversion based on the selected cypto currency.
  ) {
    case 'NEP':
      convertedValue = (currentValue * BUSD) / NEP
      break
    case 'BUSD':
      convertedValue = (currentValue / BUSD) * NEP
      break
  }

  return Number(convertedValue.toFixed(2))
  // return the converted value and rounded to 2 decimal places which
  // converts it to a string and then converts it back to number again
}

export { cryptoConversion }
