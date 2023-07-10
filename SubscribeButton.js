var num=0;
function subscribe()
{
    num++;
    document.getElementById("title").innerHTML="Subscribed"
    document.getElementById("bell").style.display="block"
    document.getElementById("dropdown").style.display="block"
    if(num>=2)
    {
        document.getElementById("dropdownMenu").style.display="flex"
    }
}
function closeDropdown()
{
    document.getElementById("dropdownMenu").style.display="none"
}

function statusImg(path)
{
    document.getElementById("dropdownMenu").style.display="none"
    document.getElementById("bell").src=path;
}

function unsub()
{
    document.getElementById("unsubscribe").style.display="flex"
}
function unsubDis()
{
    document.getElementById("unsubscribe").style.display="none"
}

function unsubscribe()
{
    document.getElementById("title").innerHTML="Subscribe"
    document.getElementById("bell").style.display="none"
    document.getElementById("dropdown").style.display="none"
    document.getElementById("unsubscribe").style.display="none"
}