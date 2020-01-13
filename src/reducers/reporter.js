import * as types from "../actions/ActionTypes";

const initialState = {
  reportData: {
    value: "Controlled input with value",
    iconInput: "eye-slash",
    typeInput: "password",
    strTicker: "6981 村田製作所",
    data: {
      columns: [
        {
          label: "決算期",
          field: "id",
          sort: "asc"
        },
        {
          label: "売上高",
          field: "heading0",
          sort: "asc"
        },
        {
          label: "前年比",
          field: "heading1",
          sort: "asc"
        },
        {
          label: "営業利益",
          field: "heading2",
          sort: "asc"
        },
        {
          label: "前年比",
          field: "heading3",
          sort: "asc"
        },
        {
          label: "経常利益",
          field: "heading4",
          sort: "asc"
        },
        {
          label: "前年比",
          field: "heading5",
          sort: "asc"
        },
        {
          label: "当期利益",
          field: "heading6",
          sort: "asc"
        },
        {
          label: "前年比",
          field: "heading7",
          sort: "asc"
        },
        {
          label: "EPS",
          field: "heading8",
          sort: "asc"
        }
      ],
      rows: [
        {
          id: "19/09C",
          heading0: 1575026,
          heading1: 14.8,
          heading2: 266807,
          heading3: 64.5,
          heading4: 267316,
          heading5: 59.3,
          heading6: 206930,
          heading7: 41.6,
          heading8: 323.5
        },
        {
          id: "20/03C",
          heading0: 1580000,
          heading1: 0.3,
          heading2: 22000,
          heading3: -17.5,
          heading4: 222000,
          heading5: -17.0,
          heading6: 170000,
          heading7: -17.8,
          heading8: 265.7
        }
      ]
    }
  }
};

export default function reporter(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_REPORT:
      return {
        ...state
      };
    default:
      return state;
  }
}
