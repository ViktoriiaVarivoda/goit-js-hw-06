const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", spanRange);
function spanRange(event) {
    span.style.fontSize = `${event.currentTarget.value}px`;
}