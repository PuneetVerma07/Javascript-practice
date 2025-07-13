let addNote = document.querySelector("#add-note");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm");

// Container
let stack = document.querySelector(".stack");
let upBtn = document.querySelector("#upBtn");
let downBtn = document.querySelector("#downBtn");

const form = document.querySelector("form");

// Input fields
const imgUrlInput = document.querySelector(
  'input[placeholder="https://example.com/photo.jpg"]'
);
const fullNameInput = document.querySelector(
  'input[placeholder="Enter your full name"]'
);
const homeTownInput = document.querySelector(
  'input[placeholder="Enter your home town"]'
);
const purposeInput = document.querySelector(
  'input[placeholder="e.g.,Quick appointment note"]'
);

// Radio buttons (category)
const categoryRadios = document.querySelectorAll('input[name="category"]');

// Submit button
const submitBtn = document.querySelector(".submit-btn");

// code starts from here

function saveToLocalStorage(obj) {
  if (localStorage.getItem("tasks") === null) {
    let oldTasks = [];
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  } else {
    let oldTasks = JSON.parse(localStorage.getItem("tasks"));
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  }
}

addNote.addEventListener("click", () => {
  formContainer.style.display = "initial";
});
closeForm.addEventListener("click", () => {
  formContainer.style.display = "none";
});

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Trimmed values
  const imgUrl = imgUrlInput.value.trim();
  const fullName = fullNameInput.value.trim();
  const homeTown = homeTownInput.value.trim();
  const purpose = purposeInput.value.trim();
  const selectedCategory = [...categoryRadios].find((r) => r.checked)?.value;

  // Validate fields
  if (imgUrl === "") {
    alert("❗ Please enter an image URL.");
    return;
  }

  if (fullName === "") {
    alert("❗ Please enter your full name.");
    return;
  }

  if (homeTown === "") {
    alert("❗ Please enter your home town.");
    return;
  }

  if (purpose === "") {
    alert("❗ Please enter the purpose.");
    return;
  }

  if (!selectedCategory) {
    alert("❗ Please select a category.");
    return;
  }

  // If all validations pass
  const formData = {
    imgUrl,
    fullName,
    homeTown,
    purpose,
    category: selectedCategory,
  };

  saveToLocalStorage(formData);

  // console.log("✅ Form data submitted:", formData);
  // Optionally reset form:
  form.reset();
  formContainer.style.display = "none";
  showCards();
});

function showCards() {
  stack.innerHTML = ""

  let arrTasks = JSON.parse(localStorage.getItem("tasks"));

  arrTasks.forEach((task) => {
    // Card
    const card = document.createElement("div");
    card.classList.add("card");

    // Image
    const avatar = document.createElement("img");
    avatar.classList.add("avatar");
    avatar.src = task.imgUrl;
    avatar.alt = "profile-pic";

    // Name
    const name = document.createElement("h2");
    name.textContent = task.fullName;

    // Info 1
    const info1 = document.createElement("div");
    info1.classList.add("info");

    const hometownLabel = document.createElement("span");
    hometownLabel.textContent = "Home Town ";

    const hometownValue = document.createElement("span");
    hometownValue.textContent = task.homeTown;

    info1.appendChild(hometownLabel);
    info1.appendChild(hometownValue);

    // Info 2
    const info2 = document.createElement("div");
    info2.classList.add("info");

    const bookingsLabel = document.createElement("span");
    bookingsLabel.textContent = task.purpose;

    const bookingsValue = document.createElement("span");
    bookingsValue.textContent = task.category;

    info2.appendChild(bookingsLabel);
    info2.appendChild(bookingsValue);

    // Buttons container
    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    // Call button
    const callBtn = document.createElement("button");
    callBtn.classList.add("call");
    callBtn.innerHTML = '<i class="ri-phone-line"></i> Call';

    // Message button
    const msgBtn = document.createElement("button");
    msgBtn.classList.add("msg");
    msgBtn.textContent = "Message";

    // Append buttons
    buttons.appendChild(callBtn);
    buttons.appendChild(msgBtn);

    // Append everything to card
    card.appendChild(avatar);
    card.appendChild(name);
    card.appendChild(info1);
    card.appendChild(info2);
    card.appendChild(buttons);

    // Append card to stack
    stack.appendChild(card);

    // Finally append to body or some container
    // document.querySelector(".stack").appendChild(card); // or document.querySelector(".your-container").appendChild(stack)
  });
}

showCards();

function updateStack() {
  let cards = document.querySelector(".stack .card");

  for (let i = 0; i < 3; i++) {
    card.style.zIndex = 3 - index;
    card.stye.transform = `translateY(${index * 10}px) scale(${
      1 - index * 0.02
    })`;
    card.style.opacity = `${1 - index * 0.02}`;
  }
}

upBtn.addEventListener("click", function () {
  let lastChild = stack.lastElementChild;
  if (lastChild) {
    stack.insertBefore(lastChild, stack.firstElementChild);
    //update
    updateStack();
  }
});
downBtn.addEventListener("click", function () {
  let firstChild = stack.firstElementChild;
  if (firstChild) {
    stack.appendChild(firstChild);
  }
  updateStack();
});
