document.addEventListener("DOMContentLoaded", () => {
  console.log("DOCUMENT LOADED!!!");
  /*                 VARIABLES                              */

  /* GENERAL VAR */
  const darkModeBtn = document.getElementById("dark-mode-btn");
  const lightModeBtn = document.getElementById("light-mode-btn");
  const theme = document.getElementById("html");

  /* NAVBAR VAR */
  const navLinks = document.querySelectorAll(".nav-link");

  /* FOOTER VAR */
  const footerH3 = document.getElementById("footer-h3");
  const topicTitles = document.querySelectorAll(".topic-title");

  /* EVENT LISTENER VAR */

  /* Title Changing */
  const submitTitle = document.getElementById("submit-title");
  const inputHeadTitle = document.getElementById("input-head-title");
  const headTitle = document.getElementById("head-title");

  const addBtn = document.getElementById("add-btn");

  const clearBtn = document.getElementById("del-btn");

  const saveBtn = document.getElementById("save-btn");

  const uploadBtn = document.getElementById("upload-btn");

  let mainPlusBtn = null;
  let mainMinusBtn = null;
  let innerManageCards = null;
  let outerInnerMinusBtns = null;
  let outerInnerCards = document.getElementById("outer-inner-manage-cards");

  /*                 DATA                                   */

  /*                 FUNCTIONS                              */

  /* TITLE CHANGING FUNCTION */
  const titleChangingFun = () => {
    headTitle.textContent = inputHeadTitle.value;
    if (!inputHeadTitle.value) {
      headTitle.textContent = "Project";
    }
  };
  const titleChangingFunEnter = (e) => {
    if ((e.key = "Enter")) {
      headTitle.textContent = inputHeadTitle.value;
    }
    if (!inputHeadTitle) {
      headTitle.textContent = "Project";
    }
  };

  /* INNER PLUS FUN */
  const innerPlusFun = (e) => {
    const innerPlusBtn = e.target;
    const innerManageCard = innerPlusBtn.parentNode.parentNode; // Get the parent element of the inner plus button
    let outerInnerManageCards = innerManageCard.querySelector(
      "#outer-inner-manage-cards",
    );

    if (!outerInnerManageCards) {
      outerInnerManageCards = document.createElement("div");
      outerInnerManageCards.id = "outer-inner-manage-cards";
      innerManageCard.appendChild(outerInnerManageCards);
    }

    const outerInnerChildren = outerInnerManageCards.children.length;

    if (outerInnerChildren < 3) {
      outerInnerManageCards.insertAdjacentHTML(
        "beforeend",
        `
      <div id="outer-inner-manage-card"> 
        <div id="outer-inner-buttons">
          <button id="outer-inner-minus-btn" class="outer-inner-minus-btn">-</button>
        </div>
        <input class="outer-inner-manage-card-title" id="outer-inner-manage-card-title" type="text" placeholder="Put Title Here">
        <textarea class="outer-inner-manage-card-desc" id="outer-inner-manage-card-desc" placeholder="Description"></textarea>
      </div>
      `,
      );

      outerInnerMinusBtns = document.querySelectorAll(".outer-inner-minus-btn");
      outerInnerMinusBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const outerInnerManageCard = btn.parentNode.parentNode;
          outerInnerManageCard.remove();
          const innerPlusBtn =
            outerInnerManageCard.querySelector(".inner-plus-btn");
          if (innerPlusBtn) {
            const count = innerPlusBtn.getAttribute("data-count") || 0;
            innerPlusBtn.setAttribute("data-count", count - 1);
            if (count - 1 === 1) {
              innerPlusBtn.disabled = false;
            }
          }
        });
      });

      // Update the count of inner manage cards for this inner plus button
      const count = innerPlusBtn.getAttribute("data-count") || 0;
      innerPlusBtn.setAttribute("data-count", count + 1);

      if (count + 1 === 2) {
        alert("max is 3");
        innerPlusBtn.disabled = true;
      }
    }
  };

  /* MAIN PLUS BUTTON FUNCTION */
  const mainPlusFun = () => {
    const innerCards = document.getElementById("inner-manage-cards");
    const innerChildren = innerCards?.children.length ?? 0;
    const mainPlusBtn = document.getElementById(`main-plus-btn`);
    let innerManageCards = document.getElementById(`inner-manage-cards`);

    if (!innerManageCards) {
      const manageCard = document.getElementById("manage-card");
      innerManageCards = document.createElement("div");
      innerManageCards.id = "inner-manage-cards";
      manageCard.appendChild(innerManageCards);
    }
    if (mainPlusBtn) {
      if (innerChildren < 2) {
        innerManageCards.insertAdjacentHTML(
          "beforeend",
          `
          <div id ="inner-manage-card" class="inner-manage-card">
            <div id="inner-manage-buttons">
              <button id="inner-plus-btn" class="inner-plus-btn">+</button>
              <button id="inner-minus-btn" class="inner-minus-btn">-</button>
            </div>
            <input class="inner-manage-card-title" id="inner-manage-card-title" type="text" placeholder="Put Title Here">
            <textarea class="inner-manage-card-desc" id="inner-manage-card-desc" placeholder="Description"></textarea>
          </div>
          `,
        );
        if (innerChildren === 1) {
          alert("max is 2");
          mainPlusBtn.disabled = true;
        }
      }
    }
    innerManageCards.addEventListener("click", (e) => {
      if (e.target.classList.contains("inner-plus-btn")) {
        innerPlusFun(e);
      }
    });
  };

  /* ADD BUTTON FUNCTION */
  const addBtnFun = () => {
    const manageCards = document.getElementById("manage-cards");
    const mainChildren = manageCards?.children.length ?? 0;

    if (mainChildren === 0) {
      addBtn.disabled = true;
      alert("You can only have 1 main manage card");
    }
    if (mainChildren < 1) {
      manageCards.insertAdjacentHTML(
        "beforeend",
        `
        <div id="manage-card" class="manage-card">

        <div id="main-manage-cards">

          <div id="main-manage-card" class="main-manage-card">
          <div id="main-manage-buttons">
            <button id="main-plus-btn" class="main-plus-btn">+</button>
            <button id="main-minus-btn" class="main-minus-btn">-</button>
          </div>
          <input class="main-manage-card-title" id="main-manage-card-title" type="text" placeholder="Put Main Title Here">
          </div>      

        </div>

        <div id="inner-manage-cards">

        </div>

      </div>
    `,
      );
    }
    mainPlusBtn = document.getElementById("main-plus-btn");
    mainMinusBtn = document.getElementById("main-minus-btn");
    innerManageCards = document.getElementById("inner-manage-cards");

    /* Inner and Main Btns */
    mainPlusBtn.addEventListener("click", () => mainPlusFun());
    mainMinusBtn.addEventListener("click", () => mainMinusFun());
    innerManageCards.addEventListener("click", (e) => {
      if (e.target.classList.contains("inner-minus-btn")) {
        innerMinusFun(e);
      }
    });
  };

  /* MAIN MINUS BUTTON FUNCTION */
  const mainMinusFun = () => {
    const manageCard = document.getElementById(`manage-card`);
    manageCard.remove();
    if (!document.getElementById("manage-cards").children.length) {
      addBtn.disabled = false;
    }
  };

  /* INNER MINUS BUTTON FUN */
  const innerMinusFun = (e) => {
    const innerMinusBtn = e.target;
    const innerManageCard = innerMinusBtn.parentNode.parentNode; // Get the parent element of the inner minus button
    const outerInnerManageCards = innerManageCard.parentNode;
    const mainPlusBtn = document.getElementById(`main-plus-btn`);
    innerManageCard.remove();
    if (outerInnerManageCards.children.length === 0) {
      outerInnerManageCards.parentNode.removeChild(outerInnerManageCards);
    }
    mainPlusBtn.disabled = false;
  };

  /* CLEAR BUTTON FUNCTION */
  const clearBtnFun = () => {
    const manageCards = document.getElementById("manage-cards");
    addBtn.disabled = false;
    manageCards.innerHTML = "";
    alert("Successfully Cleared Whole Sheet");
  };

  /* SAVE BUTTON FUNCTION */
  const saveBtnFun = () => {
    const mainElement = document.getElementById("main");
    const html = mainElement.outerHTML;

    const inputValues = [];
    const inputs = mainElement.querySelectorAll("input");
    inputs.forEach((input) => {
      inputValues.push(input.value);
    });

    const textareaValues = [];
    const textareas = mainElement.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
      textareaValues.push(textarea.value);
    });

    const dataToSave = {
      html,
      inputValues,
      textareaValues,
    };

    const blob = new Blob([JSON.stringify(dataToSave)], {
      type: "text/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "save.html";
    a.click();
  };

  /* UPLOAD BUTTON FUNCTION*/
  const uploadBtnFun = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".html";
    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result;
        const data = JSON.parse(fileContent);

        removeEventListeners();

        // Update the main element with the uploaded content
        const mainElementHtml = data.html;
        document.getElementById("main").innerHTML = mainElementHtml;

        // Get the input values from the uploaded data
        if (data.inputValues) {
          const inputs = document
            .getElementById("main")
            .querySelectorAll("input");
          inputs.forEach((input, index) => {
            input.value = data.inputValues[index];
          });
        }

        // Get the textarea values from the uploaded data
        if (data.textareaValues) {
          const textareas = document
            .getElementById("main")
            .querySelectorAll("textarea");
          textareas.forEach((textarea, index) => {
            textarea.value = data.textareaValues[index];
          });
        }

        // Reattach event listeners to new elements
        reattachEventListeners();
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const removeEventListeners = () => {
    // Remove event listeners from old elements
    darkModeBtn.removeEventListener("click", darkModeFun);
    lightModeBtn.removeEventListener("click", lightModeFun);
    submitTitle.removeEventListener("click", titleChangingFun);
    inputHeadTitle.removeEventListener("keydown", titleChangingFunEnter);
    addBtn.removeEventListener("click", addBtnFun);
    clearBtn.removeEventListener("click", clearBtnFun);
    saveBtn.removeEventListener("click", saveBtnFun);
    uploadBtn.removeEventListener("click", uploadBtnFun);
    document
      .getElementById("main")
      .querySelectorAll(".inner-manage-card")
      .forEach((innerManageCard) => {
        const innerPlusBtn = innerManageCard.querySelector(".inner-plus-btn");
        if (innerPlusBtn) {
          innerPlusBtn.removeEventListener("click", innerPlusFun);
        }
      });
    document
      .getElementById("main-plus-btn")
      ?.removeEventListener("click", mainPlusFun);
    document
      .getElementById("main-minus-btn")
      ?.removeEventListener("click", mainMinusFun);
    document
      .getElementById("inner-manage-cards")
      ?.removeEventListener("click", (e) => {
        if (e.target.classList.contains("inner-minus-btn")) {
          innerMinusFun(e);
        }
      });
  };

  const reattachEventListeners = () => {
    // Reattach event listeners to new elements
    let mainMinusBtn = document.getElementById(`main-minus-btn`);
    let mainPlusBtn = document.getElementById(`main-plus-btn`);
    let innerManageCards = document.getElementById(`inner-manage-cards`);
    let darkModeBtn = document.getElementById("dark-mode-btn");
    let lightModeBtn = document.getElementById("light-mode-btn");
    let submitTitle = document.getElementById("submit-title");
    let inputHeadTitle = document.getElementById("input-head-title");
    let addBtn = document.getElementById("add-btn");
    let clearBtn = document.getElementById("del-btn");
    let saveBtn = document.getElementById("save-btn");
    let uploadBtn = document.getElementById("upload-btn");

    darkModeBtn.addEventListener("click", () => darkModeFun());
    lightModeBtn.addEventListener("click", () => lightModeFun());
    submitTitle.addEventListener("click", () => titleChangingFun());
    inputHeadTitle.addEventListener("keydown", (e) => titleChangingFunEnter(e));
    addBtn.addEventListener("click", () => addBtnFun());
    addBtn.disabled = false;
    clearBtn.addEventListener("click", () => clearBtnFun());
    saveBtn.addEventListener("click", () => saveBtnFun());
    uploadBtn.addEventListener("click", () => uploadBtnFun());
    mainPlusBtn.addEventListener("click", () => mainPlusFun());
    mainPlusBtn.disabled = false;
    mainMinusBtn.addEventListener("click", () => mainMinusFun());
    document
      .getElementById("main")
      .querySelectorAll(".inner-manage-card")
      .forEach((innerManageCard) => {
        const innerPlusBtn = innerManageCard.querySelector(".inner-plus-btn");
        if (innerPlusBtn) {
          innerPlusBtn.addEventListener("click", (e) => innerPlusFun(e));
        }
      });
    document
      .getElementById("main")
      .querySelectorAll(".inner-manage-card")
      .forEach((innerManageCard) => {
        innerManageCard
          .querySelectorAll(".outer-inner-minus-btn")
          .forEach((btn) => {
            btn.addEventListener("click", (e) => {
              const outerInnerManageCard = btn.parentNode.parentNode;
              outerInnerManageCard.remove();
              const innerPlusBtn =
                outerInnerManageCard.querySelector(".inner-plus-btn");
              if (innerPlusBtn) {
                const count = innerPlusBtn.getAttribute("data-count") || 0;
                innerPlusBtn.setAttribute("data-count", count - 1);
                if (count - 1 < 2) {
                  innerPlusBtn.disabled = false;
                }
              }
            });
          });
      });
    innerManageCards.addEventListener("click", (e) => {
      if (e.target.classList.contains("inner-minus-btn")) {
        innerMinusFun(e);
      }
    });
  };

  // Dark Mode and Light Functions
  const darkModeFun = () => {
    theme.classList.add("dark-mode");
    footerH3.classList.add("dark-mode-text");
    topicTitles.forEach((title) => {
      title.classList.add("dark-mode-text");
    });
    navLinks.forEach((link) => {
      link.classList.add("dark-mode-text");
    });
  };

  const lightModeFun = () => {
    theme.classList.remove("dark-mode");
    footerH3.classList.remove("dark-mode-text");
    topicTitles.forEach((title) => {
      title.classList.remove("dark-mode-text");
    });
    navLinks.forEach((link) => {
      link.classList.remove("dark-mode-text");
    });
  };

  /*                    BUTTONS                     */

  /* Dark Mode and Light Mode */
  darkModeBtn.addEventListener("click", () => darkModeFun());

  lightModeBtn.addEventListener("click", () => lightModeFun());

  /* Submit Title */
  submitTitle.addEventListener("click", () => titleChangingFun());
  inputHeadTitle.addEventListener("keydown", (e) => titleChangingFunEnter(e));

  /* Add Button */
  addBtn.addEventListener("click", () => addBtnFun());

  /* Clear Button */
  clearBtn.addEventListener("click", () => clearBtnFun());

  /* Save Button */
  saveBtn.addEventListener("click", () => saveBtnFun());

  /* Upload Button */
  uploadBtn.addEventListener("click", () => uploadBtnFun());

  /* Hamburger Icon */

  /*
  navBtn.addEventListener("click", () => {
    navBtn.style.display = "none";
    sideBar.style.display = "flex";
    sideBarLi.forEach(li => li.style.display = "flex");
  });
  sideBarBtn.addEventListener("click", () => {
    navBtn.style.display = "flex";
    sideBar.style.display = "none";
    sideBarLi.forEach(li => li.style.display = "none");
  });
  */
});
