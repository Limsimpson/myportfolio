$(function () {
    // FULLPAGE PLUG-IN 실행
    $('#fullpage').fullpage({
        navigation: true,
        anchors: ["p1", "p2", "p3", "p4"],
        menu: "#myMenu",
        afterLoad: function (anchorLink, index) {
            //메인메뉴
            $("#myMenu>li>a").removeClass("on");
            if (index == 1) {
                $("#myMenu>li:eq(0)>a").addClass("on");
            } else if (index == 2) {
                $("#myMenu>li:eq(1)>a").addClass("on");
            } else if (index == 3) {
                $("#myMenu>li:eq(2)>a").addClass("on");
            } else {
                $("#myMenu>li:eq(3)>a").addClass("on");
            };
            $("#myMenu>li>a").click(function () {
                $(this).blur();
            }); //메인메뉴 종료

            //막대그래프 시작
            //fullpage는 scroll을 이용한 것이 아니기 때문에 section의 index값으로 설정해야한다.
            if (index == 2) {
                t1 = setInterval(changeT, 50);
            };

            var c = 0;

            function changeT() {
                c++;
                if (c <= 41) {
                    $(".bar").each(function () {
                        p1 = $(this).attr("data-percent");
                        n1 = $(this).parent().width() / 100;
                        $(this).animate({
                            "width": p1 * n1
                        }, 2000);
                        w1 = $(this).width();
                        //console.log(p1)
                        //console.log(n1)
                        console.log(w1)
                        $(this).parent().next().text(Math.ceil(w1 / n1) + "%");
                    });
                } else {
                    clearInterval(t1);
                };
            }; //막대그래프 종료
        }, //afterLoad END
        slidesNavigation: true
    }); //FULLPAGE PLUG-IN 종료
}); //전체함수 종료
