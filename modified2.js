
async function  fetchData()
{
    const fetch1 = fetch("https://inshorts.deta.dev/news?category=science");
    const fetch2 = fetch("https://inshorts.deta.dev/news?category=sports");
    const fetch3 = fetch("https://inshorts.deta.dev/news?category=automobile");
    const fetch4 = fetch("https://inshorts.deta.dev/news?category=politics");
    const fetch5 = fetch("https://inshorts.deta.dev/news?category=world");
    const fetch6 = fetch("https://inshorts.deta.dev/news?category=hatke");
    
    let f = await Promise.all([fetch1,fetch2,fetch3,fetch4,fetch5,fetch6])
    .then(response => {
        return Promise.all(response.map(value => value.json()));
    }).then(data => displayData(data));  
}

fetchData();

function displayData(data) {
    localStorage.setItem("data", JSON.stringify(data));
    let result = document.getElementById("container");
    // console.log(data);


  data.map((item) => {
    // console.log(item.data);
    item.data.map(el => {
        result.innerHTML += 
        `<div class = "newscon ${item.category} all">
            <div class = "img" style = "background-image : url(${el.imageUrl})"></div>
            <div class = "main">
                <h1 class = "headline">${el.title.toUpperCase()}</h1>
                <div class = "article">
                    <p class = "news">${el.content}</p>
                </div>
                <a href= "${el.readMoreUrl}" class = "readmore">Read more</a>    
                <p class="publisher">PUBLISHED BY :  ${el.author.toUpperCase()}</p>
                <p class = "category" >CATEGORY :  ${item.category.toUpperCase()}</p>
                        
                <span id=${el.id} onclick="likeFun(event)" class="material-symbols-outlined"><img src="images/favorite_FILL0_wght400_GRAD0_opsz48.png"></img></span>
            </div> 
        </div>`;
    })
    
  });
  
}



function likeFun(event) {
  console.log(
    "hi",
    event.target && event.target.offsetParent && event.target.offsetParent.id
  );

  if (event.target && event.target.offsetParent && event.target.offsetParent.id) 
    {
    if (localStorage.getItem("likes")) 
    {
      let storedLikes = JSON.parse(localStorage.getItem("likes"));
    //   console.log(storedLikes);
      if (!storedLikes.includes(event.target.offsetParent.id)) {
        storedLikes.push(event.target.offsetParent.id);
        localStorage.setItem("likes", JSON.stringify(storedLikes));
      }
    } else {
      let arr = [];
      arr.push(event.target.offsetParent.id);
      localStorage.setItem("likes", JSON.stringify(arr));
    }
  }
}

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
