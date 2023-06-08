//08.06.23 - 5am BST
function openHiddenSection(num) {
  // Hide the content section

  var contentSection = document.getElementById('mainContent');
  contentSection.style.display = 'none';


  // Show the hidden section
  var hiddenSection = document.getElementById(`hiddenContent${num}`);
  hiddenSection.style.display = 'block';

  window.onpopstate = function(event) {
    var contentSection = document.getElementById('mainContent');
  contentSection.style.display = 'block';

  var hiddenSection = document.getElementById(`hiddenContent${num}`);
  hiddenSection.style.display = 'none';
  };
}

function showObject(data, thisForm) {
    if (!data) {
        alert('no results!')
        return false;
    }

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
  html += `<div id="mainContent">
  <div class="resultsection">`;
  for (x in data) {

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
    <button class="btn0" onclick="openHiddenSection(${x})"><span class="all_prod0">
    <span>Show ${data[x].list.length} product(s)</span>
    </span><div class="expandmore0">
    </div>
    </button>`
    
    html_prod += `<div id="hiddenContent${x}" style="display:none" ><div class="container">
    <div class="resultsection_prod">`;

    

    for (var y in data[x].list){

    tds_link = data[x].list[y].files[0].url;
    msds_link = data[x].list[y].files[1].url;
    presentation_link = data[x].list[y].files[2].url;
    pdf_link = data[x].list[y].document_url

      html_prod += `
        <div class="resultfield_prod">
          <div class="content_prod">
            <img
              src="public/external/divider1369-s7tk.svg"
              alt="divider1369"
              class="divider_top_prod"
            />
            <div class="linksondocs_prod">
              <div class="link_tds_prod">
                <span class="text_tds_prod">
                  <span><a href=${tds_link}>Read TDS here</a></span>
                </span>
                <div class="icndoc_prod">
                  <img
                    src="public/external/bound1369-gsha-200h.png"
                    alt="bound1369"
                    class="bound_prod"
                  />
                  <img
                    src="public/external/vector1369-9459.svg"
                    alt="Vector1369"
                    class="vector0_prod"
                  />
                  <img
                    src="public/external/vector11369-3h1.svg"
                    alt="Vector11369"
                    class="vector1_prod"
                  />
                  <img
                    src="public/external/vector21369-nsy9.svg"
                    alt="Vector21369"
                    class="vector2_prod"
                  />
                  <img
                    src="public/external/vector31369-zufu.svg"
                    alt="Vector31369"
                    class="vector3_prod"
                  />
                </div>
              </div>
              <div class="link_msds_prod">
                <span class="text_msds_prod">
                  <span><a href=${msds_link}>Read MSDS here</a></span>
                </span>
                <div class="icndoc01_prod">
                  <img
                    src="public/external/bound1369-wops-200h.png"
                    alt="bound1369"
                    class="bound01_prod"
                  />
                  <img
                    src="public/external/vector1369-rhzl.svg"
                    alt="Vector1369"
                    class="vector00_prod"
                  />
                  <img
                    src="public/external/vector11369-aqf2.svg"
                    alt="Vector11369"
                    class="vector01_prod"
                  />
                  <img
                    src="public/external/vector21369-skp.svg"
                    alt="Vector21369"
                    class="vector02_prod"
                  />
                  <img
                    src="public/external/vector31369-5syq.svg"
                    alt="Vector31369"
                    class="vector03_prod"
                  />
                </div>
              </div>
              <div class="link_presentation_prod">
                <span class="text_presentation_prod">
                  <span><a href=${presentation_link}>Presentation</a></span>
                </span>
                <div class="icnslides_prod">
                  <img
                    src="public/external/vector1369-t5enf.svg"
                    alt="Vector1369"
                    class="vector12_prod"
                  />
                  <img
                    src="public/external/vector1369-ofoh.svg"
                    alt="Vector1369"
                    class="vector13_prod"
                  />
                </div>
              </div>
            </div>
            <div class="downloadbtn_prod">
              <span class="text_downloadpdf_prod">
                <span><a href=${pdf_link}>Download .pdf</a></span>
              </span>
            </div>
            <div class="mechchardropdown_prod">
              <span class="text_mechchar_prod">
                <span>Mechanical characteristics</span>
              </span>
              <div class="expandmore_prod">
                <img
                  src="public/external/shape1369-41xh.svg"
                  alt="Shape1369"
                  class="shape_prod"
                />
              </div>
            </div>
            <span class="text_prod">
              <span>
                ${data[x].list[y].description}
              </span>
            </span>
          </div>
          <span class="text_name_prod"><span>${data[x].list[y].brand}</span></span>
          <div class="gapsolution_prod">
            <span class="text_analogs_prod">
              <span>Analogs are available</span>
            </span>
            <span class="text_open_list_prod">
              <span>open the list</span>
            </span>
            <div class="icnavalbl_prod">
              <div class="vectr_prod">
                <img
                  src="public/external/vector1369-twih.svg"
                  alt="Vector1369"
                  class="vector14_prod"
                />
                <img
                  src="public/external/vector1369-fgdf.svg"
                  alt="Vector1369"
                  class="vector15_prod"
                />
              </div>
            </div>
          </div>
        
        </div>`;
    }

    html_prod += `<img
    src="public/external/divider1369-l3qu.svg"
    alt="divider1369"
    class="divider_side_prod"
  />
  <span class="res_amount_prod">
    <span>
      ${data[x].list.length} products of ${italic_bold(data[x].title)} are available now
    </span>
  </span></div></div></div></div>`;
    
    
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
  content.innerHTML += html_prod;
}