class Details {
    constructor(firstName, lastName, mobile, email, country, profession, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile = mobile;
        this.email = email;
        this.country = country;
        this.profession = profession;
        this.gender = gender;
    }
}

class UI {
    static displayDetails(details) {
        const tableBody = document.querySelector(".table tbody");
        const newRow = tableBody.insertRow();

        const values = Object.values(details);
        values.forEach(value => {
            const newCell = newRow.insertCell();
            newCell.textContent = value;
        });
    }
}

document.querySelector(".form").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;

    const firstName = form.querySelector("#first-name").value;
    const lastName = form.querySelector("#last-name").value;
    const mobileNumber = form.querySelector("#mobile").value;
    const email = form.querySelector("#email").value;
    const country = form.querySelector("#country").value;
    const profession = form.querySelector("#profession").value;
    const gender = form.querySelector("input[name='gender']:checked").value;

    const details = new Details(firstName, lastName, mobileNumber, email, country, profession, gender);

    UI.displayDetails(details);

    form.reset();
});
