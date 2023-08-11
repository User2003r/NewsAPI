let xmlResponse = (input) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.newscatcherapi.com/v2/search?q=${input}&lang=en`);
    xhr.setRequestHeader('x-api-key', '0wzB12KSj0X12pNadnmHIXc3HqZPGm6sXRlBL5jXxhg')
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let result = JSON.parse(xhr.responseText);
            console.log(result);
            let output = ""
            for (let i = 0; i < result.articles.length; i++) {
                output += `<div class="news-box">
                        <div id="img">
                        <img src="${result.articles[i].media}">
                        </div>
                        <div id="summary">
                           <a href="${result.articles[i].link}"><h3>${result.articles[i].title}</h3></a>
                            <p class="nes-summary">${result.articles[i].summary}</p>
                        </div>
                    </div>`
                console.log(result.articles[0].media)
            }
            document.getElementById('news-div').innerHTML = output;

        }
    }

    xhr.send();
    return input
}

let date = new Date()
const day = ["Sunday", "Monday", "Tuesday", "Thrusday", "Friday", "Saturday", "Sunday"]

let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let fullDate = day[date.getDay()] + " | " + month[date.getMonth()] + " " + date.getDate() + " " + " " + date.getFullYear()

document.getElementById('date').innerHTML = fullDate;




document.getElementById('search').addEventListener('click', () => {
    document.getElementById('button').style.zIndex = '2'
    document.getElementById('button').style.display = 'block'

})

xmlResponse("elonmusk")

document.getElementById('searchnews').addEventListener('click', () => {
    let value = document.getElementById('search-box').value
    console.log(xmlResponse(value))
    document.getElementById('button').style.display = "none"
})













































