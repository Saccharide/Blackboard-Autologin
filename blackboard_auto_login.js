// ==UserScript==
// @name         Blackboard Auto-login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Sacchride
// @include *
// @match        http://*
// @match        https://*
// @grant        none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// ==/UserScript==

window.onload = function(e){
    try{
        if (window.location.href.slice(0,37) == "https://cas.wm.edu/cas/login?service="){
                try{
                     console.log("Shouldn't happen1");
                    if (window.location.href.slice(0,37) == "https://cas.wm.edu/cas/login?service="){
                        
                        // Edit to your own username
                        document.getElementById('username').value   = "USERNAME_HERE";
                        
                        // Edit to your own password
                        document.getElementById('password').value   = "PASSWORD_HERE";
                        document.getElementsByClassName("btn btn-submit btn-block")[0].removeAttribute("disabled");
                        document.getElementsByClassName("btn btn-submit btn-block")[0].click();
                    }
                    else{
                        console.log("Shouldn't happen3");
                    }
                }
                catch(err){
                    console.log("This current page is not Blackboard Login page.");
                }
        }
    }
    catch(err){
        console.log("Not Blackboard Login screen!");
    }
};
