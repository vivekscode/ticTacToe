let gameStatus = ["", "", "", "", "", "", "", "", ""]
        let cnt = 0;
        let boxes = document.getElementsByClassName("sm-box");
        let ticked = [false, false, false, false, false, false, false, false, false]
        const restart = document.getElementById("restart");
        restart.style.visibility="hidden";
        restart.addEventListener("click", initGame);
        for(let elem of boxes){
            elem.addEventListener("click", function(event){
                const id = Number(event.target.id);
                console.log(id);
                let imgName = cnt%2 === 0 ? "cross" : "circle";
                
                if(ticked[id] === false){
                    const imgElem = document.createElement("img");
                    imgElem.src = "./assets/" + imgName + ".png";
                    imgElem.classList.add("image");
                    elem.appendChild(imgElem);
                    ticked[id] = true;
                    gameStatus[id] = imgName;
                    console.log(gameStatus);
                    const winner = checkWinner();
                    if(winner === true){
                        console.log("Winner is " + imgName);
                        document.getElementById("winner").textContent = "Winner is "+imgName;
                        restart.style.visibility = "visible";
                        document.getElementById("box").style.visibility = "hidden";
                    }
                    cnt++;
                }
            })
        }

        function checkWinner(){
            return checkVertical() || checkHorizontal() || checkDiagonal();
        }

        function checkHorizontal(){
            if(gameStatus[0] === gameStatus[1] && gameStatus[1] === gameStatus[2] && gameStatus[0] !== ""){
                console.log("horizontal 0");
                return true;
            }
            if(gameStatus[3] === gameStatus[4] && gameStatus[4] === gameStatus[5] && gameStatus[3] !== ""){
                console.log("horizontal 3");
                return true;
            }
            if(gameStatus[6] === gameStatus[7] && gameStatus[7] === gameStatus[8] && gameStatus[6] !== ""){
                console.log("horizontal 6");
                return true;
            }

            return false;
        }

        function checkVertical(){
            if(gameStatus[0] === gameStatus[3] && gameStatus[3] === gameStatus[6] && gameStatus[0] !== ""){
                console.log("vertical 0");
                return true;
            }
            if(gameStatus[1] === gameStatus[4] && gameStatus[4] === gameStatus[7] && gameStatus[1] !== ""){
                console.log("vertical 1");
                return true;
            }
            if(gameStatus[2] === gameStatus[5] && gameStatus[5] === gameStatus[8] && gameStatus[2] !== ""){
                console.log("vertical 2");
                return true;
            }

            return false;
        }

        function checkDiagonal(){
            if(gameStatus[0] === gameStatus[4] && gameStatus[4] === gameStatus[8] && gameStatus[0] !== ""){
                console.log("diagonal 0");
                return true;
            }
            if(gameStatus[2] === gameStatus[4] && gameStatus[4] === gameStatus[6] && gameStatus[2] !== ""){
                console.log("diagonal 2");
                return true;
            }
            return false;
        }

        function initGame(){
            console.log("restarted");
            document.getElementById("winner").textContent = "";
            document.getElementById("box").style.visibility = "visible";
            gameStatus = ["", "", "", "", "", "", "", "", ""];
            ticked = [false, false, false, false, false, false, false, false, false]
            cnt = 0;
            for(let elem of boxes){
                elem.innerHTML = "";
            }
        }

