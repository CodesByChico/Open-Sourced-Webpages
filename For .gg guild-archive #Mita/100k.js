function showNotification() {
    let notification = document.createElement("div");
    notification.innerText = "DOMI NEEDS MOD YO";
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.right = "20px";
    notification.style.background = "grey";
    notification.style.color = "white";
    notification.style.padding = "15px";
    notification.style.borderRadius = "5px";
    notification.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.2)";
    notification.style.fontSize = "16px";
    notification.style.zIndex = "1000";
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
