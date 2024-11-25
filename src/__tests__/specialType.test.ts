import { createClass, SpecialType, GenericClass } from "../SpecialType";

describe("createClass Function", () => {

  it("should create an instance of GenericClass by reflection", () => {

    const genericObject = createClass<GenericClass<string>>(GenericClass);
    expect(genericObject).toBeInstanceOf(GenericClass);
    expect(genericObject.explain("the test")).toBe("Inside the special type with generic type: the test");
  });

  it("should create an instance of SpecialType", () => {

    const SpecialObject = createClass<SpecialType>(SpecialType);
    expect(SpecialObject).toBeInstanceOf(SpecialType);
    expect(SpecialObject.talk()).toBe("Inside the special type");
  });
});
