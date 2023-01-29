const articlesFromAPI = [
    {
        id: 0,
        title: "7 Practical CSS tips",
        summary: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
        src: "images/news1.png",
    },
    {
        id: 1,
        title: "5 Practical HTML tips",
        summary: `Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that<p>
        I have 5 new projects that I classified as beginner, intermediate, and advanced.<p>
        You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a<p>
        challenge to each of them to test your Python skills.To make things easier, I already created<p>
        a template for a cover letter. Here’s how the template we’ll use looks... `,
        src: "images/news2.png"
    },
    {
        id: 2,
        title: "10 Pratical JS tips",
        summary: `Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that<p>
        I have 5 new projects that I classified as beginner, intermediate, and advanced.<p>
        You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a<p>
        challenge to each of them to test your Python skills.To make things easier, I already created<p>
        a template for a cover letter. Here’s how the template we’ll use looks... `,
        src: "images/news3.png"
    },
];


let article = `
<div class="left">
  <div class="top">
    <div class="info-top">
      <img
        alt=""
        class="img"
        src = "images/author.png"
      />
      <p class="authors-name">Authors name</p>
      <p class="delimeter">in</p>
      <p class="topics-name">Topics Name</p>
      <p class="delimeter-two">·</p>
      <p class="july7">7 july</p>
    </div>
    <div class="text">
      <a href="newpage.html"><p id="title" class="description">7 Practical CSS Tips</p></a>
      <p id="summary" class="description-two">
        You not only learn more Python by implementing
        what you already know but, in the end, you can see
        how all your hard work pays off.
      </p>
    </div>
  </div>
  <div class="info-bottom">
    <div class="info">
      <div class="button-small-38-px">
          <p class="label-text">Java Script</p>
      </div>
      <p class="num-12-min-read">12 min read</p>
      <p class="delimeter-three">·</p>
      <p class="num-12-min-read">Selected for you</p>
    </div>
    <div class="actions">
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
    </div>
  </div>
</div>
<img
  alt="article_img"
  class="img_two"
  src = ""
/>
`;

const articles = document.getElementById("articles");

articlesFromAPI.forEach((item) => {
    let newArticle = article.replace('id="title">', `id="title">${item.title}`);
    newArticle = newArticle.replace('id="summary">', `id="summary">${item.summary}`);

    newArticle = newArticle.replace('src=""', `src="${item.src}"`);
    console.log(newArticle);

    articles.innerHTML += newArticle;
    
});