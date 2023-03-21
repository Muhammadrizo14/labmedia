class Modal {

    constructor(callback) {
        this.callback = callback;
        this.id = null;
        this.modal = document.querySelector(".app-modal");
        this.deleteButton = document.querySelector(".app-modal-buttons .delete");
        this.closeButton = document.querySelector(".app-modal-buttons .close");
        this.deleteButton.addEventListener("click", () => this.delete())
        this.closeButton.addEventListener("click", () => this.disactive());
    }

    // активация modal
    active(id) {
        this.id = id;
        this.modal.classList.add("active");
    }

    // деактивация modal
    disactive() {
        this.id = null;
        this.modal.classList.remove("active");
    }

    // удаление пользователя
    delete() {
        this.callback(this.id);
        this.disactive();
    }

}