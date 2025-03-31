# Scheduled webhook via AWS

This is a simple template used to fire a Discord webhook via AWS Lambda. Discord webhook id, token, and message content are configured in EventBridge and passed to the Lambda when invoked.

Discord Webhook creation: https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks

Discord Webhook API: https://discord.com/developers/docs/resources/webhook

### Example event Json

``` 
{
    "webHookId":"Your id here",
    "webHookToken":"Your token here",
    "content": "Message here"
}
```
