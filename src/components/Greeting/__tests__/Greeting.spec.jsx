import React from "react";
import renderer from "react-test-renderer";
import { Greeting } from "../Greeting";

describe("<Greeting />", () => {
  it("should match snapshot", () => {
    const component = renderer.create(<Greeting />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
