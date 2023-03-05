import renderer from 'react-test-renderer';
import React from "react";

import PageMarketHeader from "../../../src/Component/PageMarketHeader/PageMarketHeader.component";

it('renders correctly', () => {
    const tree = renderer
        .create(<PageMarketHeader/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
