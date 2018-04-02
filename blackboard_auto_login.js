// ==UserScript==
// @name         Blackboard Auto-login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatic login to W&M Blackboard (with CAS)
// @author       Sacchride
// @include *
// @match        http://*
// @match        https://*
// @grant        none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// ==/UserScript==

// Wait after the page loads
window.onload = function(e){

    // Try to see if the current URL link is cas.wm.edu/...
    try{
        if (window.location.href.slice(0,37) == "https://cas.wm.edu/cas/login?service="){
                try{

                    // Try to check this again, this is here for sanity check, could be removed
                    if (window.location.href.slice(0,37) == "https://cas.wm.edu/cas/login?service="){
                        
                        // Edit to your own username
                        document.getElementById('username').value   = "USERNAME_HERE";
                        
                        // Edit to your own password
                        document.getElementById('password').value   = "PASSWORD_HERE";
                        document.getElementsByClassName("btn btn-submit btn-block")[0].removeAttribute("disabled");
                        document.getElementsByClassName("btn btn-submit btn-block")[0].click();
                    }
                    else{
                        console.log("The current page is not Blackboard Login Page");
                    }
                }
                catch(err){
                    console.log("Unable to find some fields, contact me to update.");
                }
        }
        console.log("Not W&M Blackboard login page");
    }
    catch(err){
        console.log("Unable to find some fields, contact me to update.");
    }
};
