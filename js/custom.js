jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(b, a, c, d, e) {
        return jQuery.easing[jQuery.easing.def](b, a, c, d, e)
    },
    easeInQuad: function(b, a, c, d, e) {
        return d * (a /= e) * a + c
    },
    easeOutQuad: function(b, a, c, d, e) {
        return -d * (a /= e) * (a - 2) + c
    },
    easeInOutQuad: function(b, a, c, d, e) {
        return 1 > (a /= e / 2) ? d / 2 * a * a + c : -d / 2 * (--a * (a - 2) - 1) + c
    },
    easeInCubic: function(b, a, c, d, e) {
        return d * (a /= e) * a * a + c
    },
    easeOutCubic: function(b, a, c, d, e) {
        return d * ((a = a / e - 1) * a * a + 1) + c
    },
    easeInOutCubic: function(b, a, c, d, e) {
        return 1 > (a /= e / 2) ? d / 2 * a * a * a + c :
            d / 2 * ((a -= 2) * a * a + 2) + c
    },
    easeInQuart: function(b, a, c, d, e) {
        return d * (a /= e) * a * a * a + c
    },
    easeOutQuart: function(b, a, c, d, e) {
        return -d * ((a = a / e - 1) * a * a * a - 1) + c
    },
    easeInOutQuart: function(b, a, c, d, e) {
        return 1 > (a /= e / 2) ? d / 2 * a * a * a * a + c : -d / 2 * ((a -= 2) * a * a * a - 2) + c
    },
    easeInQuint: function(b, a, c, d, e) {
        return d * (a /= e) * a * a * a * a + c
    },
    easeOutQuint: function(b, a, c, d, e) {
        return d * ((a = a / e - 1) * a * a * a * a + 1) + c
    },
    easeInOutQuint: function(b, a, c, d, e) {
        return 1 > (a /= e / 2) ? d / 2 * a * a * a * a * a + c : d / 2 * ((a -= 2) * a * a * a * a + 2) + c
    },
    easeInSine: function(b, a, c, d, e) {
        return -d * Math.cos(a /
            e * (Math.PI / 2)) + d + c
    },
    easeOutSine: function(b, a, c, d, e) {
        return d * Math.sin(a / e * (Math.PI / 2)) + c
    },
    easeInOutSine: function(b, a, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * a / e) - 1) + c
    },
    easeInExpo: function(b, a, c, d, e) {
        return 0 == a ? c : d * Math.pow(2, 10 * (a / e - 1)) + c
    },
    easeOutExpo: function(b, a, c, d, e) {
        return a == e ? c + d : d * (-Math.pow(2, -10 * a / e) + 1) + c
    },
    easeInOutExpo: function(b, a, c, d, e) {
        return 0 == a ? c : a == e ? c + d : 1 > (a /= e / 2) ? d / 2 * Math.pow(2, 10 * (a - 1)) + c : d / 2 * (-Math.pow(2, -10 * --a) + 2) + c
    },
    easeInCirc: function(b, a, c, d, e) {
        return -d * (Math.sqrt(1 - (a /= e) *
            a) - 1) + c
    },
    easeOutCirc: function(b, a, c, d, e) {
        return d * Math.sqrt(1 - (a = a / e - 1) * a) + c
    },
    easeInOutCirc: function(b, a, c, d, e) {
        return 1 > (a /= e / 2) ? -d / 2 * (Math.sqrt(1 - a * a) - 1) + c : d / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
    },
    easeInElastic: function(b, a, c, d, e) {
        b = 1.70158;
        var g = 0,
            f = d;
        if (0 == a) return c;
        if (1 == (a /= e)) return c + d;
        g || (g = 0.3 * e);
        f < Math.abs(d) ? (f = d, b = g / 4) : b = g / (2 * Math.PI) * Math.asin(d / f);
        return -(f * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * e - b) * Math.PI / g)) + c
    },
    easeOutElastic: function(b, a, c, d, e) {
        b = 1.70158;
        var g = 0,
            f = d;
        if (0 == a) return c;
        if (1 ==
            (a /= e)) return c + d;
        g || (g = 0.3 * e);
        f < Math.abs(d) ? (f = d, b = g / 4) : b = g / (2 * Math.PI) * Math.asin(d / f);
        return f * Math.pow(2, -10 * a) * Math.sin(2 * (a * e - b) * Math.PI / g) + d + c
    },
    easeInOutElastic: function(b, a, c, d, e) {
        b = 1.70158;
        var g = 0,
            f = d;
        if (0 == a) return c;
        if (2 == (a /= e / 2)) return c + d;
        g || (g = 1.5 * 0.3 * e);
        f < Math.abs(d) ? (f = d, b = g / 4) : b = g / (2 * Math.PI) * Math.asin(d / f);
        return 1 > a ? -0.5 * f * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * e - b) * Math.PI / g) + c : 0.5 * f * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (a * e - b) * Math.PI / g) + d + c
    },
    easeInBack: function(b, a, c, d, e, g) {
        void 0 ==
            g && (g = 1.70158);
        return d * (a /= e) * a * ((g + 1) * a - g) + c
    },
    easeOutBack: function(b, a, c, d, e, g) {
        void 0 == g && (g = 1.70158);
        return d * ((a = a / e - 1) * a * ((g + 1) * a + g) + 1) + c
    },
    easeInOutBack: function(b, a, c, d, e, g) {
        void 0 == g && (g = 1.70158);
        return 1 > (a /= e / 2) ? d / 2 * a * a * (((g *= 1.525) + 1) * a - g) + c : d / 2 * ((a -= 2) * a * (((g *= 1.525) + 1) * a + g) + 2) + c
    },
    easeInBounce: function(b, a, c, d, e) {
        return d - jQuery.easing.easeOutBounce(b, e - a, 0, d, e) + c
    },
    easeOutBounce: function(b, a, c, d, e) {
        return (a /= e) < 1 / 2.75 ? 7.5625 * d * a * a + c : a < 2 / 2.75 ? d * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + c : a < 2.5 / 2.75 ?
            d * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + c : d * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + c
    },
    easeInOutBounce: function(b, a, c, d, e) {
        return a < e / 2 ? 0.5 * jQuery.easing.easeInBounce(b, 2 * a, 0, d, e) + c : 0.5 * jQuery.easing.easeOutBounce(b, 2 * a - e, 0, d, e) + 0.5 * d + c
    }
});
(function(b) {
    function a() {
        url = location.href;
        return hashtag = -1 != url.indexOf("#!") ? decodeURI(url.substring(url.indexOf("#!") + 2, url.length)) : !1
    }

    function c(a, b) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var c = RegExp("[\\?&]" + a + "=([^&#]*)").exec(b);
        return null == c ? "" : c[1]
    }
    b.prettyPhoto = {
        version: "3.1.3"
    };
    b.fn.prettyPhoto = function(d) {
        function e() {
            b(".pp_loaderIcon").hide();
            projectedTop = scroll_pos.scrollTop + (z / 2 - l.containerHeight / 2);
            0 > projectedTop && (projectedTop = 0);
            $ppt.fadeTo(settings.animation_speed,
                1);
            $pp_pic_holder.find(".pp_content").animate({
                height: l.contentHeight,
                width: l.contentWidth
            }, settings.animation_speed);
            $pp_pic_holder.animate({
                top: projectedTop,
                left: A / 2 - l.containerWidth / 2,
                width: l.containerWidth
            }, settings.animation_speed, function() {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(l.height).width(l.width);
                $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);
                isSet && "image" == k(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide();
                l.resized ? b("a.pp_expand,a.pp_contract").show() : b("a.pp_expand").hide();
                settings.autoplay_slideshow && !x && !C && b.prettyPhoto.startSlideshow();
                settings.changepicturecallback();
                C = !0
            });
            isSet && settings.overlay_gallery && "image" == k(pp_images[set_position]) && settings.ie6_fallback && !(b.browser.msie && 6 == parseInt(b.browser.version)) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((l.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage <
                pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"),
                goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, b.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
        }

        function g(a) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden");
            $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                b(".pp_loaderIcon").show();
                a()
            })
        }

        function f(a,
            b) {
            resized = !1;
            h(a, b);
            imageWidth = a;
            imageHeight = b;
            if ((y > A || B > z) && doresize && settings.allow_resize && !u) {
                resized = !0;
                for (fitting = !1; !fitting;) y > A ? (imageWidth = A - 200, imageHeight = b / a * imageWidth) : B > z ? (imageHeight = z - 200, imageWidth = a / b * imageHeight) : fitting = !0, B = imageHeight, y = imageWidth;
                h(imageWidth, imageHeight);
                (y > A || B > z) && f(y, B)
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(B),
                containerWidth: Math.floor(y) + 2 * settings.horizontal_padding,
                contentHeight: Math.floor(s),
                contentWidth: Math.floor(w),
                resized: resized
            }
        }

        function h(a, c) {
            a = parseFloat(a);
            c = parseFloat(c);
            $pp_details = $pp_pic_holder.find(".pp_details");
            $pp_details.width(a);
            detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom"));
            $pp_details = $pp_details.clone().addClass(settings.theme).width(a).appendTo(b("body")).css({
                position: "absolute",
                top: -1E4
            });
            detailsHeight += $pp_details.height();
            detailsHeight = 34 >= detailsHeight ? 36 : detailsHeight;
            b.browser.msie && 7 == b.browser.version &&
                (detailsHeight += 8);
            $pp_details.remove();
            $pp_title = $pp_pic_holder.find(".ppt");
            $pp_title.width(a);
            titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom"));
            $pp_title = $pp_title.clone().appendTo(b("body")).css({
                position: "absolute",
                top: -1E4
            });
            titleHeight += $pp_title.height();
            $pp_title.remove();
            s = c + detailsHeight;
            w = a;
            B = s + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height();
            y = a
        }

        function k(a) {
            return a.match(/youtube\.com\/watch/i) ||
                a.match(/youtu\.be/i) ? "youtube" : a.match(/vimeo\.com/i) ? "vimeo" : a.match(/\b.mov\b/i) ? "quicktime" : a.match(/\b.swf\b/i) ? "flash" : a.match(/\biframe=true\b/i) ? "iframe" : a.match(/\bajax=true\b/i) ? "ajax" : a.match(/\bcustom=true\b/i) ? "custom" : "#" == a.substr(0, 1) ? "inline" : "image"
        }

        function j() {
            doresize && "undefined" != typeof $pp_pic_holder && (scroll_pos = m(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = z / 2 + scroll_pos.scrollTop - contentHeight / 2, 0 > projectedTop && (projectedTop =
                0), contentHeight > z || $pp_pic_holder.css({
                top: projectedTop,
                left: A / 2 + scroll_pos.scrollLeft - contentwidth / 2
            }))
        }

        function m() {
            if (self.pageYOffset) return {
                scrollTop: self.pageYOffset,
                scrollLeft: self.pageXOffset
            };
            if (document.documentElement && document.documentElement.scrollTop) return {
                scrollTop: document.documentElement.scrollTop,
                scrollLeft: document.documentElement.scrollLeft
            };
            if (document.body) return {
                scrollTop: document.body.scrollTop,
                scrollLeft: document.body.scrollLeft
            }
        }

        function p() {
            settings.social_tools && (facebook_like_link =
                settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)));
            settings.markup = settings.markup.replace("{pp_social}", settings.social_tools ? facebook_like_link : "");
            b("body").append(settings.markup);
            $pp_pic_holder = b(".pp_pic_holder");
            $ppt = b(".ppt");
            $pp_overlay = b("div.pp_overlay");
            if (isSet && settings.overlay_gallery) {
                currentGalleryPage = 0;
                toInject = "";
                for (var a = 0; a < pp_images.length; a++) pp_images[a].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[a]) : (classname = "default",
                    img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject);
                $pp_pic_holder.find("#pp_full_res").after(toInject);
                $pp_gallery = b(".pp_pic_holder .pp_gallery");
                $pp_gallery_li = $pp_gallery.find("li");
                $pp_gallery.find(".pp_arrow_next").click(function() {
                    b.prettyPhoto.changeGalleryPage("next");
                    b.prettyPhoto.stopSlideshow();
                    return !1
                });
                $pp_gallery.find(".pp_arrow_previous").click(function() {
                    b.prettyPhoto.changeGalleryPage("previous");
                    b.prettyPhoto.stopSlideshow();
                    return !1
                });
                $pp_pic_holder.find(".pp_content").hover(function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                }, function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                });
                itemWidth = 57;
                $pp_gallery_li.each(function(a) {
                    b(this).find("a").click(function() {
                        b.prettyPhoto.changePage(a);
                        b.prettyPhoto.stopSlideshow();
                        return !1
                    })
                })
            }
            settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                b.prettyPhoto.startSlideshow();
                return !1
            }));
            $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme);
            $pp_overlay.css({
                opacity: 0,
                height: b(document).height(),
                width: b(window).width()
            }).bind("click", function() {
                settings.modal || b.prettyPhoto.close()
            });
            b("a.pp_close").bind("click", function() {
                b.prettyPhoto.close();
                return !1
            });
            b("a.pp_expand").bind("click", function() {
                b(this).hasClass("pp_expand") ? (b(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (b(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0);
                g(function() {
                    b.prettyPhoto.open()
                });
                return !1
            });
            $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                b.prettyPhoto.changePage("previous");
                b.prettyPhoto.stopSlideshow();
                return !1
            });
            $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                b.prettyPhoto.changePage("next");
                b.prettyPhoto.stopSlideshow();
                return !1
            });
            j()
        }
        d = jQuery.extend({
                animation_speed: "fast",
                slideshow: 5E3,
                autoplay_slideshow: !1,
                opacity: 0.8,
                show_title: !0,
                allow_resize: !0,
                default_width: 500,
                default_height: 344,
                counter_separator_label: "/",
                theme: "pp_default",
                horizontal_padding: 20,
                hideflash: !1,
                wmode: "opaque",
                autoplay: !0,
                modal: !1,
                deeplinking: !0,
                overlay_gallery: !0,
                keyboard_shortcuts: !0,
                changepicturecallback: function() {},
                callback: function() {},
                ie6_fallback: !0,
                markup: '<div class="pp_pic_holder"> <div class="ppt">&nbsp;</div> <div class="pp_top"> <div class="pp_left"></div> <div class="pp_middle"></div> <div class="pp_right"></div> </div> <div class="pp_content_container"> <div class="pp_left"> <div class="pp_right"> <div class="pp_content"> <div class="pp_loaderIcon"></div> <div class="pp_fade"> <a href="#" class="pp_expand" title="Expand the image">Expand</a> <div class="pp_hoverContainer"> <a class="pp_next" href="#">next</a> <a class="pp_previous" href="#">previous</a> </div> <div id="pp_full_res"></div> <div class="pp_details"> <div class="pp_nav"> <a href="#" class="pp_arrow_previous">Previous</a> <p class="currentTextHolder">0/0</p> <a href="#" class="pp_arrow_next">Next</a> </div> <p class="pp_description"></p> <div class="pp_social">{pp_social}</div> <a class="pp_close" href="#">Close</a> </div> </div> </div> </div> </div> </div> <div class="pp_bottom"> <div class="pp_left"></div> <div class="pp_middle"></div> <div class="pp_right"></div> </div> </div> <div class="pp_overlay"></div>',
                gallery_markup: '<div class="pp_gallery"> <a href="#" class="pp_arrow_previous">Previous</a> <div> <ul> {gallery} </ul> </div> <a href="#" class="pp_arrow_next">Next</a> </div>',
                image_markup: '<img id="fullResImage" src="{path}" />',
                flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
                quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
                iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
                inline_markup: '<div class="pp_inline">{content}</div>',
                custom_markup: "",
                social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js">\x3c/script></div><div class="facebook"><iframe src="http://www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
            },
            d);
        var q = this,
            u = !1,
            l, C, s, w, B, y, z = b(window).height(),
            A = b(window).width(),
            x;
        doresize = !0;
        scroll_pos = m();
        b(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
            j();
            z = b(window).height();
            A = b(window).width();
            "undefined" != typeof $pp_overlay && $pp_overlay.height(b(document).height()).width(A)
        });
        d.keyboard_shortcuts && b(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(a) {
            if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (a.keyCode) {
                case 37:
                    b.prettyPhoto.changePage("previous");
                    a.preventDefault();
                    break;
                case 39:
                    b.prettyPhoto.changePage("next");
                    a.preventDefault();
                    break;
                case 27:
                    settings.modal || b.prettyPhoto.close(), a.preventDefault()
            }
        });
        b.prettyPhoto.initialize = function() {
            settings = d;
            "pp_default" == settings.theme && (settings.horizontal_padding = 16);
            settings.ie6_fallback && b.browser.msie && 6 == parseInt(b.browser.version) && (settings.theme = "light_square");
            theRel = b(this).attr("rel");
            galleryRegExp = /\[(?:.*)\]/;
            pp_images = (isSet = galleryRegExp.exec(theRel) ? !0 : !1) ? jQuery.map(q, function(a) {
                if (-1 !=
                    b(a).attr("rel").indexOf(theRel)) return b(a).attr("href")
            }) : b.makeArray(b(this).attr("href"));
            pp_titles = isSet ? jQuery.map(q, function(a) {
                if (-1 != b(a).attr("rel").indexOf(theRel)) return b(a).find("img").attr("alt") ? b(a).find("img").attr("alt") : ""
            }) : b.makeArray(b(this).find("img").attr("alt"));
            pp_descriptions = isSet ? jQuery.map(q, function(a) {
                if (-1 != b(a).attr("rel").indexOf(theRel)) return b(a).attr("title") ? b(a).attr("title") : ""
            }) : b.makeArray(b(this).attr("title"));
            30 < pp_images.length && (settings.overlay_gallery = !1);
            set_position = jQuery.inArray(b(this).attr("href"), pp_images);
            rel_index = isSet ? set_position : b("a[rel^='" + theRel + "']").index(b(this));
            p(this);
            settings.allow_resize && b(window).bind("scroll.prettyphoto", function() {
                j()
            });
            b.prettyPhoto.open();
            return !1
        };
        b.prettyPhoto.open = function(a, g, z) {
            "undefined" == typeof settings && (settings = d, b.browser.msie && 6 == b.browser.version && (settings.theme = "light_square"), pp_images = b.makeArray(a), pp_titles = g ? b.makeArray(g) : b.makeArray(""), pp_descriptions = z ? b.makeArray(z) : b.makeArray(""),
                isSet = 1 < pp_images.length ? !0 : !1, set_position = 0, p(a.target));
            b.browser.msie && 6 == b.browser.version && b("select").css("visibility", "hidden");
            settings.hideflash && b("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden");
            1 < b(pp_images).size() ? b(".pp_nav").show() : b(".pp_nav").hide();
            b(".pp_loaderIcon").show();
            settings.deeplinking && "undefined" != typeof theRel && (location.hash = "!" + theRel + "/" + rel_index + "/");
            settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}",
                encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link));
            $ppt.is(":hidden") && $ppt.css("opacity", 0).show();
            $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity);
            $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + b(pp_images).size());
            "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide();
            movie_width = parseFloat(c("width", pp_images[set_position])) ? c("width", pp_images[set_position]) : settings.default_width.toString();
            movie_height = parseFloat(c("height", pp_images[set_position])) ? c("height", pp_images[set_position]) : settings.default_height.toString();
            u = !1; - 1 != movie_height.indexOf("%") && (movie_height = parseFloat(b(window).height() * parseFloat(movie_height) / 100 - 150), u = !0); - 1 != movie_width.indexOf("%") && (movie_width = parseFloat(b(window).width() * parseFloat(movie_width) / 100 - 150), u = !0);
            $pp_pic_holder.fadeIn(function() {
                settings.show_title &&
                    "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html("&nbsp;");
                imgPreloader = "";
                skipInjection = !1;
                switch (k(pp_images[set_position])) {
                    case "image":
                        imgPreloader = new Image;
                        nextImage = new Image;
                        isSet && set_position < b(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]);
                        prevImage = new Image;
                        isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]);
                        $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g,
                            pp_images[set_position]);
                        imgPreloader.onload = function() {
                            l = f(imgPreloader.width, imgPreloader.height);
                            e()
                        };
                        imgPreloader.onerror = function() {
                            alert("Image cannot be loaded. Make sure the path is correct and image exist.");
                            b.prettyPhoto.close()
                        };
                        imgPreloader.src = pp_images[set_position];
                        break;
                    case "youtube":
                        l = f(movie_width, movie_height);
                        movie_id = c("v", pp_images[set_position]);
                        "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], 0 < movie_id.indexOf("?") && (movie_id = movie_id.substr(0,
                            movie_id.indexOf("?"))), 0 < movie_id.indexOf("&") && (movie_id = movie_id.substr(0, movie_id.indexOf("&"))));
                        movie = "http://www.youtube.com/embed/" + movie_id;
                        c("rel", pp_images[set_position]) ? movie += "?rel=" + c("rel", pp_images[set_position]) : movie += "?rel=1";
                        settings.autoplay && (movie += "&autoplay=1");
                        toInject = settings.iframe_markup.replace(/{width}/g, l.width).replace(/{height}/g, l.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                        break;
                    case "vimeo":
                        l = f(movie_width, movie_height);
                        movie_id = pp_images[set_position];
                        movie = "http://player.vimeo.com/video/" + movie_id.match(/http:\/\/(www\.)?vimeo.com\/(\d+)/)[2] + "?title=0&amp;byline=0&amp;portrait=0";
                        settings.autoplay && (movie += "&autoplay=1;");
                        vimeo_width = l.width + "/embed/?moog_width=" + l.width;
                        toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, l.height).replace(/{path}/g, movie);
                        break;
                    case "quicktime":
                        l = f(movie_width, movie_height);
                        l.height += 15;
                        l.contentHeight += 15;
                        l.containerHeight += 15;
                        toInject = settings.quicktime_markup.replace(/{width}/g,
                            l.width).replace(/{height}/g, l.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                        break;
                    case "flash":
                        l = f(movie_width, movie_height);
                        flash_vars = pp_images[set_position];
                        flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length);
                        filename = pp_images[set_position];
                        filename = filename.substring(0, filename.indexOf("?"));
                        toInject = settings.flash_markup.replace(/{width}/g, l.width).replace(/{height}/g,
                            l.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                        break;
                    case "iframe":
                        l = f(movie_width, movie_height);
                        frame_url = pp_images[set_position];
                        frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1);
                        toInject = settings.iframe_markup.replace(/{width}/g, l.width).replace(/{height}/g, l.height).replace(/{path}/g, frame_url);
                        break;
                    case "ajax":
                        doresize = !1;
                        l = f(movie_width, movie_height);
                        skipInjection = doresize = !0;
                        b.get(pp_images[set_position], function(a) {
                            toInject = settings.inline_markup.replace(/{content}/g,
                                a);
                            $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject;
                            e()
                        });
                        break;
                    case "custom":
                        l = f(movie_width, movie_height);
                        toInject = settings.custom_markup;
                        break;
                    case "inline":
                        myClone = b(pp_images[set_position]).clone().append('<br clear="all" />').css({
                            width: settings.default_width
                        }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(b("body")).show(), doresize = !1, l = f(b(myClone).width(), b(myClone).height()), doresize = !0, b(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g,
                            b(pp_images[set_position]).html())
                }!imgPreloader && !skipInjection && ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, e())
            });
            return !1
        };
        b.prettyPhoto.changePage = function(a) {
            currentGalleryPage = 0;
            "previous" == a ? (set_position--, 0 > set_position && (set_position = b(pp_images).size() - 1)) : "next" == a ? (set_position++, set_position > b(pp_images).size() - 1 && (set_position = 0)) : set_position = a;
            rel_index = set_position;
            doresize || (doresize = !0);
            b(".pp_contract").removeClass("pp_contract").addClass("pp_expand");
            g(function() {
                b.prettyPhoto.open()
            })
        };
        b.prettyPhoto.changeGalleryPage = function(a) {
            "next" == a ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == a ? (currentGalleryPage--, 0 > currentGalleryPage && (currentGalleryPage = totalPage)) : currentGalleryPage = a;
            slide_speed = "next" == a || "previous" == a ? settings.animation_speed : 0;
            slide_to = currentGalleryPage * itemsPerPage * itemWidth;
            $pp_gallery.find("ul").animate({
                left: -slide_to
            }, slide_speed)
        };
        b.prettyPhoto.startSlideshow = function() {
            "undefined" == typeof x ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                b.prettyPhoto.stopSlideshow();
                return !1
            }), x = setInterval(b.prettyPhoto.startSlideshow, settings.slideshow)) : b.prettyPhoto.changePage("next")
        };
        b.prettyPhoto.stopSlideshow = function() {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                b.prettyPhoto.startSlideshow();
                return !1
            });
            clearInterval(x);
            x = void 0
        };
        b.prettyPhoto.close = function() {
            $pp_overlay.is(":animated") || (b.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), b("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed,
                function() {
                    b(this).remove()
                }), $pp_overlay.fadeOut(settings.animation_speed, function() {
                b.browser.msie && 6 == b.browser.version && b("select").css("visibility", "visible");
                settings.hideflash && b("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible");
                b(this).remove();
                b(window).unbind("scroll.prettyphoto");
                url = location.href;
                if (hashtag = url.indexOf("#!prettyPhoto") ? !0 : !1) location.hash = "!prettyPhoto";
                settings.callback();
                doresize = !0;
                C = !1;
                delete settings
            }))
        };
        !pp_alreadyInitialized && a() &&
            (pp_alreadyInitialized = !0, hashRel = hashIndex = a(), hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
                b("a[rel^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
            }, 50));
        return this.unbind("click.prettyphoto").bind("click.prettyphoto", b.prettyPhoto.initialize)
    }
})(jQuery);
var pp_alreadyInitialized = !1;
(function(b) {
    b.extend(b.fn, {
        validate: function(a) {
            if (this.length) {
                var c = b.data(this[0], "validator");
                if (c) return c;
                c = new b.validator(a, this[0]);
                b.data(this[0], "validator", c);
                c.settings.onsubmit && (this.find("input, button").filter(".cancel").click(function() {
                    c.cancelSubmit = !0
                }), c.settings.submitHandler && this.find("input, button").filter(":submit").click(function() {
                    c.submitButton = this
                }), this.submit(function(a) {
                    function e() {
                        if (c.settings.submitHandler) {
                            if (c.submitButton) var a = b("<input type='hidden'/>").attr("name",
                                c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm);
                            c.settings.submitHandler.call(c, c.currentForm);
                            c.submitButton && a.remove();
                            return !1
                        }
                        return !0
                    }
                    c.settings.debug && a.preventDefault();
                    if (c.cancelSubmit) return c.cancelSubmit = !1, e();
                    if (c.form()) return c.pendingRequest ? (c.formSubmitted = !0, !1) : e();
                    c.focusInvalid();
                    return !1
                }));
                return c
            }
            a && a.debug && window.console && console.warn("nothing selected, can't validate, returning nothing")
        },
        valid: function() {
            if (b(this[0]).is("form")) return this.validate().form();
            var a = !0,
                c = b(this[0].form).validate();
            this.each(function() {
                a &= c.element(this)
            });
            return a
        },
        removeAttrs: function(a) {
            var c = {},
                d = this;
            b.each(a.split(/\s/), function(a, b) {
                c[b] = d.attr(b);
                d.removeAttr(b)
            });
            return c
        },
        rules: function(a, c) {
            var d = this[0];
            if (a) {
                var e = b.data(d.form, "validator").settings,
                    g = e.rules,
                    f = b.validator.staticRules(d);
                switch (a) {
                    case "add":
                        b.extend(f, b.validator.normalizeRule(c));
                        g[d.name] = f;
                        c.messages && (e.messages[d.name] = b.extend(e.messages[d.name], c.messages));
                        break;
                    case "remove":
                        if (!c) return delete g[d.name],
                            f;
                        var h = {};
                        b.each(c.split(/\s/), function(a, b) {
                            h[b] = f[b];
                            delete f[b]
                        });
                        return h
                }
            }
            d = b.validator.normalizeRules(b.extend({}, b.validator.metadataRules(d), b.validator.classRules(d), b.validator.attributeRules(d), b.validator.staticRules(d)), d);
            d.required && (e = d.required, delete d.required, d = b.extend({
                required: e
            }, d));
            return d
        }
    });
    b.extend(b.expr[":"], {
        blank: function(a) {
            return !b.trim(a.value)
        },
        filled: function(a) {
            return !!b.trim(a.value)
        },
        unchecked: function(a) {
            return !a.checked
        }
    });
    b.validator = function(a, c) {
        this.settings =
            b.extend({}, b.validator.defaults, a);
        this.currentForm = c;
        this.init()
    };
    b.validator.format = function(a, c) {
        if (1 == arguments.length) return function() {
            var c = b.makeArray(arguments);
            c.unshift(a);
            return b.validator.format.apply(this, c)
        };
        2 < arguments.length && c.constructor != Array && (c = b.makeArray(arguments).slice(1));
        c.constructor != Array && (c = [c]);
        b.each(c, function(b, c) {
            a = a.replace(RegExp("\\{" + b + "\\}", "g"), c)
        });
        return a
    };
    b.extend(b.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: b([]),
            errorLabelContainer: b([]),
            onsubmit: !0,
            ignore: [],
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a;
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.errorsFor(a).hide())
            },
            onfocusout: function(a) {
                !this.checkable(a) && (a.name in this.submitted || !this.optional(a)) && this.element(a)
            },
            onkeyup: function(a) {
                (a.name in this.submitted ||
                    a == this.lastElement) && this.element(a)
            },
            onclick: function(a) {
                a.name in this.submitted && this.element(a)
            },
            highlight: function(a, c, d) {
                b(a).addClass(c).removeClass(d)
            },
            unhighlight: function(a, c, d) {
                b(a).removeClass(c).addClass(d)
            }
        },
        setDefaults: function(a) {
            b.extend(b.validator.defaults, a)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            dateDE: "Bitte geben Sie ein g\u221a\u00baltiges Datum ein.",
            number: "Please enter a valid number.",
            numberDE: "Bitte geben Sie eine Nummer ein.",
            digits: "Please enter only digits",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Please enter a value with a valid extension.",
            maxlength: b.validator.format("Please enter no more than {0} characters."),
            minlength: b.validator.format("Please enter at least {0} characters."),
            rangelength: b.validator.format("Please enter a value between {0} and {1} characters long."),
            range: b.validator.format("Please enter a value between {0} and {1}."),
            max: b.validator.format("Please enter a value less than or equal to {0}."),
            min: b.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function a(a) {
                    var c = b.data(this[0].form, "validator");
                    c.settings["on" + a.type] && c.settings["on" + a.type].call(c, this[0])
                }
                this.labelContainer = b(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer ||
                    b(this.currentForm);
                this.containers = b(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var c = this.groups = {};
                b.each(this.settings.groups, function(a, d) {
                    b.each(d.split(/\s/), function(b, d) {
                        c[d] = a
                    })
                });
                var d = this.settings.rules;
                b.each(d, function(a, c) {
                    d[a] = b.validator.normalizeRule(c)
                });
                b(this.currentForm).delegate("focusin focusout keyup", ":text, :password, :file, select, textarea",
                    a).delegate("click", ":radio, :checkbox", a);
                this.settings.invalidHandler && b(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                this.checkForm();
                b.extend(this.submitted, this.errorMap);
                this.invalid = b.extend({}, this.errorMap);
                this.valid() || b(this.currentForm).triggerHandler("invalid-form", [this]);
                this.showErrors();
                return this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function(a) {
                this.lastElement = a = this.clean(a);
                this.prepareElement(a);
                this.currentElements = b(a);
                var c = this.check(a);
                c ? delete this.invalid[a.name] : this.invalid[a.name] = !0;
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers));
                this.showErrors();
                return c
            },
            showErrors: function(a) {
                if (a) {
                    b.extend(this.errorMap, a);
                    this.errorList = [];
                    for (var c in a) this.errorList.push({
                        message: a[c],
                        element: this.findByName(c)[0]
                    });
                    this.successList = b.grep(this.successList, function(b) {
                        return !(b.name in a)
                    })
                }
                this.settings.showErrors ?
                    this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                b.fn.resetForm && b(this.currentForm).resetForm();
                this.submitted = {};
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b = 0,
                    d;
                for (d in a) b++;
                return b
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 == this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    b(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus()
                } catch (a) {}
            },
            findLastActive: function() {
                var a = this.lastActive;
                return a && 1 == b.grep(this.errorList, function(b) {
                    return b.element.name == a.name
                }).length && a
            },
            elements: function() {
                var a = this,
                    c = {};
                return b([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    !this.name &&
                        a.settings.debug && window.console && console.error("%o has no name assigned", this);
                    return this.name in c || !a.objectLength(b(this).rules()) ? !1 : c[this.name] = !0
                })
            },
            clean: function(a) {
                return b(a)[0]
            },
            errors: function() {
                return b(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = b([]);
                this.toHide = b([]);
                this.formSubmitted = !1;
                this.currentElements = b([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide =
                    this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset();
                this.toHide = this.errorsFor(a)
            },
            check: function(a) {
                a = this.clean(a);
                this.checkable(a) && (a = this.findByName(a.name)[0]);
                var c = b(a).rules(),
                    d = !1;
                for (method in c) {
                    var e = {
                        method: method,
                        parameters: c[method]
                    };
                    try {
                        var g = b.validator.methods[method].call(this, a.value.replace(/\r/g, ""), a, e.parameters);
                        if ("dependency-mismatch" == g) d = !0;
                        else {
                            d = !1;
                            if ("pending" == g) {
                                this.toHide = this.toHide.not(this.errorsFor(a));
                                return
                            }
                            if (!g) return this.formatAndAdd(a,
                                e), !1
                        }
                    } catch (f) {
                        throw this.settings.debug && window.console && console.log("exception occured when checking element " + a.id + ", check the '" + e.method + "' method"), f;
                    }
                }
                if (!d) return this.objectLength(c) && this.successList.push(a), !0
            },
            customMetaMessage: function(a, c) {
                if (b.metadata) {
                    var d = this.settings.meta ? b(a).metadata()[this.settings.meta] : b(a).metadata();
                    return d && d.messages && d.messages[c]
                }
            },
            customMessage: function(a, b) {
                var d = this.settings.messages[a];
                return d && (d.constructor == String ? d : d[b])
            },
            findDefined: function() {
                for (var a =
                        0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a]
            },
            defaultMessage: function(a, c) {
                return this.findDefined(this.customMessage(a.name, c), this.customMetaMessage(a, c), !this.settings.ignoreTitle && a.title || void 0, b.validator.messages[c], "<strong>Warning: No message defined for " + a.name + "</strong>")
            },
            formatAndAdd: function(a, b) {
                var d = this.defaultMessage(a, b.method);
                "function" == typeof d && (d = d.call(this, b.parameters, a));
                this.errorList.push({
                    message: d,
                    element: a
                });
                this.errorMap[a.name] = d;
                this.submitted[a.name] =
                    d
            },
            addWrapper: function(a) {
                this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper)));
                return a
            },
            defaultShowErrors: function() {
                for (var a = 0; this.errorList[a]; a++) {
                    var b = this.errorList[a];
                    this.settings.highlight && this.settings.highlight.call(this, b.element, this.settings.errorClass, this.settings.validClass);
                    this.showLabel(b.element, b.message)
                }
                this.errorList.length && (this.toShow = this.toShow.add(this.containers));
                if (this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight) {
                    a = 0;
                    for (b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass)
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return b(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(a, c) {
                var d = this.errorsFor(a);
                d.length ? (d.removeClass().addClass(this.settings.errorClass),
                    d.attr("generated") && d.html(c)) : (d = b("<" + this.settings.errorElement + "/>").attr({
                    "for": this.idOrName(a),
                    generated: !0
                }).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, b(a)) : d.insertAfter(a)));
                !c && this.settings.success && (d.text(""), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d));
                this.toShow = this.toShow.add(d)
            },
            errorsFor: function(a) {
                return this.errors().filter("[for='" + this.idOrName(a) + "']")
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(a) {
                var c = this.currentForm;
                return b(document.getElementsByName(a)).map(function(b, e) {
                    return e.form == c && e.name == a && e || null
                })
            },
            getLength: function(a, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return b("option:selected",
                            c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return a.length
            },
            depend: function(a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(a, c) {
                    return !!b(a, c.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(a) {
                return !b.validator.methods.required.call(this, b.trim(a.value), a) && "dependency-mismatch"
            },
            startRequest: function(a) {
                this.pending[a.name] || (this.pendingRequest++,
                    this.pending[a.name] = !0)
            },
            stopRequest: function(a, c) {
                this.pendingRequest--;
                0 > this.pendingRequest && (this.pendingRequest = 0);
                delete this.pending[a.name];
                c && 0 == this.pendingRequest && this.formSubmitted && this.form() ? b(this.currentForm).submit() : !c && 0 == this.pendingRequest && this.formSubmitted && b(this.currentForm).triggerHandler("invalid-form", [this])
            },
            previousValue: function(a) {
                return b.data(a, "previousValue") || b.data(a, "previousValue", previous = {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(a, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            dateDE: {
                dateDE: !0
            },
            number: {
                number: !0
            },
            numberDE: {
                numberDE: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(a, c) {
            a.constructor == String ? this.classRuleSettings[a] = c : b.extend(this.classRuleSettings, a)
        },
        classRules: function(a) {
            var c = {};
            (a = b(a).attr("class")) && b.each(a.split(" "), function() {
                this in b.validator.classRuleSettings && b.extend(c, b.validator.classRuleSettings[this])
            });
            return c
        },
        attributeRules: function(a) {
            var c = {};
            a = b(a);
            for (method in b.validator.methods) {
                var d = a.attr(method);
                d && (c[method] = d)
            }
            c.maxlength && /-1|2147483647|524288/.test(c.maxlength) && delete c.maxlength;
            return c
        },
        metadataRules: function(a) {
            if (!b.metadata) return {};
            var c = b.data(a.form, "validator").settings.meta;
            return c ? b(a).metadata()[c] : b(a).metadata()
        },
        staticRules: function(a) {
            var c = {},
                d = b.data(a.form, "validator");
            d.settings.rules && (c = b.validator.normalizeRule(d.settings.rules[a.name]) || {});
            return c
        },
        normalizeRules: function(a, c) {
            b.each(a, function(d, e) {
                if (!1 === e) delete a[d];
                else if (e.param || e.depends) {
                    var g = !0;
                    switch (typeof e.depends) {
                        case "string":
                            g = !!b(e.depends, c.form).length;
                            break;
                        case "function":
                            g = e.depends.call(c, c)
                    }
                    g ? a[d] = void 0 !== e.param ? e.param : !0 : delete a[d]
                }
            });
            b.each(a, function(d, e) {
                a[d] = b.isFunction(e) ? e(c) : e
            });
            b.each(["minlength", "maxlength", "min", "max"], function() {
                a[this] && (a[this] = Number(a[this]))
            });
            b.each(["rangelength", "range"], function() {
                a[this] && (a[this] = [Number(a[this][0]),
                    Number(a[this][1])
                ])
            });
            b.validator.autoCreateRanges && (a.min && a.max && (a.range = [a.min, a.max], delete a.min, delete a.max), a.minlength && a.maxlength && (a.rangelength = [a.minlength, a.maxlength], delete a.minlength, delete a.maxlength));
            a.messages && delete a.messages;
            return a
        },
        normalizeRule: function(a) {
            if ("string" == typeof a) {
                var c = {};
                b.each(a.split(/\s/), function() {
                    c[this] = !0
                });
                a = c
            }
            return a
        },
        addMethod: function(a, c, d) {
            b.validator.methods[a] = c;
            b.validator.messages[a] = d || b.validator.messages[a];
            3 > c.length && b.validator.addClassRules(a,
                b.validator.normalizeRule(a))
        },
        methods: {
            required: function(a, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a = b("option:selected", c), 0 < a.length && ("select-multiple" == c.type || 0 < (b.browser.msie && !a[0].attributes.value.specified ? a[0].text : a[0].value).length);
                    case "input":
                        if (this.checkable(c)) return 0 < this.getLength(a, c);
                    default:
                        return 0 < b.trim(a).length
                }
            },
            remote: function(a, c, d) {
                if (this.optional(c)) return "dependency-mismatch";
                var e = this.previousValue(c);
                this.settings.messages[c.name] || (this.settings.messages[c.name] = {});
                this.settings.messages[c.name].remote = "function" == typeof e.message ? e.message(a) : e.message;
                d = "string" == typeof d && {
                    url: d
                } || d;
                if (e.old !== a) {
                    e.old = a;
                    var g = this;
                    this.startRequest(c);
                    var f = {};
                    f[c.name] = a;
                    b.ajax(b.extend(!0, {
                        url: d,
                        mode: "abort",
                        port: "validate" + c.name,
                        dataType: "json",
                        data: f,
                        success: function(a) {
                            var b = !0 === a;
                            if (b) a = g.formSubmitted, g.prepareElement(c), g.formSubmitted = a, g.successList.push(c), g.showErrors();
                            else {
                                var d = {};
                                d[c.name] =
                                    e.message = a || g.defaultMessage(c, "remote");
                                g.showErrors(d)
                            }
                            e.valid = b;
                            g.stopRequest(c, b)
                        }
                    }, d));
                    return "pending"
                }
                return this.pending[c.name] ? "pending" : e.valid
            },
            minlength: function(a, c, d) {
                return this.optional(c) || this.getLength(b.trim(a), c) >= d
            },
            maxlength: function(a, c, d) {
                return this.optional(c) || this.getLength(b.trim(a), c) <= d
            },
            rangelength: function(a, c, d) {
                a = this.getLength(b.trim(a), c);
                return this.optional(c) || a >= d[0] && a <= d[1]
            },
            min: function(a, b, d) {
                return this.optional(b) || a >= d
            },
            max: function(a, b, d) {
                return this.optional(b) ||
                    a <= d
            },
            range: function(a, b, d) {
                return this.optional(b) || a >= d[0] && a <= d[1]
            },
            email: function(a, b) {
                return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a))
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)
            },
            dateDE: function(a, b) {
                return this.optional(b) || /^\d\d?\.\d\d?\.\d\d\d?\d?$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)
            },
            numberDE: function(a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            creditcard: function(a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9-]+/.test(a)) return !1;
                var d = 0,
                    e = 0,
                    g = !1;
                a = a.replace(/\D/g, "");
                for (n = a.length - 1; 0 <= n; n--) {
                    e = a.charAt(n);
                    e = parseInt(e, 10);
                    if (g && 9 < (e *= 2)) e -= 9;
                    d += e;
                    g = !g
                }
                return 0 == d % 10
            },
            accept: function(a, b, d) {
                d = "string" == typeof d ? d.replace(/,/g, "|") : "png|jpe?g|gif";
                return this.optional(b) || a.match(RegExp(".(" + d + ")$", "i"))
            },
            equalTo: function(a, c, d) {
                return a == b(d).val()
            }
        }
    });
    b.format = b.validator.format
})(jQuery);
(function(b) {
    var a = b.ajax,
        c = {};
    b.ajax = function(d) {
        d = b.extend(d, b.extend({}, b.ajaxSettings, d));
        var e = d.port;
        return "abort" == d.mode ? (c[e] && c[e].abort(), c[e] = a.apply(this, arguments)) : a.apply(this, arguments)
    }
})(jQuery);
(function(b) {
    b.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, c) {
        b.event.special[c] = {
            setup: function() {
                if (b.browser.msie) return !1;
                this.addEventListener(a, b.event.special[c].handler, !0)
            },
            teardown: function() {
                if (b.browser.msie) return !1;
                this.removeEventListener(a, b.event.special[c].handler, !0)
            },
            handler: function(a) {
                arguments[0] = b.event.fix(a);
                arguments[0].type = c;
                return b.event.handle.apply(this, arguments)
            }
        }
    });
    b.extend(b.fn, {
        delegate: function(a, c, d) {
            return this.bind(a, function(a) {
                var g = b(a.target);
                if (g.is(c)) return d.apply(g,
                    arguments)
            })
        },
        triggerEvent: function(a, c) {
            return this.triggerHandler(a, [b.event.fix({
                type: a,
                target: c
            })])
        }
    })
})(jQuery);
(function(b) {
    b.fn.quovolver = function(a, c) {
        a || (a = 500);
        c || (c = 6E3);
        var d = 4 * a;
        d > c && (c = d);
        var e = b(this),
            g = b(this).filter(":first"),
            f = b(this).filter(":last");
        b(this).wrapAll('<div id="quote_wrap"></div>');
        b(this).hide();
        b(g).show();
        b(this).parent().css({
            height: b(g).height()
        });
        setInterval(function() {
            if (b(f).is(":visible")) var c = b(g),
                d = b(c).height();
            else c = b(e).filter(":visible").next(), d = b(c).height();
            b(e).filter(":visible").fadeOut(a);
            setTimeout(function() {
                b(e).parent().animate({
                    height: d
                }, a)
            }, a);
            b(f).is(":visible") ?
                setTimeout(function() {
                    b(g).fadeIn(2 * a)
                }, 2 * a) : setTimeout(function() {
                    b(c).fadeIn(a)
                }, 2 * a)
        }, c)
    }
})(jQuery);
(function(b) {
    var a = function(a, d) {
        var e = b.extend({}, b.fn.nivoSlider.defaults, d),
            g = {
                currentSlide: 0,
                currentImage: "",
                totalSlides: 0,
                running: !1,
                paused: !1,
                stop: !1
            },
            f = b(a);
        f.data("nivo:vars", g);
        f.css("position", "relative");
        f.addClass("nivoSlider");
        var h = f.children();
        h.each(function() {
            var a = b(this),
                c = "";
            a.is("img") || (a.is("a") && (a.addClass("nivo-imageLink"), c = a), a = a.find("img:first"));
            var d = a.width();
            0 == d && (d = a.attr("width"));
            var e = a.height();
            0 == e && (e = a.attr("height"));
            d > f.width() && f.width(d);
            e > f.height() &&
                f.height(e);
            "" != c && c.css("display", "none");
            a.css("display", "none");
            g.totalSlides++
        });
        e.randomStart && (e.startSlide = Math.floor(Math.random() * g.totalSlides));
        0 < e.startSlide && (e.startSlide >= g.totalSlides && (e.startSlide = g.totalSlides - 1), g.currentSlide = e.startSlide);
        g.currentImage = b(h[g.currentSlide]).is("img") ? b(h[g.currentSlide]) : b(h[g.currentSlide]).find("img:first");
        b(h[g.currentSlide]).is("a") && b(h[g.currentSlide]).css("display", "block");
        f.css("background", 'url("' + g.currentImage.attr("src") + '") no-repeat');
        f.append(b('<div class="nivo-caption"><p></p></div>').css({
            display: "none",
            opacity: e.captionOpacity
        }));
        b(".nivo-caption", f).css("opacity", 0);
        var k = function(a) {
            var c = b(".nivo-caption", f);
            if ("" != g.currentImage.attr("title") && void 0 != g.currentImage.attr("title")) {
                var d = g.currentImage.attr("title");
                "#" == d.substr(0, 1) && (d = b(d).html());
                0 != c.css("opacity") ? c.find("p").stop().fadeTo(a.animSpeed, 0, function() {
                    b(this).html(d);
                    b(this).stop().fadeTo(a.animSpeed, 1)
                }) : c.find("p").html(d);
                c.stop().fadeTo(a.animSpeed,
                    a.captionOpacity)
            } else c.stop().fadeTo(a.animSpeed, 0)
        };
        k(e);
        var j = 0;
        !e.manualAdvance && 1 < h.length && (j = setInterval(function() {
            s(f, h, e, !1)
        }, e.pauseTime));
        e.directionNav && (f.append('<div class="nivo-directionNav"><a class="nivo-prevNav">' + e.prevText + '</a><a class="nivo-nextNav">' + e.nextText + "</a></div>"), e.directionNavHide && (b(".nivo-directionNav", f).hide(), f.hover(function() {
            b(".nivo-directionNav", f).show()
        }, function() {
            b(".nivo-directionNav", f).hide()
        })), b("a.nivo-prevNav", f).live("click", function() {
            if (g.running) return !1;
            clearInterval(j);
            j = "";
            g.currentSlide -= 2;
            s(f, h, e, "prev")
        }), b("a.nivo-nextNav", f).live("click", function() {
            if (g.running) return !1;
            clearInterval(j);
            j = "";
            s(f, h, e, "next")
        }));
        if (e.controlNav) {
            var m = b('<div class="nivo-controlNav"></div>');
            f.append(m);
            for (var p = 0; p < h.length; p++)
                if (e.controlNavThumbs) {
                    var q = h.eq(p);
                    q.is("img") || (q = q.find("img:first"));
                    e.controlNavThumbsFromRel ? m.append('<a class="nivo-control" rel="' + p + '"><img src="' + q.attr("rel") + '" alt="" /></a>') : m.append('<a class="nivo-control" rel="' +
                        p + '"><img src="' + q.attr("src").replace(e.controlNavThumbsSearch, e.controlNavThumbsReplace) + '" alt="" /></a>')
                } else {
                    var q = h.eq(p),
                        u = q.attr("alt");
                    m.append('<a class="nivo-control" data-post="' + q.attr("title") + '" data-sc="' + u + '" rel="' + p + '">' + (p + 1) + "</a>")
                }
            b(".nivo-controlNav a:eq(" + g.currentSlide + ")", f).addClass("active");
            b(".nivo-controlNav a", f).live("click", function() {
                if (g.running || b(this).hasClass("active")) return !1;
                clearInterval(j);
                j = "";
                f.css("background", 'url("' + g.currentImage.attr("src") + '") no-repeat');
                g.currentSlide = b(this).attr("rel") - 1;
                s(f, h, e, "control")
            })
        }
        e.keyboardNav && b(window).keypress(function(a) {
            if ("37" == a.keyCode) {
                if (g.running) return !1;
                clearInterval(j);
                j = "";
                g.currentSlide -= 2;
                s(f, h, e, "prev")
            }
            if ("39" == a.keyCode) {
                if (g.running) return !1;
                clearInterval(j);
                j = "";
                s(f, h, e, "next")
            }
        });
        e.pauseOnHover && f.hover(function() {
            g.paused = !0;
            clearInterval(j);
            j = ""
        }, function() {
            g.paused = !1;
            "" == j && !e.manualAdvance && (j = setInterval(function() {
                s(f, h, e, !1)
            }, e.pauseTime))
        });
        f.bind("nivo:animFinished", function() {
            g.running = !1;
            b(h).each(function() {
                b(this).is("a") && b(this).css("display", "none")
            });
            b(h[g.currentSlide]).is("a") && b(h[g.currentSlide]).css("display", "block");
            "" == j && !g.paused && !e.manualAdvance && (j = setInterval(function() {
                s(f, h, e, !1)
            }, e.pauseTime));
            e.afterChange.call(this)
        });
        var l = function(a, c, d) {
                for (var g = 0; g < c.slices; g++) {
                    var e = Math.round(a.width() / c.slices);
                    g == c.slices - 1 ? a.append(b('<div class="nivo-slice"></div>').css({
                        left: e * g + "px",
                        width: a.width() - e * g + "px",
                        height: "0px",
                        opacity: "0",
                        background: 'url("' + d.currentImage.attr("src") +
                            '") no-repeat -' + (e + g * e - e) + "px 0%"
                    })) : a.append(b('<div class="nivo-slice"></div>').css({
                        left: e * g + "px",
                        width: e + "px",
                        height: "0px",
                        opacity: "0",
                        background: 'url("' + d.currentImage.attr("src") + '") no-repeat -' + (e + g * e - e) + "px 0%"
                    }))
                }
            },
            C = function(a, c, d) {
                for (var g = Math.round(a.width() / c.boxCols), e = Math.round(a.height() / c.boxRows), f = 0; f < c.boxRows; f++)
                    for (var h = 0; h < c.boxCols; h++) h == c.boxCols - 1 ? a.append(b('<div class="nivo-box"></div>').css({
                        opacity: 0,
                        left: g * h + "px",
                        top: e * f + "px",
                        width: a.width() - g * h + "px",
                        height: e +
                            "px",
                        background: 'url("' + d.currentImage.attr("src") + '") no-repeat -' + (g + h * g - g) + "px -" + (e + f * e - e) + "px"
                    })) : a.append(b('<div class="nivo-box"></div>').css({
                        opacity: 0,
                        left: g * h + "px",
                        top: e * f + "px",
                        width: g + "px",
                        height: e + "px",
                        background: 'url("' + d.currentImage.attr("src") + '") no-repeat -' + (g + h * g - g) + "px -" + (e + f * e - e) + "px"
                    }))
            },
            s = function(a, c, d, g) {
                var e = a.data("nivo:vars");
                e && e.currentSlide == e.totalSlides - 1 && d.lastSlide.call(this);
                if ((!e || e.stop) && !g) return !1;
                d.beforeChange.call(this);
                g ? ("prev" == g && a.css("background",
                    'url("' + e.currentImage.attr("src") + '") no-repeat'), "next" == g && a.css("background", 'url("' + e.currentImage.attr("src") + '") no-repeat')) : a.css("background", 'url("' + e.currentImage.attr("src") + '") no-repeat');
                e.currentSlide++;
                e.currentSlide == e.totalSlides && (e.currentSlide = 0, d.slideshowEnd.call(this));
                0 > e.currentSlide && (e.currentSlide = e.totalSlides - 1);
                e.currentImage = b(c[e.currentSlide]).is("img") ? b(c[e.currentSlide]) : b(c[e.currentSlide]).find("img:first");
                d.controlNav && (b(".nivo-controlNav a", a).removeClass("active"),
                    b(".nivo-controlNav a:eq(" + e.currentSlide + ")", a).addClass("active"));
                k(d);
                b(".nivo-slice", a).remove();
                b(".nivo-box", a).remove();
                var f = d.effect;
                "random" == d.effect && (c = "sliceDownRight sliceDownLeft sliceUpRight sliceUpLeft sliceUpDown sliceUpDownLeft fold fade boxRandom boxRain boxRainReverse boxRainGrow boxRainGrowReverse".split(" "), f = c[Math.floor(Math.random() * (c.length + 1))], void 0 == f && (f = "fade")); - 1 != d.effect.indexOf(",") && (c = d.effect.split(","), f = c[Math.floor(Math.random() * c.length)], void 0 == f &&
                    (f = "fade"));
                e.currentImage.attr("data-transition") && (f = e.currentImage.attr("data-transition"));
                e.running = !0;
                if ("sliceDown" == f || "sliceDownRight" == f || "sliceDownLeft" == f) {
                    l(a, d, e);
                    var h = 0,
                        v = 0,
                        j = b(".nivo-slice", a);
                    "sliceDownLeft" == f && (j = b(".nivo-slice", a)._reverse());
                    j.each(function() {
                        var c = b(this);
                        c.css({
                            top: "0px"
                        });
                        v == d.slices - 1 ? setTimeout(function() {
                            c.animate({
                                height: "100%",
                                opacity: "1.0"
                            }, d.animSpeed, "", function() {
                                a.trigger("nivo:animFinished")
                            })
                        }, 100 + h) : setTimeout(function() {
                            c.animate({
                                height: "100%",
                                opacity: "1.0"
                            }, d.animSpeed)
                        }, 100 + h);
                        h += 50;
                        v++
                    })
                } else if ("sliceUp" == f || "sliceUpRight" == f || "sliceUpLeft" == f) l(a, d, e), v = h = 0, j = b(".nivo-slice", a), "sliceUpLeft" == f && (j = b(".nivo-slice", a)._reverse()), j.each(function() {
                    var c = b(this);
                    c.css({
                        bottom: "0px"
                    });
                    v == d.slices - 1 ? setTimeout(function() {
                        c.animate({
                            height: "100%",
                            opacity: "1.0"
                        }, d.animSpeed, "", function() {
                            a.trigger("nivo:animFinished")
                        })
                    }, 100 + h) : setTimeout(function() {
                        c.animate({
                            height: "100%",
                            opacity: "1.0"
                        }, d.animSpeed)
                    }, 100 + h);
                    h += 50;
                    v++
                });
                else if ("sliceUpDown" ==
                    f || "sliceUpDownRight" == f || "sliceUpDownLeft" == f) {
                    l(a, d, e);
                    var m = v = h = 0,
                        j = b(".nivo-slice", a);
                    "sliceUpDownLeft" == f && (j = b(".nivo-slice", a)._reverse());
                    j.each(function() {
                        var c = b(this);
                        0 == v ? (c.css("top", "0px"), v++) : (c.css("bottom", "0px"), v = 0);
                        m == d.slices - 1 ? setTimeout(function() {
                            c.animate({
                                height: "100%",
                                opacity: "1.0"
                            }, d.animSpeed, "", function() {
                                a.trigger("nivo:animFinished")
                            })
                        }, 100 + h) : setTimeout(function() {
                            c.animate({
                                height: "100%",
                                opacity: "1.0"
                            }, d.animSpeed)
                        }, 100 + h);
                        h += 50;
                        m++
                    })
                } else if ("fold" == f) l(a, d, e),
                    v = h = 0, b(".nivo-slice", a).each(function() {
                        var c = b(this),
                            e = c.width();
                        c.css({
                            top: "0px",
                            height: "100%",
                            width: "0px"
                        });
                        v == d.slices - 1 ? setTimeout(function() {
                            c.animate({
                                width: e,
                                opacity: "1.0"
                            }, d.animSpeed, "", function() {
                                a.trigger("nivo:animFinished")
                            })
                        }, 100 + h) : setTimeout(function() {
                            c.animate({
                                width: e,
                                opacity: "1.0"
                            }, d.animSpeed)
                        }, 100 + h);
                        h += 50;
                        v++
                    });
                else if ("fade" == f) {
                    l(a, d, e);
                    var p = b(".nivo-slice:first", a);
                    p.css({
                        height: "100%",
                        width: a.width() + "px"
                    });
                    p.animate({
                        opacity: "1.0"
                    }, 2 * d.animSpeed, "", function() {
                        a.trigger("nivo:animFinished")
                    })
                } else if ("slideInRight" ==
                    f) l(a, d, e), p = b(".nivo-slice:first", a), p.css({
                    height: "100%",
                    width: "0px",
                    opacity: "1"
                }), p.animate({
                    width: a.width() + "px"
                }, 2 * d.animSpeed, "", function() {
                    a.trigger("nivo:animFinished")
                });
                else if ("slideInLeft" == f) l(a, d, e), p = b(".nivo-slice:first", a), p.css({
                    height: "100%",
                    width: "0px",
                    opacity: "1",
                    left: "",
                    right: "0px"
                }), p.animate({
                    width: a.width() + "px"
                }, 2 * d.animSpeed, "", function() {
                    p.css({
                        left: "0px",
                        right: ""
                    });
                    a.trigger("nivo:animFinished")
                });
                else if ("boxRandom" == f) {
                    C(a, d, e);
                    var q = d.boxCols * d.boxRows,
                        h = v = 0,
                        e = b(".nivo-box",
                            a),
                        u;
                    for (c = e.length; c; j = parseInt(Math.random() * c), u = e[--c], e[c] = e[j], e[j] = u);
                    e.each(function() {
                        var c = b(this);
                        v == q - 1 ? setTimeout(function() {
                            c.animate({
                                opacity: "1"
                            }, d.animSpeed, "", function() {
                                a.trigger("nivo:animFinished")
                            })
                        }, 100 + h) : setTimeout(function() {
                            c.animate({
                                opacity: "1"
                            }, d.animSpeed)
                        }, 100 + h);
                        h += 20;
                        v++
                    })
                } else if ("boxRain" == f || "boxRainReverse" == f || "boxRainGrow" == f || "boxRainGrowReverse" == f) {
                    C(a, d, e);
                    var q = d.boxCols * d.boxRows,
                        s = h = v = 0,
                        w = 0,
                        E = [];
                    E[s] = [];
                    j = b(".nivo-box", a);
                    if ("boxRainReverse" == f || "boxRainGrowReverse" ==
                        f) j = b(".nivo-box", a)._reverse();
                    j.each(function() {
                        E[s][w] = b(this);
                        w++;
                        w == d.boxCols && (s++, w = 0, E[s] = [])
                    });
                    for (j = 0; j < 2 * d.boxCols; j++) {
                        u = j;
                        for (e = 0; e < d.boxRows; e++) 0 <= u && u < d.boxCols && (function(c, e, g, h, A) {
                            var x = b(E[c][e]),
                                j = x.width(),
                                k = x.height();
                            ("boxRainGrow" == f || "boxRainGrowReverse" == f) && x.width(0).height(0);
                            h == A - 1 ? setTimeout(function() {
                                x.animate({
                                    opacity: "1",
                                    width: j,
                                    height: k
                                }, d.animSpeed / 1.3, "", function() {
                                    a.trigger("nivo:animFinished")
                                })
                            }, 100 + g) : setTimeout(function() {
                                x.animate({
                                    opacity: "1",
                                    width: j,
                                    height: k
                                }, d.animSpeed / 1.3)
                            }, 100 + g)
                        }(e, u, h, v, q), v++), u--;
                        h += 100
                    }
                }
            },
            w = function(a) {
                this.console && "undefined" != typeof console.log && console.log(a)
            };
        this.stop = function() {
            b(a).data("nivo:vars").stop || (b(a).data("nivo:vars").stop = !0, w("Stop Slider"))
        };
        this.start = function() {
            b(a).data("nivo:vars").stop && (b(a).data("nivo:vars").stop = !1, w("Start Slider"))
        };
        e.afterLoad.call(this);
        return this
    };
    b.fn.nivoSlider = function(c) {
        return this.each(function() {
            var d = b(this);
            if (d.data("nivoslider")) return d.data("nivoslider");
            var e = new a(this, c);
            d.data("nivoslider", e)
        })
    };
    b.fn.nivoSlider.defaults = {
        effect: "random",
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 3E3,
        startSlide: 0,
        directionNav: !0,
        directionNavHide: !0,
        controlNav: !0,
        controlNavThumbs: !1,
        controlNavThumbsFromRel: !1,
        controlNavThumbsSearch: ".jpg",
        controlNavThumbsReplace: "_thumb.jpg",
        keyboardNav: !0,
        pauseOnHover: !0,
        manualAdvance: !1,
        captionOpacity: 0.8,
        prevText: "Prev",
        nextText: "Next",
        randomStart: !1,
        beforeChange: function() {},
        afterChange: function() {},
        slideshowEnd: function() {},
        lastSlide: function() {},
        afterLoad: function() {}
    };
    b.fn._reverse = [].reverse
})(jQuery);
(function(b, a, c) {
    var d = function(a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        },
        e = ["Moz", "Webkit", "Khtml", "O", "Ms"],
        g = function(a) {
            var b = document.documentElement.style,
                c;
            if ("string" == typeof b[a]) return a;
            a = d(a);
            for (var g = 0, f = e.length; g < f; g++)
                if (c = e[g] + a, "string" == typeof b[c]) return c
        },
        f = g("transform"),
        h = g("transitionProperty"),
        k = {
            csstransforms: function() {
                return !!f
            },
            csstransforms3d: function() {
                var b = !!g("perspective");
                if (b) {
                    var b = "@media (" + " -o- -moz- -ms- -webkit- -khtml- ".split(" ").join("transform-3d),(") +
                        "modernizr)",
                        c = a("<style>" + b + "{#modernizr{height:3px}}</style>").appendTo("head"),
                        d = a('<div id="modernizr" />').appendTo("html"),
                        b = 3 === d.height();
                    d.remove();
                    c.remove()
                }
                return b
            },
            csstransitions: function() {
                return !!h
            }
        };
    if (b.Modernizr)
        for (var j in k) Modernizr.hasOwnProperty(j) || Modernizr.addTest(j, k[j]);
    else {
        j = {
            _version: "1.6ish: miniModernizr for Isotope"
        };
        var m = " ",
            p, q;
        for (q in k) p = k[q](), j[q] = p, m += " " + (p ? "" : "no-") + q;
        a("html").addClass(m);
        b.Modernizr = j
    }
    if (Modernizr.csstransforms) {
        var u = Modernizr.csstransforms3d ? {
                translate: function(a) {
                    return "translate3d(" + a[0] + "px, " + a[1] + "px, 0) "
                },
                scale: function(a) {
                    return "scale3d(" + a + ", " + a + ", 1) "
                }
            } : {
                translate: function(a) {
                    return "translate(" + a[0] + "px, " + a[1] + "px) "
                },
                scale: function(a) {
                    return "scale(" + a + ") "
                }
            },
            l = function(b, c, d) {
                var e = a.data(b, "isoTransform") || {},
                    g = {},
                    h, j = {};
                g[c] = d;
                a.extend(e, g);
                for (h in e) c = e[h], j[h] = u[h](c);
                h = (j.translate || "") + (j.scale || "");
                a.data(b, "isoTransform", e);
                b.style[f] = h
            };
        a.cssNumber.scale = !0;
        a.cssHooks.scale = {
            set: function(a, b) {
                l(a, "scale", b)
            },
            get: function(b) {
                return (b =
                    a.data(b, "isoTransform")) && b.scale ? b.scale : 1
            }
        };
        a.fx.step.scale = function(b) {
            a.cssHooks.scale.set(b.elem, b.now + b.unit)
        };
        a.cssNumber.translate = !0;
        a.cssHooks.translate = {
            set: function(a, b) {
                l(a, "translate", b)
            },
            get: function(b) {
                return (b = a.data(b, "isoTransform")) && b.translate ? b.translate : [0, 0]
            }
        }
    }
    var C, s;
    Modernizr.csstransitions && (C = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd",
        transitionProperty: "transitionEnd"
    }[h], s = g("transitionDuration"));
    var w = a.event,
        B;
    w.special.smartresize = {
        setup: function() {
            a(this).bind("resize", w.special.smartresize.handler)
        },
        teardown: function() {
            a(this).unbind("resize", w.special.smartresize.handler)
        },
        handler: function(a, b) {
            var c = this,
                d = arguments;
            a.type = "smartresize";
            B && clearTimeout(B);
            B = setTimeout(function() {
                jQuery.event.handle.apply(c, d)
            }, "execAsap" === b ? 0 : 100)
        }
    };
    a.fn.smartresize = function(a) {
        return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
    };
    a.Isotope = function(b, c, d) {
        this.element = a(c);
        this._create(b);
        this._init(d)
    };
    var y = ["overflow", "position", "width", "height"];
    a.Isotope.settings = {
        resizable: !0,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: Modernizr.csstransforms && !a.browser.opera ? {
            opacity: 0,
            scale: 0.001
        } : {
            opacity: 0
        },
        visibleStyle: Modernizr.csstransforms && !a.browser.opera ? {
            opacity: 1,
            scale: 1
        } : {
            opacity: 1
        },
        animationEngine: a.browser.opera ? "jquery" : "best-available",
        animationOptions: {
            queue: !1,
            duration: 800
        },
        sortBy: "original-order",
        sortAscending: !0,
        resizesContainer: !0,
        transformsEnabled: !0,
        itemPositionDataEnabled: !1
    };
    a.Isotope.prototype = {
        _create: function(c) {
            this.options = a.extend({}, a.Isotope.settings, c);
            this.styleQueue = [];
            this.elemCount = 0;
            c = this.element[0].style;
            this.originalStyle = {};
            for (var d = 0, e = y.length; d < e; d++) {
                var g = y[d];
                this.originalStyle[g] = c[g] || ""
            }
            this.element.css({
                overflow: "hidden",
                position: "relative"
            });
            this._updateAnimationEngine();
            this._updateUsingTransforms();
            this.options.getSortData = a.extend(this.options.getSortData, {
                "original-order": function(a, b) {
                    b.elemCount++;
                    return b.elemCount
                },
                random: function() {
                    return Math.random()
                }
            });
            this.reloadItems();
            c = a(document.createElement("div")).prependTo(this.element);
            this.offset = c.position();
            c.remove();
            var f = this;
            setTimeout(function() {
                f.element.addClass(f.options.containerClass)
            }, 0);
            this.options.resizable && a(b).bind("smartresize.isotope", function() {
                f.resize()
            });
            this.element.delegate("." + this.options.hiddenClass, "click", function() {
                return !1
            })
        },
        _getAtoms: function(a) {
            var b = this.options.itemSelector;
            a = b ? a.filter(b).add(a.find(b)) : a;
            b = {
                position: "absolute"
            };
            this.usingTransforms && (b.left = 0, b.top = 0);
            a.css(b).addClass(this.options.itemClass);
            this.updateSortData(a, !0);
            return a
        },
        _init: function(a) {
            this.$filteredAtoms = this._filter(this.$allAtoms);
            this._sort();
            this.reLayout(a)
        },
        option: function(b) {
            if (a.isPlainObject(b)) {
                this.options = a.extend(!0, this.options, b);
                for (var c in b) b = "_update" + d(c), this[b] && this[b]()
            }
        },
        _updateAnimationEngine: function() {
            switch (this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,
                "")) {
                case "css":
                case "none":
                    this.isUsingJQueryAnimation = !1;
                    break;
                case "jquery":
                    this.isUsingJQueryAnimation = !0;
                    break;
                default:
                    this.isUsingJQueryAnimation = !Modernizr.csstransitions
            }
            this._updateUsingTransforms()
        },
        _updateTransformsEnabled: function() {
            this._updateUsingTransforms()
        },
        _updateUsingTransforms: function() {
            this.getPositionStyles = (this.usingTransforms = this.options.transformsEnabled && Modernizr.csstransforms && Modernizr.csstransitions && !this.isUsingJQueryAnimation) ? this._translate : this._positionAbs
        },
        _filter: function(a) {
            var b = "" === this.options.filter ? "*" : this.options.filter;
            if (!b) return a;
            var c = this.options.hiddenClass,
                d = "." + c,
                e = a.filter(d),
                g = e;
            "*" !== b && (g = e.filter(b), d = a.not(d).not(b).addClass(c), this.styleQueue.push({
                $el: d,
                style: this.options.hiddenStyle
            }));
            this.styleQueue.push({
                $el: g,
                style: this.options.visibleStyle
            });
            g.removeClass(c);
            return a.filter(b)
        },
        updateSortData: function(b, c) {
            var d = this,
                e = this.options.getSortData,
                g, f;
            b.each(function() {
                g = a(this);
                f = {};
                for (var b in e) !c && "original-order" ===
                    b ? f[b] = a.data(this, "isotope-sort-data")[b] : f[b] = e[b](g, d);
                a.data(this, "isotope-sort-data", f)
            })
        },
        _sort: function() {
            var a = this.options.sortBy,
                b = this._getSorter,
                c = this.options.sortAscending ? 1 : -1;
            this.$filteredAtoms.sort(function(d, e) {
                var g = b(d, a),
                    f = b(e, a);
                g === f && "original-order" !== a && (g = b(d, "original-order"), f = b(e, "original-order"));
                return (g > f ? 1 : g < f ? -1 : 0) * c
            })
        },
        _getSorter: function(b, c) {
            return a.data(b, "isotope-sort-data")[c]
        },
        _translate: function(a, b) {
            return {
                translate: [a, b]
            }
        },
        _positionAbs: function(a, b) {
            return {
                left: a,
                top: b
            }
        },
        _pushPosition: function(a, b, c) {
            b += this.offset.left;
            c += this.offset.top;
            var d = this.getPositionStyles(b, c);
            this.styleQueue.push({
                $el: a,
                style: d
            });
            this.options.itemPositionDataEnabled && a.data("isotope-item-position", {
                x: b,
                y: c
            })
        },
        layout: function(a, b) {
            var c = this.options.layoutMode;
            this["_" + c + "Layout"](a);
            this.options.resizesContainer && (c = this["_" + c + "GetContainerSize"](), this.styleQueue.push({
                $el: this.element,
                style: c
            }));
            this._processStyleQueue(a, b);
            this.isLaidOut = !0
        },
        _processStyleQueue: function(b, c) {
            var d =
                this.isLaidOut ? this.isUsingJQueryAnimation ? "animate" : "css" : "css",
                e = this.options.animationOptions,
                g, f, h, j;
            f = function(a, b) {
                b.$el[d](b.style, e)
            };
            if (this._isInserting && this.isUsingJQueryAnimation) f = function(a, b) {
                g = b.$el.hasClass("no-transition") ? "css" : d;
                b.$el[g](b.style, e)
            };
            else if (c) {
                var k = !1,
                    p = this;
                h = !0;
                j = function() {
                    k || (c.call(p.element, b), k = !0)
                };
                if (this.isUsingJQueryAnimation && "animate" === d) e.complete = j, h = !1;
                else if (Modernizr.csstransitions) {
                    for (var m = 0, q = this.styleQueue[0].$el; !q.length;) {
                        q = this.styleQueue[m++];
                        if (!q) return;
                        q = q.$el
                    }
                    0 < parseFloat(getComputedStyle(q[0])[s]) && (f = function(a, b) {
                        b.$el[d](b.style, e).one(C, j)
                    }, h = !1)
                }
            }
            a.each(this.styleQueue, f);
            h && j();
            this.styleQueue = []
        },
        resize: function() {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        },
        reLayout: function(a) {
            this["_" + this.options.layoutMode + "Reset"]();
            this.layout(this.$filteredAtoms, a)
        },
        addItems: function(a, b) {
            var c = this._getAtoms(a);
            this.$allAtoms = this.$allAtoms.add(c);
            b && b(c)
        },
        insert: function(a, b) {
            this.element.append(a);
            var c =
                this;
            this.addItems(a, function(a) {
                a = c._filter(a, !0);
                c._addHideAppended(a);
                c._sort();
                c.reLayout();
                c._revealAppended(a, b)
            })
        },
        appended: function(a, b) {
            var c = this;
            this.addItems(a, function(a) {
                c._addHideAppended(a);
                c.layout(a);
                c._revealAppended(a, b)
            })
        },
        _addHideAppended: function(a) {
            this.$filteredAtoms = this.$filteredAtoms.add(a);
            a.addClass("no-transition");
            this._isInserting = !0;
            this.styleQueue.push({
                $el: a,
                style: this.options.hiddenStyle
            })
        },
        _revealAppended: function(a, b) {
            var c = this;
            setTimeout(function() {
                a.removeClass("no-transition");
                c.styleQueue.push({
                    $el: a,
                    style: c.options.visibleStyle
                });
                c._isInserting = !1;
                c._processStyleQueue(a, b)
            }, 10)
        },
        reloadItems: function() {
            this.$allAtoms = this._getAtoms(this.element.children())
        },
        remove: function(a) {
            this.$allAtoms = this.$allAtoms.not(a);
            this.$filteredAtoms = this.$filteredAtoms.not(a);
            a.remove()
        },
        shuffle: function(a) {
            this.updateSortData(this.$allAtoms);
            this.options.sortBy = "random";
            this._sort();
            this.reLayout(a)
        },
        destroy: function() {
            var c = this.usingTransforms;
            this.$allAtoms.removeClass(this.options.hiddenClass +
                " " + this.options.itemClass).each(function() {
                this.style.position = "";
                this.style.top = "";
                this.style.left = "";
                this.style.opacity = "";
                c && (this.style[f] = "")
            });
            for (var d = this.element[0].style, e = 0, g = y.length; e < g; e++) {
                var h = y[e];
                d[h] = this.originalStyle[h]
            }
            this.element.unbind(".isotope").undelegate("." + this.options.hiddenClass, "click").removeClass(this.options.containerClass).removeData("isotope");
            a(b).unbind(".isotope")
        },
        _getSegments: function(a) {
            var b = this.options.layoutMode,
                c = a ? "rowHeight" : "columnWidth",
                e = a ?
                "height" : "width";
            a = a ? "rows" : "cols";
            var g = this.element[e](),
                e = this.options[b] && this.options[b][c] || this.$filteredAtoms["outer" + d(e)](!0) || g,
                g = Math.floor(g / e),
                g = Math.max(g, 1);
            this[b][a] = g;
            this[b][c] = e
        },
        _checkIfSegmentsChanged: function(a) {
            var b = this.options.layoutMode,
                c = a ? "rows" : "cols",
                d = this[b][c];
            this._getSegments(a);
            return this[b][c] !== d
        },
        _masonryReset: function() {
            this.masonry = {};
            this._getSegments();
            var a = this.masonry.cols;
            for (this.masonry.colYs = []; a--;) this.masonry.colYs.push(0)
        },
        _masonryLayout: function(b) {
            var c =
                this,
                d = c.masonry;
            b.each(function() {
                var b = a(this),
                    e = Math.ceil(b.outerWidth(!0) / d.columnWidth),
                    e = Math.min(e, d.cols);
                if (1 === e) c._masonryPlaceBrick(b, d.colYs);
                else {
                    var g = d.cols + 1 - e,
                        f = [],
                        h, j;
                    for (j = 0; j < g; j++) h = d.colYs.slice(j, j + e), f[j] = Math.max.apply(Math, h);
                    c._masonryPlaceBrick(b, f)
                }
            })
        },
        _masonryPlaceBrick: function(a, b) {
            for (var c = Math.min.apply(Math, b), d = 0, e = 0, g = b.length; e < g; e++)
                if (b[e] === c) {
                    d = e;
                    break
                }
            this._pushPosition(a, this.masonry.columnWidth * d, c);
            c += a.outerHeight(!0);
            g = this.masonry.cols + 1 - g;
            for (e =
                0; e < g; e++) this.masonry.colYs[d + e] = c
        },
        _masonryGetContainerSize: function() {
            return {
                height: Math.max.apply(Math, this.masonry.colYs)
            }
        },
        _masonryResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _fitRowsReset: function() {
            this.fitRows = {
                x: 0,
                y: 0,
                height: 0
            }
        },
        _fitRowsLayout: function(b) {
            var c = this,
                d = this.element.width(),
                e = this.fitRows;
            b.each(function() {
                var b = a(this),
                    g = b.outerWidth(!0),
                    f = b.outerHeight(!0);
                0 !== e.x && g + e.x > d && (e.x = 0, e.y = e.height);
                c._pushPosition(b, e.x, e.y);
                e.height = Math.max(e.y + f, e.height);
                e.x += g
            })
        },
        _fitRowsGetContainerSize: function() {
            return {
                height: this.fitRows.height
            }
        },
        _fitRowsResizeChanged: function() {
            return !0
        },
        _cellsByRowReset: function() {
            this.cellsByRow = {
                index: 0
            };
            this._getSegments();
            this._getSegments(!0)
        },
        _cellsByRowLayout: function(b) {
            var c = this,
                d = this.cellsByRow;
            b.each(function() {
                var b = a(this),
                    e = Math.floor(d.index / d.cols),
                    g = Math.round((d.index % d.cols + 0.5) * d.columnWidth - b.outerWidth(!0) / 2),
                    e = Math.round((e + 0.5) * d.rowHeight - b.outerHeight(!0) / 2);
                c._pushPosition(b, g, e);
                d.index++
            })
        },
        _cellsByRowGetContainerSize: function() {
            return {
                height: Math.ceil(this.$filteredAtoms.length /
                    this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
            }
        },
        _cellsByRowResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _straightDownReset: function() {
            this.straightDown = {
                y: 0
            }
        },
        _straightDownLayout: function(b) {
            var c = this;
            b.each(function() {
                var b = a(this);
                c._pushPosition(b, 0, c.straightDown.y);
                c.straightDown.y += b.outerHeight(!0)
            })
        },
        _straightDownGetContainerSize: function() {
            return {
                height: this.straightDown.y
            }
        },
        _straightDownResizeChanged: function() {
            return !0
        },
        _masonryHorizontalReset: function() {
            this.masonryHorizontal = {};
            this._getSegments(!0);
            var a = this.masonryHorizontal.rows;
            for (this.masonryHorizontal.rowXs = []; a--;) this.masonryHorizontal.rowXs.push(0)
        },
        _masonryHorizontalLayout: function(b) {
            var c = this,
                d = c.masonryHorizontal;
            b.each(function() {
                var b = a(this),
                    e = Math.ceil(b.outerHeight(!0) / d.rowHeight),
                    e = Math.min(e, d.rows);
                if (1 === e) c._masonryHorizontalPlaceBrick(b, d.rowXs);
                else {
                    var g = d.rows + 1 - e,
                        f = [],
                        h, j;
                    for (j = 0; j < g; j++) h = d.rowXs.slice(j, j + e), f[j] = Math.max.apply(Math, h);
                    c._masonryHorizontalPlaceBrick(b, f)
                }
            })
        },
        _masonryHorizontalPlaceBrick: function(a,
            b) {
            for (var c = Math.min.apply(Math, b), d = 0, e = 0, g = b.length; e < g; e++)
                if (b[e] === c) {
                    d = e;
                    break
                }
            this._pushPosition(a, c, this.masonryHorizontal.rowHeight * d);
            c += a.outerWidth(!0);
            g = this.masonryHorizontal.rows + 1 - g;
            for (e = 0; e < g; e++) this.masonryHorizontal.rowXs[d + e] = c
        },
        _masonryHorizontalGetContainerSize: function() {
            return {
                width: Math.max.apply(Math, this.masonryHorizontal.rowXs)
            }
        },
        _masonryHorizontalResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _fitColumnsReset: function() {
            this.fitColumns = {
                x: 0,
                y: 0,
                width: 0
            }
        },
        _fitColumnsLayout: function(b) {
            var c = this,
                d = this.element.height(),
                e = this.fitColumns;
            b.each(function() {
                var b = a(this),
                    g = b.outerWidth(!0),
                    f = b.outerHeight(!0);
                0 !== e.y && f + e.y > d && (e.x = e.width, e.y = 0);
                c._pushPosition(b, e.x, e.y);
                e.width = Math.max(e.x + g, e.width);
                e.y += f
            })
        },
        _fitColumnsGetContainerSize: function() {
            return {
                width: this.fitColumns.width
            }
        },
        _fitColumnsResizeChanged: function() {
            return !0
        },
        _cellsByColumnReset: function() {
            this.cellsByColumn = {
                index: 0
            };
            this._getSegments();
            this._getSegments(!0)
        },
        _cellsByColumnLayout: function(b) {
            var c =
                this,
                d = this.cellsByColumn;
            b.each(function() {
                var b = a(this),
                    e = d.index % d.rows,
                    g = Math.round((Math.floor(d.index / d.rows) + 0.5) * d.columnWidth - b.outerWidth(!0) / 2),
                    e = Math.round((e + 0.5) * d.rowHeight - b.outerHeight(!0) / 2);
                c._pushPosition(b, g, e);
                d.index++
            })
        },
        _cellsByColumnGetContainerSize: function() {
            return {
                width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
            }
        },
        _cellsByColumnResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _straightAcrossReset: function() {
            this.straightAcross = {
                x: 0
            }
        },
        _straightAcrossLayout: function(b) {
            var c = this;
            b.each(function() {
                var b = a(this);
                c._pushPosition(b, c.straightAcross.x, 0);
                c.straightAcross.x += b.outerWidth(!0)
            })
        },
        _straightAcrossGetContainerSize: function() {
            return {
                width: this.straightAcross.x
            }
        },
        _straightAcrossResizeChanged: function() {
            return !0
        }
    };
    a.fn.imagesLoaded = function(a) {
        function b(a) {
            0 >= --f && a.target.src !== h && (setTimeout(d), g.unbind("load error", b))
        }

        function d() {
            a.call(e, g)
        }
        var e = this,
            g = e.find("img").add(e.filter("img")),
            f = g.length,
            h = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        f || d();
        g.bind("load error", b).each(function() {
            if (this.complete || this.complete === c) {
                var a = this.src;
                this.src = h;
                this.src = a
            }
        });
        return e
    };
    a.fn.isotope = function(c, d) {
        if ("string" == typeof c) {
            var e = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var d = a.data(this, "isotope");
                d ? !a.isFunction(d[c]) || "_" === c.charAt(0) ? b.console && b.console.error("no such method '" + c + "' for isotope instance") : d[c].apply(d, e) : b.console && b.console.error("cannot call methods on isotope prior to initialization; attempted to call method '" +
                    c + "'")
            })
        } else this.each(function() {
            var b = a.data(this, "isotope");
            b ? (b.option(c), b._init(d)) : a.data(this, "isotope", new a.Isotope(c, this, d))
        });
        return this
    }
})(window, jQuery);
jQuery(function() {
    function b(a) {
        var b = parseInt(a, 10);
        a = Math.floor(b / 60, 10);
        b -= 60 * a;
        10 > a && (a = "0" + a);
        10 > b && (b = "0" + b);
        return a + ":" + b
    }
    var a = window,
        c = document,
        d = jQuery(a),
        e = "%",
        g = "APV1_transition",
        f = "APV1_playing",
        h = "APV1_mute",
        k = "APV1_error",
        j = 0,
        m = [];
    jQuery(c).ready(function() {
        jQuery("audio.AudioPlayerV1").AudioPlayerV1()
    });
    jQuery.fn.AudioPlayerV1 = function(p) {
        var q = jQuery.extend({}, jQuery.fn.AudioPlayerV1.defaultOptions, p);
        jQuery(this).each(function() {
            function p() {
                if (r.currentSrc) {
                    var b;
                    a: {
                        var d = O;
                        if (null !==
                            a.localStorage) {
                            try {
                                b = localStorage.getItem(d);
                                break a
                            } catch (e) {}
                            b = void 0
                        } else b: {
                            b = "vol_" + d + "=";
                            for (var d = c.cookie.split(";"), g = 0; g < d.length; g++) {
                                for (var f = d[g];
                                    " " == f.charAt(0);) f = f.substring(1, f.length);
                                if (0 == f.indexOf(b)) {
                                    b = f.substring(b.length, f.length);
                                    break b
                                }
                            }
                            b = null
                        }
                    }
                    null != b ? r.volume = b : b = r.volume;
                    S(b);
                    D.bind("timeupdate", Y).bind("progress", Z).bind("volumechange", $).bind("durationchange", aa).bind("playing", ba).bind("pause", ca).bind("ended", E).bind("canplay", s).bind("error", K);
                    M.click(w);
                    I.mousedown(z);
                    T.click(y);
                    m[O] = r
                } else K("Audio file not found.")
            }

            function l(a) {
                var b = D.attr(a);
                if (b) {
                    if ("false" == b || "off" == b || "no" == b) return !1;
                    if ("true" == b || "on" == b || "yes" == b) return !0
                }
                return q[a]
            }

            function C() {
                var a = 0;
                t.find("li:not(.APV1_container)").each(function() {
                    a += jQuery(this).width()
                });
                a > P ? jQuery(window).load(C) : da.width(P - a)
            }

            function s() {
                D.unbind("canplay", s);
                Q.mousedown(X);
                M.unbind("click", w).click(B)
            }

            function w() {
                r.preload = "auto";
                r.play();
                M.unbind("click", w)
            }

            function B() {
                r.paused || r.ended ? (r.play(), t.addClass(f)) :
                    (r.pause(), t.removeClass(f))
            }

            function y() {
                r.volume = r.volume ? 0 : 1
            }

            function z(a) {
                F = I.offset().left;
                r.volume = (a.pageX - F) / I.width();
                d.mousemove(x);
                d.mouseup(A);
                return !1
            }

            function A() {
                d.unbind("mousemove", x);
                d.unbind("mouseup", A)
            }

            function x(a) {
                a = (a.pageX - F) / I.width();
                1 < a ? a = 1 : 0 > a && (a = 0);
                r.volume = a
            }

            function X(a) {
                H = !0;
                F = Q.offset().left;
                a = (a.pageX - F) / U.width();
                r.pause();
                G = r.duration * a;
                N.removeClass(g).width(100 * a + e);
                J.text(b(G));
                d.mousemove(v);
                d.mouseup(R);
                return !1
            }

            function R() {
                H = !1;
                N.addClass(g);
                d.unbind("mousemove",
                    v);
                d.unbind("mouseup", R);
                r.currentTime = G;
                r.play()
            }

            function v(a) {
                a = (a.pageX - F) / U.width();
                1 < a ? a = 1 : 0 > a && (a = 0);
                N.width(100 * a + e);
                G = r.duration * a;
                J.text(b(G))
            }

            function Y() {
                if (!H) {
                    var a = r.currentTime / r.duration;
                    1 < a ? a = 1 : 0 > a && (a = 0);
                    N.width(100 * a + e);
                    J.text(b(r.currentTime))
                }
            }

            function Z() {
                r.buffered && r.duration && Q.width(100 * (r.buffered.end(0) / r.duration) + e)
            }

            function $() {
                var b = r.volume;
                S(b);
                var d = O;
                if (null !== a.localStorage) try {
                    localStorage.setItem(d, b)
                } catch (e) {} else {
                    var d = "vol_" + d,
                        g = new Date;
                    g.setTime(g.getTime() +
                        2592E6);
                    g = "; expires=" + g.toGMTString();
                    c.cookie = d + "=" + b + g + "; path=/"
                }
            }

            function S(a) {
                ea.width(100 * a + e);
                a ? t.removeClass(h) : t.addClass(h)
            }

            function aa() {
                V.text(b(r.duration))
            }

            function ba() {
                if (!H) {
                    var a = r;
                    jQuery(m).each(function() {
                        a != this && !this.paused && this.pause && this.pause()
                    });
                    t.addClass(f)
                }
            }

            function ca() {
                H || t.removeClass(f)
            }

            function E() {
                t.removeClass(f)
            }

            function K(a) {
                "string" != typeof a && (a = "An error occurred.");
                M.unbind();
                t.addClass(k);
                J.show().text(a)
            }
            var r = this,
                D = jQuery(r);
            if (D.is("audio")) {
                var O =
                    j++,
                    F = 0,
                    G = 0,
                    H = !1,
                    L = D.attr("width"),
                    W = D.attr("height"),
                    P = L ? L : q.width,
                    L = W ? W : q.height,
                    t = jQuery('<ul class="AudioPlayerV1 APV1_wrapper"><li><div class="APV1_play_button"></div></li><li><div class="APV1_seperator APV1_for_play"></div></li><li><div class="APV1_time_text">00:00</div></li><li><div class="APV1_seperator APV1_for_time"></div></li><li class="APV1_container"><div class="APV1_progress_bar_container"><div class="APV1_seek_bar"><div class="APV1_play_bar APV1_transition"></div></div></div></li><li><div class="APV1_seperator APV1_for_duration"></div></li><li><div class="APV1_duration_text">00:00</div></li><li><div class="APV1_seperator APV1_for_volume"></div></li><li><div class="APV1_volume_button"></div></li><li><div class="APV1_volume_bar_container"><div class="APV1_volume_bar"></div></div></li></ul>').mousedown(!1).width(P).height(L),
                    M = t.find(".APV1_play_button"),
                    J = t.find(".APV1_time_text"),
                    da = t.find(".APV1_container"),
                    U = t.find(".APV1_progress_bar_container"),
                    Q = t.find(".APV1_seek_bar"),
                    N = t.find(".APV1_play_bar"),
                    V = t.find(".APV1_duration_text"),
                    T = t.find(".APV1_volume_button"),
                    I = t.find(".APV1_volume_bar_container"),
                    ea = t.find(".APV1_volume_bar");
                l("data-time") || (J.hide(), t.find(".APV1_for_time").hide());
                l("data-duration") || (V.hide(), t.find(".APV1_for_duration").hide());
                l("data-volume") || (T.hide(), I.hide(), t.find(".APV1_for_volume").hide());
                D.after(t);
                D.removeAttr("controls").css({
                    height: "0 !important",
                    width: "0 !important"
                });
                C();
                r.canPlayType ? r.networkState && r.currentSrc ? p() : jQuery("source", D).get(0) ? D.bind("loadstart", p) : K("Audio file not found.") : K("Please upgrade your browser.")
            }
        });
        return this
    };
    jQuery.fn.AudioPlayerV1.defaultOptions = {
        width: 300,
        height: 29,
        "data-time": !0,
        "data-volume": !0,
        "data-duration": !0
    }
});
(function(b, a) {
    if (b.cleanData) {
        var c = b.cleanData;
        b.cleanData = function(a) {
            for (var d = 0, f; null != (f = a[d]); d++) try {
                b(f).triggerHandler("remove")
            } catch (h) {}
            c(a)
        }
    } else {
        var d = b.fn.remove;
        b.fn.remove = function(a, c) {
            return this.each(function() {
                c || (!a || b.filter(a, [this]).length) && b("*", this).add([this]).each(function() {
                    try {
                        b(this).triggerHandler("remove")
                    } catch (a) {}
                });
                return d.call(b(this), a, c)
            })
        }
    }
    b.widget = function(a, c, d) {
        var h = a.split(".")[0],
            k;
        a = a.split(".")[1];
        k = h + "-" + a;
        d || (d = c, c = b.Widget);
        b.expr[":"][k] =
            function(c) {
                return !!b.data(c, a)
            };
        b[h] = b[h] || {};
        b[h][a] = function(a, b) {
            arguments.length && this._createWidget(a, b)
        };
        c = new c;
        c.options = b.extend(!0, {}, c.options);
        b[h][a].prototype = b.extend(!0, c, {
            namespace: h,
            widgetName: a,
            widgetEventPrefix: b[h][a].prototype.widgetEventPrefix || a,
            widgetBaseClass: k
        }, d);
        b.widget.bridge(a, b[h][a])
    };
    b.widget.bridge = function(c, d) {
        b.fn[c] = function(f) {
            var h = "string" === typeof f,
                k = Array.prototype.slice.call(arguments, 1),
                j = this;
            f = !h && k.length ? b.extend.apply(null, [!0, f].concat(k)) : f;
            if (h && "_" === f.charAt(0)) return j;
            h ? this.each(function() {
                var d = b.data(this, c),
                    g = d && b.isFunction(d[f]) ? d[f].apply(d, k) : d;
                if (g !== d && g !== a) return j = g, !1
            }) : this.each(function() {
                var a = b.data(this, c);
                a ? a.option(f || {})._init() : b.data(this, c, new d(f, this))
            });
            return j
        }
    };
    b.Widget = function(a, b) {
        arguments.length && this._createWidget(a, b)
    };
    b.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function(a, c) {
            b.data(c, this.widgetName, this);
            this.element = b(c);
            this.options = b.extend(!0, {}, this.options, this._getCreateOptions(), a);
            var d = this;
            this.element.bind("remove." + this.widgetName, function() {
                d.destroy()
            });
            this._create();
            this._trigger("create");
            this._init()
        },
        _getCreateOptions: function() {
            return b.metadata && b.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName);
            this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass +
                "-disabled ui-state-disabled")
        },
        widget: function() {
            return this.element
        },
        option: function(c, d) {
            var f = c;
            if (0 === arguments.length) return b.extend({}, this.options);
            if ("string" === typeof c) {
                if (d === a) return this.options[c];
                f = {};
                f[c] = d
            }
            this._setOptions(f);
            return this
        },
        _setOptions: function(a) {
            var c = this;
            b.each(a, function(a, b) {
                c._setOption(a, b)
            });
            return this
        },
        _setOption: function(a, b) {
            this.options[a] = b;
            "disabled" === a && this.widget()[b ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled",
                b);
            return this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _trigger: function(a, c, d) {
            var h = this.options[a];
            c = b.Event(c);
            c.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase();
            d = d || {};
            if (c.originalEvent) {
                a = b.event.props.length;
                for (var k; a;) k = b.event.props[--a], c[k] = c.originalEvent[k]
            }
            this.element.trigger(c, d);
            return !(b.isFunction(h) && !1 === h.call(this.element[0], c, d) || c.isDefaultPrevented())
        }
    }
})(jQuery);
(function() {
    var b, a = window,
        c = function(a) {
            var b = this.redraw,
                c = this;
            this.redraw = function() {
                return b.apply(c, arguments)
            };
            this.container = a.container;
            this.canvas = a.canvas;
            this.data = a.data || [];
            this.outerColor = a.outerColor || "transparent";
            this.innerColor = a.innerColor || "#000000";
            this.interpolate = !0;
            !1 === a.interpolate && (this.interpolate = !1);
            if (null == this.canvas)
                if (this.container) this.canvas = this.createCanvas(this.container, a.width || this.container.clientWidth, a.height || this.container.clientHeight);
                else throw "Either canvas or container option must be passed";
            this.patchCanvasForIE(this.canvas);
            this.context = this.canvas.getContext("2d");
            this.width = parseInt(this.context.canvas.width, 10);
            this.height = parseInt(this.context.canvas.height, 10);
            a.data && this.update(a)
        };
    c.name = "Waveform";
    c.prototype.setData = function(a) {
        return this.data = a
    };
    c.prototype.setDataInterpolated = function(a) {
        return this.setData(this.interpolateArray(a, this.width))
    };
    c.prototype.setDataCropped = function(a) {
        return this.setData(this.expandArray(a, this.width))
    };
    c.prototype.update = function(a) {
        null !=
            a.interpolate && (this.interpolate = a.interpolate);
        !1 === this.interpolate ? this.setDataCropped(a.data) : this.setDataInterpolated(a.data);
        return this.redraw()
    };
    c.prototype.redraw = function() {
        var a, b, c, f, h, k, j, m;
        this.clear();
        this.context.fillStyle = this.innerColor;
        c = this.height / 2;
        b = 0;
        j = this.data;
        m = [];
        h = 0;
        for (k = j.length; h < k; h++) a = j[h], f = this.width / this.data.length, "function" === typeof this.innerColor && (this.context.fillStyle = this.innerColor(b / this.width, a)), this.context.clearRect(f * b, c - c * a, f, 2 * c * a), this.context.fillRect(f *
            b, c - c * a, f, 2 * c * a), m.push(b++);
        return m
    };
    c.prototype.clear = function() {
        this.context.fillStyle = this.outerColor;
        this.context.clearRect(0, 0, this.width, this.height);
        return this.context.fillRect(0, 0, this.width, this.height)
    };
    c.prototype.patchCanvasForIE = function(a) {
        var b;
        if ("undefined" !== typeof window.G_vmlCanvasManager) return a = window.G_vmlCanvasManager.initElement(a), b = a.getContext, a.getContext = function(c) {
            var f;
            f = b.apply(a, arguments);
            a.getContext = b;
            return f
        }
    };
    c.prototype.createCanvas = function(a, b, c) {
        var f;
        f = document.createElement("canvas");
        a.appendChild(f);
        f.width = b;
        f.height = c;
        return f
    };
    c.prototype.expandArray = function(a, b, c) {
        var f, h, k;
        null == c && (c = 0);
        h = [];
        if (a.length > b) h = a.slice(a.length - b, a.length);
        else {
            f = k = 0;
            for (b -= 1; 0 <= b ? k <= b : k >= b; f = 0 <= b ? ++k : --k) h[f] = a[f] || c
        }
        return h
    };
    c.prototype.linearInterpolate = function(a, b, c) {
        return a + (b - a) * c
    };
    c.prototype.interpolateArray = function(a, b) {
        var c, f, h, k, j, m;
        j = [];
        m = new Number((a.length - 1) / (b - 1));
        j[0] = a[0];
        for (k = 1; k < b - 1;) f = k * m, h = (new Number(Math.floor(f))).toFixed(),
            c = (new Number(Math.ceil(f))).toFixed(), f -= h, j[k] = this.linearInterpolate(a[h], a[c], f), k++;
        j[b - 1] = a[a.length - 1];
        return j
    };
    c.prototype.optionsForSyncedStream = function(a) {
        var b, c;
        null == a && (a = {});
        b = !1;
        c = this;
        return {
            whileplaying: this.redraw,
            whileloading: function() {
                var f;
                b || (f = this, c.innerColor = function(b) {
                    return b < f.position / f.durationEstimate ? a.playedColor || "rgba(232, 0, 66, 0.75)" : b < f.bytesLoaded / f.bytesTotal ? a.loadedColor || "rgba(0, 0, 0, 0.8)" : a.defaultColor || "rgba(0, 0, 0, 0.4)"
                }, b = !0);
                return this.redraw
            }
        }
    };
    c.prototype.dataFromSoundCloudTrack = function(a) {
        var c = this;
        return b.get("http://waveformjs.org/w", {
            url: a.waveform_url
        }, function(a) {
            return c.update({
                data: a
            })
        })
    };
    a.Waveform = c;
    b = function() {
        var a, b, c, f, h, k;
        h = function(a) {
            var b, c, d;
            d = document.createElement("script");
            b = !1;
            d.src = a;
            d.async = !0;
            d.onload = d.onreadystatechange = function() {
                if (!b && (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState))
                    if (b = !0, d.onload = d.onreadystatechange = null, d && d.parentNode) return d.parentNode.removeChild(d)
            };
            c || (c = document.getElementsByTagName("head")[0]);
            return c.appendChild(d)
        };
        c = function(a) {
            return encodeURIComponent(a)
        };
        f = function(j, m, p, q) {
            var u, l;
            l = -1 === (j || "").indexOf("?") ? "?" : "&";
            m = m || {};
            for (u in m) m.hasOwnProperty(u) && (l += c(u) + "=" + c(m[u]) + "&");
            f = "json" + ++b;
            k[f] = function(a) {
                p(a);
                try {
                    delete k[f]
                } catch (b) {}
                return k[f] = null
            };
            h(j + l + (q || a.callbackName || "callback") + "=" + f);
            return f
        };
        b = 0;
        k = this;
        a = {};
        return {
            get: f,
            init: function(a) {
                return a
            }
        }
    }()
}).call(this);
(function(b, a, c) {
    a.infinitescroll = function(b, c, d) {
        this.element = a(d);
        this._create(b, c) || (this.failed = !0)
    };
    a.infinitescroll.defaults = {
        loading: {
            finished: c,
            finishedMsg: "<em>\u0110\u00e3 t\u1edbi b\u00e0i cu\u1ed1i c\u00f9ng, \u0111\u00f3n xem th\u00eam v\u00e0o ng\u00e0y mai nh\u00e9!</em>",
            img: "data:image/gif;base64,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",
            msg: null,
            msgText: "<em>\u0110ang t\u1ea3i th\u00eam \u00e2m nh\u1ea1c</em>",
            selector: null,
            speed: "fast",
            start: c
        },
        state: {
            isDuringAjax: !1,
            isInvalidPage: !1,
            isDestroyed: !1,
            isDone: !1,
            isPaused: !1,
            currPage: 1
        },
        debug: !1,
        behavior: c,
        binder: a(b),
        nextSelector: "div.navigation a:first",
        navSelector: "div.navigation",
        contentSelector: null,
        extraScrollPx: 150,
        itemSelector: "div.post",
        animate: !1,
        pathParse: c,
        dataType: "html",
        appendCallback: !0,
        bufferPx: 40,
        errorCallback: function() {},
        infid: 0,
        pixelsFromNavToBottom: c,
        path: c,
        prefill: !1,
        maxPage: c
    };
    a.infinitescroll.prototype = {
        _binding: function(a) {
            var b = this,
                d = b.options;
            d.v = "2.0b2.120520";
            if (d.behavior && this["_binding_" + d.behavior] !== c) this["_binding_" + d.behavior].call(this);
            else {
                if ("bind" !== a && "unbind" !== a) return this._debug("Binding value  " + a + " not valid"), !1;
                if ("unbind" === a) this.options.binder.unbind("smartscroll.infscr." + b.options.infid);
                else this.options.binder[a]("smartscroll.infscr." + b.options.infid, function() {
                    b.scroll()
                });
                this._debug("Binding", a)
            }
        },
        _create: function(d, e) {
            var h =
                a.extend(!0, {}, a.infinitescroll.defaults, d);
            this.options = h;
            var k = a(b);
            if (!this._validate(d)) return !1;
            var j = a(h.nextSelector).attr("href");
            if (!j) return this._debug("Navigation selector not found"), !1;
            h.path = h.path || this._determinepath(j);
            h.contentSelector = h.contentSelector || this.element;
            h.loading.selector = h.loading.selector || h.contentSelector;
            h.loading.msg = h.loading.msg || a('<div id="infscr-loading"><img alt="Loading..." src="' + h.loading.img + '" /><div>' + h.loading.msgText + "</div></div>");
            (new Image).src =
                h.loading.img;
            h.pixelsFromNavToBottom === c && (h.pixelsFromNavToBottom = a(document).height() - a(h.navSelector).offset().top);
            var m = this;
            h.loading.start = h.loading.start || function() {
                a(h.navSelector).hide();
                h.loading.msg.appendTo(h.loading.selector).show(h.loading.speed, a.proxy(function() {
                    this.beginAjax(h)
                }, m))
            };
            h.loading.finished = h.loading.finished || function() {
                h.loading.msg.fadeOut(h.loading.speed)
            };
            h.callback = function(b, d, g) {
                h.behavior && b["_callback_" + h.behavior] !== c && b["_callback_" + h.behavior].call(a(h.contentSelector)[0],
                    d, g);
                e && e.call(a(h.contentSelector)[0], d, h, g);
                h.prefill && k.bind("resize.infinite-scroll", b._prefill)
            };
            d.debug && Function.prototype.bind && (("object" === typeof console || "function" === typeof console) && "object" === typeof console.log) && "log info warn error assert dir clear profile profileEnd".split(" ").forEach(function(a) {
                console[a] = this.call(console[a], console)
            }, Function.prototype.bind);
            this._setup();
            h.prefill && this._prefill();
            return !0
        },
        _prefill: function() {
            var c = this,
                d = a(document),
                e = a(b);
            this._prefill = function() {
                d.height() <=
                    e.height() && c.scroll();
                e.bind("resize.infinite-scroll", function() {
                    d.height() <= e.height() && (e.unbind("resize.infinite-scroll"), c.scroll())
                })
            };
            this._prefill()
        },
        _debug: function() {
            !0 === this.options.debug && ("undefined" !== typeof console && "function" === typeof console.log ? 1 === Array.prototype.slice.call(arguments).length && "string" === typeof Array.prototype.slice.call(arguments)[0] ? console.log(Array.prototype.slice.call(arguments).toString()) : console.log(Array.prototype.slice.call(arguments)) : !Function.prototype.bind &&
                ("undefined" !== typeof console && "object" === typeof console.log) && Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments)))
        },
        _determinepath: function(a) {
            var b = this.options;
            if (b.behavior && this["_determinepath_" + b.behavior] !== c) return this["_determinepath_" + b.behavior].call(this, a);
            if (b.pathParse) return this._debug("pathParse manual"), b.pathParse(a, this.options.state.currPage + 1);
            if (a.match(/^(.*?)\b2\b(.*?$)/)) a = a.match(/^(.*?)\b2\b(.*?$)/).slice(1);
            else if (a.match(/^(.*?)2(.*?$)/)) {
                if (a.match(/^(.*?page=)2(\/.*|$)/)) return a =
                    a.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                a = a.match(/^(.*?)2(.*?$)/).slice(1)
            } else {
                if (a.match(/^(.*?page=)1(\/.*|$)/)) return a = a.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");
                b.state.isInvalidPage = !0
            }
            this._debug("determinePath", a);
            return a
        },
        _error: function(a) {
            var b = this.options;
            b.behavior &&
                this["_error_" + b.behavior] !== c ? this["_error_" + b.behavior].call(this, a) : ("destroy" !== a && "end" !== a && (a = "unknown"), this._debug("Error", a), "end" === a && this._showdonemsg(), b.state.isDone = !0, b.state.currPage = 1, b.state.isPaused = !1, this._binding("unbind"))
        },
        _loadcallback: function(d, e, h) {
            var k = this.options,
                j = this.options.callback,
                m = k.state.isDone ? "done" : !k.appendCallback ? "no-append" : "append";
            if (k.behavior && this["_loadcallback_" + k.behavior] !== c) this["_loadcallback_" + k.behavior].call(this, d, e);
            else {
                switch (m) {
                    case "done":
                        return this._showdonemsg(), !1;
                    case "no-append":
                        "html" === k.dataType && (e = a("<div>" + e + "</div>").find(k.itemSelector));
                        break;
                    case "append":
                        m = d.children();
                        if (0 === m.length) return this._error("end");
                        for (e = document.createDocumentFragment(); d[0].firstChild;) e.appendChild(d[0].firstChild);
                        this._debug("contentSelector", a(k.contentSelector)[0]);
                        a(k.contentSelector)[0].appendChild(e);
                        e = m.get()
                }
                k.loading.finished.call(a(k.contentSelector)[0], k);
                k.animate && (d = a(b).scrollTop() + a("#infscr-loading").height() + k.extraScrollPx + "px", a("html,body").animate({
                        scrollTop: d
                    },
                    800,
                    function() {
                        k.state.isDuringAjax = !1
                    }));
                k.animate || (k.state.isDuringAjax = !1);
                j(this, e, h);
                k.prefill && this._prefill()
            }
        },
        _nearbottom: function() {
            var d = this.options,
                e = 0 + a(document).height() - d.binder.scrollTop() - a(b).height();
            if (d.behavior && this["_nearbottom_" + d.behavior] !== c) return this["_nearbottom_" + d.behavior].call(this);
            this._debug("math:", e, d.pixelsFromNavToBottom);
            return e - d.bufferPx < d.pixelsFromNavToBottom
        },
        _pausing: function(a) {
            var b = this.options;
            if (b.behavior && this["_pausing_" + b.behavior] !==
                c) this["_pausing_" + b.behavior].call(this, a);
            else {
                "pause" !== a && ("resume" !== a && null !== a) && this._debug("Invalid argument. Toggling pause value instead");
                switch (a && ("pause" === a || "resume" === a) ? a : "toggle") {
                    case "pause":
                        b.state.isPaused = !0;
                        break;
                    case "resume":
                        b.state.isPaused = !1;
                        break;
                    case "toggle":
                        b.state.isPaused = !b.state.isPaused
                }
                this._debug("Paused", b.state.isPaused);
                return !1
            }
        },
        _setup: function() {
            var a = this.options;
            if (a.behavior && this["_setup_" + a.behavior] !== c) this["_setup_" + a.behavior].call(this);
            else return this._binding("bind"), !1
        },
        _showdonemsg: function() {
            var b = this.options;
            b.behavior && this["_showdonemsg_" + b.behavior] !== c ? this["_showdonemsg_" + b.behavior].call(this) : (b.loading.msg.find("img").hide().parent().find("div").html(b.loading.finishedMsg).animate({
                opacity: 1
            }, 2E3, function() {
                a(this).parent().fadeOut(b.loading.speed)
            }), b.errorCallback.call(a(b.contentSelector)[0], "done"))
        },
        _validate: function(b) {
            for (var c in b)
                if (c.indexOf && -1 < c.indexOf("Selector") && 0 === a(b[c]).length) return this._debug("Your " + c + " found no elements."), !1;
            return !0
        },
        bind: function() {
            this._binding("bind")
        },
        destroy: function() {
            this.options.state.isDestroyed = !0;
            this.options.loading.finished();
            return this._error("destroy")
        },
        pause: function() {
            this._pausing("pause")
        },
        resume: function() {
            this._pausing("resume")
        },
        beginAjax: function(b) {
            var d = this,
                e = b.path,
                k, j, m;
            b.state.currPage++;
            if (b.maxPage != c && b.state.currPage > b.maxPage) this.destroy();
            else switch (k = a(b.contentSelector).is("table") ? a("<tbody/>") : a("<div/>"), j = "function" === typeof e ? e(b.state.currPage) : e.join(b.state.currPage),
                d._debug("heading into ajax", j), e = "html" === b.dataType || "json" === b.dataType ? b.dataType : "html+callback", b.appendCallback && "html" === b.dataType && (e += "+callback"), e) {
                case "html+callback":
                    d._debug("Using HTML via .load() method");
                    k.load(j + " " + b.itemSelector, c, function(a) {
                        d._loadcallback(k, a, j)
                    });
                    break;
                case "html":
                    d._debug("Using " + e.toUpperCase() + " via $.ajax() method");
                    a.ajax({
                        url: j,
                        dataType: b.dataType,
                        complete: function(a, b) {
                            (m = "undefined" !== typeof a.isResolved ? a.isResolved() : "success" === b || "notmodified" ===
                                b) ? d._loadcallback(k, a.responseText, j): d._error("end")
                        }
                    });
                    break;
                case "json":
                    d._debug("Using " + e.toUpperCase() + " via $.ajax() method"), a.ajax({
                        dataType: "json",
                        type: "GET",
                        url: j,
                        success: function(a, e, h) {
                            m = "undefined" !== typeof h.isResolved ? h.isResolved() : "success" === e || "notmodified" === e;
                            b.appendCallback ? b.template !== c ? (a = b.template(a), k.append(a), m ? d._loadcallback(k, a) : d._error("end")) : (d._debug("template must be defined."), d._error("end")) : m ? d._loadcallback(k, a, j) : d._error("end")
                        },
                        error: function() {
                            d._debug("JSON ajax request failed.");
                            d._error("end")
                        }
                    })
            }
        },
        retrieve: function(b) {
            b = b || null;
            var d = this.options;
            if (d.behavior && this["retrieve_" + d.behavior] !== c) this["retrieve_" + d.behavior].call(this, b);
            else {
                if (d.state.isDestroyed) return this._debug("Instance is destroyed"), !1;
                d.state.isDuringAjax = !0;
                d.loading.start.call(a(d.contentSelector)[0], d)
            }
        },
        scroll: function() {
            var a = this.options,
                b = a.state;
            a.behavior && this["scroll_" + a.behavior] !== c ? this["scroll_" + a.behavior].call(this) : !b.isDuringAjax && !b.isInvalidPage && !b.isDone && !b.isDestroyed && !b.isPaused &&
                this._nearbottom() && this.retrieve()
        },
        toggle: function() {
            this._pausing()
        },
        unbind: function() {
            this._binding("unbind")
        },
        update: function(b) {
            a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
        }
    };
    a.fn.infinitescroll = function(b, c) {
        switch (typeof b) {
            case "string":
                var d = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var c = a.data(this, "infinitescroll");
                    if (!c || !a.isFunction(c[b]) || "_" === b.charAt(0)) return !1;
                    c[b].apply(c, d)
                });
                break;
            case "object":
                this.each(function() {
                    var d = a.data(this, "infinitescroll");
                    d ? d.update(b) : (d = new a.infinitescroll(b, c, this), d.failed || a.data(this, "infinitescroll", d))
                })
        }
        return this
    };
    var d = a.event,
        e;
    d.special.smartscroll = {
        setup: function() {
            a(this).bind("scroll", d.special.smartscroll.handler)
        },
        teardown: function() {
            a(this).unbind("scroll", d.special.smartscroll.handler)
        },
        handler: function(b, c) {
            var d = this,
                k = arguments;
            b.type = "smartscroll";
            e && clearTimeout(e);
            e = setTimeout(function() {
                a(d).trigger("smartscroll", k)
            }, "execAsap" === c ? 0 : 100)
        }
    };
    a.fn.smartscroll = function(a) {
        return a ? this.bind("smartscroll",
            a) : this.trigger("smartscroll", ["execAsap"])
    }
})(window, jQuery);
(function(a) {
    a.fn.krioImageLoader = function(e) {
        var b = a.extend({}, a.fn.krioImageLoader.defaults, e),
            c = a(this).find("img").css({
                opacity: 0,
                visibility: "hidden"
            }).addClass("krioImageLoader"),
            d = c.size(),
            g = setInterval(function() {
                d ? c.filter(".krioImageLoader").each(function() {
                    this.complete && (a(this).css({
                        visibility: "visible"
                    }).animate({
                        opacity: 1
                    }, b.imageEnterDelay, f(this)), d--)
                }) : clearInterval(g)
            }, b.loadedCheckEvery),
            f = function(b) {
                a(b).removeClass("krioImageLoader")
            }
    };
    a.fn.krioImageLoader.defaults = {
        loadedCheckEvery: 350,
        imageEnterDelay: 3300
    }
})(jQuery);
var $j = jQuery.noConflict();