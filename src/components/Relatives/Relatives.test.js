import React from "react";
import { shallow } from "enzyme";
import Relatives from "./Relatives";

describe("Relatives", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Relatives />);
    expect(wrapper).toMatchSnapshot();
  });
});
