class Table {

    constructor(props) {
        this.props = props;
        this.content = document.querySelector(".app-table-content");
        this.clean = document.querySelector(".app-clean");
        this.clean.addEventListener("click", () => this.cleanSorted());
        this.modal = new Modal(this.delete.bind(this));
        this.search = new Search(this.props, this.render.bind(this), this.activeClean.bind(this));
        this.sorting = new Sorting(this.props, this.search.searchInProps.bind(this.search), this.activeClean.bind(this));
        this.paging = new Paging();
    }

    // метод для отрисовки таблицы
    render(props = this.props) {
        this.paging.render(props, props => {
            this.content.innerHTML = "";
            props.forEach(item => {
                let tableRow = new TableRow(item, this.modal.active.bind(this.modal));
                this.content.append(tableRow.render());
            });
        });
    }

    // удаление пользователя
    delete(id) {
        this.props = this.props.filter(item => item.id != id);
        this.sorting.setProps(this.props);
        this.search.setProps(this.props);
        this.search.searchInProps(this.props);
    }

    // метод для активации очистки
    activeClean() {
        this.paging.activePage(0);
        this.clean.classList.add("active");
    }

    // метод для деактивации очистки
    disactiveClean() {
        this.clean.classList.remove("active");
    }

    // метод очистки
    cleanSorted() {
        this.search.clean();
        this.sorting.clean();
        this.render(this.props);
        this.disactiveClean();
    }

}