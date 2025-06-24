# Telegram Bot Setup Guide

## Required Environment Variables

Your NGO website needs these two environment variables to send form submissions to Telegram:

### 1. TELEGRAM_BOT_TOKEN
Format: `1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghi`
- Get this from @BotFather on Telegram
- Create a new bot with `/newbot` command
- Choose a name and username for your bot
- Copy the token provided

### 2. TELEGRAM_CHAT_ID  
Format: `-1001234567890` (for groups) or `1234567890` (for private chats)
- For group chats: Add your bot to the group, then get the chat ID
- For private chats: Start a conversation with your bot, then get your user ID

## How to Get Chat ID

### Method 1: Using Telegram Web or App
1. Add your bot to a group or start a private chat
2. Send a message to the bot
3. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Look for "chat":{"id": number in the response

### Method 2: Using @userinfobot
1. Forward any message from your group/chat to @userinfobot
2. It will show you the chat ID

## Current Setup Status
- ✓ Server code configured to use these environment variables
- ✓ All forms will automatically send to Telegram when configured
- ✓ Graceful fallback if credentials are missing (forms still work)

## Form Types That Report to Telegram
1. **Contact Form** (🟡) - Contact inquiries with full details
2. **Grant Applications** (🟢) - Complete application data with personal/financial info  
3. **Eligibility Checks** (🔍) - User eligibility verification submissions
4. **Telegram Reports** (🟠/🔴) - Issue reports with urgency levels