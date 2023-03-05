import React, {Component} from "react";
import TokenListItem from "../../Component/TokenListItem/TokenListItem.component";
import {Table, Loader} from 'semantic-ui-react'
import {Icon, Label} from 'semantic-ui-react'

let timer = null;

const _renderChipCategory = () => (
    <div class='flex flex-row space-x-10 overflow-auto pb-2'>
        <Label color='blue' size='huge'><Icon name='star'/>Terbaru</Label>
        <Label color='blue' size='huge'><Icon name='star'/>DeFi</Label>
        <Label color='blue' size='huge'><Icon name='star'/>NFT/Gaming</Label>
        <Label color='blue' size='huge'><Icon name='star'/>Cex</Label>
        <Label color='blue' size='huge'><Icon name='star'/>Dex</Label>
    </div>
)

const _renderTokenList = (data) => {
    return data.map(item => <TokenListItem {...item}/>)
}

const _renderHeaderName = (name) => {
    return <span className='text-xl'>{name}</span>
}

const _renderTableRow = () => (
    <Table.Row>
        <Table.HeaderCell scope="col"/>
        <Table.HeaderCell scope="col">{_renderHeaderName('CRYPTO')}</Table.HeaderCell>
        <Table.HeaderCell scope="col"/>
        <Table.HeaderCell scope="col">{_renderHeaderName('HARGA')}</Table.HeaderCell>
        <Table.HeaderCell scope="col">{_renderHeaderName('24 JAM')}</Table.HeaderCell>
        <Table.HeaderCell scope="col">{_renderHeaderName('1 MGG')}</Table.HeaderCell>
        <Table.HeaderCell scope="col">{_renderHeaderName('1 BLN')}</Table.HeaderCell>
        <Table.HeaderCell scope="col">{_renderHeaderName('1 THN')}</Table.HeaderCell>
    </Table.Row>
)

const _renderTable = (data) => {
    return <div>
        {_renderChipCategory()}
        <Table>
            <Table.Header>
                {_renderTableRow()}
            </Table.Header>
            <Table.Body>
                {_renderTokenList(data)}
            </Table.Body>
        </Table>
    </div>
}

class TokenListComponent extends Component {
    componentWillUnmount() {
        clearInterval(timer)
    }

    render() {
        const {isLoading, dataQuery, isSuccess, refetchPricesChanges} = this.props
        if (!timer) timer = setInterval(() => refetchPricesChanges(), 3000);

        return (
            <div className='mt-12'>
                {<Loader active={isLoading}/>}
                {isSuccess && _renderTable(dataQuery)}
            </div>
        )
    }
}

export default TokenListComponent
