function showObject(data, thisForm) {
    if (!data) {
        alert('no results!')
        return false;
    }

    let divContent = $('#content');
    divContent.html('');

    /*for (x in data) {
        divContent.append('<div>');
        div = divContent.children(':last').attr('id', data[x].id)
        div.append('<div>');
        titleDiv = div.children(':last')
        titleDiv.append('<h3> Group: <a href="/api/v1/search/?name=' + data[x].title + '" target="search">' + data[x].title + '</a></h3>');
        if (data[x].abbr > "") {
            titleDiv.append('<h4> Search as ' + data[x].abbr + '</h4>');
        }

        if (data[x].id_article > "") {
            titleDiv.append('<h4><a href="article/' + data[x].id_article + '" target="search">' + data[x].id_article + '</a></h4>');
        }

        for (y in data[x].company_names) {
            titleDiv.append('<span>' + data[x].company_names[y] + '</span>');
        }

        for (y in data[x].list) {
            div.append('<a href="' + data[x].list[y].document_url + '" rel="true" target="_blank">PDF</a>')
            brand = data[x].list[y].brand
            if (brand !== undefined) {
                div.append('<div>' + brand + '<a href="/api/v1/search/analog/' + brand + '" target="search"> Search analog</a></div>')
            }

            idPolymers = data[x].list[y].id_polymers
            if (data[x].list[y].has_additives !== false) {
                div.append('<div><a href="/api/v1/search/additives/?id=' + idPolymers + '" target="search"> Search additives</a></div>')
            }

            if (data[x].list[y].has_fillers !== false) {
                div.append('<div><a href="/api/v1/search/fillers/?id=' + idPolymers + '" target="search"> Search fillers</a></div>')
            }

            div.append('<div>' + data[x].list[y].company_name + '</div>')
            div.append('<table>');
            div.append('<thr><thd> Values </thd><thd> Qty </thd> </thr>')

            for (z in data[x].list[y].characteristics) {
                div.append('<tr><td>' + z + '</td><td></td><td>' + data[x].list[y].characteristics[z] + '</td></tr>');
            }

            for (z in data[x].list[y].files) {
                div.append('<p><a href="' + data[x].list[y].files[z].url + '" rel="true" target="_blank">' + data[x].list[y].files[z].title + '</a></p>');
            }

            notes = data[x].list[y].description
            if (notes > "") {
                div.append('<div>' + notes + '</div>')
            }
        }
    }*/

    for (x in data) {
        divContent.append( `<div>
        <div class="resultsection">
          <div class="resultsfields0">
            <div class="res_field0">
              <div class="btn0">
                <span class="all_prod0">
                  <span>Show all products</span>
                </span>
                <div class="expandmore0">
                </div>
              </div>
              <div class="links">
                <div class="linkonartcl">
                  <div class="btn_read_artcl_00">
                    <div class="icnlink0">
                    </div>
                    <span class="read_art0"><span><a href="https://pm-db.net/article/${data[x].id_article}">Read an article</a></span></span>
                  </div>
                </div>
                <div class="additiveslist0">
                  <div class="btn_read_artcl_01">
                    <div class="icnlink1">
                    </div>
                    <span class="open_add_list0">
                      <span><a href="https://pm-db.net/api/v1/search/additives/?lang=en&id=${data[x].id_polymers}&counter=0">Open additives list</a></span>
                    </span>
                  </div>
                </div>
              </div>
              <span class="manufacturer0"><span>${data[x].company_names}</span></span>
              <span class="polymer_group0">
                <span>${data[x].title}</span>
              </span>
            </div>
          </div>
          <span class="res_amount">
            <span>${data.length} polymers were found</span>
          </span>
        </div>
        <div class="searchthroughnavigation">
          <div class="icnhome">
          </div>
          <div class="icnarrow1">
          </div>
        </div> 
        </div>`
        )
    }
}