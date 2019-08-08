import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render correct singular ExpensesSummary", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render correct multiple ExpensesSummary", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={23} expensesTotal={2343254343545} />
  );
  expect(wrapper).toMatchSnapshot();
});
