// build time:Mon Nov 27 2017 23:36:22 GMT+0800 (CST)
! function() {
    function n(n, e, t) {
        return n.getAttribute(e) || t
    }

    function e(n) {
        return document.getElementsByTagName(n)
    }

    function t() {
        var t = e("script"),
            i = t.length,
            o = t[i - 1];
        return {
            l: i,
            z: n(o, "zIndex", -1),
            o: n(o, "opacity", .5),
            c: n(o, "color", "0,0,0"),
            n: n(o, "count", 99)
        }
    }

    function i() {
        d = a.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            l = a.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }

    function o() {
        m.clearRect(0, 0, d, l);
        var n = [w].concat(y);
        var e, t, i, a, u, x;
        y.forEach(function(o) {
                o.x += o.xa,
                    o.y += o.ya,
                    o.xa *= o.x > d || o.x < 0 ? -1 : 1,
                    o.ya *= o.y > l || o.y < 0 ? -1 : 1,
                    m.fillRect(o.x - .5, o.y - .5, 1, 1);
                for (t = 0; t < n.length; t++) {
                    e = n[t];
                    if (o !== e && null !== e.x && null !== e.y) {
                        a = o.x - e.x,
                            u = o.y - e.y,
                            x = a * a + u * u;
                        x < e.max && (e === w && x >= e.max / 2 && (o.x -= .03 * a,
                                o.y -= .03 * u),
                            i = (e.max - x) / e.max,
                            m.beginPath(),
                            m.lineWidth = i / 2,
                            m.strokeStyle = "rgba(" + c.c + "," + (i + .2) + ")",
                            m.moveTo(o.x, o.y),
                            m.lineTo(e.x, e.y),
                            m.stroke())
                    }
                }
                n.splice(n.indexOf(o), 1)
            }),
            r(o)
    }
    var a = document.createElement("canvas"),
        c = t(),
        u = "c_n" + c.l,
        m = a.getContext("2d"),
        d, l, r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(n) {
            window.setTimeout(n, 1e3 / 45)
        },
        x = Math.random,
        w = {
            x: null,
            y: null,
            max: 2e4
        };
    a.id = u;
    a.style.cssText = "position:fixed;top:0;left:0;z-index:" + c.z + ";opacity:" + c.o;
    e("body")[0].appendChild(a);
    i(),
        window.onresize = i;
    window.onmousemove = function(n) {
            n = n || window.event,
                w.x = n.clientX,
                w.y = n.clientY
        },
        window.onmouseout = function() {
            w.x = null,
                w.y = null
        };
    for (var y = [], s = 0; c.n > s; s++) {
        var f = x() * d,
            h = x() * l,
            g = 2 * x() - 1,
            v = 2 * x() - 1;
        y.push({
            x: f,
            y: h,
            xa: g,
            ya: v,
            max: 6e3
        })
    }
    setTimeout(function() {
        o()
    }, 100)
}();
//rebuild by neat