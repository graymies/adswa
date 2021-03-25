var mmThemeFixesBeforeInit = function() {
    mobileMenuMilliseconds = 500;
};
var mmThemeFixesBefore = function() {
    if (selectedMenu == "force-mega-menu" && tempMenuObject.ul.attr("id") == "MobileNav") {
        tempMenuObject.forceMenu = true;
        tempMenuObject.skipCheck = true;
        tempMenuObject.liClasses = "mobile-nav__item border-bottom";
        tempMenuObject.aClasses = "mobile-nav__link";
        tempMenuObject.liItems = [];
        tempMenuObject.ul.find(">li").each(function() {
            if (jQueryBuddha(this).find(".currency-selector").length == 0) tempMenuObject.liItems[tempMenuObject.liItems.length] = jQueryBuddha(this);
        });
    } else if (selectedMenu == "force-mega-menu" && tempMenuObject.ul.attr("id") == "SiteNav") {
        tempMenuObject.forceMenu = true;
        tempMenuObject.skipCheck = true;
        tempMenuObject.liClasses = "";
        tempMenuObject.aClasses = "site-nav__link site-nav__link--main";
        tempMenuObject.liItems = [];
        tempMenuObject.ul.find(">li").each(function() {
            tempMenuObject.liItems[tempMenuObject.liItems.length] = jQueryBuddha(this);
        });
    }
};
var mmThemeFixesAfter = function() {
    jQueryBuddha("head").append("<style id=\"themeScript\"> .mobile-nav-wrapper { overflow:visible; z-index:1; opacity: 1; } .site-header { z-index:3; } </style>");
};
var schemaDesignJSON = [{
        "action": "menu-select",
        "value": "force-mega-menu"
    }, {
        "action": "design",
        "setting": "vertical_font_size",
        "value": "13px"
    }, {
        "action": "design",
        "setting": "vertical_link_hover_color",
        "value": "#0da19a"
    }, {
        "action": "design",
        "setting": "vertical_link_color",
        "value": "#4e4e4e"
    }, {
        "action": "design",
        "setting": "vertical_text_color",
        "value": "#4e4e4e"
    }, {
        "action": "design",
        "setting": "text_color",
        "value": "#222222"
    }, {
        "action": "design",
        "setting": "font_size",
        "value": "13px"
    }, {
        "action": "design",
        "setting": "button_text_color",
        "value": "#ffffff"
    }, {
        "action": "design",
        "setting": "button_text_hover_color",
        "value": "#ffffff"
    }, {
        "action": "design",
        "setting": "background_color",
        "value": "#ffffff"
    }, {
        "action": "design",
        "setting": "background_hover_color",
        "value": "#f9f9f9"
    }, {
        "action": "design",
        "setting": "link_color",
        "value": "#4e4e4e"
    }, {
        "action": "design",
        "setting": "button_background_color",
        "value": "#0da19a"
    }, {
        "action": "design",
        "setting": "link_hover_color",
        "value": "#0da19a"
    }, {
        "action": "design",
        "setting": "button_background_hover_color",
        "value": "#0d8781"
    }, {
        "action": "design",
        "setting": "tree_sub_direction",
        "value": "set_tree_auto"
    }, {
        "action": "design",
        "setting": "font_family",
        "value": "Default"
    }],
    mmAppUrl = "megamenu.buddhaapps.com",
    mmDomChangeSkipUl = ",.slick-dots,.grid--view-items";

function mmAddStyle(e, t) {
    const n = document.createElement("style");
    if (n.textContent = e, void 0 !== t) {
        n.id = t;
        var a = document.getElementById(t);
        a && a.parentNode.removeChild(a)
    }
    document.head.appendChild(n)
}

function mmAddClasses(e, t) {
    try {
        if (t && "string" == typeof t) {
            var n = t.replace(/\s+/g, " ").split(" ");
            for (c = 0; c < n.length; c++) {
                var a = n[c].trim();
                "" != a && e.classList.add(a)
            }
        }
    } catch (e) {
        var a = new Error(e.message + " |" + t);
        mmErrorLog(a)
    }
}

function mmForEach(e, t, n, a) {
    for (var u = e.querySelectorAll(t), i = 0; i < u.length; i++) n(u[i]);
    if (void 0 !== a) return u
}

function mmChildren(e, t) {
    var n = e.children;
    if (n)
        for (var a = 0; a < n.length; a++) t(n[a])
}

function mmGetChildren(e, t, n) {
    var a, u = e.id,
        i = e.id = u || "mmGC_TID_1234",
        r = "#" + i + " > ",
        t = r + (t + "").replace(",", "," + r, "g");
    return a = 1 == n ? e.parentNode.querySelector(t) : e.parentNode.querySelectorAll(t), u || e.removeAttribute("id"), a
}

function mmParents(e, t) {
    for (var n = [], a = e; a.parentNode != document;) void 0 !== t && a.parentNode.tagName != t || n.push(a.parentNode), a = a.parentNode;
    return n
}

function mmIsVisible(e) {
    return !!e && (e.offsetHeight > 0 || e.offsetWidth > 0)
}

function mmRemove(e) {
    var t = document.querySelector(e);
    t && t.parentNode.removeChild(t)
}

function mmErrorLog(e) {
    if (mmNumErrors++ >= 2) throw e;
    var t = new XMLHttpRequest;
    t.open("POST", "https://notify.bugsnag.com/"), t.setRequestHeader("Content-Type", "application/json"), t.setRequestHeader("Bugsnag-Api-Key", "b1d0f3de79a0970e706491de768a5c2e"), t.setRequestHeader("Bugsnag-Payload-Version", "5"), t.onreadystatechange = function() {
        4 === this.readyState && (console.log("Status:", this.status), console.log("Headers:", this.getAllResponseHeaders()), console.log("Body:", this.responseText))
    };
    var n = {
        apiKey: "b1d0f3de79a0970e706491de768a5c2e",
        payloadVersion: "5",
        notifier: {
            name: "Bugsnag Ruby",
            version: "1.0.11",
            url: "https://github.com/bugsnag/bugsnag-ruby",
            dependencies: [{
                name: "Bugsnag Android",
                version: "2.1.10",
                url: "https://github.com/bugsnag/bugsnag-android"
            }]
        },
        events: [{
            exceptions: [{
                errorClass: "buddha-megamenu-V1.js",
                message: e.message,
                stacktrace: [{
                    file: window.location.hostname,
                    code: {
                        0: window.location.href,
                        1: e.stack
                    }
                }]
            }],
            unhandled: !1,
            device: {
                browserName: navigator.userAgent
            }
        }]
    };
    throw t.send(JSON.stringify(n)), e
}

function loadBuddhaMegaMenu() {
    readyStateCheckInterval = setInterval(initBuddhaMegaMenu, 100), setTimeout(function() {
        clearInterval(readyStateCheckInterval)
    }, 25e3), window.self !== window.top && (jQueryBuddha(window).on("load", initSchema), setTimeout(function() {
        initSchema()
    }, 5e3)), initBuddhaMegaMenu()
}

function initBuddhaMegaMenu() {
    try {
        if ("undefined" == typeof mmWireSlices || "undefined" == typeof bestSellersHTML || "undefined" == typeof newestProductsHTML || "undefined" == typeof linkLists || "undefined" == typeof prices || "undefined" == typeof collectionImages || "undefined" == typeof productImages) {
            if (mmInitVarsWaitTime++ >= 50) {
                clearInterval(readyStateCheckInterval);
                var e = !1;
                jQueryBuddha("script").each(function() {
                    -1 != jQueryBuddha(this).text().indexOf("mm-init.js?") && -1 == jQueryBuddha(this).text().indexOf("initSchema") && (e = !0)
                }), jQueryBuddha.each(schemaDesignJSON, function(e, t) {
                    "menu-select" == t.action && (selectedMenu = t.value)
                }), e && void 0 !== selectedMenu && mmErrorLog(new Error("init vars not defined" + (window.self !== window.top ? "preview" : "")))
            }
            return !1
        }
        if (Object.keys(mmWireSlices).length != mmWireSlices[0] + 1 || !(window.self !== window.top || window.self === window.top && jQueryBuddha.isReady)) return !1;
        mmWireSlices.shift(), newMenu = mmWireSlices.join(""), newMenu = newMenu.replace(new RegExp('<div id="bsWidget">', "g"), bestSellersHTML), newMenu = newMenu.replace(new RegExp('<div id="npWidget">', "g"), newestProductsHTML);
        for (var t = Object.keys(prices), n = 0; n < t.length; n++) newMenu = newMenu.replace(new RegExp('<div class="mega-menu-prices get-mega-menu-prices" data-id="' + t[n] + '"></div>', "g"), '<div class="mega-menu-prices">' + prices[t[n]] + "</div>");
        clearInterval(readyStateCheckInterval);
        var e = !1;
        if (jQueryBuddha("script").each(function() {
                -1 != jQueryBuddha(this).text().indexOf("mm-init.js?") && -1 == jQueryBuddha(this).text().indexOf("initSchema") && (e = !0)
            }), e) {
            var a = 0,
                u = setInterval(function() {
                    a++, "undefined" != typeof mutationExceptions && (mutationExceptions[mutationExceptions.length] = ".buddha-menu-item", clearInterval(u)), a > 10 && clearInterval(u)
                }, 1e3);
            "undefined" != typeof mmCustomerFixesBeforeInit && mmCustomerFixesBeforeInit(), "undefined" != typeof mmThemeFixesBeforeInit && 0 == disableThemeScript && mmThemeFixesBeforeInit(), null == document.querySelector(burgerIcon) && (burgerIcon = ".js-mobile-nav-toggle,.js-drawer-open-left,.js-drawer-open-button-left,#wsnavtoggle,.header__mobile-nav-toggle,#mobileNavBar .menu-toggle,.js-drawer-open-nav,.icon-menu", null == document.querySelector(burgerIcon) && (burgerIcon = "*")), initSchema(), window.self !== window.top && (jQueryBuddha("#admin_bar_iframe").remove(), jQueryBuddha("html").css("padding-top", "0px"), setInterval(function() {
                jQueryBuddha("*").each(function() {
                    "40px" == jQueryBuddha(this).css("top") && "fixed" == jQueryBuddha(this).css("position") && jQueryBuddha(this).css("top", "0")
                })
            }, 1e3));
            var i, r = jQueryBuddha(window).width();
            if (jQueryBuddha(window).resize(function() {
                    r != jQueryBuddha(window).width() && (jQueryBuddha(".mm-hovering").removeClass("mm-hovering"), jQueryBuddha(".submenu-opened").hide().removeClass("submenu-opened"), jQueryBuddha(".fa-minus-circle").removeClass("fa-minus-circle").addClass("fa-plus-circle"), clearTimeout(i), i = setTimeout(function() {
                        jQueryBuddha(document).trigger("mmWindowResize"), applyMegaMenu(), applyOnClick(), r = jQueryBuddha(window).width()
                    }, 300))
                }), !disableOnScroll) {
                setInterval(function() {
                    jQueryBuddha(".horizontal-mega-menu>.buddha-menu-item>.mm-submenu").each(function() {
                        if (parseInt(jQueryBuddha(this).css("top")) > 0) {
                            var e = jQueryBuddha(this).parent();
                            if (e.find(">ul.mm-submenu.simple").length > 0 || e.find(">ul.mm-submenu.tabbed").length > 0) {
                                var t = !1;
                                if (e.parent().parents().each(function() {
                                        "fixed" != jQueryBuddha(this).css("position") && "sticky" != jQueryBuddha(this).css("position") || (t = !0)
                                    }), e.find(">ul.mm-submenu.simple").length > 0) var n = e.find(">ul.mm-submenu.simple");
                                else var n = e.find(">ul.mm-submenu.tabbed");
                                if (t) {
                                    var a = parseInt(n.offset().top - jQueryBuddha(window).scrollTop()),
                                        u = jQueryBuddha(window).height() - a;
                                    n.height() > u && n.css({
                                        "max-height": u + "px",
                                        overflow: "scroll",
                                        "overflow-x": "hidden"
                                    })
                                } else if (jQueryBuddha(document).height() - 200 <= jQueryBuddha(window).height()) {
                                    var u = jQueryBuddha(document).height() - 250;
                                    n.css({
                                        "max-height": u + "px",
                                        overflow: "scroll",
                                        "overflow-x": "hidden"
                                    })
                                } else n.css({
                                    "max-height": "none",
                                    overflow: "hidden"
                                })
                            }
                        }
                    })
                }, 1e3)
            }
            var d = document.querySelectorAll("ul").length,
                m = document.querySelectorAll("nav").length;
            d -= document.querySelectorAll(".buddha-menu-item ul,.bcsell-list" + mmDomChangeSkipUl).length;
            var o = 1;
            storeUlCount == d && storeNavCount == m || (storeUlCount = d, storeNavCount = m, applyMegaMenu(), applyOnClick()), clearInterval(s);
            var s = setInterval(function() {
                try {
                    if (o++, o > loadMegaMenuTries && clearInterval(s), d = document.querySelectorAll("ul").length, m = document.querySelectorAll("nav").length, d -= document.querySelectorAll(".buddha-menu-item ul,.bcsell-list" + mmDomChangeSkipUl).length, storeUlCount != d || storeNavCount != m) {
                        if (storeUlCount = d, storeNavCount = m, void 0 !== customMenuUls) {
                            var e = 0,
                                t = customMenuUls.split(",");
                            if (jQueryBuddha.each(t, function(t, n) {
                                    jQueryBuddha(n).length > 0 && jQueryBuddha(n).is(".vertical-mega-menu,.horizontal-mega-menu") && e++
                                }), e == t.length) return void clearInterval(s)
                        }
                        applyMegaMenu(), applyOnClick()
                    }
                } catch (e) {
                    mmErrorLog(e)
                }
            }, 100)
        } else "undefined" != typeof hideOriginalMenuInterval ? (jQueryBuddha(".buddha-disabled-menu").removeClass("buddha-disabled-menu"), jQueryBuddha("link[href]").each(function() {
            -1 !== jQueryBuddha(this).attr("href").indexOf("buddha-megamenu.css") && jQueryBuddha(this).remove()
        }), clearInterval(hideOriginalMenuInterval)) : (jQueryBuddha(".buddha-disabled-menu").removeClass("buddha-disabled-menu"), jQueryBuddha("link[href]").each(function() {
            -1 !== jQueryBuddha(this).attr("href").indexOf("buddha-megamenu.css") && jQueryBuddha(this).remove()
        }));
        jQueryBuddha(window).on("beforeunload", function() {
            if (window.self !== window.top && (undo.length > 0 || changedMenu) && !saving) return "You might have unsaved changes."
        })
    } catch (e) {
        mmErrorLog(e)
    }
}

function mmEvtApplyOnClick(e) {
    var t = jQueryBuddha(e.target);
    clicked || touched || (clicked = !0, setTimeout(function() {
        changingPage || 0 != t.closest(".buddha-menu-item").length || 0 != t.closest(".horizontal-mega-menu").length && (0 == t.closest(".horizontal-mega-menu").length || jQueryBuddha(t.closest(".horizontal-mega-menu").find(".buddha-menu-item")).is(":visible")) || 0 != t.closest(".vertical-mega-menu").length && (0 == t.closest(".vertical-mega-menu").length || jQueryBuddha(t.closest(".vertical-mega-menu").find(".buddha-menu-item")).is(":visible")) || t.hasClass("stop-mega-menu-reinit") || (onClickOnlyReinit ? jQueryBuddha.each(ulPaths, function(e, t) {
            reinitMenus(t)
        }) : applyMegaMenu(), "undefined" != typeof DoublyGlobalCurrency && (jQueryBuddha(".currency-switcher-btn.selected").length > 0 ? DoublyGlobalCurrency.convertAll(jQueryBuddha(".currency-switcher-btn.selected").attr("doubly-currency")) : jQueryBuddha("[name=doubly-currencies]").length > 0 && DoublyGlobalCurrency.convertAll(jQueryBuddha("[name=doubly-currencies]").val())))
    }, mobileMenuMilliseconds)), setTimeout(function() {
        clicked = !1
    }, mobileMenuMilliseconds + 50)
}

function applyOnClick() {
    try {
        disableOnClick || void 0 == selectedMenu || "none" == selectedMenu || (clicked = !1, mmForEach(document, burgerIcon, function(e) {
            e.removeEventListener("click", mmEvtApplyOnClick), e.addEventListener("click", mmEvtApplyOnClick)
        }))
    } catch (e) {
        mmErrorLog(e)
    }
}

function initSchema() {
    if (0 == initializedSchema && (initializedSchema = !0, "string" == typeof schemaDesignJSON && (schemaDesignJSON = JSON.parse(schemaDesignJSON)), recreateDesign(), action = "", window.self !== window.top)) {
        var e = parent;
        void 0 === parent.postMessage && (e = top), e.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "*")
    }
}

function iframeReady() {
    previewPanelLoaded = !0, document.getElementById("mega-menu-iframe").contentWindow.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "https://buddhaapps.com")
}

function reloadPreview() {
    location.reload()
}

function initCountdown(e) {
    var t = e.attr("countdown");
    if (0 == e.find(".buddha-menu-item-countdown").length && void 0 != t && !isNaN(Date.parse(t))) {
        var n = (new Date(t).getTime() - (new Date).getTime()) / 1e3 % 86400;
        n < 0 && (n += 86400), e.find(">a>i.fa-angle-down:last").length > 0 ? e.find(">a>i.fa-angle-down:last").before(' <i class="buddha-menu-item-countdown"> <div></div> </i>') : e.find(">a").append(' <i class="buddha-menu-item-countdown"> <div></div> </i>'), e.find(".buddha-menu-item-countdown>div").FlipClock(n, {
            clockFace: "DailyCounter",
            countdown: !0
        })
    }
}

function shadeColor(e, t) {
    var n = parseInt(e.slice(1), 16),
        a = t < 0 ? 0 : 255,
        u = t < 0 ? -1 * t : t,
        i = n >> 16,
        r = n >> 8 & 255,
        d = 255 & n;
    return "#" + (16777216 + 65536 * (Math.round((a - i) * u) + i) + 256 * (Math.round((a - r) * u) + r) + (Math.round((a - d) * u) + d)).toString(16).slice(1)
}

function customPropSettingsStyles(e, t) {
    var n = "";
    switch (e) {
        case "countdown_background_color":
            t = shadeColor(t, -.5), n += ".flip-clock-wrapper ul.play li.flip-clock-before .up .shadow {background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, " + t + " 100%) !important;background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0.1)), color-stop(100%, " + t + ")) !important;background: linear, top, rgba(0, 0, 0, 0.1) 0%, " + t + " 100% !important;background: -o-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, " + t + " 100%) !important;background: -ms-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, " + t + " 100%) !important;background: linear, to bottom, rgba(0, 0, 0, 0.1) 0%, " + t + " 100% !important;}", n += ".flip-clock-wrapper ul.play li.flip-clock-active .up .shadow {background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%," + t + " 100%) !important;background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0.1)), color-stop(100%, " + t + ")) !important;background: linear, top, rgba(0, 0, 0, 0.1) 0%, " + t + " 100% !important;background: -o-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, " + t + " 100%) !important;background: -ms-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, " + t + " 100%) !important;background: linear, to bottom, rgba(0, 0, 0, 0.1) 0%, " + t + " 100% !important;}", n += ".flip-clock-wrapper ul.play li.flip-clock-before .down .shadow {background: -moz-linear-gradient(top, " + t + " 0%, rgba(0, 0, 0, 0.1) 100%) !important;background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, " + t + "), color-stop(100%, rgba(0, 0, 0, 0.1))) !important;background: linear, top, " + t + " 0%, rgba(0, 0, 0, 0.1) 100% !important;background: -o-linear-gradient(top, " + t + " 0%, rgba(0, 0, 0, 0.1) 100%) !important;background: -ms-linear-gradient(top, " + t + " 0%, rgba(0, 0, 0, 0.1) 100%) !important;background: linear, to bottom, " + t + " 0%, rgba(0, 0, 0, 0.1) 100% !important;}", n += ".flip-clock-wrapper ul.play li.flip-clock-active .down .shadow {background: -moz-linear-gradient(top, " + t + " 0%, rgba(0, 0, 0, 0.1) 100%) !important;background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, " + t + "), color-stop(100%, rgba(0, 0, 0, 0.1))) !important;background: linear, top, " + t + " 0%, rgba(0, 0, 0, 0.1) 100% !important;background: -o-linear-gradient(top, " + t + " 0%, rgba(0, 0, 0, 0.1) 100%) !important;background: -ms-linear-gradient(top, " + t + " 0%, rgba(0, 0, 0, 0.1) 100%) !important;background: linear, to bottom, " + t + " 0%, rgba(0, 0, 0, 0.1) 100% !important;}"
    }
    return n
}

function applyMegaMenu(e) {
    try {
        if ("undefined" != typeof mutationExceptions && (mutationExceptions[mutationExceptions.length] = "ul"), "undefined" != typeof hideOriginalMenuInterval && clearInterval(hideOriginalMenuInterval), void 0 != e) {
            var t = [];
            selectedMenu = e, jQueryBuddha.each(schemaDesignJSON, function(e, n) {
                "menu-select" != n.action && t.push(n)
            }), schemaDesignJSON = t, changedMenu = !0
        } else jQueryBuddha.each(schemaDesignJSON, function(e, t) {
            "menu-select" == t.action && (selectedMenu = t.value)
        });
        0 == mmApplyOnce && (mmForEach(document, ".vertical-mega-menu", function(e) {
            e.classList.remove("vertical-mega-menu")
        }), mmForEach(document, ".horizontal-mega-menu", function(e) {
            e.classList.remove("horizontal-mega-menu")
        }), mmForEach(document, ".buddha-disabled", function(e) {
            e.classList.remove("buddha-disabled")
        }), mmForEach(document, ".buddha-menu-item,#themeScript", function(e) {
            e.parentNode.removeChild(e)
        }));
        var n = [];
        if (jQueryBuddha.each(linkLists, function(e, t) {
                if (selectedMenu == e) return n = t.items, !1
            }), window.self !== window.top && console.log(n), 0 == activateMegaMenu && (selectedMenu = "none"), void 0 != selectedMenu && "none" != selectedMenu && (n.length > 0 || void 0 != customMenuUls)) {
            var a = void 0 != customMenuUls ? customMenuUls : "ul,nav";
            mmForEach(document, a, function(e) {
                tempMenuObject = {}, tempMenuObject.u = e, tempMenuObject.ul = jQueryBuddha(e), tempMenuObject.forceMenu = !1, tempMenuObject.skipCheck = !1, tempMenuObject.elementFits = 0;
                var t = [];
                if (1 == mmApplyOnce && (e.classList.contains("vertical-mega-menu") || e.classList.contains("horizontal-mega-menu"))) return !0;
                if (("undefined" == typeof mmThemeFixesBefore || 0 != disableThemeScript || -1 != mmThemeFixesBefore.call(e)) && (tempMenuObject.skipCheck || mmChildren(e, function(e) {
                        if ("LI" == e.nodeName) {
                            var t = null,
                                a = e.querySelector("a");
                            if (a && (t = a.getAttribute("href")), null == t || null != t && ("#" == t.substr(0, 1) || "" == t)) {
                                var u = e.querySelector(document.documentMode ? "* + a" : "a:nth-child(2)");
                                u && (a = u, t = u.getAttribute("href"))
                            }
                            if (null == t || null != t && ("#" == t.substr(0, 1) || "" == t)) {
                                var u = e.querySelector("a>a");
                                u && (t = u.getAttribute("href"), a = u)
                            }
                            void 0 != n[tempMenuObject.elementFits] && t == n[tempMenuObject.elementFits] ? (void 0 == tempMenuObject.liClasses && (tempMenuObject.liClasses = ""), tempMenuObject.liClasses = concatClasses(e.getAttribute("class"), tempMenuObject.liClasses), void 0 == tempMenuObject.aClasses && (tempMenuObject.aClasses = ""), a && (tempMenuObject.aClasses = concatClasses(a.getAttribute("class"), tempMenuObject.aClasses)), void 0 == tempMenuObject.liItems && (tempMenuObject.liItems = []), -1 == jQueryBuddha.inArray(e, tempMenuObject.liItems) && (tempMenuObject.liItems[tempMenuObject.liItems.length] = e), e.classList.add("buddha-transparent"), tempMenuObject.elementFits++) : tempMenuObject.elementFits > 0 && tempMenuObject.elementFits != n.length && (tempMenuObject.elementFits = 0, tempMenuObject.liItems = [], mmForEach(document, ".buddha-transparent", function(e) {
                                e.classList.remove("buddha-transparent")
                            }), t == n[0] && (tempMenuObject.elementFits = 1, tempMenuObject.liItems[tempMenuObject.liItems.length] = e, e.classList.add("buddha-transparent")))
                        }
                    }), "undefined" == typeof mmCustomerFixesBefore || -1 != mmCustomerFixesBefore.call(e)))
                    if (tempMenuObject.elementFits > 0 && tempMenuObject.elementFits == n.length || tempMenuObject.forceMenu) {
                        for (var a = getSpecificClasses(tempMenuObject.liClasses), u = getSpecificClasses(tempMenuObject.aClasses), i = 0; i < tempMenuObject.liItems.length; i++) {
                            var r;
                            void 0 !== tempMenuObject.liItems[i] && (r = "function" == typeof tempMenuObject.liItems[i].get ? tempMenuObject.liItems[i].get(0) : tempMenuObject.liItems[i]) && void 0 !== r && (r.classList.remove("buddha-transparent"), r.classList.add("buddha-disabled"))
                        }
                        if (newMenu) {
                            e.insertAdjacentHTML("afterbegin", newMenu);
                            var d = mmForEach(e, ".buddha-menu-item>.mm-submenu", function(e) {
                                e.setAttribute("style", "display: none !important;")
                            }, !0);
                            if (t = mmForEach(e, ".buddha-menu-item", function(e) {
                                    mmAddClasses(e, a.common), mmChildren(e, function(e) {
                                        "A" == e.nodeName && mmAddClasses(e, u.common)
                                    })
                                }, !0), mmForEach(e, ".buddha-menu-item[countdown]", function(e) {
                                    initCountdown(jQueryBuddha(e))
                                }), mmForEach(e, ".get-collection-image", function(e) {
                                    var t = e.getAttribute("data-id");
                                    void 0 != collectionImages[t] && -1 == collectionImages[t].indexOf("no-image") && e.setAttribute("data-src", collectionImages[t])
                                }), mmForEach(e, ".get-product-image", function(e) {
                                    var t = e.getAttribute("data-id");
                                    void 0 != productImages[t] && -1 == productImages[t].indexOf("no-image") && e.setAttribute("data-src", productImages[t])
                                }), mmForEach(e, "img[data-src]", function(e) {
                                    e.classList.add("mmLazyload")
                                }), d)
                                for (var i = 0; i < d.length; i++) d[i].setAttribute("style", "")
                        } else console.log("Megamenu ERROR - wireframe missing.");
                        if (a.first || u.first || a.last || u.last) {
                            var m = e.querySelectorAll(".buddha-menu-item");
                            if (m.length) {
                                mmAddClasses(m[0], a.first), mmAddClasses(m[m.length - 1], a.last);
                                var o = m[0].querySelector("a");
                                o && mmAddClasses(o, u.first);
                                var o = m[m.length - 1].querySelector("a");
                                o && mmAddClasses(o, u.last)
                            }
                        }
                        if (a.active || u.active)
                            for (var i = 0; i < t.length; i++) {
                                var o = t[i].querySelector("a");
                                o && o.getAttribute("data-href") == window.location.pathname && (mmAddClasses(o, u.active), mmAddClasses(t[i], a.active))
                            }
                        if ("undefined" != typeof mmThemeFixesAfter && 0 == disableThemeScript && -1 == mmThemeFixesAfter.call(e)) return;
                        if ("undefined" != typeof mmCustomerFixesAfter && -1 == mmCustomerFixesAfter.call(e)) return;
                        void 0 !== burgerIcon && "*" != burgerIcon || mmForEach(document, 'input[type="search"],input[type="text"]', function(e) {
                            e.classList.add("stop-mega-menu-reinit")
                        });
                        var s = document.querySelector(".dl-menu");
                        s && setTimeout(function() {
                            document.addEventListener("toggleSubmenu", function() {
                                setTimeout(function() {
                                    s.classList.add("dl-menuopen")
                                }, 1)
                            })
                        }, 100), "undefined" != typeof timber && void 0 !== timber.alignMenu && (timber.alignMenu = function() {});
                        var l = getUlPath(e),
                            c = !1;
                        if (-1 == ulPaths.indexOf(l)) {
                            for (var i = 0; i < ulPaths.length; i++) - 1 !== l.indexOf(ulPaths[i]) && (c = !0);
                            c || (ulPaths[ulPaths.length] = l)
                        }
                        tempMenuObject = {}
                    } else mmForEach(document, ".buddha-transparent", function(e) {
                        e.classList.remove("buddha-transparent")
                    })
            }), mmForEach(document, ".buddha-disabled-menu", function(e) {
                e.classList.remove("buddha-disabled-menu")
            });
            for (var u = 0; u < ulPaths.length; u++) reinitMenus(ulPaths[u]);
            addTouch()
        }
        if (window.self !== window.top) {
            var i = parent;
            void 0 === parent.postMessage && (i = top), i.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "*")
        } else previewPanelLoaded && document.getElementById("mega-menu-iframe").contentWindow.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "https://buddhaapps.com");
        setTimeout(function() {
            "undefined" != typeof mutationExceptions && mutationExceptions.pop()
        }, 100)
    } catch (e) {
        mmErrorLog(e)
    }
}

function mmEvtEnterMmi(e) {
    try {
        var t = e.target;
        setSubmenuBoundries(jQueryBuddha(t)), setContactSubmenuBoundries(jQueryBuddha(t));
        var n = t.querySelector(".tab-opened");
        n && setTabbedSubmenuBoundries(jQueryBuddha(n))
    } catch (e) {
        mmErrorLog(e)
    }
}

function mmEvtEnterTabbedLi(e) {
    try {
        var t = e.target;
        mmForEach(t.parentNode, ".tab-opened", function(e) {
            e.classList.remove("tab-opened")
        }), t.classList.add("tab-opened"), setTabbedSubmenuBoundries(jQueryBuddha(t))
    } catch (e) {
        mmErrorLog(e)
    }
}

function reinitMenus(e) {
    try {
        mmForEach(document, e, function(t) {
            var n = mmGetChildren(t, ".buddha-menu-item");
            if (mmIsVisible(t)) {
                for (var a, u = mmForEach(t, ".buddha-menu-item>.mm-submenu", function(e) {
                        e.setAttribute("style", "display: none !important;")
                    }, !0), i = window.innerWidth, r = 1, d = 0; d < n.length; d++) {
                    var m = n[d].offsetTop;
                    a = void 0 == a ? m : a, (m > a + 5 || m < a - 5) && r++, a = m
                }
                if ((r != n.length || 1 == r && i > verticalMenuMaxWidth) && 0 == forceMobile) {
                    t.classList.add("horizontal-mega-menu"), t.classList.remove("vertical-mega-menu"), mmForEach(t, ".submenu-opened", function(e) {
                        e.classList.remove("submenu-opened")
                    }), mmForEach(t, ".fa-minus-circle", function(e) {
                        e.classList.remove("fa-minus-circle"), e.classList.add("fa-plus-circle")
                    }), mmSetSmBoundriesOnReinit && setTimeout(function() {
                        for (var e = 0; e < n.length; e++) setSubmenuBoundries(jQueryBuddha(n[e])), setContactSubmenuBoundries(jQueryBuddha(n[e]))
                    }, 1), mmForEach(t, "ul.mm-submenu.tabbed>li", function(e) {
                        null == e.parentNode.querySelector(".tab-opened") ? (e.classList.add("tab-opened"), mmSetSmBoundriesOnReinit && setTabbedSubmenuBoundries(jQueryBuddha(e))) : e.classList.contains("tab-opened") && mmSetSmBoundriesOnReinit && setTabbedSubmenuBoundries(jQueryBuddha(e))
                    }), mmForEach(t, "ul.mm-submenu.tabbed>li", function(e) {
                        e.removeEventListener("mouseenter", mmEvtEnterTabbedLi), e.addEventListener("mouseenter", mmEvtEnterTabbedLi)
                    }), mmForEach(t, "ul.mm-submenu.tabbed>li:first-child", function(e) {
                        null == e.parentNode.querySelector(".tab-opened") && (e.classList.add("tab-opened"), setTabbedSubmenuBoundries(jQueryBuddha(e)))
                    });
                    for (var d = 0; d < n.length; d++) n[d].removeEventListener("mouseenter", mmEvtEnterMmi), n[d].addEventListener("mouseenter", mmEvtEnterMmi)
                } else if (activateMegaMenu) {
                    mmForEach(t, ".mega-hover", function(e) {
                        e.classList.remove("mega-hover")
                    });
                    for (var d = 0; d < n.length; d++) n[d].classList.remove("disabled");
                    t.classList.add("vertical-mega-menu"), t.classList.remove("horizontal-mega-menu");
                    var o = 0,
                        s = 0;
                    if (n.length) {
                        var l = window.getComputedStyle(n[0]),
                            c = window.getComputedStyle(n[0].querySelector("a"));
                        o = l.getPropertyValue("padding-left"), s = c.getPropertyValue("padding-left")
                    }
                    var h = parseInt(o) + parseInt(s),
                        g = h;
                    h > 15 && (g = 15);
                    var f = "";
                    f += e + ".vertical-mega-menu>li>ul.mm-submenu.tree>li{padding-left:" + h + "px !important;padding-right:" + h + "px !important;}", f += e + ".vertical-mega-menu>li>ul.mm-submenu.tree>li ul.mm-submenu li {padding-left:" + g + "px !important;padding-right:" + g + "px !important;}", f += e + ".vertical-mega-menu>li ul.mm-submenu.simple>li{padding-left:" + h + "px !important;padding-right:" + h + "px !important;}", f += e + ".vertical-mega-menu>li>ul.mm-submenu.tabbed>li{padding-left:" + h + "px !important;padding-right:" + h + "px !important;}", f += e + ".vertical-mega-menu>li>ul.mm-submenu.tabbed>li>ul.mm-submenu>li {padding-left:" + g + "px !important;padding-right:" + g + "px !important;}", f += e + ".vertical-mega-menu>li ul.mm-submenu.mm-contact>li{padding-left:" + h + "px !important;padding-right:" + h + "px !important;}", mmAddStyle(f, "verticalMenuSpacing"), mmForEach(t, ".tab-opened", function(e) {
                        e.classList.remove("tab-opened")
                    }), forceMobile = !1
                }
                if (panelOpened ? (jQueryBuddha(".horizontal-mega-menu>.buddha-menu-item").unbind("mouseenter.addMegaHoverClass"), jQueryBuddha(".horizontal-mega-menu>.buddha-menu-item").bind("mouseenter.addMegaHoverClass", function() {
                        jQueryBuddha(".mega-hover").removeClass("mega-hover"), panelOpened && jQueryBuddha(this).addClass("mega-hover")
                    })) : jQueryBuddha(".mega-hover").removeClass("mega-hover"), u)
                    for (var d = 0; d < u.length; d++) u[d].setAttribute("style", "")
            }
        })
    } catch (e) {
        mmErrorLog(e)
    }
}

function renderMobileMenuForce(e) {
    jQueryBuddha(".mega-hover").removeClass("mega-hover"), jQueryBuddha(".buddha-menu-item.disabled").removeClass("disabled"), jQueryBuddha(e).addClass("vertical-mega-menu").removeClass("horizontal-mega-menu"), jQueryBuddha(e + " .toggle-menu-btn").show(), jQueryBuddha(e).find("li.buddha-menu-item").off(), jQueryBuddha(e).find("li.buddha-menu-item a").off();
    var t = (parseInt(jQueryBuddha(e + ">li>a").css("font-size")), parseInt(jQueryBuddha(e + ">li").css("padding-left")) + parseInt(jQueryBuddha(e + ">li>a").css("padding-left"))),
        n = t;
    t > 15 && (n = 15);
    parseInt(jQueryBuddha(e + ">li").css("padding-top")), parseInt(jQueryBuddha(e + ">li>a").css("padding-top"));
    jQueryBuddha("#verticalMenuSpacing").remove();
    var a = '<style id="verticalMenuSpacing" type="text/css">';
    a += e + ".vertical-mega-menu>li>ul.mm-submenu.tree>li{padding-left:" + t + "px !important;padding-right:" + t + "px !important;}", a += e + ".vertical-mega-menu>li>ul.mm-submenu.tree>li ul.mm-submenu li {padding-left:" + n + "px !important;padding-right:" + n + "px !important;}", a += e + ".vertical-mega-menu>li ul.mm-submenu.simple>li{padding-left:" + t + "px !important;padding-right:" + t + "px !important;}", a += e + ".vertical-mega-menu>li>ul.mm-submenu.tabbed>li{padding-left:" + t + "px !important;padding-right:" + t + "px !important;}", a += e + ".vertical-mega-menu>li>ul.mm-submenu.tabbed>li>ul.mm-submenu>li {padding-left:" + n + "px !important;padding-right:" + n + "px !important;}", a += e + ".vertical-mega-menu>li ul.mm-submenu.mm-contact>li{padding-left:" + t + "px !important;padding-right:" + t + "px !important;}", a += "</style>", jQueryBuddha("head").append(a), jQueryBuddha(e).find(".tab-opened").removeClass("tab-opened"), jQueryBuddha(e).find(".buddha-menu-item>a>.toggle-menu-btn").unbind("click.resizeSubmenus"), jQueryBuddha(e).find(".buddha-menu-item>a>.toggle-menu-btn").bind("click.resizeSubmenus", function() {
        setSubmenuBoundries(jQueryBuddha(this).parent().parent()), setContactSubmenuBoundries(jQueryBuddha(this).parent().parent())
    }), jQueryBuddha(e).find(".buddha-menu-item>.mm-submenu>li>a>.toggle-menu-btn").unbind("click.resizeTabbedSubmenu"), jQueryBuddha(e).find(".buddha-menu-item>.mm-submenu>li>a>.toggle-menu-btn").bind("click.resizeTabbedSubmenu", function() {
        jQueryBuddha(this).parent().parent().hasClass("mm-hovering") && setTabbedSubmenuBoundries(jQueryBuddha(this).parent().parent())
    })
}

function concatClasses(e, t) {
    var n = [];
    return t && "" != t && (n = t.split(" ")), e && "" != e && (e = e.split(" "), jQueryBuddha.each(e, function(e, t) {
        -1 == jQueryBuddha.inArray(t, n) && (n[n.length] = t)
    })), n.join(" ")
}

function getSpecificClasses(e) {
    var t = [];
    if (void 0 != e) {
        e = e.split(" ");
        var n = "";
        jQueryBuddha.each(e, function(e, a) {
            -1 != a.indexOf("active") || -1 != a.indexOf("selected") || -1 != a.indexOf("current") ? t.active = a : -1 != a.indexOf("focus") ? t.focus = a : -1 != a.indexOf("first") ? t.first = a : -1 != a.indexOf("last") ? t.last = a : -1 == a.indexOf("buddha") && -1 == a.indexOf("dropdown") && -1 == a.indexOf("mm-subopen") && -1 == a.indexOf("hidden") && -1 == a.indexOf("hide") && (n += " " + a)
        }), t.common = n.trim()
    }
    return t
}

function undoAction() {
    if (currentUndo = undo[undo.length - 1], "design" == currentUndo.action && (redo.unshift(currentUndo), schemaDesignJSON.splice(-1, 1), undo.splice(-1, 1), recreateDesign()), 0 == jQueryBuddha(".buddha-menu-item").length && jQueryBuddha("#themeScript").remove(), window.self !== window.top) {
        var e = parent;
        void 0 === parent.postMessage && (e = top), e.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "*")
    } else previewPanelLoaded && document.getElementById("mega-menu-iframe").contentWindow.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "https://buddhaapps.com")
}

function redoAction() {
    if (tempMenuObject = {}, jQueryBuddha(".buddha-transparent").removeClass("buddha-transparent"), action = redo[0].action, "design" == action && (schemaDesignJSON.push(redo[0]), undo.push(redo[0]), recreateDesign()), redo.splice(0, 1), 0 == jQueryBuddha(".buddha-menu-item").length && jQueryBuddha("#themeScript").remove(), window.self !== window.top) {
        var e = parent;
        void 0 === parent.postMessage && (e = top), e.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "*")
    } else previewPanelLoaded && document.getElementById("mega-menu-iframe").contentWindow.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "https://buddhaapps.com")
}

function clearAction() {
    if (jQueryBuddha.each(undo, function(e, t) {
            undoAction()
        }), redo = [], 0 == jQueryBuddha(".buddha-menu-item").length && jQueryBuddha("#themeScript").remove(), window.self !== window.top) {
        var e = parent;
        void 0 === parent.postMessage && (e = top), e.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "*")
    } else previewPanelLoaded && document.getElementById("mega-menu-iframe").contentWindow.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "https://buddhaapps.com")
}

function liveDesign(e, t) {
    jQueryBuddha("#tempStyle").remove();
    var n = '<style id="tempStyle" type="text/css">';
    n += propSettings[e].element + "{" + propSettings[e].attribute + ":" + t + " !important; }", n += customPropSettingsStyles(e, t), n += "</style>", jQueryBuddha("head").append(n)
}

function updateDesign(e, t) {
    if (jQueryBuddha("#tempStyle").remove(), item = {}, item.action = "design", item.setting = e, item.value = t, defaultFontSelected = !1, "font_family" == item.setting && "Default" == item.value && (defaultFontSelected = !0), schemaDesignJSON.push(item), undo.push(item), recreateDesign(), "font_size" != e && "font_family" != e || jQueryBuddha(".horizontal-mega-menu>.buddha-menu-item>.mm-submenu").each(function() {
            parseInt(jQueryBuddha(this).css("top")) > 0 && (setSubmenuBoundries(jQueryBuddha(this).parent()), setContactSubmenuBoundries(jQueryBuddha(this).parent()), jQueryBuddha(this).hasClass("tabbed") && setTabbedSubmenuBoundries(jQueryBuddha(this).find(">li.tab-opened")))
        }), clearTimeout(reinitAfterDesignTimeout), reinitAfterDesignTimeout = setTimeout(function() {}, 100), redo = [], window.self !== window.top) {
        var n = parent;
        void 0 === parent.postMessage && (n = top), n.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "*")
    } else previewPanelLoaded && document.getElementById("mega-menu-iframe").contentWindow.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "https://buddhaapps.com")
}

function recreateDesign() {
    jQueryBuddha("#previewStyle").remove();
    var e = '<style id="previewStyle" type="text/css">';
    jQueryBuddha.each(schemaDesignJSON, function(t, n) {
        if ("design" == n.action && void 0 != propSettings[n.setting]) {
            if ("font_size" == n.setting) fontSize = parseInt(n.value);
            else if ("font_family" == n.setting && (jQueryBuddha("#googleFontDesign").remove(), "Default" != n.value && "Arial" != n.value && "Georgia" != n.value && "Tahoma" != n.value && "Trebuchet MS" != n.value && "Times New Roman" != n.value && "Verdana" != n.value)) {
                var a = '<link href="//fonts.googleapis.com/css?family=' + n.value + '" id="googleFontDesign" rel="stylesheet" type="text/css">';
                jQueryBuddha("head").append(a)
            }("font_family" != n.setting || "font_family" == n.setting && !defaultFontSelected && "Default" != n.value) && (e += propSettings[n.setting].element + "{" + propSettings[n.setting].attribute + ":" + n.value + " !important; }"), e += customPropSettingsStyles(n.setting, n.value)
        } else "design" == n.action && "tree_sub_direction" == n.setting && (setTreeDirection = n.value, jQueryBuddha(".horizontal-mega-menu>.buddha-menu-item>.mm-submenu.tree").each(function() {
            setSubmenuBoundries(jQueryBuddha(this).parent())
        }))
    }), e += "</style>", jQueryBuddha("head").append(e)
}

function designPanelOpened() {
    panelOpened = !0, jQueryBuddha("ul.mm-submenu.tabbed").length > 0 ? jQueryBuddha(".horizontal-mega-menu:visible>.buddha-menu-item>ul.mm-submenu.tabbed").each(function() {
        return jQueryBuddha(this).closest(".buddha-menu-item").addClass("mega-hover"), !1
    }) : jQueryBuddha("ul.mm-submenu.simple").length > 0 ? jQueryBuddha(".horizontal-mega-menu:visible>.buddha-menu-item>ul.mm-submenu.simple").each(function() {
        return jQueryBuddha(this).closest(".buddha-menu-item").addClass("mega-hover"), !1
    }) : jQueryBuddha("ul.mm-submenu.contact").length > 0 ? jQueryBuddha(".horizontal-mega-menu:visible>.buddha-menu-item>ul.mm-submenu.contact").each(function() {
        return jQueryBuddha(this).closest(".buddha-menu-item").addClass("mega-hover"), !1
    }) : jQueryBuddha("ul.mm-submenu.tree").length > 0 && jQueryBuddha(".horizontal-mega-menu:visible>.buddha-menu-item>ul.mm-submenu.tree").each(function() {
        return jQueryBuddha(this).closest(".buddha-menu-item").addClass("mega-hover"), !1
    }), setSubmenuBoundries(jQueryBuddha(".buddha-menu-item.mega-hover")), setContactSubmenuBoundries(jQueryBuddha(".buddha-menu-item.mega-hover")), jQueryBuddha("ul.mm-submenu.tabbed").length > 0 && setTabbedSubmenuBoundries(jQueryBuddha(".buddha-menu-item.mega-hover>ul.mm-submenu.tabbed>li:first-child")), jQueryBuddha(".horizontal-mega-menu>.buddha-menu-item").hover(function() {
        jQueryBuddha(".mega-hover").removeClass("mega-hover"), panelOpened && jQueryBuddha(this).addClass("mega-hover")
    })
}

function designPanelClosed() {
    panelOpened = !1, jQueryBuddha(".mega-hover").removeClass("mega-hover")
}

function initSaving() {
    jQueryBuddha(".buddha-loader-wrapper").show(), jQueryBuddha(".buddha-loader-text").show(), saving = !0
}

function toggleSubmenu(e) {
    if (!submenuToggled) {
        submenuToggled = !0;
        var t = jQueryBuddha(e).closest("li").find("ul.mm-submenu").first();
        t.hasClass("submenu-opened") ? (jQueryBuddha(e).closest("li").removeClass("mm-hovering"), jQueryBuddha(e).find(">.fa").removeClass("fa-minus-circle").addClass("fa-plus-circle"), t.removeClass("submenu-opened")) : (jQueryBuddha(e).closest("li").addClass("mm-hovering"), jQueryBuddha(e).find(">.fa").removeClass("fa-plus-circle").addClass("fa-minus-circle"), t.addClass("submenu-opened")), setTimeout(function() {
            submenuToggled = !1
        }, 400), jQueryBuddha(document).trigger("toggleSubmenu", [e])
    }
    return !1
}

function mmGoToPage(e, t) {
    if (!changingPage && !submenuToggled) {
        var n = window.location.hostname.replace("www.", ""),
            a = n.substr(0, n.indexOf(".")) + ".";
        if ("no-link" != jQueryBuddha(e).attr("data-href"))
            if (-1 !== jQueryBuddha(e).attr("data-href").indexOf("http") && -1 === jQueryBuddha(e).attr("data-href").indexOf(a) && -1 === jQueryBuddha(e).attr("data-href").indexOf("myshopify.com")) {
                changingPage = !0;
                var u = window.open(jQueryBuddha(e).attr("data-href"), "_blank");
                u && u.focus(), setTimeout(function() {
                    changingPage = !1
                }, 300)
            } else changingPage = !0, window.location = jQueryBuddha(e).attr("data-href"), setTimeout(function() {
                changingPage = !1
            }, 1e3);
        else t.stopPropagation()
    }
    return !1
}

function setSubmenuBoundries(e) {
    var t = jQueryBuddha("body"),
        n = t.width(),
        a = t.length ? t.offset().left : 0,
        u = 1e3;
    if (jQueryBuddha(e).find(">ul.mm-submenu.simple").length > 0 || jQueryBuddha(e).find(">ul.mm-submenu.tabbed").length > 0)
        if (jQueryBuddha(e).closest(".horizontal-mega-menu").length > 0) {
            if (jQueryBuddha(e).parent().parents().each(function() {
                    var e = jQueryBuddha(this).offset().left + parseInt(jQueryBuddha(this).css("padding-left")) - a;
                    e < u && e > 0 && (u = e)
                }), (1e3 == u || n <= 768) && (u = 0), customHeaderOffset && (u = customHeaderOffset < n ? (n - customHeaderOffset) / 2 : 0), jQueryBuddha(e).find(">ul.mm-submenu.simple").length > 0) var i = jQueryBuddha(e).find(">ul.mm-submenu.simple");
            else var i = jQueryBuddha(e).find(">ul.mm-submenu.tabbed");
            i.css({
                width: "auto",
                left: "auto",
                right: "auto"
            }), 2 * u > n && (u = 0);
            var r = n - 2 * u,
                d = 5;
            if (r >= 1020) {
                var m = i.attr("columns", 5).attr("style");
                m += "width:" + r + "px !important;", i.attr("style", m), d = 5
            } else if (r >= 816) {
                var m = i.attr("columns", 4).attr("style");
                m += "width:" + r + "px !important;", i.attr("style", m), d = 4
            } else if (r >= 612) {
                var m = i.attr("columns", 3).attr("style");
                m += "width:" + r + "px !important;", i.attr("style", m), d = 3
            } else {
                var m = i.attr("columns", 2).attr("style");
                m += "width:" + r + "px !important;", i.attr("style", m), d = 2
            }
            jQueryBuddha(e).find(">ul.mm-submenu.tabbed").length > 0 && --d;
            var o = jQueryBuddha(e).offset().left + jQueryBuddha(e).outerWidth() / 2 - a;
            if (o < n / 2) {
                var s = n - (n - (jQueryBuddha(e).offset().left - a)) - u;
                i.css("left", -s + "px")
            } else {
                var l = n - (jQueryBuddha(e).offset().left - a) - jQueryBuddha(e).outerWidth() - u;
                i.css("right", -l + "px")
            }
            if (jQueryBuddha(e).find("ul.mm-submenu.simple>li").removeAttr("style"), jQueryBuddha(e).find(".mm-list-name").removeAttr("style"), jQueryBuddha(e).find(">ul.mm-submenu.simple").length > 0) {
                var c = 0,
                    h = 0;
                fontSize <= 14 ? fontSize = 8 : fontSize > 14 && fontSize <= 18 ? fontSize += 6 : fontSize > 18 && fontSize <= 20 && (fontSize += 10), jQueryBuddha(e).find("ul.mm-submenu.simple>li").each(function(t, n) {
                    if (t % d == 0 && (c = 0, h = 0), jQueryBuddha(this).find(".mm-list-name").length > 0)
                        if (jQueryBuddha(this).find(".mm-list-name").height() > h) {
                            h = jQueryBuddha(this).find(".mm-list-name").height(), jQueryBuddha(this).find(".mm-list-name").css("height", h);
                            var a = t;
                            if (a % d != 0)
                                for (; a % d != 0;) jQueryBuddha(e).find("ul.mm-submenu.simple").find(">li:nth-child(" + a + ")").find(".mm-list-name").css("height", h), a--
                        } else jQueryBuddha(this).find(".mm-list-name").css("height", h);
                    if (jQueryBuddha(this).outerHeight() > c) {
                        c = jQueryBuddha(this).outerHeight(), jQueryBuddha(this).css("min-height", c + fontSize);
                        var a = t;
                        if (a % d != 0)
                            for (; a % d != 0;) jQueryBuddha(e).find("ul.mm-submenu.simple").find(">li:nth-child(" + a + ")").css("min-height", c + fontSize), a--
                    } else jQueryBuddha(this).css("min-height", c + fontSize)
                })
            } else jQueryBuddha(e).find("ul.mm-submenu.tabbed>li").each(function(e, t) {
                var n = 0,
                    a = 0;
                fontSize <= 14 ? fontSize = 6 : fontSize > 14 && fontSize <= 18 ? fontSize += 2 : fontSize > 18 && fontSize <= 20 && (fontSize += 6), jQueryBuddha(t).find("ul.mm-submenu.simple>li").each(function(e, u) {
                    if (e % d == 0 && (n = 0, a = 0), jQueryBuddha(this).find(".mm-list-name").length > 0)
                        if (jQueryBuddha(this).find(".mm-list-name").height() > a) {
                            a = jQueryBuddha(this).find(".mm-list-name").height(), jQueryBuddha(this).find(".mm-list-name").css("height", a);
                            var i = e;
                            if (i % d != 0)
                                for (; i % d != 0;) jQueryBuddha(this).parent().find(">li:nth-child(" + i + ")").find(".mm-list-name").css("height", a), i--
                        } else jQueryBuddha(this).find(".mm-list-name").css("height", a);
                    if (jQueryBuddha(this).outerHeight() > n) {
                        n = jQueryBuddha(this).outerHeight(), jQueryBuddha(this).css("min-height", n + fontSize);
                        var i = e;
                        if (i % d != 0)
                            for (; i % d != 0;) jQueryBuddha(t).find(">ul.mm-submenu.simple").find(">li:nth-child(" + i + ")").css("min-height", n + fontSize), i--
                    } else jQueryBuddha(this).css("min-height", n + fontSize)
                })
            }), jQueryBuddha(e).find("ul.mm-submenu.tabbed>li").addClass("fa fa-angle-right")
        } else {
            jQueryBuddha(e).find("ul.mm-submenu.tabbed").css({
                left: "auto",
                right: "auto"
            });
            var g = jQueryBuddha(e).find("ul.mm-submenu.tabbed").attr("style"),
                f = "";
            f += void 0 != g ? g + ";height:auto !important;width:auto !important" : "height:auto !important;width:auto !important", jQueryBuddha(e).find("ul.mm-submenu.tabbed").attr("style", f), jQueryBuddha(e).find("ul.mm-submenu.simple").css({
                left: "auto",
                right: "auto"
            });
            var g = jQueryBuddha(e).find("ul.mm-submenu.simple").attr("style"),
                f = "";
            f += void 0 != g ? g + ";width:auto !important" : ";width:auto !important", jQueryBuddha(e).find("ul.mm-submenu.simple").attr("style", f), jQueryBuddha(e).find("ul.mm-submenu.simple>li").removeAttr("style"), jQueryBuddha(e).width() >= 700 ? (jQueryBuddha(e).find("ul.mm-submenu.simple").attr("columns", 3), jQueryBuddha(".vertical-mega-menu ul.mm-submenu.mm-contact").attr("columns", 2)) : jQueryBuddha(e).width() >= 500 ? (jQueryBuddha(e).find("ul.mm-submenu.simple").attr("columns", 2), jQueryBuddha(".vertical-mega-menu ul.mm-submenu.mm-contact").attr("columns", 2)) : (jQueryBuddha(e).find("ul.mm-submenu.simple").removeAttr("columns"), jQueryBuddha(".vertical-mega-menu ul.mm-submenu.mm-contact").removeAttr("columns"))
        }
    else if (jQueryBuddha(e).find("ul.mm-submenu.tree").length > 0 && (jQueryBuddha(e).find("ul.mm-submenu").removeAttr("style"), 0 == jQueryBuddha(e).parents(".buddha-menu-item.mega-hover").length)) {
        var o = jQueryBuddha(e).offset().left + jQueryBuddha(e).outerWidth() / 2;
        o < n / 2 && ("set_tree_auto" == setTreeDirection || void 0 == setTreeDirection) || "set_tree_right" == setTreeDirection ? (jQueryBuddha(e).find("ul.mm-submenu").removeClass("tree-open-left"), jQueryBuddha(e).find("ul.mm-submenu.tree li").removeClass("fa fa-angle-right fa-angle-left"), jQueryBuddha(e).find("ul.mm-submenu.tree li").each(function() {
            jQueryBuddha(this).find("ul.mm-submenu").length > 0 && jQueryBuddha(this).addClass("fa fa-angle-right")
        })) : (jQueryBuddha(e).find("ul.mm-submenu").addClass("tree-open-left"), jQueryBuddha(e).find("ul.mm-submenu.tree li").removeClass("fa fa-angle-right fa-angle-left"), jQueryBuddha(e).find("ul.mm-submenu.tree li").each(function() {
            jQueryBuddha(this).find("ul.mm-submenu").length > 0 && jQueryBuddha(this).addClass("fa fa-angle-left")
        }))
    }
}

function setTabbedSubmenuBoundries(e) {
    if (jQueryBuddha(e).closest(".horizontal-mega-menu").length > 0) {
        allowMainMenuRecalibration && setSubmenuBoundries(jQueryBuddha(e).closest(".buddha-menu-item"));
        var t = jQueryBuddha(e).parent().find(">li").index(jQueryBuddha(e));
        if (jQueryBuddha(e).find(">ul.mm-submenu").length > 0) {
            jQueryBuddha(e).find(">ul.mm-submenu").removeAttr("style");
            var n = jQueryBuddha(e).find(">ul.mm-submenu").outerHeight(),
                a = 0;
            if (jQueryBuddha(e).parent().find(">li").each(function() {
                    a += jQueryBuddha(this).outerHeight()
                }), a > n) {
                var u = jQueryBuddha(e).parent().attr("style"),
                    i = "";
                i += void 0 != u ? u + ";height:" + a + "px !important" : "height:" + a + "px !important", jQueryBuddha(e).parent().attr("style", i);
                var u = jQueryBuddha(e).find(">ul.mm-submenu").attr("style"),
                    i = "";
                i += void 0 != u ? u + ";height:" + a + "px !important" : "height:" + a + "px !important", jQueryBuddha(e).find(">ul.mm-submenu").attr("style", i)
            } else {
                var u = jQueryBuddha(e).parent().attr("style"),
                    i = "";
                i += void 0 != u ? u + ";height:" + n + "px !important" : "height:" + n + "px !important", jQueryBuddha(e).parent().attr("style", i)
            }
        } else jQueryBuddha(e).parent().css("height", "auto");
        var r = jQueryBuddha(e).parent().find(">li:nth-child(" + (t + 1) + ")").position();
        if (void 0 !== r) {
            r = r.top;
            var u = jQueryBuddha(e).find(">ul.mm-submenu").attr("style"),
                i = "";
            i += void 0 != u ? u + ";top:-" + r + "px !important" : "top:-" + r + "px !important", jQueryBuddha(e).find(">ul.mm-submenu").attr("style", i)
        }
    } else jQueryBuddha(e).closest(".vertical-mega-menu").find(".tab-opened").removeClass("tab-opened")
}

function setContactSubmenuBoundries(e) {
    var t = jQueryBuddha("body").width(),
        n = 1e3;
    if (jQueryBuddha(e).find(">ul.mm-submenu.mm-contact").length > 0 && jQueryBuddha(e).closest(".horizontal-mega-menu").length > 0) {
        jQueryBuddha(e).parent().parents().each(function() {
            var e = jQueryBuddha(this).offset().left + parseInt(jQueryBuddha(this).css("padding-left"));
            e < n && e > 0 && (n = e)
        }), 1e3 == n && (n = 0), 2 * n > t && (n = 0), customHeaderOffset && (n = customHeaderOffset < t ? (t - customHeaderOffset) / 2 : 0);
        var a = jQueryBuddha(e).find(">ul.mm-submenu.mm-contact"),
            u = t - 2 * n;
        a.css({
            width: u + "px",
            left: "auto",
            right: "auto"
        });
        if (jQueryBuddha(e).offset().left + jQueryBuddha(e).outerWidth() / 2 < t / 2) {
            var i = t - (t - jQueryBuddha(e).offset().left) - n;
            a.css("left", -i + "px")
        } else {
            var r = t - jQueryBuddha(e).offset().left - jQueryBuddha(e).outerWidth() - n;
            a.css("right", -r + "px")
        }
    } else jQueryBuddha(e).find("ul.mm-submenu.mm-contact").css({
        left: "auto",
        right: "auto",
        width: "auto",
        height: "auto"
    }), jQueryBuddha(e).find(">ul.mm-submenu.mm-contact").width() <= 480 && jQueryBuddha(e).find(">ul.mm-submenu.mm-contact").addClass("one-column")
}

function addTouch() {
    var e = !1;
    jQueryBuddha(document).on("touchstart.mm-li", function(t) {
        e = !1
    });
    for (var t = 0; t < ulPaths.length; t++) jQueryBuddha(ulPaths[t]).on("touchmove.mm-li", function(t) {
        e = !0
    });
    jQueryBuddha(document).off("touchend.mm-li"), jQueryBuddha(document).on("touchend.mm-li", function(t) {
        if (globalTouch && 0 == jQueryBuddha(t.target).closest(".buddha-menu-item").length && jQueryBuddha(".mega-hover").removeClass("mega-hover"), setTimeout(function() {
                e = !1
            }, 300), 0 == e) {
            if (e = !0, jQueryBuddha(t.target).closest(".vertical-mega-menu li").length > 0) {
                var n = jQueryBuddha(t.target).closest("li");
                return n.find("ul.mm-submenu").length > 0 ? !!n.hasClass("mm-hovering") || (t.preventDefault(), n.find(">a>.toggle-menu-btn").length > 0 ? n.find(">a>.toggle-menu-btn").click() : n.find(">a>span>.toggle-menu-btn").length > 0 && n.find(">a>span>.toggle-menu-btn").click(), !1) : (n.parents(".buddha-menu-item-countdown").length > 0 ? t.preventDefault() : setTimeout(function() {
                    changingPage || n.find("a").first().click()
                }, 200), !0)
            }
            if (jQueryBuddha(t.target).closest(".horizontal-mega-menu li").length > 0) {
                var n = jQueryBuddha(t.target).closest("li");
                return n.is(".buddha-menu-item") ? !(n.find("ul.mm-submenu").length > 0) || (n.hasClass("mega-hover") ? (mmGoToPage(n.find("a").first(), t), !0) : (t.preventDefault(), jQueryBuddha(".mega-hover").removeClass("mega-hover"), n.addClass("mega-hover"), setSubmenuBoundries(n), setContactSubmenuBoundries(n), n.find(".tab-opened").length > 0 && setTabbedSubmenuBoundries(n.find(".tab-opened")), !1)) : n.parent().is(".mm-submenu.tabbed") ? !(n.find("ul.mm-submenu").length > 0) || (n.hasClass("tab-opened") ? (mmGoToPage(n.find("a").first(), t), !0) : (t.preventDefault(), n.parent().find(">li").removeClass("tab-opened"), n.addClass("tab-opened"), setTabbedSubmenuBoundries(n), setSubmenuBoundries(n.parent().parent()), !1)) : n.parents(".mm-submenu.tree").length > 0 && n.find("ul.mm-submenu").length > 0 ? n.hasClass("mega-hover") ? (mmGoToPage(n.find("a").first(), t), !0) : (t.preventDefault(), n.parent().find(">li").removeClass("mega-hover"), n.addClass("mega-hover"), n.find(".mega-hover").removeClass("mega-hover"), jQueryBuddha.each(n.parents(), function() {
                    "li" == jQueryBuddha(this).prop("tagName").toLowerCase() && jQueryBuddha(this).addClass("mega-hover")
                }), setSubmenuBoundries(n), !1) : n.parents(".buddha-menu-item-countdown").length > 0 ? (t.preventDefault(), !0) : n.parents(".mm-contact").length > 0 ? (t.stopPropagation(), !0) : (mmGoToPage(n.find("a").first(), t), !0)
            }
        }
    })
}

function getUlPath(e) {
    for (var t, n = !0; e;) {
        var a = e.tagName;
        if (!a) break;
        a = a.toLowerCase(), -1 == a.replace(/\s+/g, " ").indexOf(" ") && 0 != /^[A-Za-z][A-Za-z0-9-]*$/.test(a) || (a = "*");
        var u = "";
        ignoreClass = !1, "body" != a && "html" != a && ("" != e.id && /[a-zA-Z]/.test(e.id.charAt(0)) ? u = "#" + e.id : e.classList.length > 0 && !n && !ignoreClass && "" != e.classList[0] && (u = "." + e.classList[0]));
        for (var i = 0, r = !1, d = e; null != (d = d.previousElementSibling);) d.tagName && d.tagName.toLowerCase() == a && (r = !0), i++;
        for (var d = e; null != (d = d.nextElementSibling);)
            if (d.tagName && d.tagName.toLowerCase() == a) {
                r = !0;
                break
            } r && (-1 !== ["li", "ul", "header"].indexOf(a) || "div" == a && "" == u) && (a += ":nth-child(" + (i + 1) + ")"), n = !1, t = a + u + (t ? ">" + t : ""), e = e.parentNode
    }
    return t
}
if (window.addEventListener && void 0 === mmLoaded) {
    var newMenu = !1,
        mmLoaded = !0,
        undo = [],
        redo = [],
        action = "",
        tempMenuObject = {},
        changedMenu = !1,
        submenuToggled = !1,
        changingPage = !1,
        saving = !1,
        panelOpened = !1,
        verticalMenuMaxWidth = 1e4,
        selectedMenu, clicked, touched, burgerIcon, disableOnClick = !1,
        globalTouch = !0,
        onClickOnlyReinit = !1,
        disableOnScroll = !1,
        mobileMenuMilliseconds = 350,
        ulPaths = [],
        customHeaderOffset = !1,
        fontSize = 0,
        storeUlCount = 0,
        storeNavCount = 0,
        loadMegaMenuTries = 100,
        customMenuUls, setTreeDirection, defaultFontSelected = !1,
        forceMobile = !1,
        activateMegaMenu = !0,
        previewPanelLoaded = !1,
        allowMainMenuRecalibration = !0,
        readyStateCheckInterval, addTouchNew = !0,
        disableThemeScript = !1,
        mmApplyOnce = !1,
        mmSetSmBoundriesOnReinit = !1,
        initializedSchema = !1,
        mmNumErrors = 0;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
        var t = this;
        do {
            if (Element.prototype.matches.call(t, e)) return t;
            t = t.parentElement || t.parentNode
        } while (null !== t && 1 === t.nodeType);
        return null
    });
    var mmInitVarsWaitTime = 0,
        propSettings = {
            background_color: {
                element: ".horizontal-mega-menu ul.mm-submenu, .horizontal-mega-menu>li>ul.mm-submenu.tabbed>li>ul.mm-submenu li,.horizontal-mega-menu li.buddha-menu-item:hover ul.mm-submenu.simple li:hover, .horizontal-mega-menu li.buddha-menu-item.mega-hover ul.mm-submenu.simple li:hover",
                attribute: "background"
            },
            background_hover_color: {
                element: ".horizontal-mega-menu ul.mm-submenu.tree li:hover, .horizontal-mega-menu ul.mm-submenu.tree li.mega-hover, .horizontal-mega-menu ul.mm-submenu.tabbed>li.tab-opened",
                attribute: "background"
            },
            text_color: {
                element: ".horizontal-mega-menu ul.mm-submenu,.horizontal-mega-menu ul.mm-submenu li,.horizontal-mega-menu ul.mm-submenu h3",
                attribute: "color"
            },
            link_color: {
                element: '.horizontal-mega-menu ul.mm-submenu li a,.horizontal-mega-menu ul.mm-submenu li.fa, .horizontal-mega-menu ul.mm-submenu.tree li:hover>a[data-href="no-link"], .horizontal-mega-menu ul.mm-submenu.tree li.mega-hover>a[data-href="no-link"], .horizontal-mega-menu ul.mm-submenu.tabbed>li.tab-opened>a[data-href="no-link"], .horizontal-mega-menu ul.mm-submenu li a[data-href="no-link"]:hover',
                attribute: "color"
            },
            link_hover_color: {
                element: ".horizontal-mega-menu ul.mm-submenu.tree li:hover>a, .horizontal-mega-menu ul.mm-submenu.tree li.mega-hover>a, .horizontal-mega-menu ul.mm-submenu.tabbed>li.tab-opened>a, .horizontal-mega-menu ul.mm-submenu li a:hover, .horizontal-mega-menu ul.mm-submenu.tree li.fa:hover:before, .horizontal-mega-menu ul.mm-submenu.tree li.mega-hover.fa:before, .horizontal-mega-menu ul.mm-submenu.tabbed>li.tab-opened.fa:before",
                attribute: "color"
            },
            font_size: {
                element: ".horizontal-mega-menu ul.mm-submenu,.horizontal-mega-menu ul.mm-submenu a",
                attribute: "font-size"
            },
            button_background_color: {
                element: "ul.mm-submenu li.mm-contact-column button",
                attribute: "background"
            },
            button_background_hover_color: {
                element: "ul.mm-submenu li.mm-contact-column button:hover",
                attribute: "background"
            },
            button_text_color: {
                element: "ul.mm-submenu li.mm-contact-column button",
                attribute: "color"
            },
            button_text_hover_color: {
                element: "ul.mm-submenu li.mm-contact-column button:hover",
                attribute: "color"
            },
            vertical_text_color: {
                element: ".vertical-mega-menu ul.mm-submenu,.vertical-mega-menu ul.mm-submenu h3",
                attribute: "color"
            },
            vertical_link_color: {
                element: ".vertical-mega-menu ul.mm-submenu li a, .vertical-mega-menu ul.mm-submenu>li>a>.toggle-menu-btn>.fa",
                attribute: "color"
            },
            vertical_link_hover_color: {
                element: ".vertical-mega-menu ul.mm-submenu>li:hover>a, .vertical-mega-menu ul.mm-submenu.tree li:hover>a, .vertical-mega-menu ul.mm-submenu.tree li.mega-hover>a, .vertical-mega-menu ul.mm-submenu.tabbed>li.tab-opened>a, .vertical-mega-menu ul.mm-submenu li a:hover, .vertical-mega-menu ul.mm-submenu.tree li:hover>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu.tree li.mm-hovering>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu.tree li.mega-hover>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu.tabbed>li.mm-hovering>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu.tabbed>li:hover>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu li.mm-hovering>a",
                attribute: "color"
            },
            vertical_font_size: {
                element: ".vertical-mega-menu ul.mm-submenu,.vertical-mega-menu ul.mm-submenu.simple>li ul.mm-product-list>li .mm-list-info",
                attribute: "font-size"
            },
            font_family: {
                element: ".horizontal-mega-menu ul.mm-submenu,.horizontal-mega-menu ul.mm-submenu li a,ul.mm-submenu a,.vertical-mega-menu ul.mm-submenu,.vertical-mega-menu ul.mm-submenu li a,ul.mm-submenu li.mm-contact-column h3",
                attribute: "font-family"
            },
            countdown_color: {
                element: ".buddha-menu-item-countdown .inn",
                attribute: "color"
            },
            countdown_background_color: {
                element: ".buddha-menu-item-countdown .inn,.buddha-menu-item-countdown .up::after,.buddha-menu-item-countdown .flip-clock-dot",
                attribute: "background"
            },
            countdown_menu_color: {
                element: ".buddha-menu-item[countdown] > a",
                attribute: "color"
            }
        },
        reinitAfterDesignTimeout;
    window.addEventListener("message", function(e) {
        ~e.origin.indexOf(mmAppUrl) && ("object" == typeof e.data ? "applyMegaMenu" == e.data[0] ? window[e.data[0]](e.data[1]) : -1 !== jQueryBuddha.inArray(e.data[0], ["undoAction", "redoAction", "clearAction", "initSaving", "designPanelOpened", "designPanelClosed"]) ? window[e.data[0]]() : -1 !== jQueryBuddha.inArray(e.data[0], ["liveDesign", "updateDesign"]) && window[e.data[0]](e.data[1], e.data[2]) : window[e.data]())
    })
}
if (typeof mmBeforeLoaded == "undefined") {
    var buddhaMegaMenuShop = "baremarket.myshopify.com";
    var mmBeforeLoaded = true;
    if (typeof InstantClick !== "undefined") {
        InstantClick.on("change", function(isInitialLoad) {
            if (!isInitialLoad) {
                ulPaths = [];
                storeUlCount = 0;
                storeNavCount = 0;
                if (typeof loadFlipClockBuddha !== "undefined") {
                    loadFlipClockBuddha(jQueryBuddha);
                }
                if (typeof loadBuddhaMegaMenu !== "undefined") {
                    loadBuddhaMegaMenu();
                } else {
                    setTimeout(function() {
                        loadBuddhaMegaMenu();
                    }, 1000);
                }
            }
        });
    }
    var hideOriginalMenuInterval;

    function hideOriginalMenu() {
        hideOriginalMenuInterval = setInterval(function() {
            menu = "force-mega-menu";
            var links = [];
            jQueryBuddha.each(linkLists, function(key, item) {
                if (menu == key) {
                    links = item.items;
                    return false;
                }
            });
            if (menu != "none" && links.length > 0) {
                jQueryBuddha("ul,nav").each(function() {
                    var elementFits = 0;
                    jQueryBuddha(this).find(">li").each(function() {
                        var href = jQueryBuddha(this).find("a").first().attr("href"); /*if (typeof href !== "undefined") { href = href.replace("http://"+buddhaMegaMenuShop,"").replace("https://"+buddhaMegaMenuShop,""); }*/
                        if (links[elementFits] != undefined && href == links[elementFits]) {
                            elementFits++;
                        } else if (elementFits > 0 && elementFits != links.length) {
                            elementFits = 0;
                            if (href == links[0]) {
                                elementFits = 1;
                            }
                        }
                    });
                    if (elementFits > 0 && elementFits == links.length) {
                        jQueryBuddha(this).addClass("buddha-disabled-menu");
                    }
                    jQueryBuddha("#MobileNav").addClass("buddha-disabled-menu");
                    jQueryBuddha("#SiteNav").addClass("buddha-disabled-menu");
                });
            }
        }, 50);
        setTimeout(function() {
            jQueryBuddha(".buddha-disabled-menu").removeClass("buddha-disabled-menu");
            clearInterval(hideOriginalMenuInterval);
        }, 3000);
    }

    function loadJqueryBuddha() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                var data = xhr.responseText;
                jQueryBuddha = data.replace(/jQuery/g, 'jQueryBuddha');
                eval(jQueryBuddha);
                if (typeof jQuery !== 'undefined') {
                    $ = jQuery.noConflict();
                }
                if (typeof hideOriginalMenu != 'undefined') {
                    hideOriginalMenu();
                }
                if (typeof loadFlipClockBuddha !== 'undefined') {
                    loadFlipClockBuddha(jQueryBuddha);
                }
                if (typeof loadBuddhaMegaMenu !== 'undefined') {
                    loadBuddhaMegaMenu();
                } else {
                    setTimeout(function() {
                        loadBuddhaMegaMenu();
                    }, 1000);
                }
            }
        };
        xhr.open('GET', 'https://code.jquery.com/jquery-3.5.1.slim.min.js', true);
        xhr.send(null);
    }
    var jQueryBuddha;

    function BuddhaMegaMenuMain() {
        if (typeof jQuery == 'undefined') {
            loadJqueryBuddha();
        } else {
            var vernums = jQuery.fn.jquery.split('.');
            if ((parseInt(vernums[0]) == 1 && parseInt(vernums[1]) >= 7) || parseInt(vernums[0]) > 1) {
                jQueryBuddha = jQuery;
                if (typeof hideOriginalMenu != 'undefined') {
                    hideOriginalMenu();
                }
                if (typeof loadFlipClockBuddha !== 'undefined') {
                    loadFlipClockBuddha(jQueryBuddha);
                }
                if (typeof loadBuddhaMegaMenu !== 'undefined') {
                    loadBuddhaMegaMenu();
                } else {
                    setTimeout(function() {
                        loadBuddhaMegaMenu();
                    }, 1000);
                }
            } else {
                loadJqueryBuddha();
            }
        }
    }
    if (window.self !== window.top || false) {
        /* in preview or if customMenuUls is defined, start loading immediately */
        BuddhaMegaMenuMain();
    } else {
        /* on frontend load after dom content loaded event to emulate deferred exec */
        if (document.readyState !== "loading") {
            BuddhaMegaMenuMain();
        } else {
            document.addEventListener("DOMContentLoaded", BuddhaMegaMenuMain);
        }
    }
}