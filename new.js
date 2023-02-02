/* <div class = "newscon">
            <div class = "img">
                
            </div>
            <div class = "main">
                <h1 class = "headline">TIGER GETS BEATEN BY THE HORSE</h1>
                <div class = "article">
                    <p class = "news">mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amflamldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla </p>
                </div>
                <a href= "" class = "readmore">Read more</a>
                
                <p class="publisher">PUBLISHED BY : AHUJA SINGH</p>
                <p class = "category">CATEGORY: SPORTS</p>
                
                <span class="material-symbols-outlined">
                    favorite
                </span>
            </div> */

function printNews(i,a,b,c,d,t)
{
    let newscon = document.createElement("div")
    newscon.classList.add("newscon")
    newscon.classList.add("all");

    let image1 = document.createElement("div")
    image1.classList.add("img")
    image1.style.backgroundImage = "url("+ i +")";
    

    

    let main = document.createElement("div")
    main.classList.add("main")

    let headline = document.createElement("h1")
    headline.classList.add("headline")
    headline.innerText = a;

    let article = document.createElement("div")
    article.classList.add("article")

    let news = document.createElement("p");
    news.classList.add("news");
    news.innerText = b;

    article.appendChild(news);

    let readmore = document.createElement("a")
    readmore.classList.add("readmore");
    readmore.innerText = "Read More";
    readmore.href = t;
    

    let publisher = document.createElement("p")
    publisher.classList.add("publisher");
    publisher.innerText = "PUBLISHED BY : " + c.toUpperCase();

    let category = document.createElement("p")
    category.classList.add("category");
    
    category.innerText = "CATEGORY : " + d.toUpperCase();

    if (category.innerText === "CATEGORY : SPORTS" )
    {
        newscon.classList.add("sports");
    }
    else if (category.innerText === "CATEGORY : SCIENCE")
    {
        newscon.classList.add("science");
    }
    else if (category.innerText === "CATEGORY : AUTOMOBILE")
    {
        newscon.classList.add("automobile");
    }
    else if (category.innerText === "CATEGORY : WORLD")
    {
        newscon.classList.add("world");
    }
    else if (category.innerText === "CATEGORY : POLITICS")
    {
        newscon.classList.add("politics");
    }
    else if (category.innerText === "CATEGORY : HATKE")
    {
        newscon.classList.add("hatke");
    }

    let span = document.createElement("img");
    span.classList.add("material-symbols-outlined");
    span.src = "images/favorite_FILL0_wght400_GRAD0_opsz48.png";

    for (let ele of [headline,article,readmore,publisher,category,span])
    {
        main.appendChild(ele)
    }

    for (let ele of [image1 ,main])
    {
        newscon.appendChild(ele)
    }


    return newscon;
}


let newscontainer = document.querySelector(".newscontainer")

async function getDataSports(){
    
    let f = await fetch("https://inshorts.deta.dev/news?category=sports")
    console.log("eswar");
    return f.json();

}

async function getDataScience(){
    
    let f = await fetch("https://inshorts.deta.dev/news?category=science")
    return f.json();

}

async function getDataAutomobile(){
    
    let f = await fetch("https://inshorts.deta.dev/news?category=automobile")
    return f.json();

}

async function getDataWorld(){
    
    let f = await fetch("https://inshorts.deta.dev/news?category=world")
    return f.json();

}

async function getDataPolitics(){
    
    let f = await fetch("https://inshorts.deta.dev/news?category=politics")
    return f.json();

}

async function getDataHatke(){
    
    let f = await fetch("https://inshorts.deta.dev/news?category=hatke")
    return f.json();

}

async function main1(){
    const dw = await getDataSports();
    const e = dw.data;
    let d = dw.category;
    for (el of e )
    {
        let i = el.imageUrl;
        let a = el.title;
        let b = el.content;
        let c = el.author;
        let t = el.readMoreUrl;
        // let id = el.id;
        
        // let newscon = document.querySelector(".newscon");
        // newscon.setAttribute("id",id);

        newscontainer.appendChild(printNews(i,a,b,c,d,t));

        
    }
}

main1()

async function main2(){
    const dw = await getDataScience();
    const e = dw.data;
    let d = dw.category;
    for (el of e )
    {
        let i = el.imageUrl;
        let a = el.title;
        let b = el.content;
        let c = el.author;
        let t = el.readMoreUrl;
        // let id = el.id;
        
        // let newscon = document.querySelector(".newscon");
        // newscon.setAttribute("id",id);

        newscontainer.appendChild(printNews(i,a,b,c,d,t));

        
    }
}

main2()

async function main3(){
    const dw = await getDataAutomobile();
    const e = dw.data;
    let d = dw.category;
    for (el of e )
    {
        let i = el.imageUrl;
        let a = el.title;
        let b = el.content;
        let c = el.author;
        let t = el.readMoreUrl;
        // let id = el.id;
        
        // let newscon = document.querySelector(".newscon");
        // newscon.setAttribute("id",id);

        newscontainer.appendChild(printNews(i,a,b,c,d,t));

        
    }
}

main3()

async function main4(){
    const dw = await getDataWorld();
    const e = dw.data;
    let d = dw.category;
    for (el of e )
    {
        let i = el.imageUrl;
        let a = el.title;
        let b = el.content;
        let c = el.author;
        let t = el.readMoreUrl;
        // let id = el.id;
        
        // let newscon = document.querySelector(".newscon");
        // newscon.setAttribute("id",id);

        newscontainer.appendChild(printNews(i,a,b,c,d,t));

        
    }
}

main4()

async function main5(){
    const dw = await getDataPolitics();
    const e = dw.data;
    let d = dw.category;
    for (el of e )
    {
        let i = el.imageUrl;
        let a = el.title;
        let b = el.content;
        let c = el.author;
        let t = el.readMoreUrl;
        // let id = el.id;
        
        // let newscon = document.querySelector(".newscon");
        // newscon.setAttribute("id",id);

        newscontainer.appendChild(printNews(i,a,b,c,d,t));

        
    }
}

main5()

async function main6(){
    const dw = await getDataHatke();
    const e = dw.data;
    let d = dw.category;
    for (el of e )
    {
        let i = el.imageUrl;
        let a = el.title;
        let b = el.content;
        let c = el.author;
        let t = el.readMoreUrl;
        // let id = el.id;
        
        // let newscon = document.querySelector(".newscon");
        // newscon.setAttribute("id",id);

        newscontainer.appendChild(printNews(i,a,b,c,d,t));

        
    }
}

main6()

const allFilterItems = document.querySelectorAll('.newscon');
const allFilterBtns = document.querySelectorAll('.btn');


function dis(){

    
    const allFilterItems = document.querySelectorAll('.newscon');
    const allFilterBtns = document.querySelectorAll('.btn');
    
    allFilterBtns.forEach((btn) => {
    
        btn.addEventListener('click', () => {
            
    
            showFilteredContent(btn);
        });
    });
    
    function showFilteredContent(btn){
        allFilterItems.forEach((item) => {
            if(item.classList.contains(btn.id)){
                
                item.style.display = "grid";
                
            } else {
                item.style.display = "none";
                
            }
        });
    }
}

