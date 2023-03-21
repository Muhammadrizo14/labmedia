class Paging {

    constructor() {
        this.page = 0;
        this.count = 5;
        this.content = document.querySelector(".app-table-pagging");
    }

    // метод для отрисовки пагинации
    render(props, callback) {
        this.props = props;
        this.callback = callback;
        this.content.innerHTML = "";
        for(let i = 0; i < this.props.length; i += this.count) {
            let button = document.createElement("button");
            button.innerText = `${i / this.count + 1}`;
            if(i / this.count === this.page) {
                button.className = "active";
            }
            button.addEventListener("click", () => this.activePage(i / this.count));
            this.content.append(button);
        }
        this.callback(
            this.props.slice(
                this.page * this.count, 
                (this.page + 1) * this.count
            )
        );
    }

    // метод для активации нуной страницы
    activePage(active) {
        this.page = active;
        this.render(this.props, this.callback);
    }

}