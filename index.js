opt=["rock","paper","scissor"]
player=""
computer=""
playerp=0
comp=0

function comchoice(){
    ran=Math.floor(Math.random()*3)
    return opt[ran]
}

function selr(){
    document.getElementById("final").textContent = ""
    player=opt[0]
    computer= comchoice()
    document.getElementById("players").textContent=player
    document.getElementById("coms").textContent=computer
    check()
    document.getElementById("playerp").textContent=playerp
    document.getElementById("comp").textContent=comp
    check2()     
}

function selp(){
    document.getElementById("final").textContent = ""
    player=opt[1]
    computer= comchoice()
    document.getElementById("players").textContent=player
    document.getElementById("coms").textContent=computer
    check()
    document.getElementById("playerp").textContent=playerp
    document.getElementById("comp").textContent=comp
    check2()
}

function sels(){
    document.getElementById("final").textContent = ""
    player=opt[2]
    computer= comchoice()
    document.getElementById("players").textContent=player
    document.getElementById("coms").textContent=computer
    check()
    document.getElementById("playerp").textContent=playerp
    document.getElementById("comp").textContent=comp
    check2()
}

function check(){
    if(player=="rock"){
        if(computer=="rock")
        {
            document.getElementById("result").textContent="Draw"
        }
        else if(computer=="paper"){
            document.getElementById("result").textContent="Point for computer"
            comp++
        }
        else{
            document.getElementById("result").textContent="Point for you"
            playerp++
        }
    }

    else if(player=="paper"){
        if(computer=="rock")
        {
            document.getElementById("result").textContent="Point for you"
            playerp++
        }
        else if(computer=="paper"){
            document.getElementById("result").textContent="Draw"
        }
        else{
            document.getElementById("result").textContent="Point for computer"
            comp++
        }
    }

    else{
        if(computer=="rock")
        {
            document.getElementById("result").textContent="Point for computer"
            comp++
        }
        else if(computer=="paper"){
            document.getElementById("result").textContent="Point for you"
            playerp++
        }
        else{
            document.getElementById("result").textContent="Draw"
        }
    }
    
}

function check2(){
    if(playerp==10||comp==10){
        if(playerp==10){
            console.log("check2")
            document.getElementById("final").textContent = "You Won!"
            playerp=0
            comp=0
            document.getElementById("playerp").textContent=playerp
            document.getElementById("comp").textContent=comp
        }
        else if(comp==10){
            document.getElementById("final").textContent = "Computer Won!"
            playerp=0
            comp=0
            document.getElementById("playerp").textContent=playerp
            document.getElementById("comp").textContent=comp
        }
    }
}