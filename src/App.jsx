import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './Hooks/useCurrencyInfo'


function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  const currencyInfo = useCurrencyInfo(from)
  
  const options = Object.keys(currencyInfo)
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKyht64p-nfG6NjWx0aU5nAK_XbWN3okbcyQcgXQHfuqh0Mr-ddrxlWOKLbUoggC0Kn-3f7-aFSZex0ctzcbnPaDRgdJqKs1kilOBamNxocC6lcx-ChF-NWhCP_qy6tR0sTlAyNQxOt3c692s3Gc2yr53GKv1QjvncxiOn_b-9zhqlo92YJ5RHBIh44g/s16000-rw/4k-youtube-thumbnail-background-image.jpg')`,
        }}
    >
    
        
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount = {amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=> setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount)=> setAmount(amount)}
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
                            amount = {convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=> setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
