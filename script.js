const posts = [
  {
    title: "Poem on India (1)",
    link: "https://cogitoindia.blogspot.com/2025/06/poem-on-india-1.html",
    image: "https://media.istockphoto.com/id/1356149389/photo/young-woman-doing-a-stop-sign-with-her-hand.jpg?s=612x612&w=0&k=20&c=ryKC-KpImGuCUrpF6WEjJSfauFkhvZUvqVgSrFyjYT8=",
    date: "June 5, 2025",
    description: "I come from two Indias. One where we worship women during the day and gang-rape them at night. A brutally honest poetic lens on contradictions..."
  },
  {
    title: "Research on Death Cases in India",
    link: "https://jmp.sh/EykAsAJd",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyCxcbTvL6UEilp2_5gp_n7TFRqZb5JcCGPw&s",
    date: "June 12, 2025",
    description: "A harsh, data-backed research exposing India's rising death toll linked to rape and sexual assault cases—unveiling systemic failures, societal silence..."
  },
];

let currentCount = 0;
const step = 5;

function loadCards() {
  const list = document.getElementById("blogList");
  const end = Math.min(currentCount + step, posts.length);

  for (let i = currentCount; i < end; i++) {
    const card = document.createElement("a");
    card.className = "article-blog";
    card.href = posts[i].link;
    card.innerHTML = `
      <div class="article__thumbnail">
        <img src="${posts[i].image}" alt="${posts[i].title}">
      </div>
      <div class="article__body">
        <h3>${posts[i].title}</h3>
        <div class="article__excerpt">
          <p>${posts[i].description}</p>
        </div>
        <footer class="article__footer">
          <span>${posts[i].date}</span>
          <div class="footer__readmore">
            <span>Read more</span><i class="bi bi-arrow-right"></i>
          </div>
        </footer>
      </div>
    `;
    list.appendChild(card);
  }

  currentCount += step;
  if (currentCount >= posts.length) {
    document.getElementById("loadMore").style.display = 'none';
  }
}

document.getElementById("loadMore").addEventListener("click", loadCards);
window.onload = loadCards;

// Search logic + toggle animation
document.getElementById("searchBtn").addEventListener("click", () => {
  const bar = document.getElementById("searchBar");
  const input = document.getElementById("searchInput");
  bar.classList.toggle("open");

  if (bar.classList.contains("open")) {
    input.focus();
  } else {
    input.value = "";
    document.querySelectorAll(".article-blog").forEach(card => {
      card.style.display = "block";
    });
  }

  const query = input.value.toLowerCase();
  const cards = document.querySelectorAll(".article-blog");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? "block" : "none";
  });
});
