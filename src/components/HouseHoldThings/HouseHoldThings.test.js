import React from "react";
import { shallow } from "enzyme";
import HouseHoldThings from "./HouseHoldThings";

describe("HouseHoldThings", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HouseHoldThings />);
    expect(wrapper).toMatchSnapshot();
  });
});
