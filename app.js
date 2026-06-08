let 
  let reward=Math.floor(Math.random()*50);
  crypt+=reward;
  alert("You got "+reward+" CRYPT!");
}

/* UPDATE UI */
function update(){
  document.getElementById("user").innerText=user;
  document.getElementById("balance").innerText=balance;
  document.getElementById("xp").innerText=xp;
  document.getElementById("level").innerText=level;
  document.getElementById("crypt").innerText=crypt;

  document.getElementById("xpBar").style.width=(xp%(level*100))+"%";
}

/* SAVE */
function save(){
  localStorage.setItem("t",JSON.stringify({
    user,balance,xp,level,crypt
  }));
}

/* LOAD */
function load(){
  let d=JSON.parse(localStorage.getItem("t"));
  if(!d) return;
  balance=d.balance;
  xp=d.xp;
  level=d.level;
  crypt=d.crypt;
}
