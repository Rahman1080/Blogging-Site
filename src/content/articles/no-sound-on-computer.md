---
title: "No Sound on Your Computer: How to Fix It Fast (Windows and Mac)"
description: "No sound on your PC or Mac? Run through these fixes in order — mute, volume mixer, output device, cables, and the audio service — and get audio back fast."
author: "Info 24/7 Editorial Team"
pubDate: 2026-08-23
lastReviewed: 2026-08-23
category: "troubleshooting"
tags: ["troubleshooting", "windows", "mac", "tips"]
type: "troubleshooting"
draft: false
featured: false
featuredImage:
  src: "/images/covers/no-sound-on-computer.jpg"
  alt: "Computer with a sound icon crossed out and a speaker symbol"
seo:
  title: "No Sound on Computer? Fix It Fast (Windows & Mac)"
  description: "No sound on your computer? Fix it fast with these ordered steps: mute, volume mixer, output device, cables, and the audio service — for Windows and Mac."
  primaryKeyword: "no sound on computer"
  keywords: ["computer audio not working", "fix sound on Windows", "Mac no sound fix", "volume icon not working"]
  longTail:
    - "why is there no sound on my Windows computer"
    - "how to fix no sound on Mac"
    - "computer speakers not working how to fix"
  relatedQuestions:
    - "Why did my sound stop working suddenly?"
    - "How do I check the volume mixer on Windows?"
    - "Why is there no sound through my Bluetooth headphones?"
    - "Could a Windows update have broken my sound?"
  entities: ["Windows 11", "macOS", "Bluetooth"]
related:
  - "speed-up-windows-11-pc"
  - "how-to-connect-laptop-to-tv"
faq:
  - question: "Why did my sound stop working suddenly?"
    answer: "Sudden audio loss is usually a quick fix: a muted system, a volume that got dragged to zero, the wrong output device selected, or a Bluetooth headset stealing audio while its battery is dead. The fixes below are ordered to catch the most common causes first, so start with mute and the output device before touching drivers."
  - question: "How do I check the volume mixer on Windows?"
    answer: "Right-click the speaker icon in the taskbar and choose 'Open volume mixer.' It shows a separate volume slider for every running app — one app can be muted or set to zero while the rest of the system is fine. Raise any slider that's down, and make sure none of the mute icons are visible."
  - question: "Why is there no sound through my Bluetooth headphones?"
    answer: "Usually the headphones aren't actually connected, connected to a different device, or low on battery. Reconnect them in Bluetooth settings, charge them, and check the output device is set to them, not to the computer's speakers. Bluetooth audio can also fail if the device is paired as a headset rather than headphones on Windows."
  - question: "Could a Windows update have broken my sound?"
    answer: "Occasionally, yes. Updates can reset the default audio device or replace a driver with a generic one. Check the output device list first, and if the driver is the problem, run the built-in audio troubleshooter (Settings → System → Sound → Troubleshoot) or reinstall the driver from your computer maker's support site."
---

No sound is one of the most common — and most fixable — computer problems there is. The audio chain has a handful of links (volume, mixer, output device, cable, driver), and losing sound almost always means one link is quietly broken. Work through these in order and you'll find it fast.

Start with the fastest checks. Most of this takes under two minutes.

## Start with the fastest fixes

Before you dig into settings, eliminate the boring causes:

1. Is the system **muted**? Click the speaker icon in the taskbar (Windows) or menu bar (Mac) and check.
2. Is the **volume actually up**? Dragging to zero happens more often than you'd think — especially with media keys.
3. Are **physical speakers or headphones** switched on, plugged in, and not on mute? Some speakers have their own volume knob and power.
4. Are **Bluetooth headphones** connected? Check they're on, charged, and paired to *this* computer — Bluetooth audio can silently sit on another device.

That set of checks catches a surprisingly large share of "no sound" cases before you touch any settings.

## Check mute and the volume mixer (Windows)

Windows splits volume per app, so the whole system can sound fine while one app is muted.

1. Right-click the **speaker icon** in the taskbar.
2. Choose **Open volume mixer**.
3. Look at the sliders — there's one for system sounds and one for each running app.
4. Raise any slider that's down and remove any **mute icons**.

If an app is muted but you're testing system sound, raise both. If the system slider itself shows a mute icon, click it to unmute.

## Check the output device

The computer is playing audio to a device you're not listening through — the classic "I have sound, but not where I want it" problem, and it often masquerades as "no sound at all."

**On Windows:**

1. Click the **speaker icon** in the taskbar.
2. Click the **device name** above the volume slider (it says "Speakers," "Headphones," or similar).
3. Pick the device you're actually using.

**On a Mac:**

1. Open **System Settings → Sound**.
2. In **Output**, select the device you're using.

If your Bluetooth headphones show here but make no sound, remove them and re-pair — and check the battery, because a headset at 1% can connect but stay silent.

## Reconnect or replace the cable

Wired speakers and headphones are simple until they're not. Try:

1. Unplug and firmly re-plug the cable into both the device and the computer's audio jack or USB port.
2. Try a **different port** — front vs. back jacks on desktops behave differently, and some jacks are audio-out while others are mic-in.
3. If you have another cable or pair of headphones, test with them. That instantly tells you whether the problem is the computer or the gear.

If a second device plays sound fine, the computer is working and your speakers or cable are the culprit.

## Restart the audio service (Windows)

If everything above checks out and Windows still refuses to play sound, the audio service may be stalled — the same kind of stuck service that plagues printers.

1. Press the **Windows key**, type **services**, and open the Services app.
2. Find **Windows Audio** in the list.
3. Right-click it and choose **Restart**.

It restarts in a few seconds. Note that this may close any audio apps you have open. If the service won't restart, a full computer restart almost always sorts it out.

## Restart or reset things on a Mac

Macs don't have a separate audio service to restart, but they have their own equivalent resets:

- **Restart the problematic app** — close it completely (Cmd+Q) and reopen. Some apps grab audio and hold it hostage until they're fully quit.
- **Check the audio MIDI setup for odd routing** — Applications → Utilities → Audio MIDI Setup. If a device shows a muted icon or unusual output, click it to check.
- **Restart the computer** if nothing else worked. macOS clears most transient audio gremlins on a clean restart.

## Restart your computer

Yes, the restart joke is a joke because it's true. A full restart clears stuck drivers, hung apps, and half-connected Bluetooth audio all at once. If you've reached this step, it's not the two-minute fix you skipped — it's the legitimate next move, and it resolves a large share of remaining audio issues. (It's also step one of the universal approach to [common tech problems](/articles/common-tech-problems-and-fixes).)

## When it's a driver problem

If sound is still missing after a restart, the driver is the likely remaining suspect — especially right after a system update, which can reset audio drivers to a generic version.

- Run the built-in **audio troubleshooter**: Windows → Settings → System → Sound → **Troubleshoot**, and let it check and fix common problems automatically.
- On a laptop, your computer maker's support site lists the correct audio driver for your exact model. Install that, restart, and test.
- Check the maker's site for a **BIOS or firmware update** if audio stopped working after an update — rare, but real.

Audio drivers are the one place a reinstall is genuinely useful, so do it properly from the manufacturer's site rather than a "driver updater" app. If your whole computer has been feeling sluggish alongside the audio problems, the fixes in our [Windows 11 speed-up guide](/articles/speed-up-windows-11-pc) are worth a read too.

## When it's not the computer at all

If you're trying to send audio to a TV or external display and getting silence, the display is now the audio output — and many TVs default to their own speakers or mute. That's a separate chain, and our [guide to connecting a laptop to a TV](/articles/how-to-connect-laptop-to-tv) covers how to point audio where you want it.

## Wrapping up

No sound is almost always a single broken link, not a broken computer. Check mute and volume, walk the volume mixer, pick the right output device, re-seat the cable, restart the audio service, restart the machine, and reinstall the driver only if you have to. Work the list in order and you'll either be back to your playlist in minutes or know exactly which link is the problem. More step-by-step fixes are in our [troubleshooting guides](/articles/category/troubleshooting).
