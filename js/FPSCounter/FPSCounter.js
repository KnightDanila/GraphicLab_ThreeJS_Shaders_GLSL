/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * Add it in HTML
    <div id = "FPSCounter"></div>
 */

var FPS_Real = 100;
var FPS_TimeStart = this.getCurrentTime();
var FPS_Frame = 0;
var FPS_FrameOld = 0;
function getFPS() {
    var newTime = getCurrentTime();

    if (newTime - FPS_TimeStart >= 1000) {
        FPS_TimeStart = newTime;
        FPS_FrameOld = FPS_Frame;
        FPS_Frame = 0;
    }
    return FPS_FrameOld;
}

function FPSAdd() {
    FPS_Frame++;
}

function getCurrentTime() {
    return (self.performance !== undefined && self.performance.now !== undefined) ? self.performance.now() : Date.now();
}

setInterval(function () {
    document.getElementById("FPSCounter").innerHTML = "FPS: " + getFPS();
}, 1000 / FPS_Real);