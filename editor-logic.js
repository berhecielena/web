function displaySubmittedArticlesForEditor(submittedArticles) {
  const submittedArticlesList = document.getElementById(
    "editorSubmittedArticlesList"
  );
  //   submittedArticlesList.innerHTML = ""; // Clear existing list

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
}
// Mock submitted articles (replace with articles fetched from backend)
const submittedArticles = [];

// Call the function to display submitted articles in the Editor Interface initially
displaySubmittedArticlesForEditor(submittedArticles);
