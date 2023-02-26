const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const header = document.querySelector("header");

let hamburgerState = false;

        hamburger.addEventListener("click", function(){
            if (!hamburgerState) {
                nav.classList.toggle("active");
                header.classList.add("background-black");
                hamburgerState = true;
            } else {
                nav.classList.toggle("active");

                if (window.scrollY == 0) {
                    header.classList.remove("background-black");
                }
                hamburgerState = false;
            }
        });

        window.addEventListener("scroll", function(){
            if (this.window.scrollY > 0) {
                header.classList.add("background-black");
            } else {
                header.classList.remove("background-black");
            }

        });

