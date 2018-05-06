(function() {
    var elem = document.querySelectorAll('.cross-zero__elem')
    var cell = [];
    for (var i=0; i<9; i++) {
        cell[i] = 0;
    } 
    for(var i=0; i<elem.length; i++){
        elem[i].addEventListener('click', function(e) {
            if (this.innerText == "") {
                this.style.color = '#00008a';
                this.innerText = "X";
                cell[e.target.id] = 1;
                // console.log(cell)
                if (CheckVictory() == true) {
                    alert("Ты выиграл. Поздравляю.");
                    GameOver();
                    CompTurn();
                } else {
                    CheckNobody();
                    CompTurn();
                    CheckNobody();
                }
            }
        })
    }
    function CheckVictory() {
        if (cell[0] == cell[1] && cell[1] == cell[2] && cell[2] > 0){return true}; 
        if (cell[3] == cell[4] && cell[4] == cell[5] && cell[5] > 0){return true}; 
        if (cell[6] == cell[7] && cell[7] == cell[8] && cell[8] > 0){return true}; 
        if (cell[6] == cell[3] && cell[3] == cell[0] && cell[0] > 0){return true}; 
        if (cell[7] == cell[4] && cell[4] == cell[1] && cell[1] > 0){return true}; 
        if (cell[8] == cell[5] && cell[5] == cell[2] && cell[2] > 0){return true}; 
        if (cell[6] == cell[4] && cell[4] == cell[2] && cell[2] > 0){return true}; 
        if (cell[0] == cell[4] && cell[4] == cell[8] && cell[8] > 0){return true}; 
    }
    function GameOver() {
        for (var i=0; i<9; i++) {
            cell[i] = 0;
        } 
        for(var i=0; i<elem.length; i++){
            elem[i].innerText = "";
        }   
    }
    function CompTurn() {
        for (i=0; i<9; i++){
            if (cell[i] == 0){
                PutHere = i; 
            } 
        } 
        for (i=0; i<3; i++) {
            if (cell[0] == cell[1] && cell[2] == 0 && cell[0] == i) {PutHere = 2};
            if (cell[0] == cell[2] && cell[1] == 0 && cell[0] == i) {PutHere = 1};
            if (cell[1] == cell[2] && cell[0] == 0 && cell[2] == i) {PutHere = 0};
            if (cell[3] == cell[4] && cell[5] == 0 && cell[3] == i) {PutHere = 5};
            if (cell[3] == cell[5] && cell[4] == 0 && cell[3] == i) {PutHere = 4};
            if (cell[4] == cell[5] && cell[3] == 0 && cell[5] == i) {PutHere = 3};
            if (cell[6] == cell[7] && cell[8] == 0 && cell[6] == i) {PutHere = 8};
            if (cell[6] == cell[8] && cell[7] == 0 && cell[6] == i) {PutHere = 7};
            if (cell[7] == cell[8] && cell[6] == 0 && cell[8] == i) {PutHere = 6};
        
            if (cell[6] == cell[3] && cell[0] == 0 && cell[6] == i) {PutHere = 0};
            if (cell[6] == cell[0] && cell[3] == 0 && cell[6] == i) {PutHere = 3};
            if (cell[3] == cell[0] && cell[6] == 0 && cell[3] == i) {PutHere = 6};
            if (cell[7] == cell[4] && cell[1] == 0 && cell[7] == i) {PutHere = 1};
            if (cell[7] == cell[1] && cell[4] == 0 && cell[7] == i) {PutHere = 4};
            if (cell[4] == cell[1] && cell[7] == 0 && cell[4] == i) {PutHere = 7};
            if (cell[8] == cell[5] && cell[2] == 0 && cell[8] == i) {PutHere = 2};
            if (cell[8] == cell[2] && cell[5] == 0 && cell[8] == i) {PutHere = 5};
            if (cell[5] == cell[2] && cell[8] == 0 && cell[5] == i) {PutHere = 8};
        
            if (cell[6] == cell[4] && cell[2] == 0 && cell[6] == i) {PutHere = 2};
            if (cell[6] == cell[2] && cell[4] == 0 && cell[6] == i) {PutHere = 4};
            if (cell[4] == cell[2] && cell[6] == 0 && cell[4] == i) {PutHere = 6};
            if (cell[0] == cell[4] && cell[8] == 0 && cell[0] == i) {PutHere = 8};
            if (cell[0] == cell[8] && cell[4] == 0 && cell[0] == i) {PutHere = 4};
            if (cell[4] == cell[8] && cell[0] == 0 && cell[4] == i) {PutHere = 0};
        }

        for(var i=0; i<elem.length; i++){
            elem[PutHere].style.color = "#a00000";
            elem[PutHere].innerText = "O";
        }
        cell[PutHere] = 2;
        if (CheckVictory() == true) {
          alert("Ты проиграл");
          GameOver();
        }
    }
    function CheckNobody() {
        var no = false;
        for (i=0; i<9; i++) if (cell[i] == 0) no = true;  
        if (no == false) {
          alert("Ничья.");
          GameOver();
        }
    }
})()