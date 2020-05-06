import React from "react";
import renderer from "react-test-renderer";
import DummyData from "../../../dummyData/cardData";

import Component from "../product";

it("renders correctly when called ", () => {
  const tree = renderer
    .create(<Component product={DummyData[0].product} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
