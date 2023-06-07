//07.06.23 - 11.20pm BST
function showObject(data, thisForm) {
    if (!data) {
        alert('no results!')
        return false;
    }

function italic_bold(text){
  text = text.toString().replace(/\*\*(.*?)\*\*/g, '<span class="italic_bold_search_res">$1</span>');
  return text;
}

function openHiddenSection() {
  // Hide the content section
  var contentSection = document.getElementById('contentSection');
  contentSection.style.display = 'none';

  // Show the hidden section
  var hiddenSection = document.getElementById('hiddenSection');
  hiddenSection.style.display = 'block';
}

    let divContent = $('#content');
    divContent.html('');

    let fillers_list_link = "https://pm-db.net/api/v1/search/fillers/?lang=en&id=${data[x].id_polymers}&counter=0";
    let article_link = "https://pm-db.net/article/1";
    let additives_list_link = "https://pm-db.net/api/v1/search/additives/?lang=en&id=${data[x].id_polymers}&counter=0";

    var total = 0;
    var found = false;
    var html = '';
    var html_prod = '';
    
    /*<div class="container">*/
    html += `<div>
    <div class="resultsection">`;
for (x in data) {

  /*total += data[x].list.length;*/

  var add_flag = data[x].has_additives;
  
  var fill_flag = data[x].has_fillers;

  var article_found = false;

  fetch(article_link)
    .then(function(response) {
      if (response.ok) {
        article_found = true;
      }})
  
  if (add_flag == true || fill_flag == true || article_found == true) {
    found = true;
  }

 
html += `<div class="resultsfields0">
  <button class="btn0" onclick="openHiddenSection()"><span class="all_prod0">
  <span>Show ${data[x].list.length} product(s)</span>
  </span><div class="expandmore0">
  </div>
  </button>`

  

  
  if (found) {
    html += '<div class="links">';

    if (article_found){
      html += `<div class="linkonartcl0">
        <div class="btn_read_artcl_00">
        <div class="icnlink0">
        </div><span class="read_art0"><span><a href=${article_link}>Read an article</a></span></span>
        </div>
        </div>`;
    }

    if (add_flag) {
      html += `<div class="additiveslist0">
      <div class="btn_read_artcl_01">
      <div class="icnlink1">
      </div><span class="open_add_list0"><span><a href=${additives_list_link}>Open additives list</a></span></span>
      </div>
      </div>`;
    }
    if (fill_flag){
      html += `<div class="fillerslist0">
      <div class="btn_read_artcl_02">
        <div class="icnlink2">
        </div>
        <span class="open_fill_list0"><span><a href= ${fillers_list_link}>Open fillers list</a></span></span>
      </div>
    </div>`;
    }
    html += '</div>' 
  } 


  html += `<span class="manufacturer0"><span>${italic_bold(data[x].company_names)}</span></span>
  <span class="polymer_group0">
    <span>${italic_bold(data[x].title)}`;
    if (data[x].abbr){
    html += `<span class="res_abbr"><span>(${italic_bold(data[x].abbr)})</span></span>`;
    }
    html += `</span></span></span>
  </div>`;
}

html += `<span class="res_amount">
<span>${data.length} polymer(s) were found</span>
</span>
</div>
<div class="searchthroughnavigation">
<div class="icnhome">
</div>
<div class="icnarrow1"></div></div></div>`;
/*</div>*/
var content = document.getElementById('content');
content.innerHTML = html;
}