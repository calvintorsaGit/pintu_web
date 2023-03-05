import React from "react";
import {useQuery} from "react-query";
import axios from "axios";
import TokenListComponent from "./TokenList.component";

const fetchSupportedCurrencies = async () => {
    const {data} = await axios.get('https://cors-anywhere.herokuapp.com/https://api.pintu.co.id/v2/wallet/supportedCurrencies')
    return data
}

const fetchPriceChanges = async () => {
    const {data} = await axios.get('https://cors-anywhere.herokuapp.com/https://api.pintu.co.id/v2/trade/price-changes')
    return data
}

const combineData = (dataCurrency, priceChanges) => {
    const result = dataCurrency.payload.map(item => {
        const tokenPricesChanges = priceChanges.payload.find(({pair}) => pair.split('/')[0] ===
            item.currencySymbol.toLowerCase())
        return {...item, ...tokenPricesChanges}
    })
    result.shift()
    return result
}

const TokenList = (props) => {
    const {data: dataCurrency, isLoading: isLoadingCurrency, isSuccess: isSuccessCurrency} =
        useQuery('supportedCurrencies', fetchSupportedCurrencies)
    const {data: priceChanges, isLoading: isLoadingPrice, isSuccess: isSuccessPrice, refetch: refetchPricesChanges} =
        useQuery('priceChanges', fetchPriceChanges)

    const data = dataCurrency && priceChanges && combineData(dataCurrency, priceChanges)
    const isLoading = isLoadingCurrency && isLoadingPrice
    const isSuccess = isSuccessCurrency && isSuccessPrice

    return <TokenListComponent refetchPricesChanges={refetchPricesChanges}
        dataQuery={data} isLoading={isLoading} isSuccess={isSuccess} {...props}/>
}

export default TokenList
