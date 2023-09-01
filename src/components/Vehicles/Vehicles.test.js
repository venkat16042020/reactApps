import React from "react";
import { shallow } from "enzyme";
import Vehicles from "./Vehicles";

describe("Vehicles", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Vehicles />);
    expect(wrapper).toMatchSnapshot();
  });
});
