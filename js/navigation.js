var curr_page_id = 0;

function refresh_header(new_page_id) {
  let curr = document.getElementsByClassName("underliner").item(curr_page_id);
  let newpage = document.getElementsByClassName("underliner").item(new_page_id);
  let curr_ = document
    .getElementsByClassName("header_list_element")
    .item(curr_page_id);
  let newpage_ = document
    .getElementsByClassName("header_list_element")
    .item(new_page_id);
  const w0 = [{ width: 0 }];
  const w100 = [{ width: "10px" }];
  const blury = [{ filter: "blur(1px)" }];
  const t = {
    duration: 150,
  };
  curr.animate(w0, t);
  setTimeout(() => {
    curr.style.width = 0;
    curr_.style.filter = "";
  }, 150);
  newpage.animate(w100, t);
  setTimeout(() => {
    newpage.style.width = "10px";
    newpage_.style.filter = "blur(3px)";
  }, 150);
}

function get_page_designation(page_id) {
  let page_designation;
  switch (page_id) {
    case 0:
      page_designation = "homepage";
      break;
    case 1:
      page_designation = "skillspage";
      break;
    case 2:
      page_designation = "aboutmepage";
      break;
    case 3:
      page_designation = "contactpage";
      break;
    default:
      page_designation = "homepage";
  }
  return page_designation;
}
function initiallize() {
  refresh_header(curr_page_id);
  document.getElementById(get_page_designation(curr_page_id)).style.display =
    "flex";
}

initiallize();
function change_page(page_id) {
  let page_id_holder = page_id;
  console.log(page_id);
  if (page_id_holder == -1) {
    if (curr_page_id == 3) {
      //faire pour la fin
      page_id_holder = 0;
    } else {
      // faire plus 1
      page_id_holder = curr_page_id + 1;
    }
  }
  if (page_id_holder == curr_page_id) return;
  refresh_header(page_id_holder);
  let old = document.getElementById(get_page_designation(curr_page_id));
  let newpage = document.getElementById(get_page_designation(page_id_holder));
  old.style.animation = "changepage_old .5s";
  setTimeout(() => {
    old.style.display = "none";
  }, 500);
  setTimeout(() => {
    newpage.style.display = "flex";
    newpage.style.animation = "changepage_new .5s";
    curr_page_id = page_id_holder;
  }, 500);
}
