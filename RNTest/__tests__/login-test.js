import React from "react";
import Login from "../src/containers/login";
import renderer from "react-test-renderer";
describe("Login Screen", () => {
  let wrapper = renderer.create(<Login />)
  it("Login", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Sum of two numbers", () => {
    let instance = wrapper.getInstance();
    expect(instance.sumOfNumber(2, 3)).toBe(5);
  });
});
