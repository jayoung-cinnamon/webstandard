    //라이트박스 (레이어팝업+이미지슬라이더) lightGallery참고
    $(".lightgallery").lightGallery({
      thumbnail:true,
      autoplay:true,
      pause:3000,
      progressBar:true
    });



    //윈도우팝업 
    $(".window").click(function(e){
      e.preventDefault();
      //window.open("파일명","팝업이름","옵션설정");
      //옵션:left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
      window.open("sample_popup.html","popup01","width=800, height=590,left=50,top=50,scrollbars=0,toolbar=0,menubar=0");
    });

    //레이어팝업
    $(".layer").click(function(e){
      e.preventDefault();
      //$("#layer").css("display","block");
      $("#layer").slideDown(200);
    });
    $("#layer .close").click(function (e) {
      e.preventDefault();
      //$("#layer").css("display","block");
      $("#layer").slideUp(200);
    });    
    
    //탭메뉴
        const $tab_list = $(".tab_menu");

        $tab_list.find("ul ul").hide();
        $tab_list.find("li.active > ul").show();

        function tabMenu(e){
          e.preventDefault();
          const $this = $(this);
          $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
        }
        $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);
        //focus()를 준 이유는 웹 표준을 준수하기 위해서 탭키로 이동가능.

    //배너
    //html마크업세팅 -> css연동 -> 제이쿼리 연동 -> 제이쿼리 호출
    $(".ban").slick({
      infinite:true,
      slidesToShow:3,
      slidesToScroll:3,
      autoplay:true,
      autoplaySpeed: 3000,
      dots: true,
      
    });

    //갤러리
    $(".gallery_img").slick({
      fade:true,
      pauseOnHover:true,
      infinite:true,
      autoplay:true,
      autoplaySpeed:3000,
      spped:300,
      slidesToShow:1,
      arrows:false
    });

    $(".play").click(function(){
      $(".gallery_img").slick("slickPlay");
    });

     $(".pause").click(function () {
        $(".gallery_img").slick("slickPause");
      });
    
     $(".prev").click(function () {
        $(".gallery_img").slick("slickPrev");
      });

     $(".next").click(function () {
        $(".gallery_img").slick("slickNext");
      });

    //버튼을 클릭하면 전체 메뉴를 보이게 하세요.
    $(".tit .btn").click(function(e){
      //function()에 e를 넣어주고 e.preventDefault()를 해주는 이유는
      //링크에 #이 붙어있기 때문에 #을 깨주려면 클릭했을때 변수를 e로 저장하고
      // 클릭했을때 #은 (0,0)위치로 이동하는데 그것을 깨줌.
      e.preventDefault();
      //1.방법: $("#cont_nav").css("display","block");
      //2.방법 $("#cont_nav").show();
      //3.방법 $("#cont_nav").fadeIn();
      //4.방법 : 한번만 사용가능 .$("#cont_nav").slideDown();
      //5.방법: $("#cont_nav").toggle();
      //6.$("#cont_nav").fadeToggle();
    $("#cont_nav").slideToggle(200);
    $(this).toggleClass("on");
    });
