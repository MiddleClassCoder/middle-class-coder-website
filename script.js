function closeMenu(){
    document.querySelector(".hamburger-menu").style.display = "none";
}
function openMenu(){
    document.querySelector(".hamburger-menu").style.display = "flex";
}
function copyText(){
    navigator.clipboard.writeText("https://www.youtube.com/channel/UCccP371uMWdEopOeia1VpjA")
    alert("Channel link copied😌!! Please share our channel with your contact💖")
}