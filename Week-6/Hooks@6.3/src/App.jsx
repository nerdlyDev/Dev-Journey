// import { useState,useEffect, useMemo, useCallback,memo } from 'react'
// import './App.css'

// function App() {
//   const [exchangeData, setExchangeData] = useState({});
//   const [exchangeData2, setExchangeData2] = useState({});
//   const [bankData, setBankData] = useState({});
//   console.log(" Hi there from App() ");
// // UseEffect example which tells why UseEffect is used

//   useEffect(() => {
//     //setTimeout(() => {
//       setBankData({
//         income: 100
//       });
//     //})
//   },[]);

//   useEffect(() => {
//     setTimeout(() => {
//       setExchangeData({
//         returns: 100
//       });
//     }, 1000); // why getting error here after removing set timeout because of timing issues in useEffect so using separate useEffects for each one
//   },[]);

//   useEffect(() => {
//     setTimeout(() => {
//       setExchangeData2({
//         returns: 100
//       });
//     }, 5000);
//   },[]);

//   //* useCallback is not about minimizing the number of renders.
//   //* useCallback is about not rendering a child component if the function hasn't/doesn't need to change across renders.

//   // const cryptoReturns = useMemo(() => {// *Here useMemo lets you to create a value that is only calculated once and then re-used until the dependencies change.
//   //   // *UseMemo let you skip unwanted re-renders

//   //   console.log(" Hi there in useMemo ");
//   //   return exchangeData.returns + exchangeData2.returns;
//   //},[exchangeData,exchangeData2]);

//   const calculateCryptoReturns = useCallback(() => {
//     console.log(" Hi there in calculateCryptoReturns ");
//     return exchangeData.returns + exchangeData2.returns;
//   },[exchangeData,exchangeData2]);

//   //const incomeTax = (bankData.income + cryptoReturns) + 0.3;

//   // return (
//   //   <div>
//   //     hi  there your income tax returns are {incomeTax} and Crypto returns are {cryptoReturns}
//   //   </div>
//   // )
//   return (
//     <div>
//         <CryptoGainCalculator calculateCryptoReturns={calculateCryptoReturns}/>
//     </div>
//   )

//   const CryptoGainCalculator = memo(function({calculateCryptoReturns}){
//     console.log(" Hi there in CryptoGainCalculator ");
//     return (
//       <div>
//         hi  there your income tax returns are {calculateCryptoReturns()}
//       </div>
//     )
// })

// }
// export default App

import { useEffect, useRef, useState } from "react";

function App() {
  const [incomeTax, setIncomeTax] = useState(2000);
  const divRef = useRef(); // useRef hook is used to get access to the DOM element, In a better way than using the DOM directly.

  useEffect(() => {
    setTimeout(() => {
      console.log(divRef.current);
      divRef.current.innerHTML = 10;
    }, 5000); // divRef.current points to current DOM element.
  }, []);

  return (
    <div>
      hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  );
}
export default App;
