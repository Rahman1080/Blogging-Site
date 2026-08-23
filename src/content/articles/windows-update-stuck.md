---
title: "Windows Update Stuck or Won't Install: How to Fix It"
description: "Windows Update stuck on 'downloading' or stuck at 0 percent? Wait patiently first, then work through this fix ladder — troubleshooter, disk space, and the update service."
author: "Info 24/7 Editorial Team"
pubDate: 2026-08-23
lastReviewed: 2026-08-23
category: "windows"
tags: ["windows", "troubleshooting", "pc", "tips"]
type: "troubleshooting"
draft: false
featured: false
featuredImage:
  src: "/images/covers/windows-update-stuck.jpg"
  alt: "Windows Update progress bar stuck with a settings gear icon"
seo:
  title: "Windows Update Stuck? Fixes That Actually Work"
  description: "Windows Update stuck at 0%, on downloading, or refusing to install? Wait it out, then try the troubleshooter, free disk space, and restart the update service."
  primaryKeyword: "Windows Update stuck"
  keywords: ["Windows Update not installing", "update stuck at 0 or downloading", "Windows Update error fix", "how to fix Windows Update"]
  longTail:
    - "Windows Update stuck on downloading fix"
    - "Windows 11 update stuck at 0 percent"
    - "how to force Windows Update to install"
  relatedQuestions:
    - "How long should Windows Update take?"
    - "Why is my Windows Update stuck at 0 percent?"
    - "Can I restart my PC during a Windows update?"
    - "What if Windows Update is still stuck after these fixes?"
  entities: ["Windows 11", "Windows Update", "Windows Update Troubleshooter", "Command Prompt"]
related:
  - "speed-up-windows-11-pc"
  - "wifi-connected-no-internet-windows"
faq:
  - question: "How long should a Windows Update take?"
    answer: "Small monthly updates usually take 10–30 minutes total. Feature updates (the big yearly ones) can genuinely take an hour or more and may sit on a percentage for a long stretch. If it's been stuck on the same number for 30+ minutes with no movement, start the fix ladder below."
  - question: "Why is my Windows Update stuck at 0 percent?"
    answer: "Usually a paused download, a connection problem, or a background service that's hung. Before anything else, close apps and give it up to 30 minutes — then run the Windows Update troubleshooter, which restarts the download cleanly."
  - question: "Can I restart my PC during a Windows update?"
    answer: "If the update has been frozen for a long time with no progress, a restart is safe and often the fastest fix — Windows resumes or rolls back the update afterward. A hard shutdown (holding the power button) should be a last resort, but it's rarely harmful."
  - question: "What should I do if Windows Update is still stuck?"
    answer: "Work through the whole fix ladder: troubleshooter, disk space, restarting the update service, then a repair via the system file checker. If it still won't install, our reset guide covers the more thorough options."
---

Windows Update runs in the background until it doesn't. One day you open Settings and there it is: an update stuck at 0 percent, or "Downloading" that hasn't moved in half an hour, or a restart that's been spinning its wheels. It's annoying, but it's rarely dangerous — and most of the time it fixes itself with a little patience and a couple of built-in tools.

The rule before anything else: give it time. Windows updates download and install in the background, and the progress bar moves in jumps, not smoothly. If it's only been a few minutes, walk away and check back later. If it's genuinely stuck — 30+ minutes on the same number — here's the fix ladder.

## Fix 1: Check you're not paused or low on network

Windows Update stops dead if updates are paused or if the download lost its connection.

1. Open **Settings → Windows Update**.
2. Check the top of the page isn't showing **Pause updates** as active. If it is, click it again to resume.
3. Make sure your PC has an internet connection — our [guide to Wi-Fi connected but no internet](/articles/wifi-connected-no-internet-windows) covers the fix if the network is the problem.
4. If the PC is on a metered or cellular connection, Windows may hold updates back. In **Settings → Windows Update → Advanced options**, check how downloads are handled.

## Fix 2: Run the built-in Windows Update troubleshooter

This is the official, first-party fix and it handles a large share of stuck updates automatically.

1. Open **Settings → System → Troubleshoot → Other troubleshooters**.
2. Find **Windows Update** and click **Run**.
3. Let it finish — it will check for common problems and may restart the update service for you.
4. Go back to **Settings → Windows Update → Check for updates** and try again.

## Fix 3: Free up disk space

Updates need room to unpack and install. A nearly full drive is one of the most common reasons an install stalls partway.

1. Open **Settings → System → Storage**.
2. Check the free space on your main drive — the one Windows is on.
3. If it's low, use the cleanup options to make room. Our [guide to freeing up disk space on Windows](/articles/how-to-free-up-disk-space-windows) shows the safe, built-in ways that don't involve deleting your files.

Once you have breathing room, hit **Check for updates** again.

## Fix 4: Restart the Windows Update service

If the troubleshooter didn't clear it, the update service itself may be hung. Restarting it is safe and doesn't touch your files.

1. Press **Windows key + R**, type `services.msc`, and press Enter.
2. Scroll to **Windows Update** in the list.
3. Right-click it and choose **Stop**. If the button is grayed out, skip ahead to the restart in the next step.
4. Right-click it again and choose **Start** (or **Restart**, if available).
5. Close the window and try **Check for updates** again.

This simply restarts the thing that manages downloads and installs — it's the update equivalent of turning it off and on again.

## Fix 5: Repair the update components with built-in tools

If the update machinery itself is damaged, the system file checker and DISM repair the underlying files. This takes longer, so treat it as the "get serious" step.

1. Right-click the **Start** button and choose **Terminal (Admin)**.
2. Run this command and wait for it to finish (several minutes is normal):
   `sfc /scannow`
3. Then run this one and let it complete:
   `DISM /Online /Cleanup-Image /RestoreHealth`
4. Restart your PC and try Windows Update again.

Both tools are built into Windows, are safe, and repair rather than delete anything.

## Fix 6: Delete the downloaded update files

If a download got corrupted, Windows can get stuck trying to use it. Clearing the download cache forces a fresh download.

1. Press **Windows key + R**, type `services.msc`, and press Enter.
2. Right-click **Windows Update** and choose **Stop**.
3. Open File Explorer and navigate to `C:\Windows\SoftwareDistribution\Download`.
4. Select everything inside that folder and delete it. If Windows won't let you delete a file, skip it and continue — the important part is clearing the bulk of the cache.
5. Go back to services.msc, right-click **Windows Update**, and choose **Start**.
6. Try **Check for updates** again.

Deleting this folder only removes half-downloaded update files; Windows simply re-downloads what it needs.

## When to wait versus when to intervene

Knowing the difference saves you from restarting mid-update unnecessarily:

- **Wait** if the percentage has moved at all in the last 15 minutes, or if it's a big feature update (the kind that mentions a version number) — those can sit silently for a long while.
- **Intervene** if nothing has moved in 30+ minutes, the update is only small, or you see an error code that won't go away.

And yes, the machine can churn in the background — a slow PC during updates is partly Windows working, and partly the PC just being busy. Our [speed-up guide for Windows 11](/articles/speed-up-windows-11-pc) is worth a read once the update finishes.

## What to do while you wait

The worst thing you can do during a stuck update is fuss with it. The second-worst is interrupting it blindly. A few ground rules:

- **Close heavy apps.** Games, video editors, and piles of browser tabs slow the install down and make it look stuck when it isn't.
- **Leave it plugged in.** Updates and low battery are a bad combination — if you're on a laptop, connect the charger.
- **Don't force a shutdown unless you must.** A hard power-off is the last resort when the screen has been frozen on the same number for 30+ minutes. Most of the time the update resumes or rolls back safely, but give the automatic fix a chance first.
- **Watch for the disk light.** If the drive is clearly active (lights blinking, fans spinning up), Windows is working even when the percentage isn't moving.

Patience is genuinely the most effective tool in this guide — most "stuck" updates are just slow updates.

## Wrapping up

Patience first, then the ladder: unpause and check the network, run the troubleshooter, free up disk space, restart the update service, repair system files, and clear the download cache. Most stuck updates give up by the time you hit step three.

For more Windows help — boot problems, blue screens, resets — browse the rest of our [Windows articles](/articles/category/windows).
