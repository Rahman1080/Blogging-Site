---
title: "How to Speed Up a Slow Mac"
description: "A slow Mac is usually fixable without buying a new one. Free up storage, find the heavy apps, trim login items, and update macOS."
author: "Info 24/7 Editorial Team"
pubDate: 2026-08-23
lastReviewed: 2026-08-23
category: "mac"
tags: ["mac", "performance", "storage", "tips"]
type: "tips"
draft: false
featured: false
featuredImage:
  src: "/images/covers/how-to-speed-up-a-mac.jpg"
  alt: "Mac with a speedometer icon and app windows in the background"
  caption: "Apple Laptop"
  credit: "Photo via StockSnap (CC0)"
seo:
  title: "How to Speed Up a Slow Mac (Real Fixes)"
  description: "A slow Mac is usually fixable. Free up storage, find the apps eating CPU, trim login items, and keep macOS updated — in that order."
  primaryKeyword: "how to speed up a Mac"
  keywords: ["Mac slow fix", "Mac running slow how to fix", "make Mac faster", "macOS performance tips", "how to speed up an old Mac"]
  longTail:
    - "my Mac is suddenly slow what do I do"
    - "how to speed up an old Mac"
    - "does restarting a Mac make it faster"
  relatedQuestions:
    - "Why is my Mac suddenly slow?"
    - "Does restarting a Mac make it faster?"
    - "How do I find which app is slowing down my Mac?"
    - "Does closing all apps speed up a Mac?"
  entities: ["macOS", "Apple", "Activity Monitor", "Finder", "System Settings"]
related:
  - "speed-up-windows-11-pc"
  - "android-phone-running-slow"
  - "mac-storage-full"
faq:
  - question: "Why is my Mac suddenly slow?"
    answer: "Usually one of three things: the drive is nearly full, a specific app is consuming CPU or memory in the background, or too many apps launch at login and pile up. All three are quick to check — free storage, look at Activity Monitor, and review your login items."
  - question: "Does restarting a Mac make it faster?"
    answer: "Yes, temporarily. A restart clears memory caches and kills background processes that have piled up, so it often fixes a suddenly sluggish Mac within minutes. If it's slow again within a day or two, the cause is something specific — like a heavy app or low storage — not a general 'buildup.'"
  - question: "How do I find which app is slowing down my Mac?"
    answer: "Open Activity Monitor (in Applications → Utilities), click the CPU column to sort, and look at what's at the top. Anything pegged at 80–100% CPU is your problem app. The Memory tab shows the same picture for RAM. Quit the offender and see if things speed up."
  - question: "Does closing all apps speed up a Mac?"
    answer: "Usually not meaningfully. macOS is good at managing memory, and background apps sitting idle use almost nothing. The exception is the one or two apps doing real work — a video render, a big sync, a stuck process. Find those and close them; leave the rest alone."
---
A slow Mac rarely needs a new Mac. In the vast majority of cases, it's one of four fixable problems: a nearly full hard drive, an app hogging your CPU or memory, a pile-up of login items, or an operating system that's a few versions behind. Work through them in that order and you'll usually get your speed back today.

Here's the plan. Start with the quick checks that give instant results, then move to the ones that prevent the slowdown from coming back.

## 1. Free up storage (the #1 cause of sudden slowness)

macOS needs breathing room. When the internal drive gets close to full, the system thrashes trying to juggle files, apps take forever to open, and everything feels sluggish. If your Mac went slow suddenly, check storage first.

Click the **Apple menu → About This Mac → Storage**. If the bar is nearly full, your problem is right there. To free space, click **Manage** and work through the built-in recommendations — old backups, large downloads, and unused apps. For the full process, our [Mac storage full guide](/articles/mac-storage-full) walks through every step.

The rule of thumb: leave at least 10–15% of your drive free. Below that, a Mac gets noticeably slower regardless of how new it is.

## 2. Find the app eating your Mac alive

Open **Activity Monitor** (find it in Applications → Utilities, or just search for it with Cmd+Space). Click the **CPU** column header to sort by processor usage, then look at the top of the list.

What you're looking for:

- An app stuck at **80–100% CPU** for more than a few seconds. That's your runaway — quit it (select it and click the X, or press Cmd+Q).
- A process called `kernel_task` climbing high. Oddly, high `kernel_task` on a Mac often means the machine is *overheating* — it's throttling itself to cool down. Check that vents aren't blocked and it's not in a warm spot.

Then click the **Memory** tab and sort the same way. If the Memory Pressure graph at the bottom is red, your Mac is running out of RAM. Quitting the top memory users — or just closing a few dozen browser tabs — usually relieves it.

A myth worth killing here: you don't need to close *every* app to speed up a Mac. Closing the one or two doing real work is what helps. Closing everything else just forces slower cold starts next time.

## 3. Trim your login items

Everything that starts up when you log in drags on boot time and nibbles at performance all day. Over time, apps quietly add themselves here — updaters, sync tools, menu-bar utilities — and the list grows without you noticing.

1. Open **System Settings → General → Login Items**.
2. Look at the **Open at Login** list.
3. Remove anything you don't need at startup (click an item, then the minus button). Keep essentials like your cloud drive and a password manager if you want them ready instantly.

You can also check the **Allow in the Background** list just below — it shows which apps are permitted to keep running in the background. Disable anything you don't recognize or don't need running constantly.

## 4. Update macOS (and your apps)

Apple ships performance fixes and memory improvements in macOS updates, and old versions accumulate slowdowns that newer releases fix. Check for updates in **System Settings → General → Software Update** and install anything pending.

Do the same for the apps you actually use. A two-year-old browser or email client is often the difference between smooth and sluggish.

## 5. Restart weekly (it genuinely helps)

Unlike phones that run for weeks, a Mac benefits from a regular restart. A restart clears memory caches, resets stuck background processes, and applies pending updates. It's not a cure for a machine that's slow all the time — but as a weekly habit it prevents the slow creep that builds up between reboots.

**Will a restart speed up an old Mac?** Yes, briefly — and that brief window is useful for diagnosis. If the Mac is fast right after a restart and then slows down again within a day, that tells you an app or login item is the culprit, not the hardware.

## 6. If it's still slow: check Spotlight indexing

A Mac that stays sluggish right after a macOS update, a large file transfer, or an external drive being plugged in may be busy rebuilding Spotlight's search index. That process churns the CPU and disk for a while, and it feels a lot like a slow Mac.

You can check: open Activity Monitor and look for a process called `mds` or `mdworker`. If one is using noticeable CPU and you recently connected a new drive or installed a big update, it's almost certainly indexing. It usually finishes on its own within a few hours — patience is the fix. If indexing seems stuck for days, you can remove a disk from Spotlight's search list (System Settings → Spotlight → Spotlight Privacy) and add it back, which forces a clean reindex.

## When it's genuinely the hardware

If your Mac is still slow after all of the above, the honest answer may be that the machine can't keep up with the software of 2026. A decade-old Mac with 8 GB of RAM will feel slow no matter what you clean. At that point the real choices are running lighter software or upgrading — and our [laptop buying guide](/articles/how-to-choose-a-laptop-buying-guide) covers what to buy next without overpaying.

One more angle: a slow computer isn't a Mac-only problem. The same pattern — check the heavy process, free storage, trim startups — applies to a [slow Android phone](/articles/android-phone-running-slow) and a [slow Windows PC](/articles/speed-up-windows-11-pc).

## Wrapping up

Check storage, find the CPU hog in Activity Monitor, trim login items, install updates, and restart weekly. That's the full speed-up routine, and it costs nothing. Do it in this order and most Macs feel meaningfully faster the same day.

For more macOS help, browse the [Mac category](/articles/category/mac).
