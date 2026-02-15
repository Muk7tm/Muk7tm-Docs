---
title: join-voice-bot
---

# join-voice-bot

Discord bot that automatically joins a configured voice channel and plays a welcome audio file.

## Capabilities

- Auto-join target voice channel
- Play custom `voice.mp3` file
- `!leave` command for disconnect
- `.env` token loading

## Setup

1. Install dependencies:
   `pip install -r requirements.txt`
2. Create `.env` and set:
   `DISCORD_TOKEN=your-bot-token`
3. Add `voice.mp3` to project root.
4. Set `TARGET_CHANNEL_ID` in `app.py`.
5. Start bot:
   `python app.py`

## Requirements

- Python 3.8+
- FFmpeg in system PATH

## Security Notes

- Keep `.env` private.
- Never expose bot token publicly.
