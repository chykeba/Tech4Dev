//Get Elements From DOM
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const total = document.getElementById('total');
const count = document.getElementById('count');
const movieSelect = document.getElementById('movie');



populateUI();
//Get ticket Price
let ticketPrice = +movieSelect.value;

//Save Movie Name And price To Local Storage
const setMovieData =(movieIndex, moviePrice) =>{
    
    localStorage.setItem("selectedMovie", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
}

//Update Selected Seat
const updateSelectedSeat = () =>{
    const selectedSeat = document.querySelectorAll('.row .seat.selected');
    // console.log(selectedSeat);
    const selectedSeatCount = selectedSeat.length;
    
    
    const seatIndex = [...selectedSeat].map(seat => [...seats].indexOf(seat));
    
    //Set Selected Seats to the Local Storage
    localStorage.setItem("localStorageSeats", JSON.stringify(seatIndex));
    
    
    count.innerText = selectedSeatCount;
    total.innerText = selectedSeatCount * ticketPrice;       
}


//Get Item From Local Storage And Populate UI

function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('localStorageSeats'));
    console.log(selectedSeats);
    
    if(selectedSeats !== null && selectedSeats.length > 0){
        
    seats.forEach((seat, index) => {
        if(selectedSeats.indexOf(index) > -1){
            seat.classList.add('selected');
        }
    });
    }
    
    const selectedMovieIndex = localStorage.getItem('selectedMovie');
    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}




//Add Event Listener 
//Seat Click Event
container.addEventListener('click', e =>{
    
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateSelectedSeat();
    }
})
// Movie Sellect Event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedSeat();

})



populateUI();