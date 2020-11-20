let qNum = document.querySelectorAll("span.qNumber"); // Spans de numeração

let qst = 1; // Questão atual

let hash, quest

let buttons = document.querySelectorAll(".questions button");

let gO = 0; // GameOver statement

let qNumber = (q) => {
    if (qst == 13) {
        qNum[q].innerHTML = "?" + " - ";
    } else {
        qNum[q].innerHTML = qst + " - ";
    }
}; // Printando numero da questão

//buttons.forEach(n => {buttons[n].addEventListener("click", setTimeout(console.log("a"), 2000)});

let nxtQ = (alt) => {

    hash = CryptoJS.SHA256(alt).toString();

    console.log(qst);

    if (qst == 7) {
        document.querySelector("span.omg").addEventListener("click", () => {
            document.querySelector(`.q${qst}`).style.display = "none";
            qst = 9;
            document.querySelector(`.q${qst}`).style.display = "inline";
            qNumber(qst - 1);
        });
    } else if (qst == 14) {
        document.querySelector("span.htl").addEventListener("click", () => {
            document.querySelector(`.q${qst}`).style.display = "none";
            document.querySelector(`.q${qst + 1}`).style.display = "inline";
            qst = 16;
            qNumber(qst - 1);
        });
    }

    if (hash == asw[qst - 1]) {

        buttons[parseFloat(alt) + 4 * (qst - 1)].style.animation = "yey .8s ease-in-out";
        quest = buttons[parseFloat(alt) + 4 * (qst - 1)].innerHTML
        buttons[parseFloat(alt) + 4 * (qst - 1)].innerHTML = '<i class="fas fa-check-circle"></i>';

        setTimeout(function () {
            buttons[parseFloat(alt) + 4 * (qst - 1)].style.animation = "";
            buttons[parseFloat(alt) + 4 * (qst - 1)].innerHTML = quest
            document.querySelector(`.q${qst}`).style.display = "none";
            document.querySelector(`.q${qst + 1}`).style.display = "inline";
            qst++;
            qNumber(qst - 1);
        }, 800);

    } else {
        if (qst == 10) {
            if (alt == 0) {
                createPopUp("Faz sentido!", "Mas ainda não é esse, e parabéns pelo raciocínio!"
                );
            }
        } else if (qst == 16) {
            if (alt == 2) {
                createPopUp("Boa idéia!", "Pergunta lá então e depois volta pra responder!");
            }
        } else {
            gO = 1;
            buttons[parseFloat(alt) + 4 * (qst - 1)].style.animation =
                "error 2s ease-in-out";
            buttons[parseFloat(alt) + 4 * (qst - 1)].style.backgroundColor =
                "#FF373C";
            buttons[parseFloat(alt) + 4 * (qst - 1)].style.color = "#FFF";
            setTimeout(function () {
                buttons[parseFloat(alt) + 4 * (qst - 1)].style.animation = "";
                buttons[parseFloat(alt) + 4 * (qst - 1)].style.color = "";
                buttons[parseFloat(alt) + 4 * (qst - 1)].style.backgroundColor = "";
                gameOver();
            }, 2000);
        }
    }
}; // Conferindo resposta

window.onload = () => {
    qNumber(qst - 1); // Numerando a primeira questão
};

let closePopUp = () => {
    document.querySelector(".popUps").style.display = "none";
};

let popUpTitle, popUpDesc;

let createPopUp = (title, desc) => {
    document.querySelector(".popUps").style.display = "inline";
    popUpTitle = document.querySelector(".popTitle");
    popUpTitle.innerHTML = title;
    popUpDesc = document.querySelector(".popDesc");
    popUpDesc.innerHTML = desc;
};

let jogar = () => {
    document.querySelector(".menu").style.display = "none"
   document.querySelector(".q.q1").style.display= "inline"
}