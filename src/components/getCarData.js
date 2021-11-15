import axios from "axios";

export default async function getCarData(self) {

    var config = {
        method: 'get',
        url: 'https://api.thingspeak.com/channels/1554284/feeds.json?results=1',
        headers: {
            'Content-Type': 'application/json'
        }
    };


    await axios(config)
        .then(function (response) {
            // console.log(response.data)
            let data = response.data.feeds;
            data = data[0];
            const { field1, field2, field3, field4, field5 } = data;
            self.setState({
                "top": field1,
                "left": field2,
                "right": field3,
                "bottom": field4,
                "temperature": field5
            })
            // response.data;
        })
        .catch(function (error) {
            console.log(error);
        });

}