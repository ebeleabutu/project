const form = document.querySelector(".input-form");
let submit = document.getElementById("submit")
let editedLine
let alerts = document.getElementById("alert");
let dltn = document.getElementById("record");
let showTable = document.getElementById("output-tab")
let updates = document.getElementById("details");




let display = document.getElementById("output-tab");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (submit.value === "submit") {
        showTable.className = "show"

        let firstname = document.querySelector("#first-name").value;
        let lastname = document.querySelector("#last-name").value;
        let emailform = document.querySelector("#email").value;
        let gender = document.querySelector("#gender").value;
        let checkbox = document.querySelector('input[type=checkbox]').checked;




        let table = document.getElementById("output-tab").getElementsByTagName("tbody")[0];
        let newRow = table.insertRow(table.length);
        if (table.rows.length === 1) {
            row = 0
        } else {
            row = row + 1
        }

        let names = newRow.insertCell(0);
        names.innerHTML = lastname.charAt(0).toUpperCase() + lastname.slice(1) + " " + firstname.toUpperCase()
        let email = newRow.insertCell(1);
        email.innerHTML = emailform;
        let genders = newRow.insertCell(2);
        genders.innerHTML = gender
        let checkboxs = newRow.insertCell(3);

        if (checkbox == true) {
            checkboxs.innerHTML = "Yes"

        } else {
            checkboxs.innerHTML = "No";

        }


        let editbtn = newRow.insertCell(4)
        editbtn.id = "edit"
        editbtn.innerHTML = "<button>Edit</button>"

        let deletebtn = newRow.insertCell(5)
        deletebtn.id = "deletebtn"
        deletebtn.innerHTML = "<button>Delete</button>"


        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("gender").value = "";
        document.querySelector("input[type=checkbox]").checked = false;





        editbtn.addEventListener("click", function (e) {
            editedLine = e.target.parentElement.parentElement
            e.preventDefault()
            let separateNames = names.innerHTML
            let [firstname, lastname] = separateNames.split(' ')

            document.getElementById("first-name").value = lastname.toLowerCase();
            document.getElementById("last-name").value = firstname.toLowerCase();
            document.getElementById("email").value = emailform;
            document.getElementById("gender").value = gender;
            let check = e.target.parentElement.parentElement.children[3]
            if (check.innerHTML == "Yes") {
                document.querySelector("input[type=checkbox]").checked = true;

            } else { document.querySelector("input[type=checkbox]").checked = false }
            submit.value = "Update"

        })

        if (alerts.className == "show") {
            alerts.className = " "
        } else {
            alerts.classList.add("show")
            setTimeout(function () {
                alerts.classList.remove("show")
            }, 1000)
        }



        deletebtn.addEventListener("click", function (d) {
            d.preventDefault()
            d.target.parentElement.parentElement.innerHTML = '';

            row = row - 1
            console.log("this is row delete", row)
            if (row < 0) {
                showTable.className = ""
            }
            if (dltn.className == "show") {
                dltn.className = " "
            } else {
                dltn.classList.add("show")
                setTimeout(function () {
                    dltn.classList.remove("show")
                }, 1000)
            }
        })


    } else {
        editedLine.innerHTML = "";
        submit.value = "submit";
        let firstname = document.querySelector("#first-name").value;
        let lastname = document.querySelector("#last-name").value;
        let emailform = document.querySelector("#email").value;
        let gender = document.querySelector("#gender").value;
        let checkbox = document.querySelector('input[type=checkbox]').checked;
        let chechk
        if (checkbox == true) {
            chechk = "Yes"
        } else { chechk = "No" }

        let first = document.createElement("td")
        let second = document.createElement("td")
        let third = document.createElement("td")
        let forth = document.createElement("td")
        let edit = document.createElement("td")
        let Delete = document.createElement("td")

        first.textContent = lastname.charAt(0).toUpperCase() + lastname.slice(1) + " " + firstname.toUpperCase();
        second.textContent = emailform;
        third.textContent = gender;
        forth.textContent = chechk;

        edit.innerHTML = "<button >Edit</button>";

        Delete.innerHTML = "<button>Delete</button>"

        editedLine.appendChild(first)
        editedLine.appendChild(second)
        editedLine.appendChild(third)
        editedLine.appendChild(forth)
        editedLine.appendChild(edit)
        editedLine.appendChild(Delete)

        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("gender").value = "";
        document.querySelector("input[type=checkbox]").checked = false;

        edit.addEventListener("click", function (e) {
            editedLine = e.target.parentElement.parentElement;
            e.preventDefault()
            let separateNames = first.innerHTML
            let [firstname, lastname] = separateNames.split(' ')

            document.getElementById("first-name").value = lastname.toLowerCase();
            document.getElementById("last-name").value = firstname.toLowerCase();
            document.getElementById("email").value = emailform;
            document.getElementById("gender").value = gender;
            let check = e.target.parentElement.parentElement.children[3]
            if (check.innerHTML == "Yes") {
                document.querySelector("input[type=checkbox]").checked = true;

            } else { document.querySelector("input[type=checkbox]").checked = false }
            submit.value = "Update"
        })
        if (updates.className == "show") {
            updates.className = " "
        } else {
            updates.classList.add("show")
            setTimeout(function () {
                updates.classList.remove("show")
            }, 1000)
        }
        row = row + 1



        Delete.addEventListener("click", function (d) {
            d.preventDefault()
            d.target.parentElement.parentElement.parentElement.innerHTML = " ";
            row = row - 1
            console.log("this is row delete", row)
            if (row < 0) {
                showTable.className = ""
            }
            if (dltn.className == "show") {
                dltn.className = " "
            } else {
                dltn.classList.add("show")
                setTimeout(function () {
                    dltn.classList.remove("show")
                }, 1000)
            }



        })




    }

})
