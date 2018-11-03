// анимация меню

$('.menu-btn').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.menu-nav__link').toggleClass('menu-nav__link_active');
});

// раздел сервисы доп информация по нажатию

    // первый сервис
$('#first-services_btn').on('click', function (e) {
    e.preventDefault;
    $('#first-services_text').toggleClass('text_services_active');
});
$('#first-services_exit-btn').on('click', function (e) {
    e.preventDefault;
    $('#first-services_text').removeClass('text_services_active');
});

    //второй сервис
$('#second-services_btn').on('click', function (e) {
    e.preventDefault;
    $('#second-services_text').toggleClass('text_services_active');
});
$('#second-services_exit-btn').on('click', function (e) {
    e.preventDefault;
    $('#second-services_text').removeClass('text_services_active');
});

    //третий сервис
$('#third-services_btn').on('click', function (e) {
    e.preventDefault;
    $('#third-services_text').toggleClass('text_services_active');
});
$('#third-services_exit-btn').on('click', function (e) {
    e.preventDefault;
    $('#third-services_text').removeClass('text_services_active');
});

    //четвертый сервис
$('#fourth-services_btn').on('click', function (e) {
    e.preventDefault;
    $('#fourth-services_text').toggleClass('text_services_active');
});
$('#fourth-services_exit-btn').on('click', function (e) {
    e.preventDefault;
    $('#fourth-services_text').removeClass('text_services_active');
});

    //пятый сервис
$('#fifth-services_btn').on('click', function (e) {
    e.preventDefault;
    $('#fifth-services_text').toggleClass('text_services_active');
});
$('#fifth-services_exit-btn').on('click', function (e) {
    e.preventDefault;
    $('#fifth-services_text').removeClass('text_services_active');
});

    //шестой сервис
$('#sixth-services_btn').on('click', function (e) {
    e.preventDefault;
    $('#sixth-services_text').toggleClass('text_services_active');
});
$('#sixth-services_exit-btn').on('click', function (e) {
    e.preventDefault;
    $('#sixth-services_text').removeClass('text_services_active');
});

// скрипт плавного перехода по ссылкам

$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
});



$(document).ready(function() { // Ждём загрузки страницы
						   
	var slides = $(".slider .slides").children(".slide"); // Получаем массив всех слайдов
	var width = $(".slider .slides").width(); // Получаем ширину видимой области
	var i = slides.length; // Получаем количество слайдов
	var offset = i * width; // Задаем начальное смещение и ширину всех слайдов
	var cheki = i-1;
	
	$(".slider .slides").css('width',offset); // Задаем блоку со слайдами ширину всех слайдов
	
	for (j=0; j < slides.length; j++) {
		if (j==0) {
			$(".slider .navigation").append("<div class='dot active'></div>");
		}
		else {
			$(".slider .navigation").append("<div class='dot'></div>");
		}
	}
	
	var dots = $(".slider .navigation").children(".dot");
	offset = 0; // Обнуляем смещение, так как показывается начала 1 слайд
	i = 0; // Обнуляем номер текущего слайда
	
	$('.slider .navigation .dot').click(function(){
		$(".slider .navigation .active").removeClass("active");								  
		$(this).addClass("active");
		i = $(this).index();
		offset = i * width;
		$(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
	});
	
	
	$("body .slider .next").click(function(){	// Событие клика на кнопку "следующий слайд"
		if (offset < width * cheki) {	// Проверяем, дошли ли мы до конца
			offset += width; // Увеличиваем смещение до следующего слайда
			$(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
			$(".slider .navigation .active").removeClass("active");	
			$(dots[++i]).addClass("active");
		}
	});


	$("body .slider .prev").click(function(){	// Событие клика на кнопку "предыдущий слайд"
		if (offset > 0) { // Проверяем, дошли ли мы до конца
			offset -= width; // Уменьшаем смещение до предыдущегоо слайда
			$(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к предыдущему
			$(".slider .navigation .active").removeClass("active");	
			$(dots[--i]).addClass("active");
		}
	});

});

//наведение на профиль

$('.profile_gallery .profile .disc_container').mouseenter(function(e) {
    e.preventDefault; $(this).siblings(".img__profile").toggleClass('img__profile_active');
});
$('.profile_gallery .profile .disc_container').mouseleave(function(e) {
    e.preventDefault; $(this).siblings(".img__profile").removeClass('img__profile_active');
});


