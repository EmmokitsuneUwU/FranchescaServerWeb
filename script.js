//read json >:3

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById("time").textContent = formattedTime;
}
getTime();
setInterval(getTime, 1000);

function updateStatus(){
fetch('Data/services.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("statusFTP").textContent = "FTP: " + (data.FTP ? "Running 🟢" : "Offline 🔴");
        document.getElementById("statusSSH").textContent = "SSH: " + (data.SSH ? "Running 🟢" : "Offline 🔴");
        document.getElementById("statusHTTP").textContent = "HTTP: " + (data.HTTP ? "Running 🟢" : "Offline 🔴");
        document.getElementById("statusQuake2").textContent = "Quake 2: " + (data.Quake2 ? "Running 🟢" : "Offline 🔴");
        document.getElementById("statusMatrix").textContent = "Matrix: " + (data.Matrix ? "Running 🟢" : "Offline 🔴");
    });
}

updateStatus();
setInterval(updateStatus, 5000);
