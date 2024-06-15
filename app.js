// Access the elements-
let boxes = document.querySelectorAll(".box")
let msgContainer = document.querySelector(".msg-container")
let msgPara = document.querySelector(".msg")
let newGmBtn = document.querySelector("#newGm-btn")
let msgContainer2 = document.querySelector(".msg-container-2")
let msgPara2 = document.querySelector(".msg-2")
let newGmBtn2 = document.querySelector("#newGm-btn-2")

let resetBtn=document.querySelector("#reset-btn")


// PlayerO/PlayerX-
let trunO = true;

// WinningPattern-
let winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]







// Js Code-
// 1.Game logic-
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (trunO) {
            box.innerText = "O";
            trunO = false;
        }
        else {
            box.innerText = "X";
            trunO = true;
        }
        box.disabled = true;
        theWinner();
    })
})
// 2.Thewinner Function logic:

let theWinner = () => {
    for (let pattern of winningPattern) {
        let posi1 = boxes[pattern[0]].innerText;
        let posi2 = boxes[pattern[1]].innerText;
        let posi3 = boxes[pattern[2]].innerText;
        if (posi1 != "" && posi2 != "" && posi3 != "") {
            if (posi1 === posi2 && posi2 === posi3) {
                console.log("Winner", posi1)
                for (let box of boxes) {
                    box.disabled = true;
                }
                showwinner(posi1);
            } else {
                console.log("Looser", posi1)
                for (let box of boxes) {
                    box.disabled = true;
                }
                showlooser(posi1)
            }

        }

    }

}
//3.Show Winner Container Function logic:
let showwinner = (winner) => {
    msgPara.innerText = `Yeppy!,the Winer is ${winner} `
    msgContainer.classList.remove("hide")
}

//4.Show looser container function logic:
let showlooser=(looser)=>{
    msgPara2.innerText=`Ahaa!! the looser is ${looser}`
    msgContainer2.classList.remove("hide-2")
}

// 5.Enable boxes function:
let enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}



// 6.Reset Game Function logic:
let resetGame = () => {
    trunO = true;
    enableBoxes()
    msgContainer.classList.add("hide")
    msgContainer2.classList.add("hide-2")
}
newGmBtn.addEventListener("click",resetGame)
newGmBtn2.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)










