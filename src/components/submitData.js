import axios from "axios"

export default function submitdata(key__pressed) {
    var data = JSON.stringify({
        "keyPressed": key__pressed
    });

    var config = {
        method: 'get',
        url: 'https://api.thingspeak.com/update?api_key=TGQ6PFH05JGIISR2&field1=' + key__pressed,
        headers: {
            'Content-Type': 'application/json',
        },
        // data: data
    };

    axios(config)
        .then(function (response) {
            console.log("resssss", JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}