//20.06.23 - 1am BST
function openHiddenSection(num) {
  // Hide the content section

  var contentSection = document.getElementById('mainContent');
  contentSection.style.display = 'none';


  // Show the hidden section
  var hiddenSection = document.getElementById(`hiddenContent${num}`);
  hiddenSection.style.display = 'block';

}

function reopenMainContent(num) {
  // Hide the content section

  var contentSection = document.getElementById('mainContent');
  contentSection.style.display = 'block';


  // Show the hidden section
  var hiddenSection = document.getElementById(`hiddenContent${num}`);
  hiddenSection.style.display = 'none';

}

function refreshPage() {
  location.reload();
}

function showMore() {
  var textElement = document.querySelector('.text_prod');
  var showMoreBtn = document.getElementById(`showMoreBtn`);

  if (textElement.style.maxHeight) {
    // Content is currently expanded, so collapse it
    textElement.style.maxHeight = null;
    showMoreBtn.textContent = 'Show more';
  } else {
    // Content is currently collapsed, so expand it
    textElement.style.maxHeight = textElement.scrollHeight + 'px';
    showMoreBtn.textContent = 'Show less';
  }
}

function showObject(data, thisForm) {
    if (!data) {
        alert('no results!')
        return false;
    }


    var navigation = document.getElementById('navigation_search');
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
 
    

    
  function italic_bold(text){
    text = text.toString().replace(/\*\*(.*?)\*\*/g, '<span class="italic_bold_search_res">$1</span>');
    return text;
  }

  let divContent = $('#content');
  divContent.html('');

  let fillers_list_link = "https://pm-db.net/api/v1/search/fillers/?lang=en&id=${data[x].id_polymers}&counter=0";
  let article_link = "https://pm-db.net/article/1";
  let additives_list_link = "https://pm-db.net/api/v1/search/additives/?lang=en&id=${data[x].id_polymers}&counter=0";

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
  <span>${data.length} polymer(s) were found</span>
  </span>
  <div class="resultsection">`;

  for (var x in data) {

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
        var index = $(this).data('index'); // Get the index from the data attribute of the clicked element
        reopenMainContent(index);
      });
    });
  
  html += `<div class="resultsfields0">`;
    
    html_prod += `<div id="hiddenContent${x}" style="display:none; background: white;">
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
    <div class="resultsection_prod">`;
    html_prod += `<div class="divider_side_prod" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nOTkzJyBoZWlnaHQ9JzEnIHZpZXdCb3g9JzAgMCA5OTMgMScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGxpbmUgeTE9JzAuNScgeDI9Jzk5MycgeTI9JzEuNScgc3Ryb2tlPScjREVFM0VEJy8+Cjwvc3ZnPgo=')">
    </div>`;

    for (var y in data[x].list){

    tds_link = data[x].list[y].files[0].url;
    msds_link = data[x].list[y].files[1].url;
    presentation_link = data[x].list[y].files[2].url;
    pdf_link = data[x].list[y].document_url


      html_prod += `
        <div class="resultfield_prod">
          <div class="content_prod" style = "display: flex">
            <div class="divider_top_prod" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nMicgaGVpZ2h0PScxNjAnIHZpZXdCb3g9JzAgMCAyIDE2MCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEgMFYxNjAnIHN0cm9rZT0nI0UwRTBFMCcvPgo8L3N2Zz4K')">
            </div>
            <div class = "first_column_res" style = "display: grid">
            <span class="text_name_prod"><span>${data[x].list[y].brand}</span></span>
            <span class="text_prod">
              <span>
                ${data[x].list[y].description}
              </span>
            </span>`;

            html_prod += `<div class="mechchardropdown_prod">
              <span class="text_mechchar_prod">
                <span>Mechanical characteristics</span>

              <table class="tg">
              <thead>
                <tr>
                  <th class="t_name">Modification characteristic</th>
                  <th class="t_name">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="t_row" colspan="2">Loading zone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;125</td>
                </tr>
                <tr>
                  <td class="t_row" colspan="2">Plastification zone                   135</td>
                </tr>
                <tr>
                  <td class="t_row" colspan="2">Dozing zone                            145</td>
                </tr>
                <tr>
                  <td class="t_row" colspan="2">Mold temperature&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;155</td>
                </tr>
              </tbody>
              </table>
              <div class="expandmore_prod">
                <div class="shape_prod" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDEyIDgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIG9wYWNpdHk9JzAuNTQnIGZpbGwtcnVsZT0nZXZlbm9kZCcgY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTAuNiAtMC4wMDAxMjIwN0w2IDQuNTk5ODhMMS40IC0wLjAwMDEyMjA3TDAgMS4zOTk4OEw2IDcuMzk5ODhMMTIgMS4zOTk4OEwxMC42IC0wLjAwMDEyMjA3WicgZmlsbD0nIzA5M0I5QScvPgo8L3N2Zz4K')">
                </div>
              </div>    
            </div>
            </div>`;
            html_prod += `<div class = "second_column_res" style = "display: grid"><div class="downloadbtn_prod">
            <span class="text_downloadpdf_prod">
              <span><a class="down_btn_prod" href=${pdf_link}>Download .pdf</a></span>
            </span>
          </div>`;
            html_prod += `
            <div class="linksondocs_prod">
              <div class="link_tds_prod">
              
                <div class="vector0_prod" style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABMUlEQVR4Ae2WzU3DQBBGv1lbKEeXsFQAJUAFUAIdBC5oOWV9ASsXoAJEB6YCKMEdJB3gG0HYO4wTJThS4g12LonyJEur8Xrfzoz/CHXuymsCDcCIsAEMtkiCuGkOLUaWI5rwJzE/O1IZPBDxY7URn+RPYFgTeMSgcyT0AZ/AuPE0CUA3SUJ0QBZ+VTOdZVNilUShIy4JrGQeS+8sTDnYpmBETBcwxZUDj6XY2SpJawGr4kYWjQjqpTqkXqdVfCb50vN57Xtwf5RJh4+XYubnjBC810Ode+Bj9wXre3BbXELJXbIJjt8wDNP/CQJJj2tPetP6DefWCx7CVC5M0ZFDibwcSuRln14VPeT4Rk6O+2wKjTYQnUy/0pNevggtTah+W5j6MtJoA8kGS47dMHiah34BNCt6yCGU4E4AAAAASUVORK5CYII=')">
                </div>
              
                <span class="text_tds_prod">
                  <span><a href=${tds_link}>Read TDS here</a></span>
                </span>
                
              </div>`;
              

            if (msds_link != ''){
              html_prod += `<div class="link_msds_prod">
              
                  <div class="vector00_prod" style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABMUlEQVR4Ae2WzU3DQBBGv1lbKEeXsFQAJUAFUAIdBC5oOWV9ASsXoAJEB6YCKMEdJB3gG0HYO4wTJThS4g12LonyJEur8Xrfzoz/CHXuymsCDcCIsAEMtkiCuGkOLUaWI5rwJzE/O1IZPBDxY7URn+RPYFgTeMSgcyT0AZ/AuPE0CUA3SUJ0QBZ+VTOdZVNilUShIy4JrGQeS+8sTDnYpmBETBcwxZUDj6XY2SpJawGr4kYWjQjqpTqkXqdVfCb50vN57Xtwf5RJh4+XYubnjBC810Ode+Bj9wXre3BbXELJXbIJjt8wDNP/CQJJj2tPetP6DefWCx7CVC5M0ZFDibwcSuRln14VPeT4Rk6O+2wKjTYQnUy/0pNevggtTah+W5j6MtJoA8kGS47dMHiah34BNCt6yCGU4E4AAAAASUVORK5CYII=')">
                  </div>
                
                <span class="text_msds_prod">
                  <span><a href=${msds_link}>Read MSDS here</a></span>
                </span>
                
              </div>`}
            if (presentation_link =! ''){
             html_prod += `<div class="link_presentation_prod">
             
                  <div class="vector12_prod" style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABXElEQVR4Ad2WzU3DQBCF37MB5ZgOMBVACVAB6QA6CNyWU+wLsrgQKgAqISW4g7gDuCUI28NsIodEmHW0BiR40sqr/ft25nm9JtZ1VV4QHEHQxxYSSIw0TFxjuKrF0udcnilyVzHI0CJSbu1G2iAfACMRIVMBT5BygjaAqfJFEEDkguygg3Thx2CJi8WUaIIE6KgqDWONPFHvYphy9J2AKYWnMMV5Bck12VkTxBsgQXGpi/aJ4N4WzdeRbV9CZlE9zt+D671MHT7YaDNvx0T4tN7U2YM2/TjAnSINWbMaOcdYg9PdiRdA8/mgj324lX/yYluAlR6mRA9Q3NhpSj0DPHPN//sm//fX1Io8tN+bL/sEHQCEXkAYaKCDxn5ZlMwbIDO9fHot1+crXuALwJh2snOBNv2iyT3dqYbLSoZiigg+qk2f91ZRc2OA/W0RDrUWwUfUDZaSVDfhuG56B8HEduIxLbBgAAAAAElFTkSuQmCC')">
                  </div>
               
                <span class="text_presentation_prod">
                  <span><a href=${presentation_link}>Presentation</a></span>
                </span>
                
              </div>
            </div>`}
           html_prod += `<button id="showMoreBtn" class="show-more-less" onclick="showMore()">Show more</button></div></div></div>`;
            
    }

    
  html_prod += `</div></div>`;
    
    


    html += `
    <span class="polymer_group0">
      <span>${italic_bold(data[x].title)}`;
      if (data[x].abbr){
      html += `<span class="res_abbr"><span>(${italic_bold(data[x].abbr)})</span></span></span></span>`;
      }

      html += `<span class="manufacturer0"><span>${italic_bold(data[x].company_names)}</span></span>`;

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
      
    html+= `<button class="btn0" onclick="openHiddenSection(${x})"><span class="all_prod0">
    <span>Show ${data[x].list.length} product(s)</span>
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