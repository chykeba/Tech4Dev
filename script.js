//Get Elements From DOM
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const total = document.getElementById('total');
const count = document.getElementById('count');
const movieSelect = document.getElementById('movie');


//Get ticket Price
let ticketPrice = +movieSelect.value;

//Update Selected Seat
const updateSelectedSeat = () =>{
    const selectedSeat = document.querySelectorAll('.row .seat.selected');
    console.log(selectedSeat);
    const selectedSeatCount = selectedSeat.length;
    
    
    const seatIndex = [...selectedSeat].map(seat => [...seats].indexOf(seat));
    
    
    count.innerText = selectedSeatCount;
    total.innerText = selectedSeatCount * ticketPrice;
    

    
}




//Add Event Listener 
//Seat Click Event
container.addEventListener('click', e =>{
    
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateSelectedSeat();
        
    }
    
})


