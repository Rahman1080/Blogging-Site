---
title: "How to Check Your PC Specs on Windows 11"
description: "Check your PC specs in Windows 11 without any tools: use Settings to see the headline specs, Task Manager for live CPU, RAM, and GPU, and System Information for depth."
author: "Info 24/7 Editorial Team"
pubDate: 2026-08-23
lastReviewed: 2026-08-23
category: "windows"
tags: ["windows", "pc", "tips", "how-to"]
type: "how-to"
draft: false
featured: false
featuredImage:
  src: "/images/covers/how-to-check-pc-specs-windows.jpg"
  alt: "Windows Settings About page showing CPU, RAM, and device name"
seo:
  title: "How to Check PC Specs on Windows 11"
  description: "See your CPU, RAM, GPU, and storage in Windows 11 using Settings, Task Manager, or System Information — no third-party apps required."
  primaryKeyword: "how to check PC specs"
  keywords: ["check computer specs Windows 11", "see CPU and RAM specs", "system information Windows", "check graphics card specs"]
  longTail:
    - "how to find your computer specs on Windows 11"
    - "how to check RAM and CPU on Windows"
    - "how to check GPU specs Windows"
  relatedQuestions:
    - "What is the quickest way to see my PC specs in Windows 11?"
    - "How do I check my graphics card in Windows?"
    - "Where is System Information in Windows 11?"
    - "How much RAM do I have?"
  entities: ["Windows 11", "Task Manager", "System Information", "DirectX Diagnostic Tool"]
related:
  - "how-to-choose-a-laptop-buying-guide"
  - "how-much-ram-do-you-need"
faq:
  - question: "What is the quickest way to see my PC specs in Windows 11?"
    answer: "Open Settings → System → About. You'll see your device name, processor (CPU), installed RAM, and whether Windows is 64-bit — all on one screen, no extra tools needed."
  - question: "How do I check my graphics card in Windows?"
    answer: "Open Task Manager (Ctrl+Shift+Esc), go to the Performance tab, and click GPU on the left. You'll see the graphics card name, its memory, and live usage. For more detail, type dxdiag in the Start menu and check the Display tab."
  - question: "Is a third-party system info tool necessary to check specs?"
    answer: "No. Windows 11's built-in tools — Settings, Task Manager, System Information, and dxdiag — cover everything most people need. Third-party tools are only useful if you want deep detail like temperatures, which these built-ins don't show."
  - question: "How do I know if my PC can run a specific game or program?"
    answer: "Compare your CPU, RAM, and GPU (from Task Manager's Performance tab) against the software's listed minimum requirements. If you're shopping for a new machine, our how-to-choose-a-laptop guide explains which specs matter most."
---

Knowing your PC's specs isn't just for tech people. You need them before buying a game, adding RAM, upgrading a graphics card, or deciding whether a laptop is worth its price. And you don't need a single third-party app to find them — Windows 11 has everything built in.

Here's how to check your CPU, RAM, graphics card, and storage in about thirty seconds, plus what each spec actually means.

## The 30-second route: Settings → About

The quickest way to see your headline specs:

1. Press **Windows key + I** to open Settings.
2. Go to **System → About**.
3. Under **Device specifications**, you'll see:
   - **Processor** — your CPU and its generation (for example, "Intel Core i5-13500H").
   - **Installed RAM** — your memory, like "16.0 GB".
   - **System type** — whether you're running 64-bit or 32-bit Windows.

That screen covers what most people mean by "computer specs." If you also want to see your graphics card and storage, keep reading.

## Live performance: Task Manager

Task Manager shows the same specs plus real-time usage, which is what you want when something is slow or you're checking whether a game will run.

1. Press **Ctrl+Shift+Esc** to open Task Manager.
2. Click the **Performance** tab.
3. Click each item on the left to see details:
   - **CPU** — the processor name and its current speed and usage.
   - **Memory** — total RAM and how much is in use.
   - **Disk** — your storage drive, its type (SSD or HDD), and free space.
   - **GPU** — your graphics card name, its dedicated memory, and current usage.

The Performance tab is also the place to spot problems: if memory sits near 100% or a disk reads as constantly maxed out, that explains sluggish behavior — the kind our [guide to speeding up Windows 11](/articles/speed-up-windows-11-pc) helps with.

## The deep dive: System Information

When you need the complete picture — motherboard model, BIOS version, every drive, every network adapter — System Information is the built-in encyclopedia.

1. Press the **Start** button and type **System Information**.
2. Open the app.
3. Under **System Summary**, you'll find your processor, RAM, BIOS, and more. Expand the **Components** section to dig into graphics, storage, and networking.

The interface is old-fashioned — it looks like it hasn't changed in twenty years, because it hasn't — but the data is complete and accurate.

## The command-line route: one command

If you're comfortable with a command line, this is the fastest way to see the full picture in a single block of text.

1. Press the **Start** button and type **cmd** (or open Terminal).
2. Type `systeminfo` and press Enter.
3. Read through the output for your processor, total RAM, and much more.

It takes a few seconds to gather everything, but it prints the whole list — including your Windows version and build number — in one go. It's the same data System Information shows, just in plain text form.

## Finding your PC's exact model

Sometimes you don't need the specs at all — you need to know which PC you own. Warranty lookups, driver downloads, and hardware upgrades all start with the model name.

- In **Settings → System → About**, the **Device name** is your PC's network name, which is handy for networking but isn't the model.
- Laptops usually have the model printed on a sticker on the underside; desktops carry it on the back or side panel.
- Windows also records it: in **System Information**, look for **System Model**.

If you're shopping for a new PC rather than checking the one you have, your current specs matter less than you'd think — the buying guide linked below covers which specifications are worth paying for on a new machine.

## For games and graphics: dxdiag

If you're checking DirectX support or want a tidy summary of your graphics hardware, use the DirectX Diagnostic Tool.

1. Press **Windows key + R**, type `dxdiag`, and press Enter.
2. The **System** tab shows your processor and RAM.
3. The **Display** tab shows your graphics card, its VRAM, and driver version.

This is the tool most game-support forums ask for when you're troubleshooting, and it saves its report to a file if you need to send it to anyone.

## What each spec actually means

Quick translation so the numbers make sense:

- **CPU (Processor):** The brain. More cores and a newer generation generally mean faster multitasking and better performance in demanding apps. You don't need to memorize model numbers — just know that a higher number in the same family is usually newer and faster.
- **RAM (Memory):** How much work your PC can keep open at once. 8 GB is the bare minimum for comfortable everyday use; 16 GB handles most people's browsing, Office, and multitasking with room to spare. If you're wondering whether more RAM is worth it, our [RAM buying guide](/articles/how-much-ram-do-you-need) walks through it.
- **Storage (SSD vs HDD):** Your drive type matters almost as much as its size. An SSD makes everything feel instant; an older HDD makes boot times crawl. "Disk" in Task Manager shows you which you have.
- **GPU (Graphics card):** Handles everything on screen, from desktop rendering to games and video editing. If you don't game or edit video, the built-in graphics are usually fine — check Task Manager's GPU entry to see what you have.

## When you're shopping instead

Checking your own specs is useful, but if you're about to buy a new laptop or desktop, reading the spec sheet of a new machine is a different skill. Our [guide to choosing a laptop](/articles/how-to-choose-a-laptop-buying-guide) explains which specifications actually matter for your money — and which ones marketing departments overhype.

## Wrapping up

Settings → About covers the headline numbers in seconds. Task Manager shows your GPU, storage, and live usage. System Information and dxdiag are there when you need the full detail. No downloads, no third-party system info tools, nothing to install.

For more everyday Windows help, browse the rest of our [Windows guides](/articles/category/windows).
