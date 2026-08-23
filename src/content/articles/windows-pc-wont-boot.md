---
title: "Windows PC Won't Boot: What to Do When It Stays on the Logo"
description: "PC stuck on the Windows logo or won't boot past the loading screen? Work through this calm, ordered recovery — power checks, Startup Repair, Safe Mode, and recovery tools."
author: "Info 24/7 Editorial Team"
pubDate: 2026-08-23
lastReviewed: 2026-08-23
category: "windows"
tags: ["windows", "pc", "troubleshooting", "tips"]
type: "troubleshooting"
draft: false
featured: false
featuredImage:
  src: "/images/covers/windows-pc-wont-boot.jpg"
  alt: "Desktop PC stuck on the Windows logo with a loading spinner"
seo:
  title: "PC Won't Boot Past the Windows Logo? Fix It"
  description: "Stuck on the loading screen or caught in a boot loop? Check power and peripherals, try Startup Repair and Safe Mode, then use recovery tools."
  primaryKeyword: "Windows won't boot"
  keywords: ["PC stuck on loading screen", "Windows stuck on logo fix", "boot loop Windows", "black screen on startup"]
  longTail:
    - "my PC won't boot past the Windows logo"
    - "how to fix a Windows boot loop"
    - "Windows stuck on automatic repair what to do"
  relatedQuestions:
    - "Why is my PC stuck on the Windows logo?"
    - "Is it bad if my PC is stuck on automatic repair?"
    - "How do I boot into Safe Mode if Windows won't start?"
    - "When is a boot problem a hardware problem?"
  entities: ["Windows 11", "Safe Mode", "Startup Repair", "Recovery"]
related:
  - "speed-up-windows-11-pc"
  - "how-to-reset-windows-pc"
faq:
  - question: "Why is my PC stuck on the Windows logo?"
    answer: "Windows is trying to start but hitting an error before the desktop loads — a bad update, a failing driver, or corrupted system files. The recovery steps in this guide exist specifically for this: they let Windows repair itself or start in a stripped-down mode."
  - question: "Is it bad if my PC is stuck on automatic repair?"
    answer: "Automatic Repair is Windows trying to fix itself. If it spins for a long time or loops back to the same screen, choose 'Advanced options' instead and go through the manual steps below — Startup Repair, Safe Mode, then a reset if needed."
  - question: "How do I boot into Safe Mode if Windows won't start?"
    answer: "Force the recovery environment by holding the power button to turn the PC off and on a few times, then choose Troubleshoot → Advanced options → Startup Settings → Restart → Safe Mode. From there you can remove the problem app or driver."
  - question: "When is a boot problem actually a hardware problem?"
    answer: "If the PC doesn't power on at all, beeps, or shows nothing on screen before Windows starts, suspect hardware. Also suspect hardware if boot problems started after a drop, a power cut, or overheating. Software fixes only help when Windows is actually loading."
---

The Windows logo spins. And spins. And then... nothing. Or it loops: boot, logo, restart, logo. It's easy to panic — a PC that won't start feels like a PC that's dead. Take a breath. Most stuck-on-logo problems are software, and most of those are fixable from your own desk.

Here's an ordered recovery plan. Do these in order, and test after each step. If you reach the end, I'll tell you honestly what it means.

## Step 1: Rule out the boring causes first

Before any real troubleshooting, check the things that make you feel silly later:

- **Is it really a Windows problem?** If the screen stays black and the PC never even shows a logo or brand name, that's a hardware or display issue, not a Windows issue. Same if you hear beeps on startup. Those are outside the scope of this guide.
- **Unplug everything except the essentials.** Remove USB drives, extra monitors, printers, and docking stations. A stuck USB device can halt a boot. Leave only keyboard, mouse, and monitor.
- **Try a different display port or cable.** A monitor connected to the wrong port can show a black screen while the PC boots perfectly fine.

If the logo appears and then stalls, you're in the right place — that's Windows itself struggling to start.

## Step 2: Let Startup Repair try first

Windows has a built-in boot doctor, and it works surprisingly often.

1. Power the PC off completely (hold the power button if needed).
2. Power it on, and when you see the logo, **hold the power button again to force it off**.
3. Do this twice. On the third start, Windows should detect the trouble and show a screen saying it's **Preparing Automatic Repair**.
4. When the recovery screen appears, choose **Advanced options → Troubleshoot → Advanced options → Startup Repair**.
5. Let it run. It takes a few minutes and will either fix the problem or tell you it couldn't.

Startup Repair is safe — it only attempts to repair Windows boot files, not your data.

## Step 3: Boot into Safe Mode

If Startup Repair didn't do it, Safe Mode is your next tool. It starts Windows with only the essentials, which means you can often get in, remove whatever's causing the crash, and boot normally again.

To reach Safe Mode when Windows won't start:

1. Force the recovery screen as in Step 2 (three power cycles).
2. Choose **Troubleshoot → Advanced options → Startup Settings → Restart**.
3. After the PC restarts, press the key for **Safe Mode** (usually **4**), or **5** for Safe Mode with Networking.

Once you're in Safe Mode:

- **Uninstall anything you installed** right before the problems started (new apps, new drivers).
- Run **Settings → Windows Update** and install any pending updates.
- If a driver is the culprit, open **Device Manager**, find the device with a warning icon, and choose **Update driver** or **Uninstall device** — our [driver update guide](/articles/how-to-update-drivers-windows-11) covers the safe way to do this.

If Safe Mode lets you in cleanly and the problem disappears, you've identified it as software. If Safe Mode also crashes or freezes, read on.

## Step 4: Use the recovery environment's other tools

Still stuck? The recovery screen has two more honest options:

- **System Restore** — in **Troubleshoot → Advanced options → System Restore**. If you (or Windows) created a restore point recently, this rolls the system back to before the problem. It keeps your files.
- **Command Prompt** — in the same menu, you can run `sfc /scannow` and `DISM /Online /Cleanup-Image /RestoreHealth` to repair system files. It's the same tool from our [stuck Windows Update guide](/articles/windows-update-stuck), just run from the recovery environment.

## Step 5: Reset or reinstall Windows

If nothing above gets you to a desktop, the problem is deep system corruption. The last software option is a reset:

- In the recovery screen, choose **Troubleshoot → Reset this PC → Keep my files**.

"Keep my files" reinstalls Windows while preserving your personal documents and photos. Apps and settings go, but your files stay. Read our full [guide to resetting a Windows PC](/articles/how-to-reset-windows-pc) before you do it — and if you can't risk any file loss, that guide covers backup options too.

## When it's probably hardware

Be honest with yourself about these signs, because software fixes won't help if the hardware is failing:

- The PC won't power on at all, or turns off by itself during boot.
- You hear clicking from the drive, or the PC runs but shows nothing on any monitor.
- The problem started after a power cut, a drop, an overheating episode, or water.
- Safe Mode, Startup Repair, and every recovery tool all fail the same way.

Any of those points toward failing hardware — most commonly the storage drive or RAM — and a repair shop is the right next stop, not another software trick. At that point it's also worth thinking about whether repair beats replacement; our [guide to choosing a laptop](/articles/how-to-choose-a-laptop-buying-guide) helps if you're shopping.

## One thing to do now, before it gets worse

If the PC is booting again — even slowly or unreliably — do a backup before the next failure. This is the lesson everyone learns the hard way.

- **Copy what matters to an external drive or cloud storage:** documents, photos, and anything you couldn't replace.
- **Turn on Windows' built-in backup** if you haven't: **Settings → Accounts → Windows backup** lets you sync your settings and files.
- **Run a drive health check.** In File Explorer, right-click your main drive → **Properties → Tools → Check** — Windows will scan for errors that might explain the boot trouble.

A machine that's showing boot symptoms once is often fine for years. A machine that shows them repeatedly is telling you to back up while you still can. Either way, being backed up turns a future boot problem from a disaster into an inconvenience.

## Wrapping up

Check the simple stuff, let Startup Repair try, get into Safe Mode and remove the offender, then work through System Restore and system file repair. Reset Windows only as the last software step. And if nothing software helps, respect the hardware warning signs — they're telling you something.

Once your PC is booting again, keep it healthy with the [speed-up guide for Windows 11](/articles/speed-up-windows-11-pc). And for more boot, crash, and recovery help, browse the rest of our [Windows articles](/articles/category/windows).
