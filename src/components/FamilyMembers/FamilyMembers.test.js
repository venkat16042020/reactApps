import React from "react";
import { shallow } from "enzyme";
import FamilyMembers from "./FamilyMembers";

describe("FamilyMembers", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FamilyMembers />);
    expect(wrapper).toMatchSnapshot();
  });
});
