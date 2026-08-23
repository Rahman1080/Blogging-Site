---
title: "How to Fix a Printer That Shows 'Offline' (Windows and Mac)"
description: "Your printer says offline but it's connected. Work through these fixes in order — power, connection, spooler, default printer, and drivers — on Windows and Mac."
author: "Info 24/7 Editorial Team"
pubDate: 2026-08-23
lastReviewed: 2026-08-23
category: "troubleshooting"
tags: ["troubleshooting", "windows", "mac", "tips"]
type: "troubleshooting"
draft: false
featured: false
featuredImage:
  src: "/images/covers/how-to-fix-printer-offline.jpg"
  alt: "Printer with an offline status icon on a computer screen"
seo:
  title: "Printer Offline? Fix It on Windows & Mac"
  description: "Printer says offline but it's connected? Work through these fixes in order: power, connection, spooler, default printer, and drivers — for Windows and Mac."
  primaryKeyword: "printer offline how to fix"
  keywords: ["printer offline but connected", "printer not responding", "fix printer status offline Windows", "printer spooler error"]
  longTail:
    - "why is my printer showing offline"
    - "how to fix an offline printer on Windows 11"
    - "printer says offline on Mac how to fix"
  relatedQuestions:
    - "Why does my printer show offline when it's connected?"
    - "How do I restart the print spooler on Windows?"
    - "Why did my printer go offline after a Windows update?"
    - "Should I reinstall the printer driver?"
  entities: ["Windows 11", "macOS", "print spooler", "Wi-Fi"]
related:
  - "wifi-not-working-fixes"
  - "speed-up-windows-11-pc"
faq:
  - question: "Why does my printer show offline when it's connected?"
    answer: "Most of the time 'offline' just means the computer lost contact with the printer for a moment — it went to sleep, dropped off the network, or a background setting flipped. It usually isn't broken. Working through the fix ladder below, starting with waking the printer up, resolves the status in most cases."
  - question: "How do I restart the print spooler on Windows?"
    answer: "Open the Services app (search 'services' in the Start menu), find 'Print Spooler' in the list, right-click it, and choose Restart. Your pending print jobs may disappear — that's normal. Then try printing again. It's the closest thing printers have to a universal reset."
  - question: "Why did my printer go offline after a Windows update?"
    answer: "Updates occasionally reset printer settings or replace a driver with a generic one, which can break the connection. Set the printer as default again, and if that doesn't help, reinstall the manufacturer's driver from their support site. It's one of the most common post-update quirks."
  - question: "Should I reinstall the printer driver?"
    answer: "Only after you've tried the simpler fixes — power, connection, spooler, and default printer. When you do reinstall, download the driver from the printer manufacturer's website rather than a third-party site, and remove the old printer entry first in Windows Settings or System Settings on a Mac."
---

A printer that shows "offline" is almost never actually broken. Nine times out of ten, the computer simply lost track of the printer — it went to sleep, dropped off the network, or a setting flipped. The fix is a short ladder of checks, from "did you wake it up" to "reinstall the driver." Work through them in order and you'll usually be printing again in five minutes.

Here's the ladder for both Windows and Mac.

## Why printers show offline

Modern printers connect one of two ways: over Wi-Fi or a network, or with a USB cable. When the status flips to "offline," it means the computer can't reach the printer that way right now. Causes range from a sleeping printer to a Wi-Fi drop to a Windows service that's quietly stalled.

A reliable connection is the foundation. If your printer is wireless and your Wi-Fi has been flaky, the problem may live in the network, not the printer — our [Wi-Fi troubleshooting guide](/articles/wifi-not-working-fixes) covers getting that connection steady first.

## Step 1: Check the basics

Start cheap and simple:

1. Is the printer **on**? Check for a standby light. Many printers go to sleep and need a tap on a button to wake.
2. Is there **paper** in the tray, and no jam visible?
3. Open and close the **paper cover or ink access door** — sensors can get confused.

Then turn the printer fully off, wait a few seconds, and turn it back on. Let it finish its start-up cycle before you touch anything else. This single step clears a surprising number of "offline" statuses.

## Step 2: Check the connection

Wireless printers drop off the network all the time:

- Check that the printer is connected to the **same Wi-Fi network** as your computer. Guest networks or a phone hotspot won't work.
- Look at the printer's own screen or its wireless report (most printers can print one) to confirm it has an IP address.
- If it's a **USB printer**, unplug the cable and plug it into a different port, then try again.

If the network itself is the weak link, fix that first — a printer connected to an unstable network will keep going offline no matter what you do on the computer.

## Step 3: Restart the print spooler (Windows)

On Windows, the **print spooler** is the service that queues and sends print jobs. When it stalls, printers show as offline. Restarting it is the Windows equivalent of turning it off and on again.

1. Press **Windows key**, type **services**, and open the Services app.
2. Scroll to **Print Spooler**.
3. Right-click it and choose **Restart**.

If you don't have permission or it won't start, you may need to run it as an administrator. Your pending print jobs will likely disappear — that's expected, and you can reprint them.

## Step 4: Set the default printer (Windows)

Windows can "helpfully" switch which printer is your default, especially after updates. A printer that isn't the default can show an odd status.

1. Go to **Settings → Bluetooth & devices → Printers & scanners**.
2. Find your printer in the list.
3. Click it and choose **Set as default**.

Then click **Open print queue** and look at the status. If it still says offline, click **Printer** in the menu bar and untick **Use Printer Offline** if that option is checked — a manual switch that some users hit by accident.

## Step 5: Restart the printer on a Mac

Macs handle this a little differently, but the fixes are the same idea:

1. Open **System Settings → Printers & Scanners**.
2. Select your printer.
3. Click the **minus button (–)** to remove it, then click **Add Printer, Scanner, or Fax…** and re-add it from the list.
4. If you see a job stuck in the queue, click **Open Print Queue** and cancel or delete it — a hung job can block everything after it.

Removing and re-adding the printer forces the Mac to rebuild its connection, which clears most stale "offline" states. You can also check the printer's settings by clicking **Options & Supplies** and confirming the driver is the manufacturer's, not "Secure AirPrint" or a generic one.

## Step 6: Reinstall the driver

If nothing above worked, the driver is the likely culprit — often because a system update replaced it with a generic one.

1. Remove the printer entry completely (the minus button on Mac, or **Remove device** in Windows Settings).
2. Download the current driver from the **printer manufacturer's website** — search your printer's exact model number. Avoid third-party "driver updater" sites.
3. Install the driver, then add the printer back.

This is a last resort rather than a first step. Only bother after the simpler fixes fail, because a driver reinstall is the one step that can take real time. If your whole system is feeling slow and unresponsive during all this, a look at our [Windows 11 speed-up guide](/articles/speed-up-windows-11-pc) won't hurt either.

## When to call it a hardware problem

If you've done all six steps and the printer still shows offline — and the same printer fails on a *different* device — the problem is likely the printer itself: failed network hardware, or an error the screen isn't showing. At that point, check the manufacturer's support site for your model's error codes before assuming the worst. Sometimes a firmware update or a full factory reset on the printer fixes what the computer never could.

## Wrapping up

Offline printers are a software handshake problem, not a hardware one. Wake the printer up, confirm the connection, restart the spooler, set the default, re-add it on a Mac, and reinstall the driver only if you must. Most people are back to printing within minutes of step one. More step-by-step computer fixes are collected in our [troubleshooting guides](/articles/category/troubleshooting).
