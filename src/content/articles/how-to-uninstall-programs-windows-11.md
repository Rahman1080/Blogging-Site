---
title: "How to Completely Uninstall Programs on Windows 11"
description: "Uninstall programs on Windows 11 completely — Settings or Control Panel for clean removal, plus safe ways to handle leftover files and preinstalled bloatware."
author: "Info 24/7 Editorial Team"
pubDate: 2026-08-23
lastReviewed: 2026-08-23
category: "windows"
tags: ["windows", "software", "pc", "how-to"]
type: "how-to"
draft: false
featured: false
featuredImage:
  src: "/images/covers/how-to-uninstall-programs-windows-11.jpg"
  alt: "Windows Apps settings list with an uninstall button highlighted"
seo:
  title: "How to Completely Uninstall Programs in Windows 11"
  description: "Remove programs cleanly in Windows 11 with Settings or Control Panel, handle leftover files safely, and get rid of preinstalled bloatware."
  primaryKeyword: "how to uninstall programs on Windows 11"
  keywords: ["remove apps Windows", "uninstall leftover files", "uninstall via control panel", "delete software completely"]
  longTail:
    - "how to uninstall a program completely on Windows 11"
    - "how to remove apps that won't uninstall"
    - "how to uninstall bloatware from Windows"
  relatedQuestions:
    - "What's the difference between Settings and Control Panel for uninstalling?"
    - "How do I remove leftover files after uninstalling a program?"
    - "Can I uninstall preinstalled apps on Windows 11?"
    - "What if a program won't uninstall?"
  entities: ["Windows 11", "Control Panel", "File Explorer", "Start menu"]
related:
  - "speed-up-windows-11-pc"
  - "how-to-free-up-disk-space-windows"
faq:
  - question: "What's the difference between Settings and Control Panel for uninstalling?"
    answer: "Both do the same job for most programs. Settings → Apps shows everything and is the modern route; Control Panel's Programs and Features lists the same traditional installers. If a program doesn't appear in one, check the other."
  - question: "How do I remove leftover files after uninstalling a program?"
    answer: "Look in the program's folder (usually under C:\\Program Files) and in the AppData folder under your user account. Deleting leftovers you're certain about frees space, but if you're not sure, leave them — they're usually tiny and harmless."
  - question: "Can I uninstall preinstalled apps on Windows 11?"
    answer: "Many preinstalled apps (the ones that came with the PC) can be uninstalled like any other program. A few core ones — like Microsoft Store itself — can't be removed through the normal interface. You can still hide them from the Start menu."
  - question: "What if a program won't uninstall?"
    answer: "Restart first, then try the manufacturer's own uninstaller if one exists. If it still won't go, use the 'Search online' option in Settings or the installer's repair mode. Avoid third-party 'uninstaller' tools — they cause more problems than they fix."
---

Every few months there's an app you don't want anymore: the trial software that came with the printer, the game you stopped playing, the "optimizer" you never should have installed. Dragging it to the recycle bin doesn't work — that just moves the shortcut. You have to use Windows' real uninstaller, and the good news is Windows 11 makes it genuinely simple.

This guide covers the clean way to remove programs, how to deal with leftovers without touching anything risky, and how to clear out the preinstalled apps you never asked for.

## The main route: Settings → Apps

This is the primary way to uninstall anything in Windows 11.

1. Open **Settings** (press **Windows key + I**).
2. Go to **Apps → Installed apps**.
3. Find the program you want to remove. You can search for it by name or sort the list to find it.
4. Click the **...** (three dots) next to the app and choose **Uninstall**.
5. Confirm when prompted, and follow the uninstaller's steps if it opens one.

Some apps just vanish instantly. Others (older programs) launch their own uninstaller window — click through it and choose whatever option means "remove completely."

## The fallback: Control Panel

Settings shows most apps, but a few older programs only register in the classic list.

1. Press the **Start** button and type **Control Panel**, then open it.
2. Under **Programs**, click **Uninstall a program** (or **Programs and Features**).
3. Find the program, click it once, and click **Uninstall** (or right-click and choose **Uninstall**).

If a program isn't showing in Settings, check here. If it's showing in both, either route works — they connect to the same list.

## What actually gets removed

A clean uninstall should remove the program, its Start menu entries, and most of its working files. But two things often survive, and it's worth knowing they exist:

- **App data in AppData.** Programs keep settings and caches in a hidden folder under your user account (`AppData`), and uninstallers don't always clear it. These leftovers are usually small and harmless — and deleting them by hand is fine only if you're certain the program is gone for good.
- **Empty folders in Program Files.** The program's install folder sometimes stays behind after uninstall. It's typically just a shell with a few config files.

You can check both if you're a neatness stickler:

1. Open File Explorer and go to `C:\Program Files` (and `C:\Program Files (x86)`).
2. Look for a folder matching the program's name. If the program is gone but the folder remains, you can delete it — but only the folder that clearly belongs to the uninstalled program.
3. For app data, press **Windows key + R**, type `%appdata%`, and check for a folder with the program's name. Same rule: only delete it if you're sure.

Deleting these leftovers is safe when done carefully. What you should **not** do is go digging through the registry to "fully remove" traces — a mistake there can break other programs, and the tiny leftover entries never hurt anything.

## Remove apps that refuse to uninstall

Sometimes a program fights back. Work through these in order:

1. **Restart the PC.** A hung background process can block the uninstaller.
2. **Use the manufacturer's own uninstaller.** Many apps ship one — check the Start menu folder for the app or their website.
3. **Try the other route.** If Settings failed, try Control Panel, or vice versa.
4. **Repair then uninstall.** In Control Panel's Programs and Features, some apps offer **Change/Repair** — running Repair sometimes fixes a broken install enough that Uninstall then works.
5. **Windows' "Search online" option.** In Settings, some broken apps offer **Search online** for help. That takes you to official support, not a random downloader.

If none of that works, the app may be deeply broken — a fresh reset of Windows clears it, but that's a big hammer. And no, you don't need a third-party "force uninstaller" tool; they're usually worse than the problem.

## Reset a broken app instead of uninstalling

Sometimes an app isn't something you want to remove — it's just misbehaving. Windows offers a reset that wipes an app's data and settings back to a fresh state, which fixes many problems without you losing the program itself.

1. Open **Settings → Apps → Installed apps**.
2. Find the app, click the **...**, and choose **Advanced options**.
3. In the **Reset** section, click **Reset**. (The **Repair** button next to it is the gentler option — it tries to fix the app without clearing your data, so try that first.)

Only some apps offer this — typically the ones from the Microsoft Store. For traditional desktop programs, uninstalling and reinstalling is the equivalent move.

## Uninstalling Store apps vs. desktop programs

Windows 11 has two kinds of software, and they uninstall slightly differently:

- **Store apps** (from the Microsoft Store) uninstall instantly and completely — no leftover folders, no uninstaller window. They're the ones with the clean **Uninstall** button in Settings.
- **Desktop programs** (the ones you install from a website or a disc) run their own uninstaller and may leave the small leftovers discussed above.

If a program isn't appearing in the Installed apps list at all, it's probably a desktop program that only registered in Control Panel — check the classic list instead. Some portable apps (which run from a folder with no installation) won't appear in either list; you remove those simply by deleting their folder.

## Clear out preinstalled bloatware

PCs ship with apps you never wanted: the manufacturer's trial software, "security" apps that nag, bundled games. Most of it uninstalls like anything else:

1. Open **Settings → Apps → Installed apps**.
2. Sort the list and uninstall anything you don't recognize or use, using the same steps as above.

A few core apps — the Microsoft Store, Settings itself — can't be uninstalled through the normal interface. Don't try workarounds for those; just hide them from the Start menu by right-clicking and choosing **Unpin from Start**. They're lightweight and Windows needs them.

Clearing out bloatware also reclaims disk space — the same territory as our [guide to freeing up disk space on Windows](/articles/how-to-free-up-disk-space-windows) — and a leaner app list genuinely makes everyday use feel cleaner. If you're removing a pile of junk to make the PC feel faster, pair it with the [speed-up guide for Windows 11](/articles/speed-up-windows-11-pc).

## Wrapping up

Settings → Installed apps handles nearly everything. Control Panel catches the stragglers. Leftover folders are safe to delete when you're sure, and the registry should be left alone. For stubborn apps, restart, try the manufacturer's uninstaller, or use repair mode — not a sketchy third-party tool.

For more Windows tips and fixes, browse the rest of our [Windows articles](/articles/category/windows).
