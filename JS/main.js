function Scroll(){
    var nav = document.getElementById("navbar");
    var skill = document.getElementsByClassName("progress");
    var yPos = window.pageYOffset;

    if(yPos > 50){
        nav.style.backgroundColor = "#1f1813";
    }else{
        nav.style.backgroundColor = "";
    }
    if(yPos > 2750){
        skill[0].style.width = "72%";
        skill[1].style.width = "85%";
        skill[2].style.width = "65%";
        skill[3].style.width = "5%";
        skill[4].style.width = "60%";
        skill[5].style.width = "35%";
        skill[6].style.width = "46%";
        skill[7].style.width = "55%";
        skill[8].style.width = "88%";
        skill[9].style.width = "42%";
        skill[10].style.width = "75%";
        skill[11].style.width = "102%";
    }else{
        for(var i = 0; i < 12; i++){
            skill[i].style.width = "";
        }
    }
}
window.addEventListener("scroll",Scroll);

var marginY = 0;
var destination;
var speed = 25;
var scroller;

function scrollToElement(elementId){
    destination = document.getElementById(elementId).offsetTop;
    window.scroll(0, destination - 150);
}

function removeAllActive(){
    document.getElementById('about-link').classList.remove('active');
    document.getElementById('skills-link').classList.remove('active');
    document.getElementById('education-link').classList.remove('active');
    document.getElementById('view-link').classList.remove('active');
}

function setActiveElement(){
    var yPos = window.pageYOffset;

    if(yPos < 1500){
        removeAllActive();
        document.getElementById('about-link').classList.add('active');
    }

    if(yPos > 1500){
        removeAllActive();
        document.getElementById('education-link').classList.add('active');
    }

    if(yPos > 2850){
        removeAllActive();
        document.getElementById('skills-link').classList.add('active');
    }

    if(yPos > 3850){
        removeAllActive();
        document.getElementById('view-link').classList.add('active');
    }
}

window.addEventListener("scroll",setActiveElement);


// Local Database

db = null

if(db == null){
    var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

	db.transaction(function (tx) { 
       tx.executeSql('CREATE TABLE IF NOT EXISTS like_count_database (likes varchar(255), like_count)');
       tx.executeSql('INSERT INTO like_count_database(likes) SELECT * FROM(SELECT "Likes") AS tmp WHERE NOT EXISTS (SELECT likes FROM like_count_database WHERE likes = "Likes" )')   
	});
}


if(db != null){
    db.transaction(
    function (transaction) {
        transaction.executeSql(
        'SELECT * FROM like_count_database;',
        [],
        processResult,
        function errorHandler(transaction, error){
            console.error("Error reading records: " + error.code + ": " + error.message);
        }
        );
    }
    );
}

function processResult(transaction, results){
    likeCount = results.rows.item(0).like_count;
    initVal = 0
    db.transaction(function(tx){
        tx.executeSql('UPDATE like_count_database SET like_count = ? WHERE likes = "Likes" ',[initVal+likeCount+1]);
        displayViewCount();
    })
  }

function displayViewCount(){
    document.getElementById("like-count").innerHTML = likeCount;
}

function likePage(){
    document.getElementById("dislike-button").style.display = "none";
    document.getElementById("dislike-tag").innerHTML = "Thank You :)"
}

function disLikePage(){
    document.getElementById("like-button").style.display = "none";
    document.getElementById("like-tag").innerHTML = "Aww :/"
}

