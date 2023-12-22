function showObject(data, thisForm) {
    if (!data) {
        alert('no results!')
        return false;
    }

    let divContent = $('#content');
    divContent.html('');

    for (x in data) {
        divContent.append(`<div class="wrapper">
    
    <div class="divider"></div>
    <main class="main">
        <div class="page_main-block main-block">
            <div class="main-block_container _container">
                <div class="main-block_body">
                    <h1 class="main-block_title title">
                        Аукціони, які творять добро
                    </h1>
                    <div class="main-block_buttons">
                        <a href="" class="main-block_text">Ви отримуєте лоти, люди отримують допомогу</a>
                        <button id="all_auctions" class="main-block_button button" onclick="all_auctions()"><div class="arrow"></div>Всі аукціони</button>
                    </div>
                </div>
            </div>
            <div class="auction_tiles">
                <div class="tile1">
                    <div class="tile1_image"></div>
                    <div class="tile_title">Назва аукціону</div>
                    <div class="tile_description">Короткий опис про тематику та лоти</div>
                </div>
                <div class="tile2">
                    <div class="tile2_image"></div>
                    <div class="tile_title">Назва аукціону</div>
                    <div class="tile_description">Короткий опис про тематику та лоти</div>
                </div>
                <div class="tile34">
                    <div class="tile1">
                    <div class="tile1_image"></div>
                    <div class="tile_title">Назва аукціону</div>
                    <div class="tile_description">Короткий опис про тематику та лоти</div>
                    </div>
                    <div class="tile1">
                    <div class="tile1_image"></div>
                    <div class="tile_title">Назва аукціону</div>
                    <div class="tile_description">Короткий опис про тематику та лоти</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <section class="servises_page">
        <div class="servise_container2 _container">
            <div class="servise_body">
                <div class="servise_column">
                    <div class="servise_item item-servise">
                    </div>
                </div>
            </div>
            <div class="servise__head">
            </div>
            <div class="servise__text">
                <div class="servise__text__column">
                    <div class="servise__text_title2">01</div>
                    <div class="servise__text_text">Митці передають свої роботи аукціону</div>
                </div>
                <div class="servise__text__column">
                    <div class="servise__text_title2">02</div>
                    <div class="servise__text_text">Ви приймаєте участь в змаганні за витвори мистецтва</div>
                </div>
                <div class="servise__text__column">
                    <div class="servise__text_title2">03</div>
                    <div class="servise__text_text">Гроші йдуть на допомогу військовим хірургам на фронті</div>
                </div>

            </div>
            <div class="servise_img3">
                <img src="golden.svg" alt="golden image">
             </div>
        </div>

        <h1 class="main-block_title1 title">
            Активні аукціони
        </h1>

        <div class="blocks1">
            <div class="tile">
                <div class="tile_image"></div>
                <div class="tile_title">Назва аукціону</div>
                <div class="tile_description">Короткий опис про тематику та лоти</div>
                <div class="tile_details">Деталі</div>
             </div>
             <div class="tile">
                <div class="tile_image"></div>
                <div class="tile_title">Назва аукціону</div>
                <div class="tile_description">Короткий опис про тематику та лоти</div>
                <div class="tile_details">Деталі</div>
             </div>
             <div class="tile">
                <div class="tile_image"></div>
                <div class="tile_title">Назва аукціону</div>
                <div class="tile_description">Короткий опис про тематику та лоти</div>
                <div class="tile_details">Деталі</div>
             </div>
             <div class="tile">
                <div class="tile_image"></div>
                <div class="tile_title">Назва аукціону</div>
                <div class="tile_description">Короткий опис про тематику та лоти</div>
                <div class="tile_details">Деталі</div>
             </div>
            
         </div>
         <div class="blocks2">
            <div class="tile">
                <div class="tile_image"></div>
                <div class="tile_title">Назва аукціону</div>
                <div class="tile_description">Короткий опис про тематику та лоти</div>
                <div class="tile_details">Деталі</div>
             </div>
             <div class="tile">
                <div class="tile_image"></div>
                <div class="tile_title">Назва аукціону</div>
                <div class="tile_description">Короткий опис про тематику та лоти</div>
                <div class="tile_details">Деталі</div>
             </div>
             <div class="tile">
                <div class="tile_image"></div>
                <div class="tile_title">Назва аукціону</div>
                <div class="tile_description">Короткий опис про тематику та лоти</div>
                <div class="tile_details">Деталі</div>
             </div>
             <div class="tile">
                <div class="tile_image"></div>
                <div class="tile_title">Назва аукціону</div>
                <div class="tile_description">Короткий опис про тематику та лоти</div>
                <div class="tile_details">Деталі</div>
             </div>
         </div>
         <button id="all_auctions" class="main-block_button button" onclick="all_auctions()"><div class="arrow"></div>Всі аукціони</button>
         <div class="black_block">
            <div class="white_description">Дохід з аукціонів направляється на конкретні благодійні напрямки</div>
            <div class="three_pictures">
                <div>Допомога військовим лікарям та лікарням</div>
                <div>Соціальні ініціативи</div>
                <div>Відновлення пошкодженого житла та інфраструри</div>
            </div>
         </div>
    </section>
</div>`
        )
    }
}