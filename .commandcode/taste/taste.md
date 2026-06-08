# Taste (Continuously Learned by [CommandCode][cmd])

[cmd]: https://commandcode.ai/

# agent-browser
- When agent-browser screenshots are black/empty, first check if the browser actually navigated to the URL (address bar blank = URL not reached), before investigating rendering/JS issues. Confidence: 0.70
- On Apple Silicon (darwin-arm64), agent-browser headless mode gets stuck at about:blank — use --headed flag WITHOUT --args (--args interferes with --headed, also causing about:blank). Confidence: 0.85
