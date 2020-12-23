// Create a dinamic navegation using DocumentFragment 

const navList = ["Today`s Paper", "Opinion", "Politics", "U.S News"]
const navId = document.querySelector("#navegation");

const fragment = document.createDocumentFragment();
navList.forEach((list) => {
  const li = document.createElement("li");
  li.innerHTML = list;
  fragment.appendChild(li);
})

navId.appendChild(fragment);








