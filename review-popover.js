function showContent(index){
    this.visible();
    if(index==1){
        document.getElementById('review1').style.display = 'block';                            
    }
    else if(index==2){
        document.getElementById('review2').style.display = 'block';
    }
    else if(index==3){
        document.getElementById('review3').style.display = 'block';
    }
    else if(index==4){
        document.getElementById('review4').style.display = 'block';
    }
    else {
        document.getElementById('review5').style.display = 'block';
    }
    console.log(index);
}
function visible(){
    document.getElementById('review1').style.display = 'none';
    document.getElementById('review2').style.display = 'none';
    document.getElementById('review3').style.display = 'none';
    document.getElementById('review4').style.display = 'none';
    document.getElementById('review5').style.display = 'none';
    
}