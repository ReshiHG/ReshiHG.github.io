const d = document;

export function slide(selector, btnPrev, btnNext) {
    const $slides = d.querySelectorAll(selector);

    let i = 0;

    addEventListener("click", e => {
        if (e.target.matches(btnPrev)) {
            $slides[i].classList.remove("active");
            i--;

            if (i < 0) {
                i = $slides.length - 1;
            }

            $slides[i].classList.add("active");
        }
        if (e.target.matches(btnNext)) {
            $slides[i].classList.remove("active");
            i++;
            if (i >= $slides.length) {
                i = 0;
            }
            $slides[i].classList.add("active");
        }
    });

    setInterval(() => {
        $slides[i].classList.remove("active");
        i++;
        if (i>=$slides.length) {
            i = 0;
        }
        $slides[i].classList.add("active");
    },5000);
}
