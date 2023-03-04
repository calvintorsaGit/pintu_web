import {Search} from 'semantic-ui-react'

const PageMarketHeader = () => {
    return <div class='flex flex-row mt-4'>
        <h2 class='flex-1 text-4xl text-left'>Harga Crypto dalam Rupiah Hari Ini</h2>
        <Search placeholder='Cari aset di Pintu...' size={"big"}/>
    </div>
}

export default PageMarketHeader
