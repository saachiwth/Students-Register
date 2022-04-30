name1=[];
function submit(){
    var student_array=[];
    for (var j=1; j<=4; j++){
        name1.push(document.getElementById("student" +j).value);
        
    }
    for (var k=0; k<name1.length; k++){
        student_array.push("<h4> Name - "+name1[k]+"</h4>");
    }

    document.getElementById("display_name_with_comma").innerHTML=student_array;
    var remove_comma=student_array.join(" ");
    document.getElementById("display_name_without_comma").innerHTML=remove_comma;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}

function sorting(){
    name1.sort();
    var student_array=[];
    for (var k=0; k<name1.length; k++){
        student_array.push("<h4> Name - "+name1[k]+"</h4>");
    }
    document.getElementById("display_name_without_comma").innerHTML=student_array;
}
