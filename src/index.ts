
import $ from './query';
import { init, check, hint } from './verb-manager';

init();

$("app__button_check").addEventListener("click", () => {
    check();
})

$("app__button_hint").addEventListener("click", () => {
    hint();
})

window.addEventListener("keyup", (e) => {
    if (e.key == "Enter" && document.getElementsByClassName("swal2-shown").length === 0) {
        check();
    }
})
for (const i of document.getElementsByTagName("input")) {
    i.addEventListener("keyup", (e) => {
        if (e.key == "Enter" && document.getElementsByClassName("swal2-shown").length === 0) {
            check();
        }
    })
}
