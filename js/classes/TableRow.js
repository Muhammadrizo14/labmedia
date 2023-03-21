class TableRow {

    constructor(props, callback) {
        this.props = props;
        this.callback = callback;
    }

    // метод для отрисовки строки
    render() {
        const date = new Date(this.props.registration_date);
        const div = document.createElement("div");
        div.className = "app-table-row";
        div.innerHTML = `
            <p>${this.props.username}</p>
            <p>${this.props.email}</p>
            <p>${date.toLocaleDateString()} ${date.toLocaleTimeString()}</p>
            <p>${this.props.rating}</p>
        `;
        const button = document.createElement("button");
        button.innerHTML = `
            <button onclick="${() => {this.delete()}}">
                <img src="images/cancel-icon.svg" alt="" />
            </button>
        `;
        button.addEventListener("click", () => {this.delete()});
        div.append(button);
        return div;
    }

    // удаление строки
    delete() {
        this.callback(this.props.id);
    }

}