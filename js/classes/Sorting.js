class Sorting {

    constructor(props, callback, cleanActive) {
        this.props = props;
        this.callback = callback;
        this.cleanActive = cleanActive;
        this.state = {
            date: {active: false, ascending: false},
            rating: {active: false, ascending: false},
        }
        this.ratingButton = document.querySelector(".app-sorting button.rating");
        this.dateButton = document.querySelector(".app-sorting button.date");
        this.ratingButton.addEventListener("click", () => this.sortingRating());
        this.dateButton.addEventListener("click", () => this.sortingDate());
    }

    // сортировка по рейтингу
    sortingRating() {
        document.querySelector('.rating').style.color = ' #333'
        document.querySelector('.date').style.color = '#9EAAB4'
        this.state.rating.active = true;
        this.state.rating.ascending = !this.state.rating.ascending;
        let sorted = [...this.props].sort((a, b) => a.rating < b.rating ? 1 : -1);
        if (!this.state.rating.ascending) sorted.reverse();
        this.cleanActive();
        this.callback(sorted);
    }

    // сортировка по дате
    sortingDate() {
        document.querySelector('.rating').style.color = ' #9EAAB4'
        document.querySelector('.date').style.color = ' #333'
        this.state.date.active = true;
        this.state.date.ascending = !this.state.date.ascending;
        let sorted = [...this.props].sort((a, b) => new Date(a.registration_date) < new Date(b.registration_date) ? 1 : -1);
        if (!this.state.date.ascending) sorted.reverse();
        this.cleanActive();
        this.callback(sorted);
    }

    // установка props
    setProps(props) {
        this.props = props;
    }

    // очистка
    clean() {
        document.querySelector('.rating').style.color = ' #9EAAB4'
        document.querySelector('.date').style.color = ' #9EAAB4'
        this.state = {
            date: {active: false, ascending: false},
            rating: {active: false, ascending: false},
        }
    }

}