function myFunction() {
  const content = UrlFetchApp.fetch('https://news.nicovideo.jp').getContentText();

  const $ = Cheerio.load(content); // コンテントの読み込み

  const $titles = $('a.news-article');

  let html = "<html><body><h1>今日のニコニコニュースです！</h1><img src='https://news.nicovideo.jp/assets/logo-3923f9206cd9a2fc2118f286c3bc414d86ce2c9152d31daad92d06b031b50241.png'><ul>";

  $titles.each(function (index, element) {
    const title = $(element).find('.news-title').text();
    let link = $(element).attr('href');

    if (link.match(/^\//)) {
      link = 'https:/' + link;
    }
    link = link.replace("https:///", "https://");
    link = link.replace("https://watch/", "https://news.nicovideo.jp/watch/");
    
    console.log(title, link);

    html += "<li><a href=" + link + " target=_blank>" + title + "</a></li>";
  });

  html += "</ul></body></html>"

  console.log(html);

  const myEmail = Session.getActiveUser().getEmail();

  GmailApp.sendEmail(myEmail, "今日のニュース", "", {
    "htmlBody": html
  });

}
