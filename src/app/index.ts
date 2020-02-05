import { Button } from "@syncfusion/ej2-buttons";

// Initialize Button component.
let button: Button = new Button({ content: "Button" });

// Render initialized Button.
button.appendTo("#element");

document.getElementById("element").addEventListener("click", function() {
  check();
});

async function check() {
  // const Grid = await import('@syncfusion/ej2-grids');

  // import(/* webpackIgnore: true */ '@syncfusion/ej2-grids');

  import("@syncfusion/ej2-grids").then(Grid => {
    debugger;
    console.log(Grid);
  });
}
