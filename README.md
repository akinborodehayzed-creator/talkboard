# Talk Board — a picture talking app (AAC) for iPad

Talk Board helps a child who isn't speaking yet to communicate. They tap picture buttons, the
words build a sentence at the top, and the iPad speaks it out loud.

It is a web app: once it's on the iPad's Home Screen it opens full screen like any other app,
works without internet, and keeps everything on the iPad.

## What's inside

- **Message bar.** Tapped words collect at the top. Tap the bar or **🔊 Speak** to say the whole
  sentence. **⌫ Delete** removes the last word and **🧹 Clear** empties the bar.
- **Core words on Home.** About 40 of the most-used words (I, want, more, stop, go, help, yes, no,
  like, eat, drink, play, all done, not…). They always stay in the same place, so the child
  learns where they are, like typing without looking at the keys.
- **16 folders:** Food, Drinks, Feelings, Play, Body, Places, People, Animals, Clothes, Colours,
  Chat, Time, Routines, Numbers, Describe and **My Things** (empty, ready for your own photos).
- **Colour-coded words** (the Fitzgerald Key used by most AAC apps): yellow = people,
  green = actions, blue = describing words, orange = things, pink = social, purple = questions,
  red = stop/no.
- **Quick phrases** for urgent things: "I need help", "I need a break", "I need the toilet",
  "Something hurts"…
- **🔍 Show** puts the sentence in huge letters, for noisy places.
- **📋 Activity pages:** Snack time, Bath time, Bubbles & play, Getting dressed, Bedtime, Park &
  outside and Car ride. Each page has all the words for that activity and stays open while you use
  it. Grown-ups can add their own pages in Edit mode.
- **🎮 Find it!** is a learning game. The app asks "Can you find the bird?", cheers and gives a star
  for the right picture, and gently shows the answer after a wrong try. You choose the topic and
  how many pictures to show (2–6).
- **🗣️ Talk time** is a set of speech games that listen through the microphone and reward the
  child's own voice. Any sound counts, because the app can't (and shouldn't) judge whether a word
  is said right. **Blow the balloon** grows the balloon with any sound until it pops.
  **Ready, set… GO!** says "Ready, set…", waits, and the child's sound makes the car, train or
  rocket go. **Copy me** says an animal or fun sound, or an early word (m, b, p, d sounds), twice
  and then listens for a try. A grown-up can tap 👍 when the app misses a try, and the setup
  screen shows how many sounds were made today.
- **The games talk in the same voice as the board.** Everything they say is made in your AI voice
  when a game opens (online), and is saved for offline use. It is also listed under "Games" in
  Record my voice, so you can record it yourself.
- **Your own voice.** Record yourself saying any word or phrase, and that button plays your real
  voice instead of the iPad voice. Hold ⚙️ → Voice → **Record my voice for many words** takes you
  through every word one by one. You can also record a single button in Edit mode. Silence is
  trimmed automatically. One recording covers every button with the same word, and words you
  haven't recorded still use the iPad voice. Recordings stay on the iPad and are included in backups.
- **AI voices (ElevenLabs).** Pick any voice in your ElevenLabs account: each one has a free sample to listen to first. Or copy your own voice: Read a short story out loud for about a minute. ElevenLabs
  learns your voice, and the app then makes every word in it and saves them on the iPad, so they
  work offline. When online, whole sentences are made in one smooth piece. Set it up with
  hold ⚙️ → 🤖 AI voice. You need an ElevenLabs account on the Starter plan or higher (copying a
  voice isn't on the free plan) and an API key from your ElevenLabs profile → API Keys. The key is
  stored only on the iPad and is never included in backups. The voice is used in this order:
  your own recordings first, then the AI voice, then the iPad voice.
- **Grown-up settings** (press and **hold** ⚙️ for 1.5 seconds, so children don't open it by accident):
  - Voice, speed and pitch
  - Button size (4–10 across), word size and position
  - Say each word when tapped, go back Home after picking from a folder, ignore extra taps
  - **Edit mode:** change any button's word, picture (emoji or **your own photo**), what it
    says, colour, or **hide** it for now. Hidden buttons keep their place, so you can add new
    words one at a time without moving anything.
  - **What was said:** a history of spoken messages to share with a speech therapist
  - **Backup:** save and load a backup file

## Putting it on the iPad

**Live address: https://akinborodehayzed-creator.github.io/talkboard/**

1. On the iPad, open that address in **Safari**.
2. Tap **Share** (square with an up arrow) → **Add to Home Screen** → **Add**.
3. Open **Talk Board** from the Home Screen. It works offline from then on.

To publish changes later: edit the files, raise `APP_VERSION` in `index.html` and the number in
`version.json` (keep them equal), change `CACHE` in `sw.js` to a new name, then commit and push.
Each time the app is opened or brought back on screen while online, it checks `version.json`
and updates itself. The version in use is shown next to "Grown-up settings".

The app is hosted with GitHub Pages from the `talkboard` repository. The sections below explain
other ways to host it.

The iPad needs to load the app from a web address once. After that it works offline.

### Option A (recommended): free web hosting, works anywhere and offline

1. On this Mac, go to **https://app.netlify.com/drop** and sign up for a free account.
2. Drag the whole **AAC** folder onto the page. Netlify gives you a web address like
   `https://something.netlify.app`.
3. On the iPad, open that address in **Safari**.
4. Tap the **Share** button (square with an up arrow), then **Add to Home Screen**, then **Add**.
5. Open **Talk Board** from the Home Screen. It now works offline.

GitHub Pages, Cloudflare Pages, or any other host that serves plain files over `https://` also works.

### Option B: quick try from this Mac, on the same Wi-Fi only

1. On the Mac, open Terminal in this folder and run:
   ```bash
   python3 -m http.server 8765
   ```
2. Find the Mac's address: System Settings → Wi-Fi → Details → IP address (for example `192.168.1.20`).
3. On the iPad, open Safari and go to `http://192.168.1.20:8765`.

This is fine for trying it out, but offline mode only works with Option A (`https`), and the Mac
has to stay on.

## Important iPad settings

- **Lock the child into the app:** Settings → Accessibility → **Guided Access** → turn it on and
  set a passcode. Open Talk Board, then triple-click the top (or Home) button to start.
- **Better voices:** Settings → Accessibility → Spoken Content → Voices. Download an "Enhanced"
  or "Premium" voice, then pick it in Talk Board's Voice settings.
- **No sound?** Turn the volume up and make sure Silent mode is off.
- **Make backups** (⚙️ → Backup) after you add photos. If the iPad is reset, or the app is
  removed from the Home Screen, its saved buttons are lost.

## Tips for getting started

- **Model it.** When you talk to the child, tap the words on the iPad as you say them
  ("we **go** **outside**"). Children learn AAC by watching others use it.
- Treat every tap as real communication, including "no" and "stop".
- Keep the iPad with the child all day, charged and within reach.
- A speech and language therapist (SLT/SLP) can help choose words and set goals.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app (design, words and logic) |
| `sw.js` | Offline support. Change `CACHE` to a new name after editing files, so iPads update. |
| `manifest.webmanifest` | App name and icon for the Home Screen |
| `icons/` | App icons |
