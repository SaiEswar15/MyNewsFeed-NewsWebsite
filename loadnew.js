/*<div class = "newscon">
            <h1 class = "headline">TIGER GETS BEATEN BY THE HORSE</h1>
            <div class = "article">
                <p class = "news">mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amflamldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla mldvla;dlvjadljgbad;gl,g;ladmmvmdjklfja;odaqjqg.amfla </p>
            </div>
            <p>Read more</p>
            
            <p class="publisher">PUBLISHED BY : AHUJA SINGH</p>
            <p class = "category">CATEGORY: SPORTS</p>
            
            <span class="material-symbols-outlined">
                favorite
            </span>
</div>*/ 

function printNews(a,b,c,d){

    let newscon = document.createElement("div")
    newscon.classList.add("newscon");
    newscon.classList.add("all");

    let headline = document.createElement("h1")
    headline.classList.add("headline");
    headline.innerText = a;

    let article = document.createElement("div");
    article.classList.add = "article";

    let p1 = document.createElement("p")
    p1.classList.add("news");
    p1.innerText = b;

    article.appendChild(p1);

    let p2 = document.createElement("p")
    p2.setAttribute("onclick","expand()")
    p2.innerText = "Read More";

    let p3 = document.createElement("p")
    p3.innerText = "Published by : " + c;
    p3.classList.add("publisher");

    let p4 = document.createElement("p")
    p4.innerText = "Category : " + d;
    p4.classList.add("category");

    if (p4.innerText === "Category : sports" )
    {
        newscon.classList.add("sports");
    }
    else if (p4.innerText === "Category : science")
    {
        newscon.classList.add("science");
    }
    else if (p4.innerText === "Category : automobile")
    {
        newscon.classList.add("automobile");
    }
    else if (p4.innerText === "Category : world")
    {
        newscon.classList.add("world");
    }
    else if (p4.innerText === "Category : hatke")
    {
        newscon.classList.add("hatke");
    }

    let span = document.createElement("img");
    span.classList.add("material-symbols-outlined");
    span.src = "images/favorite_FILL0_wght400_GRAD0_opsz48.png";

    

    for(let el of [headline, article, p2, p3, p4, span])
    {
        newscon.appendChild(el);
    }

    
    
    return newscon;
}



let newscontainer = document.querySelector(".newscontainer");

async function getDataSports(){
    
    let f = await fetch("https://inshorts.deta.dev/news?category=sports")
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
    for (el of e )
    {
        let a = el.title;
        let b = el.content;
        let c= el.author;
        let d = dw.category;

        newscontainer.appendChild(printNews(a,b,c,d));

        
    }
}

main1()

async function main2(){
    const dw = await getDataScience();
    const e = dw.data;
    for (el of e )
    {
        let a = el.title;
        let b = el.content;
        let c= el.author;
        let d = dw.category;

        
        newscontainer.appendChild(printNews(a,b,c,d));
    }
}

main2()

async function main3(){
    const dw = await getDataAutomobile();
    const e = dw.data;
    for (el of e )
    {
        let a = el.title;
        let b = el.content;
        let c= el.author;
        let d = dw.category;

        
        newscontainer.appendChild(printNews(a,b,c,d));
    }
}

main3()

async function main4(){
    const dw = await getDataWorld();
    const e = dw.data;
    for (el of e )
    {
        let a = el.title;
        let b = el.content;
        let c= el.author;
        let d = dw.category;

        
        newscontainer.appendChild(printNews(a,b,c,d));
    }
}

main4()

async function main5(){
    const dw = await getDataPolitics();
    const e = dw.data;
    for (el of e )
    {
        let a = el.title;
        let b = el.content;
        let c= el.author;
        let d = dw.category;

        
        newscontainer.appendChild(printNews(a,b,c,d));
    }
}

main5()

async function main6(){
    const dw = await getDataHatke();
    const e = dw.data;
    for (el of e )
    {
        let a = el.title;
        let b = el.content;
        let c= el.author;
        let d = dw.category;

        
        newscontainer.appendChild(printNews(a,b,c,d));
    }
}

main6()


const allFilterItems = document.querySelectorAll('.newscon');
const allFilterBtns = document.querySelectorAll('button');


function dis(){

    
    const allFilterItems = document.querySelectorAll('.newscon');
    const allFilterBtns = document.querySelectorAll('button');
    
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




