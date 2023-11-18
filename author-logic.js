const submittedArticles = [];

function submitArticle(event) {
  event.preventDefault();

  const title = document.getElementById("articleTitle").value;
  const content = document.getElementById("articleContent").value;

  const article = { title, content };
  submittedArticles.push(article);

  updateSubmittedArticlesList();
  clearFormFields();
}

function updateSubmittedArticlesList() {
  const submittedArticlesList = document.getElementById(
    "submittedArticlesList"
  );
  submittedArticlesList.innerHTML = ""; // Clear existing list

  submittedArticles.forEach((article, index) => {
    const listItem = document.createElement("li");
    const titlePara = document.createElement("p");
    const contentPara = document.createElement("p");

    titlePara.innerHTML = `<strong>Title:</strong> ${article.title}`;
    contentPara.innerHTML = `<strong>Content:</strong> ${article.content}`;

    listItem.appendChild(titlePara);
    listItem.appendChild(contentPara);
    submittedArticlesList.appendChild(listItem);
  });

  // Additionally, update the Editor Interface
  displaySubmittedArticlesForEditor(submittedArticles);
}

function clearFormFields() {
  document.getElementById("articleTitle").value = "";
  document.getElementById("articleContent").value = "";
}
