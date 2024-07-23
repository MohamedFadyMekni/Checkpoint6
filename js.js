document.addEventListener("DOMContentLoaded", () => {
    const updateTotalPrice = () => {
        let totalPrice = 0;
        document.querySelectorAll(".card").forEach(card => {
            const quantity = parseInt(card.querySelector(".qute").textContent);
            const unitPrice = parseFloat(card.querySelector(".unitt-price").textContent);
            totalPrice += quantity * unitPrice;
        });
        document.getElementById("total-price").textContent = totalPrice.toFixed(2);
    };

    document.querySelectorAll(".fa-plus-circle").forEach(button => {
        button.addEventListener("click", (event) => {
            const quteElement = event.target.nextElementSibling;
            let quantity = parseInt(quteElement.textContent);
            quteElement.textContent = ++quantity;
            updateTotalPrice();
        });
    });

    document.querySelectorAll(".fa-minus-circle").forEach(button => {
        button.addEventListener("click", (event) => {
            const quteElement = event.target.previousElementSibling;
            let quantity = parseInt(quteElement.textContent);
            if (quantity > 0) {
                quteElement.textContent = --quantity;
                updateTotalPrice();
            }
        });
    });

    document.querySelectorAll(".fa-trash-alt").forEach(button => {
        button.addEventListener("click", (event) => {
            const card = event.target.closest(".card");
            card.querySelector(".qute").textContent = 0;
            updateTotalPrice();
        });
    });
});
