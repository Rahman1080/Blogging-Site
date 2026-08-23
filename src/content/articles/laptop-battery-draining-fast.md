---
title: "Laptop Battery Draining Fast: How to Make It Last Longer"
description: "Laptop battery draining fast? Work through the real causes — brightness, background apps, sleep settings, and battery health — on both Windows and Mac."
author: "Info 24/7 Editorial Team"
pubDate: 2026-08-23
lastReviewed: 2026-08-23
category: "laptops-computers"
tags: ["laptops", "battery", "windows", "mac"]
type: "tips"
draft: false
featured: false
featuredImage:
  src: "/images/covers/laptop-battery-draining-fast.jpg"
  alt: "Laptop with a battery icon and a power plug, showing low charge"
seo:
  title: "Laptop Battery Draining Fast? Fixes That Actually Help"
  description: "Laptop battery dying too fast? Tackle brightness, background apps, sleep settings, and battery health on Windows and Mac."
  primaryKeyword: "laptop battery draining fast"
  keywords: ["laptop battery life tips", "Windows laptop battery", "Mac battery health", "why is my laptop battery dying so fast", "how to make laptop battery last longer"]
  longTail:
    - "how to make laptop battery last longer"
    - "why does my laptop battery drain so fast"
    - "how to check laptop battery health"
  relatedQuestions:
    - "Why does my laptop battery drain so fast?"
    - "How do I check my laptop's battery health?"
    - "Does closing apps save laptop battery?"
    - "Is it bad to leave my laptop plugged in all the time?"
  entities: ["Windows", "macOS", "Apple", "Battery Saver", "Low Power Mode"]
related:
  - "extend-android-battery-life"
  - "speed-up-windows-11-pc"
faq:
  - question: "Why does my laptop battery drain so fast?"
    answer: "The usual culprits are screen brightness, apps running in the background (especially browsers and sync tools), and a battery that has physically aged. Modern laptops are also terrible at managing their own power if 'battery saver' style modes are left off. Working through the steps in this article fixes most cases."
  - question: "How do I check my laptop's battery health?"
    answer: "On Windows, open a terminal and run 'powercfg /batteryreport' — it writes an HTML report showing your battery's design capacity versus current capacity. On Mac, hold Option and click the battery icon in the menu bar to see its condition (Normal, Service recommended, and so on)."
  - question: "Is it bad to leave my laptop plugged in all the time?"
    answer: "Modern laptops manage charging themselves and won't overcharge, but keeping a lithium battery pinned at 100% for months can age it faster. Many laptops now have a charge limit you can set to 80% if it mostly stays plugged in — worth enabling if you use your laptop like a desktop."
  - question: "Should I close all my apps to save battery?"
    answer: "Closing a single heavy app helps, but closing everything rarely does. Apps in the background only drain meaningfully if they're actively working — video, syncing, downloads. Just quitting the app with the loudest fan running usually recovers most of the battery you'll ever get back."
---
A laptop battery that dies by mid-afternoon isn't necessarily a dying battery. More often it's a combination of a bright screen, apps quietly working in the background, and power settings that were left at their default "performance" profile.

The good news: you can usually claw back an hour or two without buying anything. Work through this list on both Windows and Mac — most of the fixes are the same ideas, just with different names.

## First, a quick reality check

Battery drain comes from two very different places: how the laptop is *used* right now, and how the battery has *aged*. Before you change settings, know which problem you have.

- If the battery drains fast even when you're doing light work, it's a usage problem — fixable today.
- If it drains fast *and* the charge percentage drops unpredictably (60% to 20% in a flash), the battery is probably aging — settings won't fix that.

If you think it's the battery, jump to the battery health section below. Otherwise, start here.

## The usual causes, in order of impact

### 1. Screen brightness

Your display is the biggest single consumer of battery on almost every laptop. Turn brightness down a few notches and you'll often see the estimated time remaining jump immediately. Better still, set the screen to auto-brightness so it dims itself indoors.

- **Windows:** Settings → System → Display → enable "Change brightness automatically."
- **Mac:** System Settings → Displays → turn on "Automatically adjust brightness."

### 2. Battery saver and power modes

Every laptop ships with power profiles, and most default to "balanced" or "performance" — designed for plugged-in use.

- **Windows:** Turn on **Battery Saver** (Settings → System → Power & battery). Windows will automatically limit background activity when you're unplugged.
- **Mac:** Turn on **Low Power Mode** (System Settings → Battery → Low Power Mode). It's the same idea: it curbs background activity and slightly lowers performance to stretch battery life.

Run these only when you need them — or set them to engage automatically below a certain charge level.

### 3. Background apps doing real work

Some apps drain battery even when you're not looking at them: cloud sync tools, chat apps, browser tabs with autoplaying video, and indexing processes. On Windows, open **Task Manager** (Ctrl+Shift+Esc) and sort the processes by CPU and power usage. On Mac, open **Activity Monitor** and sort by CPU. Whatever's at the top with a high percentage is your answer.

You don't need to kill everything — just close the app doing actual work. A browser tab playing video is a battery killer; a chat app idling is not.

### 4. Sleep vs. hibernate (and what closing the lid does)

Here's a subtle one. On many laptops, closing the lid triggers "Modern Standby" or "sleep," which keeps the machine lightly awake to check mail and updates. That's fine for an afternoon, but a laptop left in your bag overnight can drain 10–20% doing nothing.

**Hibernate** writes everything to disk and powers off — zero drain, but slightly slower to wake. If you regularly leave your laptop for hours, set your power plan to hibernate after a long idle rather than staying in standby:

- **Windows:** Settings → System → Power & battery → Screen and sleep → set "Hibernate after" to a few hours.
- **Mac:** System Settings → Battery → Options → set battery usage to prioritize low energy.

### 5. Peripherals and wireless

Keep it simple: an external drive that's on, Bluetooth devices you're not using, and high screen refresh rates all cost battery. Unplug what you don't need and disable Bluetooth when you're not wearing headphones.

## Checking battery health, honestly

If the laptop is old and none of the above helps, the battery has likely aged. Here's how to check on each platform — no third-party apps needed.

**On Windows:**

1. Open a command prompt or PowerShell.
2. Type `powercfg /batteryreport` and press Enter.
3. Open the report file it generates (a path will be shown, like `C:\Users\You\battery-report.html`).
4. Look for "Design Capacity" versus "Full Charge Capacity." If full charge is well below design capacity — say, half — the battery has aged significantly and a replacement (or a new laptop) is the real fix.

**On Mac:**

1. Hold **Option** and click the **battery icon** in the menu bar.
2. The condition shows as **Normal**, **Service recommended**, or **Replace soon**.
3. For the cycle count and more detail, run `system_profiler SPPowerDataType` in a terminal, or check System Information under Power.

## Charging habits that keep batteries healthy

A few habits genuinely slow the aging process:

- Avoid leaving the laptop pegged at 100% for weeks. If it mostly stays plugged in, enable the manufacturer's charge limit (often 80%) if it has one.
- Avoid running the battery to zero constantly. Lithium batteries prefer the 20–80% range.
- Keep it cool. Heat is the biggest enemy of battery lifespan — don't leave a laptop in a hot car or on a bed where it can't vent.

This is the same lithium chemistry that's in your phone, and the [Android battery guide](/articles/extend-android-battery-life) covers the identical principles for handsets.

## When "fast drain" is actually something else

If the battery report looks healthy but the laptop still dies in an hour, check for a runaway process — a stuck app can peg the CPU at 100% and melt through the battery in no time. And if the laptop is also slow and laggy, the problem may be software bloat rather than power at all; our [speed up Windows 11 guide](/articles/speed-up-windows-11-pc) walks through clearing that out.

## Wrapping up

Dim the screen, enable battery saver or low power mode, close the apps that are actually working, and make long idle times hibernate instead of sleep. If the battery is still weak, check its health — and if it's genuinely aged, that's a hardware decision, not a settings problem.

For more laptop and computer help, browse the [laptops & computers category](/articles/category/laptops-computers).
