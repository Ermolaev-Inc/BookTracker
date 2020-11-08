import React from "react";
import { render } from "enzyme";
import { Login } from "../pages/Login";

const setUp = (...args: any) => render(<Login {...args} />);

describe("Component should render", () => {
  let component: cheerio.Cheerio;
  beforeEach(() => {
    component = setUp();
  });

  test("Left side and logo images", () => {
    const imgTag = component.find("img");
    expect(imgTag.length).toBe(2);
  });

  test("Left side and right side classes", () => {
    const leftSideClass = component.find(".leftSide");
    expect(leftSideClass.length).toBe(1);

    const rightSideClass = component.find(".rightSide");
    expect(rightSideClass.length).toBe(1);
  });

  describe("Inputs", () => {
    let inputsTags;
    let loginClass;
    let passwordClass;
    beforeEach(() => {
      inputsTags = component.find("input");
      loginClass = component.find(".loginInput");
      passwordClass = component.find(".passwordInput");
    });

    test("Login & password exists", () => {
      expect(inputsTags.length).toBe(2);
      expect(loginClass.length).toBe(1);
      expect(passwordClass.length).toBe(1);
    });

    // TODO: Placeholders
  });

  describe("Buttons", () => {
    let buttonsTags;
    let signInClass;
    let signUpClass;
    beforeEach(() => {
      buttonsTags = component.find("button");
      signInClass = component.find(".signInBtn");
      signUpClass = component.find(".signUpBtn");
    });

    test("Sign in & sing up exists", () => {
      //expect(buttonsTags.length).toBe(2);
      expect(signInClass.length).toBe(1);
      expect(signUpClass.length).toBe(1);
    });
  });

  test("Snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
