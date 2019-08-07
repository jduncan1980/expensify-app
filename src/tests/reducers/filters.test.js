import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should setup text filter", () => {
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "testing"
  });
  expect(state).toEqual({
    text: "testing",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set start date", () => {
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    startDate: moment()
      .startOf("month")
      .add(3, "days")
  });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment()
      .startOf("month")
      .add(3, "days"),
    endDate: moment().endOf("month")
  });
});

test("should set end date", () => {
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    endDate: moment()
      .endOf("month")
      .subtract(3, "days")
  });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment()
      .endOf("month")
      .subtract(3, "days")
  });
});
