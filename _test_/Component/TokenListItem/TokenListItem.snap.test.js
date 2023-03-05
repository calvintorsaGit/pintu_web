import renderer from 'react-test-renderer';
import React from "react";

import TokenListItem from "../../../src/Component/TokenListItem/TokenListItem.component";

jest.mock('react-svg');

it('renders correctly', () => {
    const tree = renderer
        .create(<TokenListItem/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
