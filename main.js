// Initializing the array to store guest information
const guests = [];

// Function to add guest information
function addInfo() {
    // Get input values
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

function clearInputFields(){
    
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('dateOfBirth').value = '';
    document.getElementById('country').value = '';
    document.getElementById('roomNumber').value = '';
    document.getElementById('arrivaldate').value = '';
    document.getElementById('departuredate').value = '';
};
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



// Checking the arrival and departure date
function checkDate() {
    const currentDate = new Date();
    const tableBody = document.getElementById('guestTableBody');
    const rows = tableBody.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const departureDateCell = row.cells[row.cells.length - 1];
        const departureDate = new Date(departureDateCell.textContent);

        if (departureDate < currentDate) {
            row.style.backgroundColor = '#f16006ff';
            row.style.color = '#000';
        }
    }
}





    

        
       

// event listeners for the  buttons
document.getElementById('addData').addEventListener('click', addInfo);
document.getElementById('showAll').addEventListener('click', checkDate);



