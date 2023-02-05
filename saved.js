let data = JSON.parse(localStorage.getItem("data"));

let likes =  JSON.parse(localStorage.getItem("likes"));

let result = document.getElementById("container");

if (likes) {

    data.map((item) => {

        item.data.map((el) => {
            console.log(el)
            if (likes.includes(el.id)) {

                result.innerHTML += `<div class = "newscon">
                <div class = "img" style = "background-image : url(${el.imageUrl})"></div>
                <div class = "main">
                    <h1 class = "headline">${el.title.toUpperCase()}</h1>
                    <div class = "article">
                        <p class = "news">${el.content}</p>
                    </div>
                    <a href= "${el.readMoreUrl}" class = "readmore">Read more</a>    
                    <p class="publisher">PUBLISHED BY : ${el.author.toUpperCase()}</p>
                    <p class = "category">CATEGORY: ${item.category.toUpperCase()}</p>
                            
                    <span id=${el.id} onclick="likeFun(event)" class="material-symbols-outlined"><img src="images/favorite_FILL0_wght400_GRAD0_opsz48.png"></img></span>
                </div> 
            </div>`

            }

        });

    });

} else {

    alert("HI, you havent saved anything");

}