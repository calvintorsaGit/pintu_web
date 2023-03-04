import React, {Component} from "react";
import TokenListItem from "../../Component/TokenListItem/TokenListItem.component";
import {Table, Loader} from 'semantic-ui-react'

let timer = null;

const _renderTokenList = (data) => {
    return data.map(item => <TokenListItem {...item}/>)
}

const _renderHeaderName = (name) => {
    return <span className='text-xl'>{name}</span>
}

const _renderTable = (data) => {
    return <Table>
        <Table.Header>
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
        </Table.Header>
        <Table.Body>
            {_renderTokenList(data)}
        </Table.Body>
    </Table>
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
