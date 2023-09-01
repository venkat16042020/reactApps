import React from "react";
import { shallow } from "enzyme";
import Electronics from "./Electronics";

describe("Electronics", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Electronics />);
    expect(wrapper).toMatchSnapshot();
  });
});
