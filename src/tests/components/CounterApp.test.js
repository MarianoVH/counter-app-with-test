import React from "react";
import { shallow } from "enzyme";

import { CounterApp } from "../../components";

describe("Testing CounterApp component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });
  test("check render with snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("check props", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const counterText = wrapper.find("h2").text();

    expect(counterText).toBe("100");
  });

  test("check button increment", () => {
    wrapper.find("button").at(0).simulate("click");

    const counterText = wrapper.find("h2").text();

    expect(counterText).toBe("1");
  });

  test("check button reset", () => {
    wrapper.find("button").at(1).simulate("click");

    const counterText = wrapper.find("h2").text();

    expect(counterText).toBe("0");
  });

  test("check button decrement", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");

    const counterText = wrapper.find("h2").text();

    expect(counterText).toBe("100");
  });
});
