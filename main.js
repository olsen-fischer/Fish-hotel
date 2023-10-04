// Initialize an array to store guest information
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

    // Check if any of the fields is empty before adding to the array
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

    // Create an object to store guest data
    const guestData = {
        "First Name": firstName,
        "Last Name": lastName,
        "Date Of Birth": dateOfBirth,
        "Country": country,
        "Room Number": roomNumber,
        "Arrival Date": arrivalDate,
        "Departure Date": departureDate,
    };

    // Add guest data to the guests array
    guests.push(guestData);

    // Clear input fields
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('dateOfBirth').value = '';
    document.getElementById('country').value = '';
    document.getElementById('roomNumber').value = '';
    document.getElementById('arrivaldate').value = '';
    document.getElementById('departuredate').value = '';
    
}

// Function to display all guest information
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


// Function to test conversion and comparison of dates
function testDateComparison() {
    if (guests.length >= 2) {
        // Get the latest two guests
        const latestGuest = guests[guests.length - 1];
        const secondLatestGuest = guests[guests.length - 2];

        // Extract arrival and departure dates
        const latestArrivalDate = new Date(latestGuest["Arrival Date"]);
        const secondLatestDepartureDate = new Date(secondLatestGuest["Departure Date"]);

        // Compare dates
        if (latestArrivalDate < secondLatestDepartureDate) {
            alert("Date comparison successful: The latest guest arrived after the previous guest's departure.");
        } else if (latestArrivalDate > secondLatestDepartureDate) {
            alert("Error: The latest guest arrived before or on the same day as the previous guest's departure.");
        } else {
            alert("Warning: The arrival date of the latest guest is the same as the departure date of the previous guest.");
        }
    }
}

// Add event listeners for the "Add" and "Show All" buttons
document.getElementById('addData').addEventListener('click', addInfo);
document.getElementById('showAll').addEventListener('click', showAll);


