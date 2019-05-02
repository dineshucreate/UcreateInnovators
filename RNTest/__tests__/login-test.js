import React from "react";
import Login from "../src/containers/login";
import renderer from "react-test-renderer";
describe("Login Screen", () => {
  let wrapper = renderer.create(<Login />)
  let instance = wrapper.getInstance();
  it("Login", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Sum of two numbers", () => {
    expect(instance.sumOfNumber(2, 3)).toEqual(5)
  });

  it("Sum of numbers async", () => {
    return (instance.sumOfNumberAsync(2, 3).then((data) => expect(data).toEqual(5)))
  })
});
