const nav = document.querySelector("nav");
nav.insertAdjacentHTML(
  "afterbegin",
  `<div class="nav-wrapper">
  <div class="nav-heading">
  <a href="index.html">
    <img src="images/myLogocopy.png" alt="logo of the website"/></a>
</div>
<div class="navigation">
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about-me.html">About-me</a></li>
    <li><a href="contact.html">contact</a></li>
  </ul>
</div>
<div class="blogs-heading">
  <a class="blog-link" href="blog.html">Blogs</a>
  </div>
</div>
</div>`
);

const footer = document.querySelector("footer");
footer.insertAdjacentHTML(
  "afterbegin",
  ` <div>social Media</div>
    <ul>
      <li>
        <a href="http://facebook.com">
          <i class="fab fa-facebook"></i>
        </a>
      </li>
      <li>
       <a href="http://instagram.com">
        <i class="fab fa-instagram"></i>
      </a>
      </li>
    </ul>`
);
