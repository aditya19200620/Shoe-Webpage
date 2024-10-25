document.getElementById("login-button").onclick=function()
{
    if(document.getElementById("user-info").value!='')
    {
    window.alert("Information Saved");
    window.alert(` Hello ${document.getElementById("user-info").value}, Welcome To Plotlist`);
    window.open('index.html');
    }
}
document.getElementById("register-user").onclick=function()
{
    if(document.getElementById("fullName").value!='')
        {
        window.alert("Information Saved");
        window.alert(` Hello ${document.getElementById("fullName").value}, Welcome To Plotlist`);
        window.open('index.html');
        }
}