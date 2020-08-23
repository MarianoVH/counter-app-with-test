import React from "react";
import { shallow } from "enzyme";

import { FirstApp } from "../../components";

describe("Test on <FirstApp />", () => {
  test("It should render <FirstApp /> ", () => {
    const title = "This is the title";
    const wrapper = shallow(<FirstApp title={title} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("It should render <FirstApp /> ", () => {
    const title = "This is the title";
    const subTitle = "This is the subTitle";
    const wrapper = shallow(<FirstApp title={title} subTitle={subTitle} />);

    const textInP = wrapper.find("h2").text();

    expect(textInP).toBe(subTitle);
  });
});
