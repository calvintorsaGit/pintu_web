import React from "react";
import TopMoverCard from "../TopMoverCard/TopMoverCard.component";

const TopMover = () => {
    return <div class='mt-12'>
        <h2 class='text-left'>🔥 Top Movers (24 Jam)</h2>
        <div class='flex flex-row space-x-20 overflow-auto'>
            <TopMoverCard/>
            <TopMoverCard/>
            <TopMoverCard/>
            <TopMoverCard/>
        </div>
    </div>
}

export default TopMover
