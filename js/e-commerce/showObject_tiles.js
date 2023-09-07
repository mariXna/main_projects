//01.08.23 - 8pm BST


function addEllipsis() {
  const containers = document.querySelectorAll('.card-apple-watch-text06');
  containers.forEach((container) => {
    const content = container.innerHTML;
    container.innerHTML = content + '<span class="ellipsis-mask"></span>';
    while (container.scrollHeight > container.offsetHeight) {
      container.innerHTML = content;
      container.innerHTML = container.innerHTML.slice(0, -1);
    }
  });
}
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
    html+=`
    <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic&display=swap&subset=cyrillic-ext" rel="stylesheet" /><div class="search_tiles">`;
     for (x in data){
      
    
        html += `<div class="card-apple-watch-card-apple-watch">
        <img
            src=""
            alt="${data[x].name}"
            class="card-apple-watch-applewatch"
          />
          <div class="rating_price">
          <div class="card-apple-watch-rating">
          <span class="card-apple-watch-text10"><span>3.4</span></span>
          <div class="card-apple-watch-star">
            <div class="card-apple-watch-path4" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxMyAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InN0YXIiPgo8cGF0aCBpZD0iUGF0aCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjUgMUw4LjM1NCA0Ljk0OTUzTDEyLjUgNS41ODY3NUw5LjUgOC42NTkzMUwxMC4yMDggMTNMNi41IDEwLjk0OTVMMi43OTIgMTNMMy41IDguNjU5MzFMMC41IDUuNTg2NzVMNC42NDYgNC45NDk1M0w2LjUgMVYxWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPC9zdmc+Cg==')">
            </div>
          </div>
        </div>
        <div class="card-apple-watch-text08">$${data[x].price}</div>
        </div>
        <div class="card-apple-watch-text04">${data[x].full_name}</div>
          <div class="card-apple-watch-text06">${data[x].description}</div>
          <div class="wishlist_cart">
          <button class="card-apple-watch-wishlist-button">
            <div class="card-apple-watch-wishlist-button1">
              <div class="card-apple-watch-heart">
                <div class="card-apple-watch-path" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNiAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImhlYXJ0Ij4KPHBhdGggaWQ9IlBhdGgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuOTIwNSAyLjE0OTI5QzEzLjIyOTYgMS40MTM0MyAxMi4yOTI0IDEgMTEuMzE1MSAxQzEwLjMzNzggMSA5LjQwMDYzIDEuNDEzNDMgOC43MDk3NiAyLjE0OTI5TDcuOTk5ODIgMi45MDUxMkw3LjI4OTg4IDIuMTQ5MjlDNS44NTA5OCAwLjYxNzQxIDMuNTE4MDcgMC42MTc0MTEgMi4wNzkxNyAyLjE0OTI5QzAuNjQwMjc2IDMuNjgxMTggMC42NDAyNzYgNi4xNjQ4NSAyLjA3OTE3IDcuNjk2NzRMMi43ODkxMSA4LjQ1MjU2TDcuOTk5ODIgMTRMMTMuMjEwNSA4LjQ1MjU2TDEzLjkyMDUgNy42OTY3NEMxNC42MTE3IDYuOTYxMjIgMTUgNS45NjM0NCAxNSA0LjkyMzAyQzE1IDMuODgyNTkgMTQuNjExNyAyLjg4NDgxIDEzLjkyMDUgMi4xNDkyOVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPC9zdmc+Cg==')">
                </div>
              </div>
              <span class="card-apple-watch-text">WISHLIST</span>
            </div>
          </button>
          <button class="card-apple-watch-add-to-cart-button">
            <div class="card-apple-watch-add-to-cart-button1">
            <div class="card-apple-watch-shoppingbag">
                <div class="card-apple-watch-path1" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxOCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InNob3BwaW5nLWJhZyI+CjxwYXRoIGlkPSJQYXRoIiBvcGFjaXR5PSIwLjczNzIxMiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjY2NjY3IDFMMSA0LjZWMTcuMkMxIDE4LjE5NDEgMS43OTU5NCAxOSAyLjc3Nzc4IDE5SDE1LjIyMjJDMTYuMjA0MSAxOSAxNyAxOC4xOTQxIDE3IDE3LjJWNC42TDE0LjMzMzMgMUgzLjY2NjY3WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggaWQ9IlBhdGhfMiIgb3BhY2l0eT0iMC43MzcyMTIiIGQ9Ik0xIDUuNUgxNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggaWQ9IlBhdGhfMyIgb3BhY2l0eT0iMC43MzcyMTIiIGQ9Ik0xMyA5QzEzIDEwLjY1NjkgMTEuNDMzIDEyIDkuNSAxMkM3LjU2NyAxMiA2IDEwLjY1NjkgNiA5IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+Cjwvc3ZnPgo=')">
                </div>
              </div>
              <span class="card-apple-watch-text02">ADD TO CART</span>
              
            </div>
          </button>
          </div>
        </div>`;
     } 
  
    html+=`</div>`;
    var content = document.getElementById('content');
    content.innerHTML = html;
    
  }
  