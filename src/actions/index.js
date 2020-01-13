import * as types from "./ActionTypes";

export function saveReport(data) {
  return {
    type: types.SAVE_REPORT,
    data
  };
}
