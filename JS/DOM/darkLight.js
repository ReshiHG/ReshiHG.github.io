const   d = document,
        ls = localStorage;

export function darkLight(button, moonIcon, sunIcon) {
    const $buttonDarkLight = d.querySelector(button),
        $moon = d.querySelector(moonIcon),
        $sun = d.querySelector(sunIcon),
        $selectors = d.querySelectorAll("[data-dark]"),
        //Funcion anónima para activar el tema claro
        darkMode = () => {
            $moon.style.display = "none";
            $sun.style.display = "inline-block";
            $selectors.forEach(el => el.classList.add("darkMode"));
            ls.setItem("theme","dark");
        },
        //Funcion anónima para activar el tema oscuro
        lightMode = () => {
            $moon.style.display = "inline-block";
            $sun.style.display = "none";
            $selectors.forEach(el => el.classList.remove("darkMode"));
            ls.setItem("theme","light");
        };

    d.addEventListener("click", e => {
            if (e.target.matches(button) || e.target.matches(`${button} *`)) {
                if ($sun.style.display === "none") {
                    darkMode();
                } else {
                    lightMode();
                }
            }
        })


        d.addEventListener("DOMContentLoaded", e => {
            // alert("DOMContentLoaded desde DarkTheme");
            if (ls.getItem("theme") === null) ls.setItem("theme","light");
            if (ls.getItem("theme") === "light") lightMode();
            if (ls.getItem("theme") === "dark") darkMode();
        })
    }
