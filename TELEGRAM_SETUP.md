
# Telegram Bot Setup Guide

This guide will help you set up a Telegram bot for receiving application reports.

## Step 1: Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Start a conversation with BotFather
3. Send `/newbot` command
4. Follow the instructions to name your bot (e.g., "CBNF Support Bot")
5. Choose a username for your bot (must end with "bot", e.g., "cbnf_support_bot")
6. BotFather will provide you with a bot token - save this token

## Step 2: Get Your Chat ID

1. Add your bot to a group or channel where you want to receive reports
2. Send a test message in the group/channel
3. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Look for the "chat" object in the response and copy the "id" value
5. This is your chat ID (it might be negative for groups)

## Step 3: Configure Environment Variables

Add these environment variables to your Replit Secrets:

```
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

## Step 4: Test the Bot

1. Submit a test report through the application form
2. Check your Telegram chat/channel for the formatted message
3. The bot should send messages with application details formatted nicely

## Message Format

Reports will be sent in this format:
```
🟡 APPLICATION REPORT

Applicant: John Doe
Application ID: APP-2024-001
Report Type: technical_problem
Urgency: NORMAL
Contact Email: john@example.com

Details:
Unable to upload required documents due to file size limit error.

Timestamp: 2024-01-15T10:30:00.000Z
```

## Troubleshooting

- **Bot not sending messages**: Check if bot token is correct and bot has permission to send messages
- **Can't get chat ID**: Make sure the bot is added to the group/channel and has admin permissions
- **Messages not formatted**: Ensure Markdown parsing is enabled in the bot settings

## Security Notes

- Keep your bot token secret and never share it publicly
- Only add the bot to private groups/channels
- Consider setting up webhook for real-time notifications
- Regularly rotate your bot token for security
