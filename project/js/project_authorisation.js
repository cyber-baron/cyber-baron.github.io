function savePlayerName() {
            var playerName = document.getElementById("playerName").value;
            playerName = playerName.trim();
            if (playerName !== "") {
                if (!localStorage.getItem(playerName)){
                    localStorage.setItem(playerName, 0);
                }
                window.location.href = "/project/firstLevel/firstLevel.html";
            } else{
                alert("Имя не может быть пустым!");
            }

        }