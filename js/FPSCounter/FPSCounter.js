/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * HTML
 * Add it in HTML
 <div id = "FPSCounter"></div>
 *
 * JS
 * Add FPSCount() in animation loop function - (exmp. render())
 FPSCount();
 */

var FPS_Real = 1;
var FPS_TimeStart = this.getCurrentTime();
var FPS_Frame = 0;
var FPS_FrameOld = 0;

// Returns FPS in the one second 1000ms
function getFPS() {
    var newTime = getCurrentTime();

    if (newTime - FPS_TimeStart >= 1000) {
        FPS_TimeStart = newTime;
        FPS_FrameOld = FPS_Frame;
        FPS_Frame = 0;
    }
    return FPS_FrameOld;
}

// Use in animation loop function - (exmp. render())
function FPSCount() {
    FPS_Frame++;
}

function getCurrentTime() {
    return (self.performance !== undefined && self.performance.now !== undefined) ? self.performance.now() : Date.now();
}

window.addEventListener("load", function () {
    setInterval(function () {
        document.getElementById("FPSCounter").innerHTML = "FPS: " + getFPS();
    }, 1000 / FPS_Real);
});