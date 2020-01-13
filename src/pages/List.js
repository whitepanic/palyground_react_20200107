import React from "react";
import {
  MDBDataTable,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import SectionContainer from "../components/sectionContainer";

const List = () => {
  function testClickEvent(param) {
    console.log(param);
  }

  const data = () => ({
    columns: [
      {
        label: "Name",
        field: "name",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name"
        }
      },
      {
        label: "Position",
        field: "position",
        width: 270
      },
      {
        label: "Office",
        field: "office",
        width: 200
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100
      },
      {
        label: "Start date",
        field: "date",
        sort: "disabled",
        width: 150
      },
      {
        label: "Salary",
        field: "salary",
        sort: "disabled",
        width: 100
      }
    ],
    rows: [
      {
        name: "Tiger Nixon",
        position: "System Architect",
        office: "Edinburgh",
        age: "61",
        date: "2011/04/25",
        salary: "$320",
        clickEvent: () => testClickEvent(1)
      },
      {
        name: "Garrett Winters",
        position: "Accountant",
        office: "Tokyo",
        age: "63",
        date: "2011/07/25",
        salary: "$170"
      },
      {
        name: "Ashton Cox",
        position: "Junior Technical Author",
        office: "San Francisco",
        age: "66",
        date: "2009/01/12",
        salary: "$86"
      },
      {
        name: "Cedric Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433"
      },
      {
        name: "Airi Satou",
        position: "Accountant",
        office: "Tokyo",
        age: "33",
        date: "2008/11/28",
        salary: "$162"
      },
      {
        name: "Brielle Williamson",
        position: "Integration Specialist",
        office: "New York",
        age: "61",
        date: "2012/12/02",
        salary: "$372"
      },
      {
        name: "Herrod Chandler",
        position: "Sales Assistant",
        office: "San Francisco",
        age: "59",
        date: "2012/08/06",
        salary: "$137"
      },
      {
        name: "Rhona Davidson",
        position: "Integration Specialist",
        office: "Tokyo",
        age: "55",
        date: "2010/10/14",
        salary: "$327"
      },
      {
        name: "Colleen Hurst",
        position: "Javascript Developer",
        office: "San Francisco",
        age: "39",
        date: "2009/09/15",
        salary: "$205"
      },
      {
        name: "Sonya Frost",
        position: "Software Engineer",
        office: "Edinburgh",
        age: "23",
        date: "2008/12/13",
        salary: "$103"
      },
      {
        name: "Jena Gaines",
        position: "Office Manager",
        office: "London",
        age: "30",
        date: "2008/12/19",
        salary: "$90"
      }
    ]
  });

  // const badgesData = {
  //   columns: [
  //     {
  //       label: "ID",
  //       field: "badge"
  //     },
  //     ...data().columns
  //   ],
  //   rows: [
  //     ...data().rows.map((row, order) => ({
  //       ...row,
  //       badge: (
  //         <MDBBadge
  //           pill
  //           color="primary"
  //           className="p-1 px-2"
  //           key={order}
  //           searchvalue={order}
  //         >
  //           ID: {order + 1}
  //         </MDBBadge>
  //       )
  //     }))
  //   ]
  // };

  // const widerData = {
  //   columns: [
  //     ...data().columns.map(col => {
  //       col.width = 200;
  //       return col;
  //     })
  //   ],
  //   rows: [...data().rows]
  // };

  return (
    <MDBContainer className="mt-3">
      <MDBRow>
        <MDBCol md="12" className="mt-2">
          <h3 className="text-center my-3 font-weight-bold">3.一覧画面</h3>
          <p className="text-center text-muted mb-1">レポートの一覧を表示</p>
          <hr className="my-5" />
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <SectionContainer noBorder>
            <MDBCard>
              <MDBCardBody>
                <MDBDataTable
                  striped
                  bordered
                  hover
                  order={["age", "desc"]}
                  data={new data()}
                />
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default List;
