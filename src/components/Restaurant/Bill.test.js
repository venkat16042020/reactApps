import React from "react";
import { shallow } from "enzyme";
import Bills from "./Bill";

describe("Bills", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Bills />);
    expect(wrapper).toMatchSnapshot();
  });
});
