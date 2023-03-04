import './App.css';
import React from "react";
import 'semantic-ui-css/semantic.min.css'

import PageMarketHeader from "./Component/PageMarketHeader/PageMarketHeader.component";
import TopMover from "./Component/TopMover.component";
import TokenList from "./Container/TokenList/TokenList.container";

function App() {
    return (
        <div className="App px-20 py-4">
            <PageMarketHeader/>
            <TopMover/>
            <TokenList/>
        </div>
    );
}

export default App;
