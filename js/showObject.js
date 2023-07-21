//20.06.23 - 1am BST
function openHiddenSection(num) {
  // Hide the content section

  var contentSection = document.getElementById('mainContent');
  contentSection.style.display = 'none';


  // Show the hidden section
  var hiddenSection = document.getElementById(`hiddenContent${num}`);
  hiddenSection.style.display = 'grid';

}

function reopenMainContent(num) {
  // Show the content section

  var contentSection = document.getElementById('mainContent');
  contentSection.style.display = 'grid';

  // Hide the hidden section
  var hiddenSection = document.getElementById(`hiddenContent${num}`);
  hiddenSection.style.display = 'none';

}

function show_hide_table(num) {
  var tableElement = document.querySelector(`#t${num}.tg`);
  var showTableBtn = document.getElementById(`showTableBtn${num}`);

  if (tableElement.style.display === 'none') {
    tableElement.style.display = 'grid';
    showTableBtn.innerHTML = 'Mechanical characteristics <div class="expandmore_prod">' +
      '<div class="shape_prod" style="background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADASURBVHgB7Y/BDYJAEEX/LBiJhhhowAK0BCqwAD1YAMaCDBbgQe92wNGrVw8WICFGQyIwLlETs2hcz+y77c7Mm/mAwfAgWHkIFp5Oq9CROXwNHbZCHSnpyAilXz0ZOGVULBHPE/x94ZtMgBMBSuR2/9ello7MpjIS5O4Yt6Gs+jbEIO+P9jhuM3WUdGTpM2JP1nK+zEqw9y1+LXKHz5NPsoo0nsq/bvSK32ZrrM7XhC1y1wQ+qDJVWvU4VGxgaCB3ltNive/9FnYAAAAASUVORK5CYII=\')">' +
      '</div>' +
      '</div>';
  } else {
    tableElement.style.display = 'none';
    showTableBtn.innerHTML = 'Mechanical characteristics <div class="expandmore_prod">' +
      '<div class="shape_prod" style="background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACwSURBVHgB7dFNCsIwEAXgN6nSIEhJr+A1eo56hIoHEj2ACz2H5zGIPyjYjAm4KEloXNu+XSaTj0wCjPn/UFCp9irnW/2i9ojTWkdP9fQIv3fG16UtLiRnDaqNimGSH43ryTmr/e0AnNL8IEDaXr0M0C9GMKUAa+lumBzZprAH33xfGbBi4Pykdmer6GITMttL5EmiYAx1w6SwXtBH3TqFJcEuChiksJ/j0CL242MGmg9IBmO/vHlOPgAAAABJRU5ErkJggg==\')">' +
      '</div>' +
      '</div>';
  }
}

function refreshPage() {
  location.reload();
}

function showMore(num) {
  var textElement = document.querySelector(`#text${num}.text_prod`);
  var showMoreBtn = document.getElementById(`showMoreBtn${num}`);

  var maxHeight = '90px'; // Maximum height for initial display

  if (textElement.style.maxHeight && textElement.style.maxHeight !== 'none') {
    // Content is currently expanded, so collapse it
    textElement.style.maxHeight = maxHeight;
    showMoreBtn.textContent = 'Show more';
  } else {
    // Content is currently collapsed, so expand it if needed
    textElement.style.maxHeight = textElement.scrollHeight > 90 ? textElement.scrollHeight + 'px' : maxHeight;
    showMoreBtn.textContent = textElement.scrollHeight > 90 ? 'Show less' : 'Show more';
  }
}

function italic_bold(text){
  text = text.toString().replace(/\*\*(.*?)\*\*/g, '<span class="italic_bold_search_res">$1</span>');
  return text;
}

function showObject(data, thisForm) {
    if (!data) {
      html = `<div class = "no_content">
      <nav>
      <div class="navigation_search" id="navigation_search">
        <li><a class = "nav_text" href="#"> Products </a></li>
      </div>
    </nav>
    <span class="res_amount">
      <span>No result found</span>
      </span>
      <div class="divider_side_prod" style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+EAAAABCAYAAACxFa/5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgSURBVHgB7cAxAQAABAAw+nf0uGUghW/L6tkAAAAA3h0k2wOv/oldiAAAAABJRU5ErkJggg==')">
        </div>
      </div>`;
      var content = document.getElementById('content');
      content.innerHTML = html;
        return;
    }
  


    //var navigation = document.getElementById('navigation_search');
    //var navigationItems = navigation.getElementsByTagName('a');
    /*
    // Add click event listener to each navigation item
    for (var i = 0; i < navigationItems.length; i++) {
      navigationItems[i].addEventListener('click', navigateToStage);
    }
    
    function navigateToStage(event, num) {
      // Prevent the default link behavior
      event.preventDefault();
    
      // Get the clicked stage
      var clickedStage = this.innerText;
    
      // Get the index of the clicked stage
      var clickedIndex = Array.prototype.indexOf.call(navigationItems, this);
    
      // Remove subsequent stages
      for (var i = clickedIndex + 1; i < navigationItems.length; i++) {
        navigation.removeChild(navigationItems[i].parentNode);
      }
    
      // Update the current stage
      this.removeAttribute('href');
      this.classList.remove('active');
    
      // Add a caret symbol to indicate the active stage
      this.innerHTML = clickedStage + ' <span>&gt;</span>';
    
      // Add the 'active' class to the clicked stage
      this.classList.add('active');
    
      // Update the navigation items array after removing subsequent stages
      navigationItems = navigation.getElementsByTagName('a');
    }

*/
 
    

    




  let divContent = $('#content');
  divContent.html('');

  
  let tds_link = '';
  let msds_link = '';
  let presentation_link = '';
  let pdf_link = '';


  var found = false;
  var html = '';
  var html_prod = '';
    
    /*<div class="container">*/
  html += `<div class = "main_content" id="mainContent">
  <nav>
  <div class="navigation_search" id="navigation_search">
    <li><a class = "nav_text" href="#"> Products </a></li>
  </div>
</nav>
<span class="res_amount">
  <span>${data.length} polymer(s) of "" were found</span>
  </span>
  <div class="divider_side_prod" style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+EAAAABCAYAAACxFa/5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgSURBVHgB7cAxAQAABAAw+nf0uGUghW/L6tkAAAAA3h0k2wOv/oldiAAAAABJRU5ErkJggg==')">
    </div>
  <div class="resultsection">`;

  for (var x in data) {

  let fillers_list_link = `https://pm-db.net/api/v1/search/fillers/?lang=en&id=${data[x].id_polymers}&counter=0`;
  let article_link = `https://pm-db.net/article/1`;
  let additives_list_link = `https://pm-db.net/api/v1/search/additives/?lang=en&id=${data[x].id_polymers}&counter=0`;


  var add_flag = data[x].has_additives;  
  var fill_flag = data[x].has_fillers;

  //link found?
  var article_found = false;

    
    
    if (add_flag == true || fill_flag == true || article_found == true) {
      found = true;
    }

    $(document).ready(function() {
      // Get references to the desired <a> elements
      
      
      var productsLink = $('#navigation_search li:nth-child(1) a');
  
      productsLink.click(function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        // Add your desired action for the third child link
        //var index = $(this).data('index'); // Get the index from the data attribute of the clicked element
        for (var x in data) {
        reopenMainContent(x);
      }
      });
    });
  
  html += `<div class="resultsfields0">`;
    
    html_prod += `<div id="hiddenContent${x}" style="display: none; background: white">
  <nav>
  <div class="navigation_search" id="navigation_search">
    <li><a class = "nav_text" href="#"> Products </a></li>
    <li><a class = "nav_text" href="#">> All products </a></li>
  </div>
</nav>
<span class="res_amount_prod">
    <span>
      ${data[x].list.length} products of ${italic_bold(data[x].title)} are available now
    </span>
  </span>
  <div class="divider_side_prod" style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+EAAAABCAYAAACxFa/5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgSURBVHgB7cAxAQAABAAw+nf0uGUghW/L6tkAAAAA3h0k2wOv/oldiAAAAABJRU5ErkJggg==')">
    </div>
    <div class="resultsection_prod">`;
  
//data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nOTkzJyBoZWlnaHQ9JzEnIHZpZXdCb3g9JzAgMCA5OTMgMScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGxpbmUgeTE9JzAuNScgeDI9Jzk5MycgeTI9JzEuNScgc3Ryb2tlPScjREVFM0VEJy8+Cjwvc3ZnPgo=
    for (var y in data[x].list){

    tds_link = data[x].list[y].files[0].url;
    msds_link = data[x].list[y].files[1].url;
    presentation_link = data[x].list[y].files[2].url;
    pdf_link = data[x].list[y].document_url

      block_num = `${data[x].list[y].id}`;
      html_prod += `
        <div class="resultfield_prod">
          <div class="content_prod">
            <div class = "top_content">
            <div class = "first_column_res">
            <span class="text_name_prod"><span>${italic_bold(data[x].list[y].brand)}</span></span>
            <div id="text${block_num}" class="text_prod">
              <span>
                ${italic_bold(data[x].list[y].description)}
              </span>
            </div>`;

            html_prod += `<div class="mechchardropdown_prod">
              
                <button id="showTableBtn${block_num}" class="text_mechchar_prod" onclick="show_hide_table(${block_num})">Mechanical characteristics<div class="expandmore_prod">
                <div class="shape_prod" style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACwSURBVHgB7dFNCsIwEAXgN6nSIEhJr+A1eo56hIoHEj2ACz2H5zGIPyjYjAm4KEloXNu+XSaTj0wCjPn/UFCp9irnW/2i9ojTWkdP9fQIv3fG16UtLiRnDaqNimGSH43ryTmr/e0AnNL8IEDaXr0M0C9GMKUAa+lumBzZprAH33xfGbBi4Pykdmer6GITMttL5EmiYAx1w6SwXtBH3TqFJcEuChiksJ/j0CL242MGmg9IBmO/vHlOPgAAAABJRU5ErkJggg==')">
                </div>
              </div></button>   
                
              <table id="t${block_num}" class="tg" style="display:none">
              <thead>
                <tr>
                  <th class="t_name" colspan = "2">Mechanical characteristic</th>
                  <th class="t_name">Value</th>
                </tr>
              </thead>
              <tbody>`;

              for (var t in data[x].list[y].characteristics){
              html_prod += `<tr>
              <th class="t_row" colspan = "2">${t}</th>
              <th class="t_row">${data[x].list[y].characteristics[t]}</th>
              </tr>`;}

              html_prod += `</tbody>
              </table> 
            </div></div>`;
            html_prod += `<div class="divider_top_prod">
            </div>`;
            html_prod += `<div class = "second_column_res">`;
            html_prod += `
            <div class="linksondocs_prod">
            <div class="downloadbtn_prod">
            <span class="text_downloadpdf_prod">
              <span><a class="down_btn_prod" href=${pdf_link}>Download .pdf</a></span>
            </span>
          </div>
              <div class="link_tds_prod">
              
                <div class="vector0_prod">
                </div>
              
                <span class="text_tds_prod">
                  <span><a href=${tds_link}>Read TDS here</a></span>
                </span>
                
              </div>`;
              

            if (msds_link != ''){
              html_prod += `<div class="link_msds_prod">
              
                  <div class="vector00_prod">
                  </div>
                
                <span class="text_msds_prod">
                  <span><a href=${msds_link}>Read MSDS here</a></span>
                </span>
                
              </div>`}
            if (presentation_link =! ''){
             html_prod += `<div class="link_presentation_prod">
             
                  <div class="vector12_prod">
                  </div>
               
                <span class="text_presentation_prod">
                  <span><a href=${presentation_link}>Presentation</a></span>
                </span>
               </div> 
              </div>`;
        }
            html_prod += `</div></div><button id="showMoreBtn${block_num}" class="show-more-less" onclick="showMore(${block_num})">Show more</button></div></div>`;
            
    }

    
  html_prod += `</div></div>`;
    
    


    html += `
    <span class="polymer_group0">
      <span>${italic_bold(data[x].title)}`;
      if (data[x].abbr){
      html += `<span class="res_abbr"><span>(${italic_bold(data[x].abbr)})</span></span>`;
      }
      html += `</span></span>`;
      html += `<span class="manufacturer0"><span>${italic_bold(data[x].company_names)}</span></span>`;

      if (found) {
        html += '<div class="links">';
  
        if (article_found){
          html += `<div class="linkonartcl0">
            <div class="btn_read_artcl_00">
            
            </div><span class="read_art0"><span><a class="a_link" href=${article_link}>Read an article<div class="icnlink2">
            </div></a></span></span>
            
            </div>`;
        }
  
        if (add_flag) {
          html += `<div class="additiveslist0">
          <div class="btn_read_artcl_01">
          
          <span class="open_add_list0"><span><a class="a_link" href=${additives_list_link}>Open additives list<div class="icnlink2">
          </div></a></span></span>
          </div>
          </div>`;
        }
        if (fill_flag){
          html += `<div class="fillerslist0">
          <div class="btn_read_artcl_02">
            
            <span class="open_fill_list0"><span><a class="a_link" href= ${fillers_list_link}>Open fillers list<div class="icnlink2">
            </div></a></span></span>
          </div>
        </div>`;
        }
        html += '</div>' 
      }  
      
    html+= `<button class="btn0" onclick="openHiddenSection(${x})"><span class="all_prod0">
    Show ${data[x].list.length} product(s) <div class = "show_arrow" style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAYAAACfKfiZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADnSURBVHgB7Za9EYJAEIUfd5BTwpVAYgF2YAnYgbkJiWNoCVKCHWDIjAklUII5P+cCqcne7WiyXwDHzMH7ZpcdABRFUZQ/k7B2F1UOkx0wD090VQ8BDGt3ak+w/o7MNiTjIABPIDEPOr5p4aQkeC1Y2F0KwDe0yuncY5j2Me3gCwhLhAkISoQLCEnECQhI8KbgG69zh9kft4vE0aiWYBAvUFwdjLlt+VSBdKoZd0e2YAnPZiq/d2u4ofK3v3oHBMLDBYTCwwQEw/kCwuELzK/hWEqGr4/k7U5rjCNgadRamf8BRVEURfkAlHF/Omyh41YAAAAASUVORK5CYII=')">
    </div>
    </span><div class="expandmore0">
    </div>
    </button></div>`;
  }

  html += `
  </div>
  </div>`;
  /*<div class="searchthroughnavigation">
  <div class="icnhome">
  </div>
  <div class="icnarrow1"></div></div></div>*/
  var content = document.getElementById('content');
  content.innerHTML = html;
  content.innerHTML += html_prod;
}
