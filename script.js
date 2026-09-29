/* =========================================================
   AI & THE FUTURE OF WORK
   Main JavaScript
   ========================================================= */


/* =========================================================
   ELEMENTS
   ========================================================= */

const html = document.documentElement;
const body = document.body;

const themeButton = document.getElementById("theme-button");
const footerThemeButton = document.getElementById("footer-theme");

const languageButton = document.getElementById("language-button");
const footerLanguageButton = document.getElementById("footer-language");


/* =========================================================
   THEME
   ========================================================= */

function updateThemeButtons(isDark) {

    if (themeButton) {
        themeButton.textContent = isDark ? "Light" : "Dark";
    }

    if (footerThemeButton) {
        footerThemeButton.textContent = isDark
            ? "Light Mode"
            : "Dark Mode";
    }
}


function setTheme(theme) {

    const isDark = theme === "dark";

    /* Add/remove the class on both html and body */
    html.classList.toggle("dark-mode", isDark);
    body.classList.toggle("dark-mode", isDark);

    /* Extra attribute for reliability */
    html.dataset.theme = isDark ? "dark" : "light";
    body.dataset.theme = isDark ? "dark" : "light";

    /* Save theme */
    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );

    /* Update buttons */
    updateThemeButtons(isDark);
}


function toggleTheme() {

    const currentTheme =
        localStorage.getItem("theme") || "light";

    const newTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";

    setTheme(newTheme);
}


/* =========================================================
   LANGUAGE
   ========================================================= */

function updateLanguageButtons(language) {

    if (languageButton) {

        languageButton.textContent =
            language === "en"
                ? "DE"
                : "EN";
    }

    if (footerLanguageButton) {

        footerLanguageButton.textContent =
            language === "en"
                ? "EN / DE"
                : "DE / EN";
    }
}


function setLanguage(language) {

    document
        .querySelectorAll("[data-en][data-de]")
        .forEach(element => {

            element.textContent =
                element.dataset[language];
        });

    document.documentElement.lang =
        language === "de"
            ? "de"
            : "en";

    localStorage.setItem(
        "language",
        language
    );

    updateLanguageButtons(language);
}


function toggleLanguage() {

    const currentLanguage =
        localStorage.getItem("language") || "en";

    const newLanguage =
        currentLanguage === "en"
            ? "de"
            : "en";

    setLanguage(newLanguage);
}


/* =========================================================
   EVENT LISTENERS
   ========================================================= */

if (themeButton) {

    themeButton.addEventListener(
        "click",
        toggleTheme
    );
}


if (footerThemeButton) {

    footerThemeButton.addEventListener(
        "click",
        toggleTheme
    );
}


if (languageButton) {

    languageButton.addEventListener(
        "click",
        toggleLanguage
    );
}


if (footerLanguageButton) {

    footerLanguageButton.addEventListener(
        "click",
        toggleLanguage
    );
}


/* =========================================================
   LOAD SAVED SETTINGS
   ========================================================= */

const savedTheme =
    localStorage.getItem("theme") || "light";

const savedLanguage =
    localStorage.getItem("language") || "en";


setTheme(savedTheme);
setLanguage(savedLanguage);


/* =========================================
   PROJECT RIGHTS NOTICE
   ========================================= */

const rightsNotice =
    document.getElementById("rights-notice");

const rightsNoticeAccept =
    document.getElementById("rights-notice-accept");


if (
    rightsNotice &&
    rightsNoticeAccept
) {

    const noticeAccepted =
        sessionStorage.getItem(
            "projectRightsNoticeAccepted"
        );


    if (noticeAccepted === "true") {

        rightsNotice.classList.add(
            "hidden"
        );

    }


    rightsNoticeAccept.addEventListener(
        "click",
        () => {

            sessionStorage.setItem(
                "projectRightsNoticeAccepted",
                "true"
            );

            rightsNotice.classList.add(
                "hidden"
            );

        }
    );

}
