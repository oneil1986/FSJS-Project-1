/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const students = document.getElementsByClassName("student-item");

const itemPerPage = 10;

/**
 * `showPage` function will hide all of the items in the list except for the ten that needs to be shown.
 * @param  {Array} list Array of students
 * @param  {Number} page The page to be displayed
 **/

const showPage = (list, page) => {
  const startIndex = page * itemPerPage - itemPerPage;
  const endIndex = page * itemPerPage;

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = "";
    }

    if (i >= endIndex || i < startIndex) {
      list[i].style.display = "none";
    }
  }
};

showPage(students, 1);

/**
 * `appendPageLinks` function will generate, append, and add functionality to the pagination buttons.
 * @param  {Array} List Array of students
 **/

const appendPageLinks = list => {
  const pageCount = list.length / itemPerPage;

  // create a div, set className, append to .page div.
  const div = document.createElement("div");
  div.className = "pagination";
  const pageDiv = document.querySelector(".page");
  pageDiv.appendChild(div);

  // Add ul to the div
  const ul = document.createElement("ul");
  div.appendChild(ul);

  //   create the links
  const li = document.createElement("li");

  for (let i = 0; i < pageCount; i++) {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = i + 1;
    li.appendChild(link);
  }

  //   Add active class to links
  const firstLink = li.firstElementChild;
  firstLink.className = "active";

  const allLinks = li.children;

  for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener("click", event => {
      const link = event.target;
      for (let j = 0; j < allLinks.length; j++) {
        allLinks[j].className = "";
      }
      if (link) {
        link.className = "active";
      }
      showPage(students, event.target.textContent);
    });
  }

  //   append the links to the ul
  ul.appendChild(li);
};

appendPageLinks(students);

// Search filed
const studentSearch = student => {
  const div = document.createElement("div");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const pageHeader = document.querySelector(".page-header");
  const h2 = document.querySelector("h2");

  div.className = "student-search";
  input.placeholder = "Search for students...";
  button.textContent = "Search";

  div.appendChild(input);
  div.appendChild(button);

  pageHeader.insertBefore(div, h2);

  input.addEventListener("keyup", e => {
    const notFound = document.createElement("h2");
    let searchValue = e.target.value.toLowerCase();
    notFound.textContent = "No results found";

    for (let i = 0; i < student.length; i++) {
      const div = student[i];
      const h3 = div.firstElementChild.textContent;
      if (h3.toLowerCase().indexOf(searchValue) > -1 && searchValue !== 0) {
        div.style.display = "";
      } else {
        div.style.display = "none";
      }

      if (h3.toLowerCase().indexOf(searchValue) !== -1) {
        console.log(searchValue);
      }
    }
  });

  button.addEventListener("click", e => {
    e.preventDefault();

    console.log("I'm working");
  });
};

studentSearch(students);
