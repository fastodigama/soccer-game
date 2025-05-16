window.onload = domReady;

function domReady() {

    //HTML elements
    let soccerBall = document.getElementById("soccer-ball");
    let centerShoot = document.getElementById("center-shoot-btn");
    let leftShoot = document.getElementById("left-shoot-btn");
    let rightShoot = document.getElementById("right-shoot-btn");
    let bottomLeftShoot = document.getElementById("bottom-left-shoot-btn");
    let bottomRightShoot = document.getElementById("bottom-right-shoot-btn")
    let bottomCenterShoot = document.getElementById("bottom-center-shoot-btn");
    let goalKeeper = document.getElementById("goalkeeper");
    let goalNet = document.getElementById("goal-net");
    let feedback = document.getElementById("feedback_h1");
    feedback.innerText = "Shoot"


//right shoot
    rightShoot.addEventListener("click", function () {

        soccerBall.classList.remove("center-shoot", "left-shoot", "right-shoot","bottom-left-shoot","bottom-right-shoot","bottom-center-shoot");

        goalKeeperRandomJump();

        void soccerBall.offsetHeight;
        soccerBall.classList.add("right-shoot");



    });

    //center shoot

    centerShoot.addEventListener("click", function () {

        soccerBall.classList.remove("center-shoot", "left-shoot", "right-shoot","bottom-left-shoot","bottom-right-shoot", "bottom-center-shoot"); //clear any animation classes before adding the animation

        goalKeeperRandomJump(); //keeper will pick a random direction
        void soccerBall.offsetHeight; //restart a CSS animation or transition
        soccerBall.classList.add("center-shoot");




    });
//left shoot
    leftShoot.addEventListener("click", function () {

        soccerBall.classList.remove("center-shoot", "left-shoot", "right-shoot","bottom-left-shoot","bottom-right-shoot","bottom-center-shoot");

        goalKeeperRandomJump();
        void soccerBall.offsetHeight;
        soccerBall.classList.add("left-shoot");

    });

    bottomLeftShoot.addEventListener("click", function() {
        soccerBall.classList.remove("center-shoot", "left-shoot", "right-shoot","bottom-left-shoot","bottom-right-shoot","bottom-center-shoot");
        goalKeeperRandomJump();
        void soccerBall.offsetHeight;
        soccerBall.classList.add("bottom-left-shoot");

    });

    bottomCenterShoot.addEventListener("click", function() {
        soccerBall.classList.remove("center-shoot", "left-shoot", "right-shoot","bottom-left-shoot","bottom-right-shoot","bottom-center-shoot");
        goalKeeperRandomJump();
        void soccerBall.offsetHeight;
        soccerBall.classList.add("bottom-center-shoot");

    });

    bottomRightShoot.addEventListener("click", function() {
        soccerBall.classList.remove("center-shoot", "left-shoot", "right-shoot","bottom-left-shoot","bottom-right-shoot");
        goalKeeperRandomJump();
        void soccerBall.offsetHeight;
        soccerBall.classList.add("bottom-right-shoot");

    });
//keeper random jump , will call this function on any shoot
    function goalKeeperRandomJump() {
        let jumpDirectionArray = ["goalkeeper-jump-left", "goalkeeper-jump-right", "goalkeeper-jump-center","goalkeeper-jump-bottom-left","goalkeeper-jump-bottom-right","goalkeeper-jump-bottom-center"]
        let randomJump = jumpDirectionArray[Math.floor(Math.random() * jumpDirectionArray.length)];
        goalKeeper.classList.remove("goalkeeper-jump-left", "goalkeeper-jump-right", "goalkeeper-jump-center","goalkeeper-jump-bottom-left","goalkeeper-jump-bottom-right","goalkeeper-jump-bottom-center");
        void goalKeeper.offsetHeight;
        goalKeeper.classList.add(randomJump);
        console.log(randomJump);
        

    }


    function checkCollision() {
         // Get the current positions and sizes of the ball, goalkeeper, and goal net
        let ball = soccerBall.getBoundingClientRect();
        let keeper = goalKeeper.getBoundingClientRect();
        let goal = goalNet.getBoundingClientRect();

         // Check if the ball and the goalkeeper are over eachother then it is a save
        if (
            ball.left < keeper.right &&
            ball.right > keeper.left &&
            ball.top < keeper.bottom &&
            ball.bottom > keeper.top
        ) {

            feedback.classList.add("saved-font")
            feedback.innerText = "Saved";
            goalKeeper.classList.add("happy-face");
        } else if (// Check if the ball hits the goal net  the its a goal
            ball.left < goal.right &&
            ball.right > goal.left &&
            ball.top < goal.bottom &&
            ball.bottom > goal.top
        ) {

            feedback.classList.add("goal-font")
            goalKeeper.classList.remove("happy-face");
            feedback.innerText = "GOAL!";
           


        } else { //might happen on smaller screens if the ball went outside the net
            console.log("Missed!");
            feedback.innerText = "Missed!";
        }
    }
//checks collision once the animation ended
    soccerBall.addEventListener("animationend", function () {
        checkCollision();
    })
//display shooting when the ball is going to the net
    soccerBall.addEventListener("animationstart", function () {
        feedback.classList.remove("goal-font", "saved-font")
        feedback.innerHTML = "SHOOTING..."
    })


}
