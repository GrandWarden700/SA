(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Worldwide Sales Chart
    var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["上午8:30", "下午12:00", "下午13:30", "下午15:00", "下午18:00", "下午20:30", "下午23:00"],
            datasets: [{
                    label: "第一停車場",
                    data: [15, 30, 55, 65, 60, 80, 95],
                    backgroundColor: "rgba(0, 156, 255, .7)"
                },
                {
                    label: "第二停車場",
                    data: [8, 35, 40, 60, 70, 55, 75],
                    backgroundColor: "rgba(0, 156, 255, .5)"
                },
                {
                    label: "第三停車場",
                    data: [12, 25, 45, 55, 65, 70, 60],
                    backgroundColor: "rgba(0, 156, 255, .3)"
                }
            ]
            },
        options: {
            responsive: true
        }
    });


    // Salse & Revenue Chart
    var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['上午8:30', '下午12:00', '下午13:30', '下午15:00', '下午18:00', '下午20:30', '下午23:00'],
        datasets: [
          {
            label: '離峰預期車位',
            data: [250, 80, 178, 222, 30, 125, 50],
            backgroundColor: 'rgba(0, 156, 255, .5)',
            fill: true,
          },
          {
            label: '尖峰預期車位',
            data: [50, 230, 122, 78, 270, 175, 250],
            backgroundColor: 'rgba(0, 156, 255, .3)',
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
    


    // Single Line Chart
    var ctx3 = $("#line-chart").get(0).getContext("2d");
    var myChart3 = new Chart(ctx3, {
        type: "line",
        data: {
            labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
            datasets: [{
                label: "Salse",
                fill: false,
                backgroundColor: "rgba(0, 156, 255, .3)",
                data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Single Bar Chart
    var ctx4 = $("#bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(0, 156, 255, .5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Pie Chart
    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
      type: 'pie',
      data: {
        labels: [
          '桃園縣公有府前地下停車場',
          '新民立體停車場',
          '西門地下停車場',
          '廣停一停車場',
          '銀河廣場地下停車場',
        ],
        datasets: [
          {
            backgroundColor: [
              'rgba(0, 156, 255, .7)',
              'rgba(0, 156, 255, .6)',
              'rgba(0, 156, 255, .5)',
              'rgba(0, 156, 255, .4)',
              'rgba(0, 156, 255, .3)',
            ],
            data: [55, 49, 44, 24, 15],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });


    // Doughnut Chart
    var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
      type: 'doughnut',
      data: {
        labels: [
          '南崁公一地下停車場',
          '廣北平面停車場',
          '停十八停車場',
          '兩蔣文化園區慈湖遊客中心暨慈湖廣場附屬停車場',
          '中壢內壢站',
        ],
        datasets: [
          {
            backgroundColor: [
              'rgba(0, 156, 255, .7)',
              'rgba(0, 156, 255, .6)',
              'rgba(0, 156, 255, .5)',
              'rgba(0, 156, 255, .4)',
              'rgba(0, 156, 255, .3)',
            ],
            data: [55, 49, 44, 24, 15],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    
})(jQuery);

