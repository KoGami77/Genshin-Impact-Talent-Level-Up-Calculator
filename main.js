var t1 = [1, 1, 1];
var t2 = [1, 1, 1];// var s1 = 1; var s2 = 1; var b1 = 1; var b2 = 1;

//Talent Books
var gold = [4, 6, 12, 16];
var silver = [2, 4, 6, 9];
var bronze = [3];

//Mora
var mora = [12500, 17500, 25000, 30000, 37500, 120000, 260000, 450000, 700000];

//Common Materials
var cmat1 = [6];
var cmat2 = [3, 4, 6, 9];
var cmat3 = [4, 6, 9, 12];

//Weekly Loots
var weekly = [0, 0, 0, 0, 0, 1, 1, 2, 2];

//Available Talent Books
var have = [0, 0, 0];

//Talent books required
var req = [0, 0, 0];

//Common Materials Needed
var cmatALL = [0, 0, 0];

function set_currentNA(){
    var selects = document.getElementById("curr_na");
    t1[0] = parseInt(selects.value);
    if(t1[0]<1){
        alert("Talent Level should in between 1 and 10");
        t1[0] = 1;
        selects.value = t1[0];
    }
    else if(t1[0]>10){
        alert("Talent Level should in between 1 and 10");
        t1[0] = 10;
        selects.value = t1[0];
    }
    //document.getElementById("tar_na").value = t1[0];
}

function set_targetNA(){
    var selects = document.getElementById("tar_na");
    t2[0] = parseInt(selects.value);
    if(t2[0]<1){
        alert("Talent Level should in between 1 and 10");
        t2[0] = 1;
        selects.value = t2[0];
    }
    else if(t2[0]>10){
        alert("Talent Level should in between 1 and 10");
        t2[0] = 10;
        selects.value = t2[0];
    }
    else if(t2[0]<t1[0]){
        alert("Target Level should be greater than Current Level");
        t2[0] = t1[0];
        selects.value = t2[0];
    }
}

function set_currentES(){
    var selects = document.getElementById("curr_es");
    t1[1] = parseInt(selects.value);
    if(t1[1]<1){
        alert("Talent Level should in between 1 and 10");
        t1[1] = 1;
        selects.value = t1[1];
    }
    else if(t1[1]>10){
        alert("Talent Level should in between 1 and 10");
        t1[1] = 10;
        selects.value = t1[1];
    }
    //document.getElementById("tar_es").value = t1[1];
}

function set_targetES(){
    var selects = document.getElementById("tar_es");
    t2[1] = parseInt(selects.value);
    if(t2[1]<1){
        alert("Talent Level should in between 1 and 10");
        t2[1] = 1;
        selects.value = t2[1];
    }
    else if(t2[1]>10){
        alert("Talent Level should in between 1 and 10");
        t2[1] = 10;
        selects.value = t2[1];
    }
    else if(t2[1]<t1[1]){
        alert("Target Level should be greater than Current Level");
        t2[1] = t1[1];
        selects.value = t2[1];
    }
}

function set_currentEB(){
    var selects = document.getElementById("curr_eb");
    t1[2] = parseInt(selects.value);
    if(t1[2]<1){
        alert("Talent Level should in between 1 and 10");
        t1[2] = 1;
        selects.value = t1[2];
    }
    else if(t1[2]>10){
        alert("Talent Level should in between 1 and 10");
        t1[2] = 10;
        selects.value = t1[2];
    }
    //document.getElementById("tar_eb").value = t1[2];
}

function set_targetEB(){
    var selects = document.getElementById("tar_eb");
    t2[2] = parseInt(selects.value);
    if(t2[2]<1){
        alert("Talent Level should in between 1 and 10");
        t2[2] = 1;
        selects.value = t2[2];
    }
    else if(t2[2]>10){
        alert("Talent Level should in between 1 and 10");
        t2[2] = 10;
        selects.value = t2[2];
    }
    else if(t2[2]<t1[2]){
        alert("Target Level should be greater than Current Level");
        t2[2] = t1[2];
        selects.value = t2[2];
    }
}

function have_gold(){
    var selects = document.getElementById("curr_4");
    var hg = parseInt(selects.value);
    if(hg<0){
        alert("Cannot be less than 0!");
        hg = 0;
        selects.value = hg;
    }
    else if(hg>999){
        alert("Cannot be less than 999!");
        hg = 999;
        selects.value = hg;
    }
    have[0] = hg;
}

function have_silver(){
    var selects = document.getElementById("curr_3");
    var hs = parseInt(selects.value);
    if(hs<0){
        alert("Cannot be less than 0!");
        hs = 0;
        selects.value = hs;
    }
    else if(hs>999){
        alert("Cannot be less than 999!");
        hs = 999;
        selects.value = hs;
    }
    have[1] = hs;
}

function have_bronze(){
    var selects = document.getElementById("curr_2");
    var hb = parseInt(selects.value);
    if(hb<0){
        alert("Cannot be less than 0!");
        hb = 0;
        selects.value = hb;
    }
    else if(hb>999){
        alert("Cannot be less than 999!");
        hb = 999;
        selects.value = hb;
    }
    have[2] = hb;
}

function books_required(){

    for(k=0; k<3; k++){
        for(i=t1[k]+1;i<=t2[k];i++){
            if(i==2){
                req[2] += bronze[0];
            }
            else if(3<=i && i<=6){
                req[1] += silver[i-3];
            }
            else if(7<=i && i<=10){
                req[0] += gold[i-7]
            }
        }
    }

    if(have[2] - req[2] > 0){
        have[1] += Math.trunc((have[2] - req[2])/3);
        req[2] = 0;
    }
    else{
        req[2] -= have[2];
    }
    if(have[1] - req[1] > 0){
        have[0] += Math.trunc((have[1] - req[1])/3);
        req[1] = 0;
    }
    else{
        req[1] -= have[1];
    }
    if(have[0] - req[0] > 0){
        req[0] = 0;
    }
    else{
        req[0] -= have[0];
    }

    document.getElementById("gold_needed").innerHTML  = "x" + req[0];
    document.getElementById("silver_needed").innerHTML  = "x" + req[1];
    document.getElementById("bronze_needed").innerHTML  = "x" + req[2];

}

function common_materials(){

    for(k=0; k<3; k++){
        for(i=t1[k]+1;i<=t2[k];i++){
            if(i==2){
                cmatALL[2] += cmat1[0];
            }
            else if(3<=i && i<=6){
                cmatALL[1] += cmat2[i-3];
            }
            else if(7<=i && i<=10){
                cmatALL[0] += cmat3[i-7]
            }
        }
    }
    
    document.getElementById("comat3_needed").innerHTML  = "x" + cmatALL[0];
    document.getElementById("comat2_needed").innerHTML  = "x" + cmatALL[1];
    document.getElementById("comat1_needed").innerHTML  = "x" + cmatALL[2];
}

function Mora(){

    var mora_cnt = 0;
    for(k=0;k<3;k++){
        for(i=t1[k]-1;i<t2[k]-1;i++){
            mora_cnt += mora[i];
        }
    }
    console.log(mora);
    console.log(mora_cnt);
    document.getElementById("mora_needed").innerHTML  = "x" + mora_cnt;
}

function WeeklyLoots(){

    var loot_cnt = 0;
    for(k=0;k<3;k++){
        for(i=t1[k]-1;i<t2[k]-1;i++){
            loot_cnt += weekly[i];
        }
    }
    //console.log(loot_cnt);
    document.getElementById("weekly_needed").innerHTML  = "x" + loot_cnt;
}

function CrownOfInsight(){

    var crowns = 0;
    for(i=0; i<3; i++){
        if(t2[i] == 10){
            crowns += 1;
        }
    }

    document.getElementById("insight").innerHTML = "x" + crowns;
}

function Calculate(){

    reset_values();

    books_required();

    common_materials();

    Mora();

    WeeklyLoots();

    CrownOfInsight();
}

function reset_values(){
    req = [0, 0, 0];
    cmatALL = [0, 0, 0];
}