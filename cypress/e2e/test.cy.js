import data from "../../submissionData.json"; // do not create this file
import "cypress-localstorage-commands";
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

const Data = [
  {
    name: "S",
    email: "s@gmail",
    phone: 1234,
    gender: "Male",
    course: "Web Development",
  },
  {
    name: "M",
    email: "m@gmail",
    phone: 1234,
    gender: "Female",
    course: "Android Development",
  },
  {
    name: "K",
    email: "k@gmail",
    phone: 1234,
    gender: "Male",
    course: "Data Science",
  },
];
describe("Test", function () {
  let acc_score = 1;

  function FormSubmit(data, score, LSLen) {
    cy.get("#name").clear().type(data.name);
    cy.get("#email").clear().type(data.email);
    cy.get("#phone").clear().type(data.phone);
    cy.get("#gender").select(data.gender);
    cy.get("#course").select(data.course);
    cy.get("form")
      .submit()
      .should(() => {
        expect(JSON.parse(localStorage.getItem("admission")).length).to.equal(
          LSLen
        );
      })
      .then(() => {
        acc_score += score;
      });
  }

  function CheckTable(data, score, index) {
    cy.get("tr").eq(index).contains("td", data.name);
    cy.get("tr").eq(index).contains("td", data.email);
    cy.get("tr").eq(index).contains("td", data.phone);
    cy.get("tr").eq(index).contains("td", data.gender);
    cy.get("tr")
      .eq(index)
      .contains("td", data.course)
      .then(() => {
        acc_score += score;
      });
  }

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      // modifyUrl(url);
      beforeEach(() => {
        cy.restoreLocalStorage();
      });

      afterEach(() => {
        cy.saveLocalStorage();
      });
      it("Form Submit is Working Fine", () => {
        cy.visit(url);
        FormSubmit(Data[0], 1, 1);
      }); // Score:- 1
      it("Check the Data after mutiple form submits", () => {
        FormSubmit(Data[1], 0.5, 2);
        FormSubmit(Data[2], 0.5, 3);
      }); // Score:- 1
      it("Check the Applied page's Table", () => {
        cy.visit(url + "/applied.html");
        CheckTable(Data[0], 1 / 3, 1);
        CheckTable(Data[1], 1 / 3, 2);
        CheckTable(Data[2], 1 / 3, 3);
      }); // Score:- 1
      it("Check Filtering in Done", () => {
        cy.get("select").select("Web Development");
        CheckTable(Data[0], 0.5, 1);
        cy.get("select").select("Android Development");
        CheckTable(Data[1], 0.5, 1);
        cy.get("select").select("");
        cy.get("tr")
          .should("have.length", 4)
          .then(() => {
            acc_score += 1;
          });
        cy.reload();
      }); // Score:-2
      it("Accept Students", () => {
        cy.get("tr").eq(1).contains("td", "Accept").click();
        CheckTable(Data[1], 1, 1); // Checking the Deleting
      }); // Score:- 1
      it("Reject Students", () => {
        cy.get("tr").eq(1).contains("td", "Reject").click();
        CheckTable(Data[2], 1, 1); // Checking the Deleting
      }); // Score:- 1
      it("Visit Admitted Page and Check Table", () => {
        cy.visit(url + "/admitted.html");
        CheckTable(Data[0], 1, 1);
      }); // Score:- 1
      it("Visit Rejected Page and Check Table", () => {
        cy.visit(url + "/rejected.html");
        CheckTable(Data[1], 1, 1);
      }); // Score:- 1
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
