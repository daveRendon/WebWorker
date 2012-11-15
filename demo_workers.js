var i=0;

timedCount();
function timedCount()
{

i=i+1;
postMessage(i);
setTimeout("timedCount()",500);
}

