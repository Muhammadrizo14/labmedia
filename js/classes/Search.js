class Search {

    constructor(props, callback, cleanActive) {
        this.props = props;
        this.callback = callback;
        this.cleanActive = cleanActive;
        this.search = document.querySelector(".app-search-input input");
        this.searchValue = "";
        this.search.addEventListener("input", (e) => this.change(e.target.value));
    }

    // метод для отслеживания изменения input
    change(value) {
        this.searchValue = value.toLowerCase();
        this.searchInProps(this.props);
    }

    // метод для поиска
    searchInProps(props) {
        this.props = props;
        let sorted = [...this.props].filter(item => 
            item.username.toLowerCase().includes(this.searchValue) ||
            item.email.toLowerCase().includes(this.searchValue)
        )
        if(this.searchValue.length !== 0) this.cleanActive();
        this.callback(sorted);
    }

    // установка props
    setProps(props) {
        this.props = props;
    }

    // очиска
    clean() {
        this.searchValue = "";
        this.search.value = "";
    }

}