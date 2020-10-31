import React, { Component } from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Login } from "../pages/Login";

const setUp = (...args: any) => shallow(<Login {...args} />);

describe("Component should render", () => {
  let component: ShallowWrapper<any, Readonly<{}>, Component<{}, {}, any>>;
  beforeEach(() => {
    component = setUp();
  });

  test("Wrapper class", () => {
    const wrapperClass = component.find(".wrapper");
    expect(wrapperClass.length).toBe(1);
  });

  test("Left side and logo images", () => {
    const imgTag = component.find("img");
    expect(imgTag.length).toBe(2);
  });

  test("Left side and right side", () => {
    const leftSideClass = component.find(".leftSide");
    expect(leftSideClass.length).toBe(1);

    const rightSideClass = component.find(".rightSide");
    expect(rightSideClass.length).toBe(1);
  });

  test("Login & password inputs", () => {
    const inputsTag = component.find("input");
    expect(inputsTag.length).toBe(2);

    const loginClass = component.find(".loginInput");
    expect(loginClass.length).toBe(1);

    const passwordClass = component.find(".passwordInput");
    expect(passwordClass.length).toBe(1);
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
    let signInClass: ShallowWrapper<import("enzyme").HTMLAttributes, any, React.Component<{}, {}, any>>;
    let signUpClass: ShallowWrapper<import("enzyme").HTMLAttributes, any, React.Component<{}, {}, any>>;
    beforeEach(() => {
      buttonsTags = component.find("button");
      signInClass = component.find(".signInBtn");
      signUpClass = component.find(".signUpBtn");
    });

    test("Sign in & sing up exists", () => {
      expect(buttonsTags.length).toBe(2);
      expect(signInClass.length).toBe(1);
      expect(signUpClass.length).toBe(1);
    });

    test("Titles", () => {
      expect(signInClass.text()).toBe("Sign in");
      expect(signUpClass.text()).toBe("Sign up");
    });
  });

  test("Snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
