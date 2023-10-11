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


function isValidDate(dateString) {
    // Use moment.js for flexible date parsing
    const parsedDate = moment(dateString, 'DD-MM-YYYY', true);
    return parsedDate.isValid();
}

// Function to test conversion and comparison of dates
function checkDate() {
    // Extract arrival and departure dates

    let arrivalDateInput = document.getElementById('arrivaldate').value;
    let departureDateInput = document.getElementById('departuredate').value;
    
    let arrivalDate = new Date(arrivalDateInput)
    let departureDate = new Date(departureDateInput)
    

    console.log("Arrival Date:", arrivalDate);
    console.log("Departure Date:", departureDate);

    let result;
    let bgColor;

    if (arrivalDate > departureDate) {
        result = "Error: The latest guest's arrival date is after the previous guest's departure date.";
        document.getElementById('output').style.color = 'red';
        bgColor = 'red';
    } else {
        result = "Date comparison successful: The latest guest arrived on or before the previous guest's departure date.";
        document.getElementById('output').style.color = 'green';
        bgColor = '';
    }
    document.getElementById('output').innerHTML = result;

    const rowElement = document.getElementById('guestTableBody');
    rowElement.style.backgroundColor = bgColor;
}



    

        
       

// Add event listeners for the "Add" and "Show All" buttons
document.getElementById('addData').addEventListener('click', addInfo);
document.getElementById('showAll').addEventListener('click', showAll);
document.getElementById('checkDate').addEventListener('click', checkDate);



