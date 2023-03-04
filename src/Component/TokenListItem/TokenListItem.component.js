import React from "react";
import {ReactSVG} from 'react-svg'
import './style.css'
import {Table} from "semantic-ui-react";
import {IoCaretUpOutline, IoCaretDownOutline} from 'react-icons/io5';


const formatToRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(number).replace('Rp', 'Rp ')
}

const _renderSymbol = (props) => {
    return <ReactSVG className='wrapper' style={{color: props.color}}
                     src={props.logo}
    />
}

const _renderPriceChange = (value) => {
    return <div class='flex flex-row items-center'>
        {parseFloat(value) > 0 ? <IoCaretUpOutline color='green'/> : <IoCaretDownOutline color='red'/>}
        <span
            className={parseFloat(value) > 0 ? 'font-bold text-xl text-green-600' : 'font-bold text-xl text-red-600'}>
            {value}
        </span>
    </div>
}

const TokenListItem = (props) => {
    return <Table.Row>
        <Table.Cell scope="row">{_renderSymbol(props)}</Table.Cell>
        <Table.Cell><span class='font-bold text-xl'>{props.name}</span></Table.Cell>
        <Table.Cell><span class='text-gray-500 text-xl'>{props.currencySymbol}</span></Table.Cell>
        <Table.Cell><span class='font-bold text-xl'>{formatToRupiah(props.latestPrice)}</span></Table.Cell>
        <Table.Cell>{_renderPriceChange(props.day)}</Table.Cell>
        <Table.Cell>{_renderPriceChange(props.week)}</Table.Cell>
        <Table.Cell>{_renderPriceChange(props.month)}</Table.Cell>
        <Table.Cell>{_renderPriceChange(props.year)}</Table.Cell>
    </Table.Row>
}

export default TokenListItem
