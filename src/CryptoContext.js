import React, {  createContext, useContext, useEffect, useState } from 'react'

const Crypto = createContext();
const CryptoContext = ({children}) => {
const [currency, setCurrency]= useState("PLN");
const [symbol, setSymbol] = useState("zł")
    useEffect(()=>{
        if(currency ==="USD") setSymbol("$");
        else if(currency ==="PLN") setSymbol("zł");
        
    }, [currency]);
  return (
    <Crypto.Provider value={{currency, setCurrency, symbol}}>
        {children}
    </Crypto.Provider>
  )
};

export default CryptoContext;


export const CryptoState = () =>{
  return  useContext(Crypto);
}