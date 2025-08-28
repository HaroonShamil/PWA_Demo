document.getElementById("ping").addEventListener("click", function(){
    document.getElementById("out").textContent="JS is working";
})


//Helper file
//Runs in the background, seperate from the main page
//Offline performance, overallperformance, push notofications
if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js")
    .then(()=> console.log("Service Worker Registered"))
    .catch(err => console.log("SW registration failed", err))
}