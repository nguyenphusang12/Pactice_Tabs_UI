const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$('.tab-item');
const panes = $$('.tab-pane');
const line = $('.tabs .line');
const tabActive = $('.tab-item.active');
line.style.width = tabActive.offsetWidth + 'px';
line.style.left = tabActive.offsetLeft + 'px';
tabs.forEach((tab, index) => {
    var pane = panes[index];
    tab.onclick = function() {
        line.style.width = this.offsetWidth + 'px';
        line.style.left = this.offsetLeft + 'px';
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');
        this.classList.add('active');
        pane.classList.add('active');
    }
});