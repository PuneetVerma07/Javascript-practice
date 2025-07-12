const users = [
  {
    name: "Ishita Raj",
    pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
    bio: "Full-stack developer who enjoys solving real-world problems with code."
  },
  {
    name: "Ritik Sharma",
    pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80",
    bio: "Tech enthusiast and JavaScript wizard building interactive web apps."
  },
  {
    name: "Simran Kaur",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    bio: "UI/UX designer who brings interfaces to life with a blend of creativity and logic."
  },
  {
    name: "Kabir Thakur",
    pic: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
    bio: "Node.js backend developer and database architect with a love for scaling apps."
  },
  {
    name: "Aanya Kapoor",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Beginner developer learning React and loving every bit of the journey."
  },
  {
    name: "Priya Nair",
    pic: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=400&q=80",
    bio: "Mobile-first design advocate and accessibility-focused front-end engineer."
  },
  {
    name: "Tanya Batra",
    pic: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    bio: "Tech explorer, designer, and student aiming to build inclusive digital products."
  }
];

const cardsContainer = document.querySelector(".cards");
const inp = document.querySelector(".inp");

function showImage(arr) {
  cardsContainer.innerHTML = ""; // clear previous cards

  if (arr.length === 0) {
    const msg = document.createElement("p");
    msg.textContent = "❌ User not found";
    msg.style.color = "red";
    msg.style.fontWeight = "bold";
    msg.style.textAlign = "center";
    cardsContainer.appendChild(msg);
    return;
  }

  arr.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("bg-img");
    img.src = user.pic;

    const blurredLayer = document.createElement("div");
    blurredLayer.classList.add("blurred-layer");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;

    const content = document.createElement("div");
    content.classList.add("content");

    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    content.appendChild(heading);
    content.appendChild(para);

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    cardsContainer.appendChild(card);
  });
}

// Initial load
showImage(users);

// Search input listener
inp.addEventListener("input", () => {
  const search = inp.value.trim().toLowerCase();
  const filtered = users.filter(user =>
    user.name.toLowerCase().startsWith(search)
  );
  showImage(filtered);
});
