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
  html += `<div id="mainContent">
  <nav>
  <div class="navigation_search" id="navigation_search">
    <li><a class = "nav_text" href="#"> Products </a></li>
  </div>
</nav>
<span class="res_amount">
  <span>${data.length} polymer(s) were found</span>
  </span>
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
    
    html_prod += `<div id="hiddenContent${x}" style="display:none"><div class="container">
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

    for (var y in data[x].list){

    tds_link = data[x].list[y].files[0].url;
    msds_link = data[x].list[y].files[1].url;
    presentation_link = data[x].list[y].files[2].url;
    pdf_link = data[x].list[y].document_url


      html_prod += `
        <div class="resultfield_prod">
          <div class="content_prod">
            <div class="divider_top_prod" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nMicgaGVpZ2h0PScxNjAnIHZpZXdCb3g9JzAgMCAyIDE2MCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEgMFYxNjAnIHN0cm9rZT0nI0UwRTBFMCcvPgo8L3N2Zz4K')">
            </div>
            <div class="linksondocs_prod">
              <div class="link_tds_prod">
                <span class="text_tds_prod">
                  <span><a href=${tds_link}>Read TDS here</a></span>
                </span>
                <div class="icndoc_prod">
                  <div class="bound_prod" style="background-image: url('data:image/svg+xml;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAUAmJaQAA3AA/vwEoAA=')">
                  </div>
                  <div class="vector0_prod" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyMCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTE4LjkzNDYgNS44MzA4N0wxMy4zMDk3IDAuMjA2MDE2QzEzLjE3NzggMC4wNzQwMTU2IDEyLjk5NzkgMCAxMi44MTI1IDBMMi45Njg3NSAwQzEuODA1NjQgMCAwLjg1OTM3NSAwLjk0NjI2NiAwLjg1OTM3NSAyLjEwOTM4TDAuODU5Mzc1IDIxLjg5MDZDMC44NTkzNzUgMjMuMDUzNyAxLjgwNTY0IDI0IDIuOTY4NzUgMjRIMTcuMDMxMkMxOC4xOTQ0IDI0IDE5LjE0MDYgMjMuMDUzNyAxOS4xNDA2IDIxLjg5MDZMMTkuMTQwNiA2LjMyODEzQzE5LjE0MDYgNi4xMzQ2MiAxOS4wNTk3IDUuOTU1OTQgMTguOTM0NiA1LjgzMDg3Wk0xMy41MTU2IDIuNDAwNjFMMTYuNzQgNS42MjVIMTQuMjE4OEMxMy44MzEgNS42MjUgMTMuNTE1NiA1LjMwOTU4IDEzLjUxNTYgNC45MjE4OFYyLjQwMDYxWk0xNy4wMzEyIDIyLjU5MzhIMi45Njg3NUMyLjU4MTA1IDIyLjU5MzggMi4yNjU2MiAyMi4yNzgzIDIuMjY1NjIgMjEuODkwNkwyLjI2NTYyIDIuMTA5MzhDMi4yNjU2MiAxLjcyMTY3IDIuNTgxMDUgMS40MDYyNSAyLjk2ODc1IDEuNDA2MjVMMTIuMTA5NCAxLjQwNjI1VjQuOTIxODhDMTIuMTA5NCA2LjA4NDk4IDEzLjA1NTYgNy4wMzEyNSAxNC4yMTg4IDcuMDMxMjVIMTcuNzM0NEwxNy43MzQ0IDIxLjg5MDZDMTcuNzM0NCAyMi4yNzgzIDE3LjQxOSAyMi41OTM4IDE3LjAzMTIgMjIuNTkzOFonIGZpbGw9JyMwMTc4RkUnLz4KPC9zdmc+Cg==')">
                  </div>
                  <div class="vector1_prod" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nMicgdmlld0JveD0nMCAwIDEyIDInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00xMSAxSDEnIHN0cm9rZT0nIzAxNzhGRScgc3Ryb2tlLXdpZHRoPScxLjInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvPgo8L3N2Zz4K')">
                  </div>
                  <div class="vector2_prod" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nMicgdmlld0JveD0nMCAwIDEyIDInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00xMSAxSDEnIHN0cm9rZT0nIzAxNzhGRScgc3Ryb2tlLXdpZHRoPScxLjInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvPgo8L3N2Zz4K')">
                  </div>
                  <div class="vector3_prod" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nMicgdmlld0JveD0nMCAwIDEyIDInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00xMSAxSDEnIHN0cm9rZT0nIzAxNzhGRScgc3Ryb2tlLXdpZHRoPScxLjInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvPgo8L3N2Zz4K')">
                  </div>
                </div>
              </div>`

            if (msds_link != ''){
              html_prod += `<div class="link_msds_prod">
                <span class="text_msds_prod">
                  <span><a href=${msds_link}>Read MSDS here</a></span>
                </span>
                <div class="icndoc01_prod">
                  <div class="bound01_prod" style="background-image: url('data:image/svg+xml;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAUAmJaQAA3AA/vwEoAA=')">
                  </div>
                  <div class="vector00_prod" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyMCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTE4LjkzNDYgNS44MzA4N0wxMy4zMDk3IDAuMjA2MDE2QzEzLjE3NzggMC4wNzQwMTU2IDEyLjk5NzkgMCAxMi44MTI1IDBMMi45Njg3NSAwQzEuODA1NjQgMCAwLjg1OTM3NSAwLjk0NjI2NiAwLjg1OTM3NSAyLjEwOTM4TDAuODU5Mzc1IDIxLjg5MDZDMC44NTkzNzUgMjMuMDUzNyAxLjgwNTY0IDI0IDIuOTY4NzUgMjRIMTcuMDMxMkMxOC4xOTQ0IDI0IDE5LjE0MDYgMjMuMDUzNyAxOS4xNDA2IDIxLjg5MDZMMTkuMTQwNiA2LjMyODEzQzE5LjE0MDYgNi4xMzQ2MiAxOS4wNTk3IDUuOTU1OTQgMTguOTM0NiA1LjgzMDg3Wk0xMy41MTU2IDIuNDAwNjFMMTYuNzQgNS42MjVIMTQuMjE4OEMxMy44MzEgNS42MjUgMTMuNTE1NiA1LjMwOTU4IDEzLjUxNTYgNC45MjE4OFYyLjQwMDYxWk0xNy4wMzEyIDIyLjU5MzhIMi45Njg3NUMyLjU4MTA1IDIyLjU5MzggMi4yNjU2MiAyMi4yNzgzIDIuMjY1NjIgMjEuODkwNkwyLjI2NTYyIDIuMTA5MzhDMi4yNjU2MiAxLjcyMTY3IDIuNTgxMDUgMS40MDYyNSAyLjk2ODc1IDEuNDA2MjVMMTIuMTA5NCAxLjQwNjI1VjQuOTIxODhDMTIuMTA5NCA2LjA4NDk4IDEzLjA1NTYgNy4wMzEyNSAxNC4yMTg4IDcuMDMxMjVIMTcuNzM0NEwxNy43MzQ0IDIxLjg5MDZDMTcuNzM0NCAyMi4yNzgzIDE3LjQxOSAyMi41OTM4IDE3LjAzMTIgMjIuNTkzOFonIGZpbGw9JyMwMTc4RkUnLz4KPC9zdmc+Cg==')">
                  </div>
                  <div class="vector01_prod" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nMicgdmlld0JveD0nMCAwIDEyIDInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00xMSAxSDEnIHN0cm9rZT0nIzAxNzhGRScgc3Ryb2tlLXdpZHRoPScxLjInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvPgo8L3N2Zz4K')">
                  </div>
                  <div class="vector02_prod" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nMicgdmlld0JveD0nMCAwIDEyIDInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00xMSAxSDEnIHN0cm9rZT0nIzAxNzhGRScgc3Ryb2tlLXdpZHRoPScxLjInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvPgo8L3N2Zz4K')">
                  </div>
                  <div class="vector03_prod" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nMicgdmlld0JveD0nMCAwIDEyIDInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00xMSAxSDEnIHN0cm9rZT0nIzAxNzhGRScgc3Ryb2tlLXdpZHRoPScxLjInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcvPgo8L3N2Zz4K')">
                  </div>
                </div>
              </div>`}
            if (presentation_link =! ''){
             html_prod += `<div class="link_presentation_prod">
                <span class="text_presentation_prod">
                  <span><a href=${presentation_link}>Presentation</a></span>
                </span>
                <div class="icnslides_prod">
                  <div class="vector12_prod" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyMCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTE4LjkzNDYgNS44MzA4N0wxMy4zMDk3IDAuMjA2MDE2QzEzLjE3NzggMC4wNzQwMTU2IDEyLjk5NzkgMCAxMi44MTI1IDBIMi45Njg3NUMxLjgwNTY0IDAgMC44NTkzNzUgMC45NDYyNjYgMC44NTkzNzUgMi4xMDkzOFYyMS44OTA2QzAuODU5Mzc1IDIzLjA1MzcgMS44MDU2NCAyNCAyLjk2ODc1IDI0SDE3LjAzMTJDMTguMTk0NCAyNCAxOS4xNDA2IDIzLjA1MzcgMTkuMTQwNiAyMS44OTA2VjYuMzI4MTJDMTkuMTQwNiA2LjEzNDYyIDE5LjA1OTcgNS45NTU5NCAxOC45MzQ2IDUuODMwODdaTTEzLjUxNTYgMi40MDA2MUwxNi43NCA1LjYyNUgxNC4yMTg4QzEzLjgzMSA1LjYyNSAxMy41MTU2IDUuMzA5NTggMTMuNTE1NiA0LjkyMTg4VjIuNDAwNjFaTTE3LjAzMTIgMjIuNTkzOEgyLjk2ODc1QzIuNTgxMDUgMjIuNTkzOCAyLjI2NTYyIDIyLjI3ODMgMi4yNjU2MiAyMS44OTA2VjIuMTA5MzhDMi4yNjU2MiAxLjcyMTY3IDIuNTgxMDUgMS40MDYyNSAyLjk2ODc1IDEuNDA2MjVIMTIuMTA5NFY0LjkyMTg4QzEyLjEwOTQgNi4wODQ5OCAxMy4wNTU2IDcuMDMxMjUgMTQuMjE4OCA3LjAzMTI1SDE3LjczNDRWMjEuODkwNkMxNy43MzQ0IDIyLjI3ODMgMTcuNDE5IDIyLjU5MzggMTcuMDMxMiAyMi41OTM4WicgZmlsbD0nIzAxNzhGRScvPgo8L3N2Zz4K')">
                  </div>
                  <div class="vector13_prod" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIHZpZXdCb3g9JzAgMCAxMCAxMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTkuMjE4NzUgMC42NDA2MjVIMC43ODEyNUMwLjM5MjkzNyAwLjY0MDYyNSAwLjA3ODEyNSAwLjk1NTQzNyAwLjA3ODEyNSAxLjM0Mzc1VjguMzc1QzAuMDc4MTI1IDguNzYzMzEgMC4zOTI5MzcgOS4wNzgxMiAwLjc4MTI1IDkuMDc4MTJIOS4yMTg3NUM5LjYwNzA2IDkuMDc4MTIgOS45MjE4OCA4Ljc2MzMxIDkuOTIxODggOC4zNzVWMS4zNDM3NUM5LjkyMTg4IDAuOTU1NDM3IDkuNjA3MDYgMC42NDA2MjUgOS4yMTg3NSAwLjY0MDYyNVpNOC41MTU2MiA3LjY3MTg4SDEuNDg0MzhWMi4wNDY4OEg4LjUxNTYyVjcuNjcxODhaJyBmaWxsPScjMDE3OEZFJy8+Cjwvc3ZnPgo=')">
                  </div>
                </div>
              </div>
            </div>`}
            html_prod += `<div class="downloadbtn_prod">
              <span class="text_downloadpdf_prod">
                <span><a class="down_btn_prod" href=${pdf_link}>Download .pdf</a></span>
              </span>
            </div>
            <div class="mechchardropdown_prod">
              <span class="text_mechchar_prod">
                <span>Mechanical characteristics</span>
                <div class="resultsection-modification2">
                <span class="resultsection-text58">
                  <span>Modification characteristics</span>
                </span>
                <div class="resultsection-expandmore2">
                  <img
                    src=""
                    alt="bounds1559"
                    class="resultsection-bounds2"
                  />
                  <img
                    src="public/external/shape1559-2y9.svg"
                    alt="Shape1559"
                    class="resultsection-shape2"
                  />
                </div>
              </div>
              <div class="resultsection-tableau">
                <div class="resultsection-contentrows">
                  <div class="resultsection-row1">
                    <div class="resultsection-charecteristicpart">
                      <span class="resultsection-text60">
                        <span>Loading zone</span>
                      </span>
                    </div>
                    <div class="resultsection-valuepart">
                      <span class="resultsection-text62">
                        <span>125-165 Cº</span>
                      </span>
                    </div>
                  </div>
                  <div class="resultsection-row2">
                    <div class="resultsection-charecteristicpart1">
                      <span class="resultsection-text64">
                        <span>Plastification zone</span>
                      </span>
                    </div>
                    <div class="resultsection-valuepart1">
                      <span class="resultsection-text66">
                        <span>145-165 Cº</span>
                      </span>
                    </div>
                  </div>
                  <div class="resultsection-row3">
                    <div class="resultsection-charecteristicpart2">
                      <span class="resultsection-text68">
                        <span>Dozing zone</span>
                      </span>
                    </div>
                    <div class="resultsection-valuepart2">
                      <span class="resultsection-text70">
                        <span>160-180 Cº</span>
                      </span>
                    </div>
                  </div>
                  <div class="resultsection-row4">
                    <div class="resultsection-charecteristicpart3">
                      <span class="resultsection-text72">
                        <span>Mold temparature</span>
                      </span>
                    </div>
                    <div class="resultsection-valuepart3">
                      <span class="resultsection-text74">
                        <span>25-50 Cº</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="resultsection-titlerow">
                  <div class="resultsection-titilerow1">
                    <span class="resultsection-text76">
                      <span>Modification characteristic</span>
                    </span>
                  </div>
                  <div class="resultsection-titlerow2">
                    <span class="resultsection-text78">
                      <span>Value</span>
                    </span>
                  </div>
                </div>
              </div>/+
              </span>
              <div class="expandmore_prod">
                <div class="shape_prod" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDEyIDgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIG9wYWNpdHk9JzAuNTQnIGZpbGwtcnVsZT0nZXZlbm9kZCcgY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTAuNiAtMC4wMDAxMjIwN0w2IDQuNTk5ODhMMS40IC0wLjAwMDEyMjA3TDAgMS4zOTk4OEw2IDcuMzk5ODhMMTIgMS4zOTk4OEwxMC42IC0wLjAwMDEyMjA3WicgZmlsbD0nIzA5M0I5QScvPgo8L3N2Zz4K')">
                </div>
              </div>
              
            </div>
            <span class="text_prod">
              <span>
                ${data[x].list[y].description}
              </span>
            </span>
            </div>
            <span class="text_name_prod"><span>${data[x].list[y].brand}</span></span>
            <button id="showMoreBtn" class="show-more-less" onclick="showMore()">Show more</button>
        </div>`;
    }

    html_prod += `<div class="divider_side_prod" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nOTkzJyBoZWlnaHQ9JzEnIHZpZXdCb3g9JzAgMCA5OTMgMScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGxpbmUgeTE9JzAuNScgeDI9Jzk5MycgeTI9JzEuNScgc3Ryb2tlPScjREVFM0VEJy8+Cjwvc3ZnPgo=')">
  </div>
  <span class="res_amount_prod">
    <span>
      ${data[x].list.length} products of ${italic_bold(data[x].title)} are available now
    </span>
  </span></div></div></div></div>`;
    
    


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