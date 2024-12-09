/*{
  <div class="card">
        <h2>Naruto</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          dignissimos?
        </p>
        <img src="https://cdn.staticneo.com/w/naruto/Nprofile2.jpg" alt="" />
      </div> 
}*/

const appDiv = document.querySelector(".app");

function generateCard(title, description, imgUrl) {
  const cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card");
  const h2 = document.createElement("h2");
  h2.innerText = title;
  const p = document.createElement("p");
  p.innerText = description;
  const img = document.createElement("img");
  img.setAttribute("src", imgUrl);
  appDiv.appendChild(cardDiv);
  cardDiv.appendChild(h2);
  cardDiv.appendChild(p);
  cardDiv.appendChild(img);
}

generateCard(
  "Naruto",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,dignissimos?",
  "https://cdn.staticneo.com/w/naruto/Nprofile2.jpg"
);
