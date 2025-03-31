import axios from "axios";

export const handler = async (event) => {
  var data = JSON.stringify({
    content: event.content,
  });

  var config = {
    method: "post",
    url: `https://discord.com/api/webhooks/${event.webHookId}/${event.webHookToken}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log("Sucess");
    })
    .catch(function (error) {
      console.log(error);
    });
};
