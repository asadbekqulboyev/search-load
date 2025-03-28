$(document).ready(function () {
    $("#add-unloading").click(function (event) {
        event.preventDefault(); // Sahifa qayta yuklanishining oldini olish
        $(this).addClass('absolute')
        // Yangi element yaratish
        var newElement = `
                <div class="possible">
                                    <div class="possible-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                                            viewBox="0 0 10 10" fill="none">
                                            <path
                                                d="M5 4V7.33333M3.5 5.78782C2.03408 6.03506 1 6.63388 1 7.33333C1 8.25381 2.79086 9 5 9C7.20914 9 9 8.25381 9 7.33333C9 6.63388 7.96591 6.03506 6.5 5.78782M6.33333 2.33333C6.33333 3.06971 5.73638 3.66667 5 3.66667C4.26362 3.66667 3.66667 3.06971 3.66667 2.33333C3.66667 1.59695 4.26362 1 5 1C5.73638 1 6.33333 1.59695 6.33333 2.33333Z"
                                                stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div class="possible-right">
                                        <div class="input-row">
                                            <label>
                                                <h3>Разгрузка</h3>
                                                <div class="input-group settlement">
                                                    <input type="text" placeholder="Населенный пункт">
                                                    <span class="icon"><img src="assets/images/mark.svg" alt=""></span>
                                                </div>
                                            </label>
                                            <label>
                                                Радиус поиска
                                                <div class="input-group radius">
                                                    <input type="number" value="0">
                                                    <span>км</span>
                                                </div>
                                            </label>
                                        </div>
                                        <div class="input-row">
                                            <div>
                                                <h3>Ставка</h3>
                                                <div class="input-group bid">
                                                    <input type="text" placeholder="Стоимость">
                                                    <div class="params">
                                                        <select>
                                                            <option>руб</option>
                                                            <option>dollar</option>
                                                        </select>
                                                        <select>
                                                            <option>км</option>
                                                            <option>м</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="select-group">
                                                Тип оплаты
                                                <select>
                                                    <option>Любой</option>
                                                    <option>карта</option>
                                                    <option>наличные</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            `;

        // Yangi elementni konteynerga qo‘shish
        $("#unloading-container").append(newElement);
        $('select').niceSelect('destroy'); // Eski selectni yo'q qilish
        $('select').niceSelect();
    });

    $('select').niceSelect();

    $('#request-bet').click(function (e) {
        e.preventDefault();
        $('.request-bet').removeClass('show');
        $('.have-bet').addClass('show');
        $(this).removeClass('active')
        $('#have-bet').addClass('active')
    })

    $('#have-bet').click(function (e) {
        e.preventDefault();
        $('.request-bet').addClass('show');
        $('.have-bet').removeClass('show');
        $(this).removeClass('active')
        $('#request-bet').addClass('active')
    })

    $('.order-no').click(function () {
        $(this).removeClass('show')
        $('.order-input').addClass('show')
    })

    $('.order-input .back').click(function () {
        $('.order-no').addClass('show')
        $('.order-input').removeClass('show')
    })
    let imageSend = document.querySelector('.image-send')
    if (imageSend) {
        let myDropzone = new Dropzone("#dropzone", { url: "/file/post" });
    }

    let tabSearch = $('.search-tab');
    let contentSearch = $('.search-content');

    function tab(tab, content) {
        tab.click(function () {
            var index = $(this).index();
            tab.removeClass('active');
            content.removeClass('active');
            $(this).addClass('active');
            content.eq(index).addClass('active');
        });
    }
    tab(tabSearch, contentSearch);

    $('.contact-header').click(function () {
        $(this).next().toggleClass('show')
    })

    // modal open
    $("#open-modal-btn").click(function () {
        $(".modal-overlay").addClass('show');
    });

    $(".close-modal").click(function (e) {
        $(".modal-overlay").removeClass('show');
    });
})    