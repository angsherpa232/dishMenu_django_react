import React from "react";
import renderer from "react-test-renderer";
import Table from "./Table";

describe("FilterTable", () => {
  test("should match snapshot.", () => {
    const component = renderer.create(<Table dishes={[]} onSort={() => {}} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
