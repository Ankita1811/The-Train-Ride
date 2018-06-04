//Getting the api key 
var api = "6kghbv065h";
//Emptyping the screen to remove the previous results
function emptyResults() 
{
    $("#results").empty();
}
//Displaying the results onto the screen 
function printdata(data)
{
    $("#results").append("<th ><a>Train Name : " + data.train.name + "</a></th><br>")
    $("#results").append("<tr><th>Station name &nbsp</th><th>Station code &nbsp</th><th>Arrival Time &nbsp   </th><th>Departure Time    </th><th>Distance travelled  </th><th>Day number   </th></tr>")
    var i=0;
    while(i<data.route.length)
    {
        var info = "<tr>><th>" + data.route[i].station.name + "    </th><th>" + data.route[i].station.code + "    </th><th>" + data.route[i].scharr + "     </th><th>" + data.route[i].schdep + "</th><th>" + data.route[i].distance + "   </th><th>" + data.route[i].day + "</th></tr><br>";
        $("#results").append(info);
        i++;
    }
}
//Obtaining information about the train 
function findtrain() 
{
    var trainnumber = document.getElementById("trainnumber").value;
    //Getting the information regarding the train from api.railwayapi.com by using the api key
    $.get("https://api.railwayapi.com/v2/route/train/" + trainnumber + "/apikey/" + api, function () 
    {
        //printing success in the console
        console.log("success");
    })
        .done(function (data) {
            console.log(data);
            emptyResults(); 
            //Checking if the data is found: If the response code is 200,
            // this means that a valid request is processed
            if (data.response_code == 200)
            {
                printdata(data);
            }
            else 
            {
                alert("Invalid train Number");
            }

        })
//I the train number obtained is not valid and data is not found
        .fail(function () 
        {
            alert("Invalid train number");
        })
}
//Initializing the Enter Key
function keyPress(e) 
{
    if (e.keyCode==13) 
    {
        findtrain();
    }
}
