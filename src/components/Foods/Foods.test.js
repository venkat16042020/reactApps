import React from "react";
import { shallow } from "enzyme";
import Accounts from "./Accounts";

describe("Accounts", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Accounts />);
    expect(wrapper).toMatchSnapshot();
  });
});
