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
// console.log(students);
const itemPerPage = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

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

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

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

  ul.appendChild(li);
};

appendPageLinks(students);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
