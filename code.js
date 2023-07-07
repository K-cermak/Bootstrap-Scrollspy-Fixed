var menuSelector = "#navbar-example3"; //TODO: change to nav (menu) selector

var links = document.querySelectorAll(menuSelector + " a");

//get only links with #
links = Array.prototype.slice.call(links).filter(function (link) {
    return link.getAttribute("href").indexOf("#") !== -1;
});

var divs = links.map(function (link) {
    return link.getAttribute("href");
});

//on page init
startScrollspy();

//if scroll or resize
window.addEventListener("scroll", function () {
    startScrollspy();
});

window.addEventListener("resize", function () {
    startScrollspy();
});

function startScrollspy() {
    for (let i = 0; i < divs.length; i++ ) {
        //check if not last div, because last div cannot be first
        if (percentInView(document.querySelector(divs[divs.length - 1])) > 0.2) {  //TODO: If you have a longer last paragraph, you can increase the value 0.2, or if the paragraph is longer than the screen, you can remove the whole if statement
            if (document.querySelector(menuSelector + " a.active")) {
                document.querySelector(menuSelector + " a.active").classList.remove("active");
            }
            links[divs.length - 1].classList.add("active");
            break;

        } else if (percentInView(document.querySelector(divs[divs.length - 1])) > 0.2 || percentInView(document.querySelector(divs[i])) > 0) {
            if (document.querySelector(menuSelector + " a.active")) {
                document.querySelector(menuSelector + " a.active").classList.remove("active");
            }
            links[i].classList.add("active");
            break;
        }
    }
}

function percentInView(div) {
    const rect = div.getBoundingClientRect();

    const dimension = { x: rect.x, y: rect.y, w: rect.width, h: rect.height };
    const viewport = { x: 0, y: 0, w: window.innerWidth, h: window.innerHeight };
    const divsize = dimension.w * dimension.h;
    const overlap = intersection(dimension, viewport);

    return overlap / divsize;
}

function intersection(r1, r2) {
    const x_overlap = Math.max(0, Math.min(r1.x + r1.w, r2.x + r2.w) - Math.max(r1.x, r2.x));
    const y_overlap = Math.max(0, Math.min(r1.y + r1.h, r2.y + r2.h) - Math.max(r1.y, r2.y));
    const overlapArea = x_overlap * y_overlap;
    
    return overlapArea;
}