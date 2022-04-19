let news_data = null
const getNewsData = async () => {
    


    await fetch('https://newsapi.org/v2/top-headlines?q=ukraina&country=no&apiKey=c946e2ed16b6456cb6d9f3da527a85d4')
    .then(res=> res.json())
    .then(res=>{
      //console.log(res)  
      //console.log(res.articles)
      news_data = res.articles
   
    })
    .catch(err=>{
      console.log(err)
    })
    return news_data
}

const fetchNews = async()=>{
    const data = await getNewsData()
    console.log(data)
    //console.log(data[0])
    //console.log(data[0].url)

    const n1 = document.getElementById('news')
    
    const artikkelTittel1 = `<a href='${data[0].url}'> ${data[0].title}</a>`
    const artikkelTittel2 = `<a href='${data[1].url}'> ${data[1].title}</a>`
    const artikkelTittel3 = `<a href='${data[2].url}'> ${data[2].title}</a>`
    const artikkelTittel4 = `<a href='${data[3].url}'> ${data[3].title}</a>`
    
    n1.innerHTML = artikkelTittel1 + artikkelTittel2 + artikkelTittel3 + artikkelTittel4
    
    if (screen.width <= 1079) {
      n1.children[0].id = 'news_text'
      n1.children[1].id = 'news_text2'
      n1.children[2].id = 'news_text3'
      n1.children[3].id = 'news_text4'
    } else if(screen.width >= 1080) {
      n1.children[0].id = 'news_textBig'
      n1.children[1].id = 'news_textBig2'
      n1.children[2].id = 'news_textBig3'
      n1.children[3].id = 'news_textBig4'
    }
}
fetchNews()
