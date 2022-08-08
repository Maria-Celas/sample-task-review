function switchVisible(index){
    this.visiblity();
    if(index==1){
        document.getElementById('testimony1').style.display = 'block';                            
    }
    else if(index==2){
        document.getElementById('testimony2').style.display = 'block';
    }
    else if(index==3){
        document.getElementById('testimony3').style.display = 'block';
    }
    else {
        document.getElementById('testimony4').style.display = 'block';
    }
    console.log(index);
}
function visiblity(){
    document.getElementById('testimony1').style.display = 'none';
    document.getElementById('testimony2').style.display = 'none';
    document.getElementById('testimony3').style.display = 'none';
    document.getElementById('testimony4').style.display = 'none';
}