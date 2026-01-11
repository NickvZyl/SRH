# 🔧 Gemini Image MCP Setup for Cursor

## What is Gemini Image MCP?

An MCP (Model Context Protocol) server that allows Cursor to generate images using Google's Gemini API directly.

---

## 📋 Setup Instructions

### Step 1: Install the MCP Server

Open a terminal and run:

```bash
npm install -g @ikamman/gemini-image-mcp
```

Or install locally in a separate directory:

```bash
mkdir ~/mcp-servers
cd ~/mcp-servers
git clone https://github.com/ikamman/gemini-image-mcp.git
cd gemini-image-mcp
npm install
npm run build
```

---

### Step 2: Configure Cursor

1. **Open Cursor Settings**:
   - Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac)
   - Type "Preferences: Open User Settings (JSON)"
   - Or go to: Settings → Extensions → MCP

2. **Add MCP Server Configuration**:

Add this to your Cursor settings JSON:

```json
{
  "mcp": {
    "servers": {
      "gemini-image": {
        "command": "node",
        "args": [
          "C:\\Users\\nick\\AppData\\Roaming\\npm\\node_modules\\@ikamman\\gemini-image-mcp\\dist\\index.js"
        ],
        "env": {
          "GEMINI_API_KEY": "YOUR_GOOGLE_AI_API_KEY_HERE"
        }
      }
    }
  }
}
```

**OR** if you installed locally:

```json
{
  "mcp": {
    "servers": {
      "gemini-image": {
        "command": "node",
        "args": [
          "C:\\Users\\nick\\mcp-servers\\gemini-image-mcp\\dist\\index.js"
        ],
        "env": {
          "GEMINI_API_KEY": "YOUR_GOOGLE_AI_API_KEY_HERE"
        }
      }
    }
  }
}
```

3. **Replace** `YOUR_GOOGLE_AI_API_KEY_HERE` with your actual API key from `.env`

---

### Step 3: Restart Cursor

Close and reopen Cursor for the MCP server to load.

---

### Step 4: Verify It's Working

In Cursor, you should now be able to ask me to generate images and I'll use the Gemini MCP!

---

## 🎨 Alternative: Simpler Approach

If the MCP setup is complex, here's what I recommend:

### **Use the Manual Method** (Fastest & Most Reliable)

1. **Open**: https://nanobnana.com/ or https://aistudio.google.com/
2. **Use**: The prompts in `MANUAL_GENERATION_GUIDE.md`
3. **Generate**: All 8 images in 30 minutes
4. **Done**: No complex setup needed!

**Why this is better**:
- ✅ No installation required
- ✅ Visual feedback on each image
- ✅ Can regenerate if not perfect
- ✅ More control over results
- ✅ Works immediately

---

## 🤔 Which Method Should You Use?

### Use MCP If:
- You want me to generate images automatically
- You're comfortable with configuration
- You want to test MCP capabilities

### Use Manual If:
- You want results NOW (30 minutes)
- You want to see each image before accepting
- You want more control
- You want the simplest approach

---

## 💡 My Recommendation

**Go with the manual method!** Here's why:

1. **Faster**: 30 min vs 1+ hour of setup + generation
2. **Better quality control**: See each image, regenerate if needed
3. **No technical issues**: Just copy/paste prompts
4. **More reliable**: No API or MCP configuration issues

Just open `MANUAL_GENERATION_GUIDE.md` or `IMAGE_CHECKLIST.md` and start generating!

---

## 🚀 Quick Start (Manual Method)

1. Open: https://nanobnana.com/
2. Open: `IMAGE_CHECKLIST.md` in this project
3. Copy first prompt
4. Paste into Nano Banana
5. Generate → Download → Save
6. Repeat for 8 images
7. Done in 30 minutes!

---

**What would you like to do?**
- Try setting up the MCP? (more complex)
- Use the manual method? (faster, easier)
