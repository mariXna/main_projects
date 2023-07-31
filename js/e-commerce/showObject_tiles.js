//29.07.23 - 5am BST

  function showObject(data, thisForm) {
      if (!data) {
        html = `<div class = "no_content">
      <span class="res_amount">
        <span>No results found</span>
        </span>
        </div>`;
        var content = document.getElementById('content');
        content.innerHTML = html;
          return;
      }

    var html = '';
    html+=`<div class="search_tiles">`;
     for (x in data){
      
    
        html += `<div class="s_tile"><div class="card-apple-watch-container">
        <div class="card-apple-watch-card-apple-watch">
          <button class="card-apple-watch-wishlist-button">
            <div class="card-apple-watch-wishlist-button1">
              <div class="card-apple-watch-heart">
                <div class="card-apple-watch-path" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTUnIHZpZXdCb3g9JzAgMCAxNiAxNScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMy45MjA1IDIuMTQ5MjlDMTMuMjI5NiAxLjQxMzQzIDEyLjI5MjQgMSAxMS4zMTUxIDFDMTAuMzM3OCAxIDkuNDAwNjMgMS40MTM0MyA4LjcwOTc2IDIuMTQ5MjlMNy45OTk4MiAyLjkwNTEyTDcuMjg5ODggMi4xNDkyOUM1Ljg1MDk4IDAuNjE3NDEgMy41MTgwNyAwLjYxNzQxMSAyLjA3OTE3IDIuMTQ5MjlDMC42NDAyNzYgMy42ODExOCAwLjY0MDI3NiA2LjE2NDg1IDIuMDc5MTcgNy42OTY3NEwyLjc4OTExIDguNDUyNTZMNy45OTk4MiAxNEwxMy4yMTA1IDguNDUyNTZMMTMuOTIwNSA3LjY5Njc0QzE0LjYxMTcgNi45NjEyMiAxNSA1Ljk2MzQ0IDE1IDQuOTIzMDJDMTUgMy44ODI1OSAxNC42MTE3IDIuODg0ODEgMTMuOTIwNSAyLjE0OTI5Wicgc3Ryb2tlPSdibGFjaycgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnLz4KPC9zdmc+Cg==')">
                </div>
              </div>
              <span class="card-apple-watch-text"><span>WISHLIST</span></span>
            </div>
          </button>
          <button class="card-apple-watch-add-to-cart-button">
            <div class="card-apple-watch-add-to-cart-button1">
              <span class="card-apple-watch-text02">
                <span>ADD TO CART</span>
              </span>
              <div class="card-apple-watch-shoppingbag">
                <div class="card-apple-watch-path1" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nMTgnIGhlaWdodD0nMjAnIHZpZXdCb3g9JzAgMCAxOCAyMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggb3BhY2l0eT0nMC43MzcyMTInIGZpbGwtcnVsZT0nZXZlbm9kZCcgY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMy42NjY2NyAxTDEgNC42VjE3LjJDMSAxOC4xOTQxIDEuNzk1OTQgMTkgMi43Nzc3OCAxOUgxNS4yMjIyQzE2LjIwNDEgMTkgMTcgMTguMTk0MSAxNyAxNy4yVjQuNkwxNC4zMzMzIDFIMy42NjY2N1onIHN0cm9rZT0nd2hpdGUnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJy8+Cjwvc3ZnPgo=')">
                </div>
                <div class="card-apple-watch-path2" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nMTgnIGhlaWdodD0nMycgdmlld0JveD0nMCAwIDE4IDMnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIG9wYWNpdHk9JzAuNzM3MjEyJyBkPSdNMSAxLjVIMTcnIHN0cm9rZT0nd2hpdGUnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJy8+Cjwvc3ZnPgo=')">
                </div>
                <div class="card-apple-watch-path3" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nOScgaGVpZ2h0PSc1JyB2aWV3Qm94PScwIDAgOSA1JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8cGF0aCBvcGFjaXR5PScwLjczNzIxMicgZD0nTTggMUM4IDIuNjU2ODUgNi40MzMgNCA0LjUgNEMyLjU2NyA0IDEgMi42NTY4NSAxIDEnIHN0cm9rZT0nd2hpdGUnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJy8+Cjwvc3ZnPgo=')">
                </div>
              </div>
            </div>
          </button>
          <span class="card-apple-watch-text04">
            <span>${data[x].full_name}</span>
          </span>
          <span class="card-apple-watch-text06">
            <span>${data[x].description}</span>
          </span>
          <img
            src=""
            alt="${data[x].name}"
            class="card-apple-watch-applewatch"
          />
          <span class="card-apple-watch-text08"><span>$${data[x].price}</span></span>
          <div class="card-apple-watch-rating">
            <span class="card-apple-watch-text10"><span>3.4</span></span>
            <div class="card-apple-watch-star">
              <div class="card-apple-watch-path4" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0nMTMnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxMyAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J002LjUgMUw4LjM1NCA0Ljk0OTUzTDEyLjUgNS41ODY3NUw5LjUgOC42NTkzMUwxMC4yMDggMTNMNi41IDEwLjk0OTVMMi43OTIgMTNMMy41IDguNjU5MzFMMC41IDUuNTg2NzVMNC42NDYgNC45NDk1M0w2LjUgMVYxWicgc3Ryb2tlPSd3aGl0ZScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJy8+Cjwvc3ZnPgo=')">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
     } 
  
    html+=`</div>`;
    var content = document.getElementById('content');
    content.innerHTML = html;
    
  }
  