import React from 'react'

const PriceFormat = ({amount}) => {

    const amountformat = new Number(amount).toLocaleString('en-US',{
            style :"currency",
            currency : "USD",
            minimumFractionDigits: 2
    });
    
  return (
   <span>{amountformat}</span>
  )
}

export default PriceFormat