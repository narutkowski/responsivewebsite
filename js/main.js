if (typeof(localStorage) == 'undefined' ) {
    alert('Your browser does not support HTML5 localStorage. Try upgrading.');
} else {
    $("#student").submit(function(){
        var newDate = new Date();
        var itemId = newDate.getTime();
        var values = new Array();
        var name = $("input[name='name']").val();
        var age = $("input[name='age']").val();
        var dateOfBirth = $("input[name='dateOfBirth']").val();
 
        //strip html tags
        student = student.replace(/(<([^>]+)>)/ig, "");
        values.push(name);
        values.push(age);
        values.push(dateOfBirth);
 
        if (student != "" && age != "" && dateOfBirth != "") {
            try {
                localStorage.setItem(itemId, values.join(';'));
            } catch (e) {
                if (e == QUOTA_EXCEEDED_ERR) {
                    alert('Quota exceeded!');
                }
            }
        } else {
            alert("All fields are required.");
        }
    });
}


function getAllItems() {
    var timeLog = ""; //the variable that will hold our html
    var i = 0;
    var logLength = localStorage.length-1; //how many items are in the database starting with zero
 
    //now we are going to loop through each item in the database
    for (i = 0; i <= logLength; i++) {
        //lets setup some variables for the key and values
        var itemKey = localStorage.key(i);
        var values = localStorage.getItem(itemKey);
        values = values.split(";"); //create an array of the values
        var name = values[0];
        var age = values[1];
        var dateOfBirth = values[2];
 
        //now that we have the item, lets add it as a list item
        timeLog += '<li><strong>'+name+'</strong>: '+age+' hours - '+dateOfBirth+'</li>';
    }
 
    //if there were no items in the database
    if (timeLog == "")
        timeLog = '<li class="empty">Log Currently Empty</li>';
 
    $("#list").html(timeLog); //update the ul with the list items
}