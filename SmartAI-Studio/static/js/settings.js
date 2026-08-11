document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".settings-tab");
    const sections = document.querySelectorAll(".settings-section");


    tabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            const sectionName = tab.dataset.section;


            tabs.forEach(function (item) {
                item.classList.remove("active");
            });


            sections.forEach(function (section) {
                section.classList.remove("active");
            });

            tab.classList.add("active");

            const target = document.getElementById(sectionName);

            if (target) {
                target.classList.add("active");
            }

        });

    });

    const darkModeToggle =
        document.getElementById("darkModeToggle");

    const themeSelect =
        document.getElementById("themeSelect");


    function applyTheme(theme) {

        if (theme === "light") {

            document.body.classList.add("light-mode");

            if (darkModeToggle) {
                darkModeToggle.checked = false;
            }

            if (themeSelect) {
                themeSelect.value = "light";
            }

        } else {

            document.body.classList.remove("light-mode");

            if (darkModeToggle) {
                darkModeToggle.checked = true;
            }

            if (themeSelect) {
                themeSelect.value = "dark";
            }

        }

    }

    const savedTheme =
        localStorage.getItem("smartai_theme") || "dark";

    applyTheme(savedTheme);

    if (themeSelect) {

        themeSelect.addEventListener("change", function () {

            const theme = themeSelect.value;

            applyTheme(theme);

            localStorage.setItem(
                "smartai_theme",
                theme
            );

        });

    }

    if (darkModeToggle) {

        darkModeToggle.addEventListener(
            "change",
            function () {

                if (darkModeToggle.checked) {

                    applyTheme("dark");

                    localStorage.setItem(
                        "smartai_theme",
                        "dark"
                    );

                } else {

                    applyTheme("light");

                    localStorage.setItem(
                        "smartai_theme",
                        "light"
                    );

                }

            }
        );

    }

    const compactToggle =
        document.getElementById("compactToggle");


    const savedCompact =
        localStorage.getItem("smartai_compact") === "true";


    if (savedCompact) {

        document.body.classList.add("compact-mode");

        if (compactToggle) {
            compactToggle.checked = true;
        }

    }


    if (compactToggle) {

        compactToggle.addEventListener(
            "change",
            function () {

                if (compactToggle.checked) {

                    document.body.classList.add(
                        "compact-mode"
                    );

                    localStorage.setItem(
                        "smartai_compact",
                        "true"
                    );

                } else {

                    document.body.classList.remove(
                        "compact-mode"
                    );

                    localStorage.setItem(
                        "smartai_compact",
                        "false"
                    );

                }

            }
        );

    }

    const aiNotification =
        document.getElementById(
            "aiNotificationToggle"
        );

    const emailNotification =
        document.getElementById(
            "emailNotificationToggle"
        );


    if (
        localStorage.getItem(
            "smartai_ai_notifications"
        ) === "false"
    ) {

        if (aiNotification) {
            aiNotification.checked = false;
        }

    }


    if (
        localStorage.getItem(
            "smartai_email_notifications"
        ) === "true"
    ) {

        if (emailNotification) {
            emailNotification.checked = true;
        }

    }


    if (aiNotification) {

        aiNotification.addEventListener(
            "change",
            function () {

                localStorage.setItem(
                    "smartai_ai_notifications",
                    aiNotification.checked
                );

            }
        );

    }


    if (emailNotification) {

        emailNotification.addEventListener(
            "change",
            function () {

                localStorage.setItem(
                    "smartai_email_notifications",
                    emailNotification.checked
                );

            }
        );

    }

    const languageSelect =
        document.getElementById("languageSelect");

    const smartModeToggle =
        document.getElementById("smartModeToggle");


    const savedLanguage =
        localStorage.getItem(
            "smartai_language"
        );


    if (savedLanguage && languageSelect) {

        languageSelect.value = savedLanguage;

    }


    if (
        localStorage.getItem(
            "smartai_smart_mode"
        ) === "false"
    ) {

        if (smartModeToggle) {
            smartModeToggle.checked = false;
        }

    }


    if (languageSelect) {

        languageSelect.addEventListener(
            "change",
            function () {

                localStorage.setItem(
                    "smartai_language",
                    languageSelect.value
                );

            }
        );

    }


    if (smartModeToggle) {

        smartModeToggle.addEventListener(
            "change",
            function () {

                localStorage.setItem(
                    "smartai_smart_mode",
                    smartModeToggle.checked
                );

            }
        );

    }

    const saveButton =
        document.getElementById("saveSettings");

    const saveMessage =
        document.getElementById("saveMessage");


    if (saveButton) {

        saveButton.addEventListener(
            "click",
            function () {

                const theme =
                    themeSelect
                        ? themeSelect.value
                        : "dark";


                localStorage.setItem(
                    "smartai_theme",
                    theme
                );


                if (compactToggle) {

                    localStorage.setItem(
                        "smartai_compact",
                        compactToggle.checked
                    );

                }


                if (aiNotification) {

                    localStorage.setItem(
                        "smartai_ai_notifications",
                        aiNotification.checked
                    );

                }


                if (emailNotification) {

                    localStorage.setItem(
                        "smartai_email_notifications",
                        emailNotification.checked
                    );

                }


                if (languageSelect) {

                    localStorage.setItem(
                        "smartai_language",
                        languageSelect.value
                    );

                }


                if (smartModeToggle) {

                    localStorage.setItem(
                        "smartai_smart_mode",
                        smartModeToggle.checked
                    );

                }

                if (saveMessage) {

                    saveMessage.textContent =
                        "✓ Settings saved successfully!";

                    setTimeout(function () {

                        saveMessage.textContent = "";

                    }, 2500);

                }

            }
        );

    }

});

function editName() {

    const currentName =
        document.querySelector(
            ".account-info strong"
        )?.textContent.trim() || "";


    const newName =
        prompt(
            "Enter your new display name:",
            currentName
        );


    if (
        newName &&
        newName.trim() !== ""
    ) {

        alert(
            "Name updated for this session.\n\n" +
            "For permanent database update, connect this to your profile update view."
        );

    }

}

function changePassword() {

    alert(
        "Password change feature can be connected to Django password reset."
    );

}