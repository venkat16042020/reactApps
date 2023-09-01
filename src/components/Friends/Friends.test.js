import React from "react";
import { shallow } from "enzyme";
import Friends from "./Friends";

describe("Friends", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Friends />);
    expect(wrapper).toMatchSnapshot();
  });
});
