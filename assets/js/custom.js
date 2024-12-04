
$(document).ready(function () {
    $('select').niceSelect();
});

(function ($) {
    "use strict";
    var HealthCare = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function () {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            this.am_testimonial_slider();
            this.am_feedback_slider();
            this.toggle_menu();
            this.search_btn();
        },


        // testimonial slider
        am_testimonial_slider: function () {
            var swiper = new Swiper(".hc-news", {
                slidesPerView: 2,
                spaceBetween: 30,
                loop: true,
                speed: 1000,
                pagination: {
                    el: ".hc-news .swiper-pagination",
                    clickable: true,
                },

                breakpoints: {
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                },
            });
        },
        // testimonial slider

        // team slider
        // feedback slider
        am_feedback_slider: function () {
            var swiper = new Swiper(".hc-testimonial", {
                slidesPerView: 2,
                spaceBetween: 50,
                loop: true,
                speed: 1000,

                pagination: {
                    el: ".hc-testimonial-wrapper .swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: " .hc-testimonial-wrapper .swiper-button-next",
                    prevEl: ".hc-testimonial-wrapper .swiper-button-prev",
                },

                breakpoints: {
                    1199: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    425: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    280: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                },
            });
        },
        // feedbackslider
        // toggle menu
        toggle_menu: function () {
            $(".hc-toggle-btn").on("click", function () {
                $("body").toggleClass("menu-open");
            });
        },
        // toggle menu
        // search btn
        search_btn: function () {
            $(".searchBtn").on("click", function () {
                $(".searchBox").addClass("show");
            });
            $(".closeBtn").on("click", function () {
                $(".searchBox").removeClass("show");
            });
            $(".searchBox").on("click", function () {
                $(".searchBox").removeClass("show");
            });
            $(".search-bar-inner").on("click", function () {
                event.stopPropagation();
            });
        },
        // search btn end

    };


    $(document).ready(function () {
        // Show overlay when .read-more is clicked
        $('.read-more-1').on('click', function () {
            $('.read-1').fadeIn();
            $('body').css('overflow', 'hidden'); // Stop body scrolling
        });

        // Hide overlay when the close icon is clicked
        $('.read i').on('click', function () {
            $('.overlay').fadeOut();
            $('body').css('overflow', ''); // Re-enable body scrolling
        });

        // Hide overlay when clicking outside the .read box
        $('.overlay').on('click', function (e) {
            if (!$(e.target).closest('.read').length) {
                $('.overlay').fadeOut();
                $('body').css('overflow', ''); // Re-enable body scrolling
            }
        });
    });

    $(document).ready(function () {
        // Show overlay when .read-more is clicked
        $('.read-more-2').on('click', function () {
            $('.read-2').fadeIn();
            $('body').css('overflow', 'hidden'); // Stop body scrolling
        });

        // Hide overlay when the close icon is clicked
        $('.read i').on('click', function () {
            $('.overlay').fadeOut();
            $('body').css('overflow', ''); // Re-enable body scrolling
        });

        // Hide overlay when clicking outside the .read box
        $('.overlay').on('click', function (e) {
            if (!$(e.target).closest('.read').length) {
                $('.overlay').fadeOut();
                $('body').css('overflow', ''); // Re-enable body scrolling
            }
        });
    });

    $(document).ready(function () {
        // Show overlay when .read-more is clicked
        $('.read-more-3').on('click', function () {
            $('.read-3').fadeIn();
            $('body').css('overflow', 'hidden'); // Stop body scrolling
        });

        // Hide overlay when the close icon is clicked
        $('.read i').on('click', function () {
            $('.overlay').fadeOut();
            $('body').css('overflow', ''); // Re-enable body scrolling
        });

        // Hide overlay when clicking outside the .read box
        $('.overlay').on('click', function (e) {
            if (!$(e.target).closest('.read').length) {
                $('.overlay').fadeOut();
                $('body').css('overflow', ''); // Re-enable body scrolling
            }
        });
    });

    HealthCare.init();
})(jQuery);