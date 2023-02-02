//format the html being created by javascript
/* <div class = "newscon">
    <div class = "img"></div>
    <div class = "main">
        <h1 class = "headline">TIGER GETS BEATEN BY THE HORSE</h1>
        <div class = "article">
            <p class = "news">mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amflamldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla </p>
        </div>
        <a href= "" class = "readmore">Read more</a>
                
        <p class="publisher">PUBLISHED BY : AHUJA SINGH</p>
        <p class = "category">CATEGORY: SPORTS</p>
                
        <span class="material-symbols-outlined">favorite</span>
    </div> 
</div> */

//creating html structure with js
function printNews(i, a, b, c, d, t) {
  let newscon = document.createElement("div");
  newscon.classList.add("newscon");
  newscon.classList.add("all");

  let image1 = document.createElement("div");
  image1.classList.add("img");
  image1.style.backgroundImage = "url(" + i + ")";

  let main = document.createElement("div");
  main.classList.add("main");

  let headline = document.createElement("h1");
  headline.classList.add("headline");
  headline.innerText = a;

  let article = document.createElement("div");
  article.classList.add("article");

  let news = document.createElement("p");
  news.classList.add("news");
  news.innerText = b;

  article.appendChild(news);

  let readmore = document.createElement("a");
  readmore.classList.add("readmore");
  readmore.innerText = "Read More";
  readmore.href = t;

  let publisher = document.createElement("p");
  publisher.classList.add("publisher");
  publisher.innerText = "PUBLISHED BY : " + c.toUpperCase();

  let category = document.createElement("p");
  category.classList.add("category");

  category.innerText = "CATEGORY : " + d.toUpperCase();

  if (category.innerText === "CATEGORY : SPORTS") {
    newscon.classList.add("sports");
  } else if (category.innerText === "CATEGORY : SCIENCE") {
    newscon.classList.add("science");
  } else if (category.innerText === "CATEGORY : AUTOMOBILE") {
    newscon.classList.add("automobile");
  } else if (category.innerText === "CATEGORY : WORLD") {
    newscon.classList.add("world");
  } else if (category.innerText === "CATEGORY : POLITICS") {
    newscon.classList.add("politics");
  } else if (category.innerText === "CATEGORY : HATKE") {
    newscon.classList.add("hatke");
  }

  let span = document.createElement("img");
  span.classList.add("material-symbols-outlined");
  span.src = "images/favorite_FILL0_wght400_GRAD0_opsz48.png";

  for (let ele of [headline, article, readmore, publisher, category, span]) {
    main.appendChild(ele);
  }

  for (let ele of [image1, main]) {
    newscon.appendChild(ele);
  }

  return newscon;
}

//fetching data and passing into the container

let newscontainer = document.querySelector(".newscontainer");

async function getData() {
  // const fetch1 = fetch("https://inshorts.deta.dev/news?category=science");
  // const fetch2 = fetch("https://inshorts.deta.dev/news?category=sports");
  // const fetch3 = fetch("https://inshorts.deta.dev/news?category=automobile");
  // const fetch4 = fetch("https://inshorts.deta.dev/news?category=politics");
  // const fetch5 = fetch("https://inshorts.deta.dev/news?category=world");
  // const fetch6 = fetch("https://inshorts.deta.dev/news?category=hatke");
  fetch("https://inshorts.deta.dev/news?category")
    .then((response) => response.json())
    .then((data) => passingValues(data));

  //   si.then((response) => response.json()).then((data) => console.log(data));

  // let f = await Promise.all([fetch1,fetch2,fetch3,fetch4,fetch5,fetch6])
  // .then(response => {
  //     return Promise.all(response.map(value => value.json()));
  // }).then(data => data);

  function passingValues(data) {
    data.forEach((el) => {
      let cat = el.category;
      let data = el.data;
      data.forEach((sol) => {
        let i = sol.imageUrl;
        let a = sol.title;
        let b = sol.content;
        let c = sol.author;
        let t = sol.readMoreUrl;
        let id = sol.id;

        let newscon = document.querySelector(".newscon");
        newscon.setAttribute("id", id);
        // console.log(id);
        newscontainer.appendChild(printNews(i, a, b, c, cat, t));
      });
    });
  }
}

getData();

//filter functions

const allFilterItems = document.querySelectorAll(".newscon");
const allFilterBtns = document.querySelectorAll(".btn");

function dis() {
  const allFilterItems = document.querySelectorAll(".newscon");
  const allFilterBtns = document.querySelectorAll(".btn");

  allFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      showFilteredContent(btn);
    });
  });

  function showFilteredContent(btn) {
    allFilterItems.forEach((item) => {
      if (item.classList.contains(btn.id)) {
        item.style.display = "grid";
      } else {
        item.style.display = "none";
      }
    });
  }
}
