// callbacks, callback hell, pyramid of doom

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

//* THIS IS CALLBACK HELL
//* IT IS NOT READABLE, MAINTAINABLE, SCALABLE OR FLEXIBLE
//! NOW INSTEAD OF USING SETTIMEOUT, ALAG SE FOR OTHER HEADINGS WE CAN USE IT INSIDE FIRST SETTIMEOUT
// const heading1 = document.querySelector(".heading1");
// setTimeout(() => {
//   heading1.textContent = "Heading 1";
//   heading1.style.color = "violet";

//   const heading2 = document.querySelector(".heading2");
//   setTimeout(() => {
//     heading2.textContent = "Heading 2";
//     heading2.style.color = "orange";

//     const heading3 = document.querySelector(".heading3");
//     setTimeout(() => {
//       heading3.textContent = "Heading 3";
//       heading3.style.color = "green";

//       const heading4 = document.querySelector(".heading4");
//       setTimeout(() => {
//         heading4.textContent = "Heading 4";
//         heading4.style.color = "blue";

//         const heading5 = document.querySelector(".heading5");
//         setTimeout(() => {
//           heading5.textContent = "Heading 5";
//           heading5.style.color = "red";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   });
// }, 1000);

function changeText(element, text, color, time, onSucessCallback, onFailureCallback) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (onSucessCallback) {
        onSucessCallback();
      }
    } else {
      if (onFailureCallback) {
        onFailureCallback();
      }
    }
  }, time);
}

//* THIS IS PYRAMID OF DOOM
//* IT IS NOT READABLE, MAINTAINABLE, SCALABLE OR FLEXIBLE
changeText(
  heading1,
  "Heading 1",
  "violet",
  1000,
  () => {
    changeText(
      heading2,
      "Heading 2",
      "orange",
      2000,
      () => {
        changeText(
          heading3,
          "Heading 3",
          "green",
          3000,
          () => {
            changeText(
              heading4,
              "Heading 4",
              "blue",
              4000,
              () => {
                changeText(
                  heading5,
                  "Heading 5",
                  "red",
                  5000,
                  () => {
                    changeText(
                      heading6,
                      "Heading 6",
                      "yellow",
                      6000,
                      () => {
                        changeText(
                          heading7,
                          "Heading 7",
                          "pink",
                          7000,
                          () => {},
                          () => {
                            console.log("Heading 7 Not Found");
                          }
                        );
                      },
                      () => {
                        console.log("Heading 6 Not Found");
                      }
                    );
                  },
                  () => {
                    console.log("Heading 5 Not Found");
                  }
                );
              },
              () => {
                console.log("Heading 4 Not Found");
              }
            );
          },
          () => {
            console.log("Heading 3 Not Found");
          }
        );
      },
      () => {
        console.log("Heading 2 Not Found");
      }
    );
  },
  () => {
    console.log("Heading 1 Not Found");
  }
);
// changeText(heading2, "Heading 2", "orange", 2000);
// changeText(heading3, "Heading 3", "green", 3000);
// changeText(heading4, "Heading 4", "blue", 4000);
// changeText(heading5, "Heading 5", "red", 5000);
// changeText(heading6, "Heading 6", "yellow", 6000);
// changeText(heading7, "Heading 7", "pink", 7000);
