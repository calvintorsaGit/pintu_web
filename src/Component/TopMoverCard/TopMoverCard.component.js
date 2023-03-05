import React from "react";
import {ReactSVG} from "react-svg";
import {IoCaretUpOutline} from 'react-icons/io5';

const _renderSymbol = () => {
    return <ReactSVG className='wrapper'
                     src={'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/MATIC.svg'}
    />
}

const TopMoverCard = () => {
    return <div class='w-fit rounded-md p-4 text-left'>
        <div class='flex flex-row'>
            {_renderSymbol()}
            <span className='font-bold text-3xl'>Matic</span>
        </div>
        <div className='text-slate-500 mt-2 text-xl'>Rp 43.213</div>
        <div class='flex flex-row mt-4 items-center'>
            <IoCaretUpOutline color='green' size='20'/>
            <span className='font-bold text-4xl text-green-600'>10.21%</span>
        </div>
    </div>
}

export default TopMoverCard
