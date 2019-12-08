import React from "react";
import renderer from "react-test-renderer";
import FilterTable from "./FilterTable";

describe("FilterTable", () => {
  test("should match snapshot.", () => {
    const component = renderer.create(
      <FilterTable onClickHandler={() => {}} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
