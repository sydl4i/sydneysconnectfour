document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1

    const winningArrays= [
        [0, 1, 2, 3],
        [41, 40, 39, 38],
        [7, 8, 9, 10],
        [34, 33, 32, 31],
        [14, 15, 16, 17],
        [27, 26, 25, 24],
        [21, 22, 23, 24],
        [20, 19, 18, 17],
        [28, 29, 30, 31],
        [13, 12, 11, 10],
        [35, 36, 37, 38],
        [6, 5, 4, 3],
        [0, 7, 14, 21],
        [41, 34, 27, 20],
        [1, 8, 15, 22],
        [40, 33, 26, 19],
        [2, 9, 16, 23],
        [39, 32, 25, 18],
        [3, 10, 17, 24],
        [38, 31, 24, 17],
        [4, 11, 18, 25],
        [37, 30, 23, 16],
        [5, 12, 19, 26],
        [36, 29, 22, 15],
        [6, 13, 20, 27],
        [35, 28, 21, 14],
        [0, 8, 16, 24],
        [41, 33, 25, 17],
        [7, 15, 23, 31],
        [34, 26, 18, 10],
        [14, 22, 30, 38],
        [27, 19, 11, 3],
        [35, 29, 23, 17],
        [6, 12, 18, 24],
        [28, 22, 16, 10],
        [13, 19, 25, 31],
        [21, 15, 9, 3],
        [20, 26, 32, 38],
        [36, 30, 24, 18],
        [5, 11, 17, 23],
        [37, 31, 25, 19],
        [4, 10, 16, 22],
        [2, 10, 18, 26],
        [39, 31, 23, 15],
        [1, 9, 17, 25],
        [40, 32, 24, 16],
        [9, 17, 25, 33],
        [8, 16, 24, 32],
        [11, 17, 23, 29],
        [12, 18, 24, 30],
        [1, 2, 3, 4],
        [5, 4, 3, 2],
        [8, 9, 10, 11],
        [12, 11, 10, 9],
        [15, 16, 17, 18],
        [19, 18, 17, 16],
        [22, 23, 24, 25],
        [26, 25, 24, 23],
        [29, 30, 31, 32],
        [33, 32, 31, 30],
        [36, 37, 38, 39],
        [40, 39, 38, 37],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 16, 23, 30],
        [10, 17, 24, 31],
        [11, 18, 25, 32],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
      ]

    // function checkCandidates(index, cssName, callbackId) {
    //     // Look for the three adjacent cells, as defined by callbackId().
    //     for (let i = 1; i <= 3; i++) {
    //       let id = callbackId(index, i);
    //       if (!squares[id].classList.contains(cssName)) {
    //         return false;
    //       }
    //     }
    //     return true;
    //   }
    
    // function checkWinner(index, player) {
    //     const cssName = (player == 2) ? 'player-two' : 'player-one';
    //     const cellPos = (index + 1);
    //     const cellRow = Math.ceil(cellPos / 7);
    //     const cellCol = Math.ceil(cellPos - ((cellRow - 1) * 7));
    
    //     // Check bottom cells (after, in the same column).
    //     if (cellRow < 4 && checkCandidates(index, cssName, (index, i) => index + (7 * i))) {
    //       return true;
    //     }
    //     // Check left cells (before, in the same row).
    //     if (cellCol >= 4 && checkCandidates(index, cssName, (index, i) => index - i)) {
    //       return true;
    //     }
    //     //  Check top cells (before, in the same column).
    //     if (cellRow >= 4 && checkCandidates(index, cssName, (index, i) => index - (7 * i))) {
    //       return true;
    //     }
    //     //  Check right cells (after, in the same column).
    //     if (cellCol <= 4 && checkCandidates(index, cssName, (index, i) => index + i)) {
    //       return true;
    //     }
    
    //     // No winner yet!
    //     return false;
    //   }

    function removeTaken() {
        //there has to be a better way to do this... ask someone : use !
        for (let i = 0; i < squares.length; i++){ 
            if (squares[i].classList.contains('taken')){
            } else {
                squares[i].style.setProperty('border', '1px solid')
            }
    }}

    function addGuides() {
        //add borders to the divs you can actually put a thing into - define each square w 2d array, identify what row and column - nested array
        //create an array w/
        //make a function that assigns each grid div (square) id of row-column - everytime access specific cell .documentgetElementbyId row-column
        //iterate w documentqueryselector in each iterate over the boxes inside of those iterate each row to get each individual square 2d push all elements in 2d array
        //use square.length - 7
        for (let i = 0; i < squares.length - 7; i++){ 
            if (squares[i+7].classList.contains('taken') &&
                !squares[i].classList.contains('player-one') &&
                !squares[i].classList.contains('player-two')){
                squares[i].style.setProperty('border', '1px red solid')
            }
    }}

    function removeGuides() {
        for (let i = 0; i < squares.length - 7; i++){ 
            if (squares[i+7].classList.contains('taken')){
                squares[i].style.setProperty('border', '1px solid')
            }
    }}

    function checkBoard() {
        for (let y = 0; y < winningArrays.length; y++) {
            const square1 = squares[winningArrays[y][0]]
            const square2 = squares[winningArrays[y][1]]
            const square3 = squares[winningArrays[y][2]]
            const square4 = squares[winningArrays[y][3]]
            //check those squares to see if they all have the class of player-one 
            if (
                square1.classList.contains('player-one') &&
                square2.classList.contains('player-one') &&
                square3.classList.contains('player-one') &&
                square4.classList.contains('player-one')
            ){
                result.innerHTML = 'Player One Winsss woooooo #1 babyyyy'
            }
            //check those squares to see if they all have the class of player-two
            if (
                square1.classList.contains('player-two') &&
                square2.classList.contains('player-two') &&
                square3.classList.contains('player-two') &&
                square4.classList.contains('player-two')
            ){
                result.innerHTML = 'Player Two Winsss woooooo yeahhhhhh'
            }
        }
    }

    let intervalId

    //use setTimeout?

    // use this later IMPORTANT
    function drawPlayer(counter, player, i) {
        //continue figuring out how to animate this
        for (;counter > 0; counter--) {
            squares[i].classList.remove(player)
            squares[i-counter].classList.add(player)
        }
        // if (counter > 0){
        //     console.log(counter)
        //     counter--
        // }
    }

    //use this one later IMPORTANT
    function animatePlayer() {
        if (!intervalId) {
            intervalId = setInterval (drawPlayer, 1000)
        }
    }

    //squares[i].style.setProperty('border', '1px red solid')

    removeTaken()
    addGuides()

    for (let i = 0; i < squares.length; i++){
        squares[i].onclick = () => {
            //if the square below your current square is taken, you can go on top of it
            if (squares[i+7].classList.contains('taken')) {
                if (currentPlayer == 1) {
                    removeGuides()
                    squares[i].classList.add('taken')
                    squares[i].classList.add('player-one')
                    addGuides()
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                } else if (currentPlayer == 2) {
                    removeGuides()
                    squares[i].classList.add('taken')
                    squares[i].classList.add('player-two')
                    currentPlayer = 1
                    addGuides()
                    displayCurrentPlayer.innerHTML = currentPlayer
                } else alert('you cant go here nananana booboo')

            } else alert('you cant go here nananana booboo')
            checkBoard()
        }
    }

})