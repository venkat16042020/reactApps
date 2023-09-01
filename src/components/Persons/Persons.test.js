import React from "react";
import { shallow } from "enzyme";
import Persons from "./Persons";

describe("Persons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Persons />);
    expect(wrapper).toMatchSnapshot();
  });
});
