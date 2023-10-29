const guests = [];

// Function to add guest information
function addInfo() {
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const country = document.getElementById('country').value;
    const roomNumber = document.getElementById('roomNumber').value;
    const arrivalDate = document.getElementById('arrivaldate').value;
    const departureDate = document.getElementById('departuredate').value;

    // Checking if any of the fields is empty before adding to the array
    if (
        !firstName ||
        !lastName ||
        !dateOfBirth ||
        !country ||
        !roomNumber ||
        !arrivalDate ||
        !departureDate
    ) {
        alert('Please fill in all fields');
        return;
    }

    // an object to store guest data
    const guestData = {
        "First Name": firstName,
        "Last Name": lastName,
        "Date Of Birth": dateOfBirth,
        "Country": country,
        "Room Number": roomNumber,
        "Arrival Date": arrivalDate,
        "Departure Date": departureDate,
    };

    // guest data to the guests array
    guests.push(guestData);
    clearInputFields();
    showAll();
}

function clearInputFields() {
    const inputFields = ['firstname', 'lastname', 'dateOfBirth', 'country', 'roomNumber', 'arrivaldate', 'departuredate'];
    inputFields.forEach((field) => {
        document.getElementById(field).value = '';
    });
}
function showAll() {
    // Get the table body where guest information will be displayed
    const tableBody = document.getElementById('guestTableBody');

    // Clear the existing table rows
    tableBody.innerHTML = '';

    guests.forEach((guestInfo) => {
        const row = tableBody.insertRow();
        for (const key in guestInfo) {
            const cell = row.insertCell();
            cell.textContent = guestInfo[key];
            
            cell.style.border = '1px solid #f16006ff'
            cell.style.wordSpacing = '5px'
        }
    });
    
}



function checkDate() {
    const currentDate = new Date();
    guests.forEach((guestInfo, index) => {
        const departureDate = new Date(guestInfo["Departure Date"]);

        if (departureDate < currentDate) {
            highlightTableRow(index);
        }
    });
}

// Function to highlight a specific table row by index
function highlightTableRow(rowIndex) {
    const tableBody = document.getElementById('guestTableBody');
    const rows = tableBody.getElementsByTagName('tr');
    const row = rows[rowIndex];
    row.style.backgroundColor = '#f16006ff';
    row.style.color = '#000';
}






    

        
       

// event listeners for the  buttons
document.getElementById('addData').addEventListener('click', addInfo);
document.getElementById('showAll').addEventListener('click', checkDate);



