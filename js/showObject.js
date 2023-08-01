//21.07.23 - 5am BST
function openHiddenSection(num) {
  // Hide the content section

  var contentSection = document.getElementById('mainContent');
  contentSection.style.display = 'none';


  // Show the hidden section
  var hiddenSection = document.getElementById(`hiddenContent${num}`);
  hiddenSection.style.display = 'grid';

}

function addEllipsis() {
  const containers = document.querySelectorAll('.text_prod');
  containers.forEach((container) => {
    const content = container.innerHTML;
    container.innerHTML = content + '<span class="ellipsis-mask"></span>';
    while (container.scrollHeight > container.offsetHeight) {
      container.innerHTML = content;
      container.innerHTML = container.innerHTML.slice(0, -1);
    }
  });
}

// Call the function after the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  addEllipsis();
});

function reopenMainContent(section) {
  // Show the content section

  var contentSection = document.getElementById('mainContent');
  contentSection.style.display = 'grid';

  // Hide the hidden section
  var hiddenSection = document.getElementById(section);
  hiddenSection.style.display = 'none';

}

function show_hide_table(num) {
  var tableElement = document.querySelector(`#t${num}.tg`);
  var showTableBtn = document.getElementById(`showTableBtn${num}`);

  if (tableElement.style.display === 'none') {
    tableElement.style.display = 'grid';
    showTableBtn.innerHTML = 'Mechanical characteristics <div class="expandmore_prod">' +
      '<div class="shape_prod" style="background-image: url(\'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImV4cGFuZCBtb3JlIj4KPHBhdGggaWQ9IlNoYXBlIiBvcGFjaXR5PSIwLjU0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuNCAxNEwxMCA5LjRMMTQuNiAxNEwxNiAxMi42TDEwIDYuNkw0IDEyLjZMNS40IDE0WiIgZmlsbD0iIzA5M0I5QSIvPgo8L2c+Cjwvc3ZnPgo=\')">' +
      '</div>' +
      '</div>';
  } else {
    tableElement.style.display = 'none';
    showTableBtn.innerHTML = 'Mechanical characteristics <div class="expandmore_prod">' +
      '<div class="shape_prod" style="background-image: url(\'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImV4cGFuZCBtb3JlIj4KPHBhdGggaWQ9IlNoYXBlIiBvcGFjaXR5PSIwLjU0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjYgNS45OTk4OEwxMCAxMC41OTk5TDUuNCA1Ljk5OTg4TDQgNy4zOTk4OEwxMCAxMy4zOTk5TDE2IDcuMzk5ODhMMTQuNiA1Ljk5OTg4WiIgZmlsbD0iIzA5M0I5QSIvPgo8L2c+Cjwvc3ZnPgo=\')">' +
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

  var maxHeight = '5.25em'; // Adjust the height to show 4 lines with line-height: 1.25;

  if (window.getComputedStyle(textElement).getPropertyValue('-webkit-line-clamp') === '4') {
    // Content is currently collapsed, so expand it
    textElement.style.webkitLineClamp = 'unset';
    textElement.style.maxHeight = 'none'; // Remove the max height to show all content
    showMoreBtn.textContent = 'Show less';
  } else {
    // Content is currently expanded, so collapse it
    textElement.style.webkitLineClamp = '4'; // Set to the desired number of lines (4 in this case)
    textElement.style.maxHeight = maxHeight;
    showMoreBtn.textContent = 'Show more';
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
      <li class = "nav_box" ><a class = "nav_text" href="#"> Products </a></li>
      </div>
    </nav>
    <span class="res_amount">
      <span>No results found</span>
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
    <li class = "nav_box"><a class = "nav_text" href="#"> Products </a></li>
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
        var index = $('div[style*="display: grid"][id^="hiddenContent"]').attr('id');
        reopenMainContent(index);
      });
    });
  
  html += `<div class="resultsfields0">`;
    
    html_prod += `<div id="hiddenContent${x}" style="display: none; background: white">
  <nav>
  <div class="navigation_search" id="navigation_search">
    <li class = "nav_box" ><a class = "nav_text" href="#">Products</a></li>
    <div class="nav_arrow" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Imljbl9hcnJvd18xIj4KPHBhdGggaWQ9IlZlY3RvciIgZD0iTTE2LjEyMDQgMTJDMTYuMTIwNCAxMi4yODY3IDE2LjAxMSAxMi41NzM1IDE1Ljc5MjQgMTIuNzkyMUw4LjkxMjc0IDE5LjY3MTdDOC40NzUxIDIwLjEwOTMgNy43NjU1NSAyMC4xMDkzIDcuMzI4MDkgMTkuNjcxN0M2Ljg5MDY0IDE5LjIzNDMgNi44OTA2NCAxOC41MjQ4IDcuMzI4MDkgMTguMDg3MkwxMy40MTU2IDEyTDcuMzI4MzEgNS45MTI3NUM2Ljg5MDg1IDUuNDc1MTIgNi44OTA4NSA0Ljc2NTc4IDcuMzI4MzEgNC4zMjgzNkM3Ljc2NTc2IDMuODkwNTEgOC40NzUzMSAzLjg5MDUxIDguOTEyOTUgNC4zMjgzNkwxNS43OTI3IDExLjIwNzlDMTYuMDExMiAxMS40MjY2IDE2LjEyMDQgMTEuNzEzMyAxNi4xMjA0IDEyWiIgZmlsbD0iI0RFRTNFRCIvPgo8L2c+Cjwvc3ZnPgo=')">
    </div>
    <li class = "nav_box"><a class = "nav_text" href="#">All products</a></li>
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
              
                ${italic_bold(data[x].list[y].description)}
              
            </div>`;

            if (data[x].list[y].characteristics){
            html_prod += `<div class="mechchardropdown_prod">
              
                <button id="showTableBtn${block_num}" class="text_mechchar_prod" onclick="show_hide_table(${block_num})">Mechanical characteristics<div class="expandmore_prod">
                <div class="shape_prod" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImV4cGFuZCBtb3JlIj4KPHBhdGggaWQ9IlNoYXBlIiBvcGFjaXR5PSIwLjU0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjYgNS45OTk4OEwxMCAxMC41OTk5TDUuNCA1Ljk5OTg4TDQgNy4zOTk4OEwxMCAxMy4zOTk5TDE2IDcuMzk5ODhMMTQuNiA1Ljk5OTg4WiIgZmlsbD0iIzA5M0I5QSIvPgo8L2c+Cjwvc3ZnPgo=')">
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
            </div>`;}

            html_prod += `</div><div class="divider_top_prod">
            </div>`;
            html_prod += `<div class = "second_column_res">`;
            html_prod += `
            <div class="linksondocs_prod">
            <a href=${pdf_link}>
            <button class="downloadbtn_prod">
            <span class="text_downloadpdf_prod">
              <span class="down_btn_prod">Download .pdf</span>
            </span>
          </button></a>
              <div class="link_tds_prod">
              
                <div class="vector0_prod">
                </div>
              
                <span class="text_tds_prod">
                  <span><a class = "a_link" href=${tds_link}>Read TDS here</a></span>
                </span>
                
              </div>`;
              

            if (msds_link != ''){
              html_prod += `<div class="link_msds_prod">
              
                  <div class="vector00_prod">
                  </div>
                
                <span class="text_msds_prod">
                  <span><a class = "a_link" href=${msds_link}>Read MSDS here</a></span>
                </span>
                
              </div>`}
            if (presentation_link =! ''){
             html_prod += `<div class="link_presentation_prod">
             
                  <div class="vector12_prod">
                  </div>
               
                <span class="text_presentation_prod">
                  <span><a class = "a_link" href=${presentation_link}>Presentation</a></span>
                </span>
               </div> 
              </div>`;
        }
        html_prod += `</div></div>`;
        if(data[x].list[y].description.trim().length >= 274 ){
            html_prod += `<button id="showMoreBtn${block_num}" class="show-more-less" onclick="showMore(${block_num})">Show more</button>`;
        }
        html_prod += `</div></div>`;
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
    Show ${data[x].list.length} product(s) <div class = "show_arrow">
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
