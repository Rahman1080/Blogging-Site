---
title: "Wi-Fi Connected But No Internet on Windows: 7 Fixes"
description: "Your Windows PC says it's connected to Wi-Fi but there's no internet and a yellow triangle appears. Work through these 7 fixes in order to get back online."
author: "Info 24/7 Editorial Team"
pubDate: 2026-08-23
lastReviewed: 2026-08-23
category: "windows"
tags: ["windows", "wifi", "internet", "troubleshooting"]
type: "troubleshooting"
draft: false
featured: false
featuredImage:
  src: "/images/covers/wifi-connected-no-internet-windows.jpg"
  alt: "Windows network icon with a yellow warning triangle saying no internet"
seo:
  title: "Wi-Fi Connected But No Internet? 7 Windows Fixes"
  description: "PC shows Wi-Fi connected but no internet access? Restart, forget and rejoin, flush the DNS, and use Windows' built-in network reset to fix it."
  primaryKeyword: "Wi-Fi connected but no internet"
  keywords: ["connected but no internet Windows", "internet not working wifi connected", "fix wifi no internet access", "no internet yellow triangle"]
  longTail:
    - "wifi connected but no internet on Windows 11"
    - "why does my PC say connected but no internet"
    - "how to fix no internet access on Windows"
  relatedQuestions:
    - "Why does my PC say connected but no internet?"
    - "What does the yellow triangle on my Wi-Fi icon mean?"
    - "Is it safe to reset network settings on Windows?"
    - "Should I flush my DNS cache?"
  entities: ["Windows 11", "DNS", "Wi-Fi", "Command Prompt"]
related:
  - "wifi-not-working-fixes"
  - "speed-up-windows-11-pc"
faq:
  - question: "Why does my PC say connected but no internet?"
    answer: "Your PC has joined the Wi-Fi network, but the router isn't passing a working internet connection through, or Windows can't reach the DNS servers that turn website names into addresses. The fixes below cover both cases."
  - question: "What does the yellow triangle on my Wi-Fi icon mean?"
    answer: "It means you have a local connection to the network but no confirmed internet access. Windows shows it when it can't reach the internet, whether the router is genuinely offline or the PC just can't get through."
  - question: "Is it safe to reset network settings on Windows?"
    answer: "Yes. Network reset reinstalls your network adapters and restores default settings. Your files are untouched, but saved Wi-Fi passwords, VPN connections, and custom network settings are cleared, so you'll need to rejoin networks afterward."
  - question: "How do I flush the DNS cache?"
    answer: "Open Command Prompt or Terminal and type ipconfig /flushdns, then press Enter. It clears Windows' saved website-address lookups, which fixes a small but common cause of 'connected but no internet.'"
---

You're connected to Wi-Fi — the bars are there — but nothing loads. Hover over the icon and Windows says "Connected, no internet" with that little yellow triangle. It's one of the most common Windows complaints, and the cause is almost always fixable from your own PC.

This is the Windows-device version of the problem: other gadgets in the house may be working fine while your PC is the one that's stuck. These seven fixes are ordered from quickest to most thorough. Stop as soon as one works.

## Why "connected but no internet" happens

Two very different things can be going on, and knowing which one you're dealing with saves you time:

- **The internet is down for everyone.** The router has no connection to the outside world, and your PC is just the device that's noticing. Every other device in the house will show the same problem.
- **Your PC is the problem.** Everything else loads fine, but your PC can't get through. This is the case this guide is built for — and it's usually a Windows-side issue rather than a network fault.

A ten-second test settles it: grab your phone and load any website. If the phone works and the PC doesn't, you're in the second category — the PC is the one that needs fixing, so keep reading.

## Fix 1: Restart your PC and your router

The classic for a reason. A stale connection on either end is the most common cause of "connected but no internet."

1. Restart your PC first — **Start → Power → Restart**.
2. If that doesn't help, restart the router: unplug it, wait 30 seconds, plug it back in, and wait two minutes for it to fully start.
3. When the router is back, disconnect and reconnect to the network on your PC.

If other devices in the house are online, skip the router and focus on the PC-side fixes below.

## Fix 2: Forget the network and rejoin

Windows sometimes hangs on to a broken connection profile. Rebuilding it is quick and painless.

1. Open **Settings → Network & internet → Wi-Fi**.
2. Click **Manage known networks**.
3. Find your network, click the **...** next to it, and choose **Forget**.
4. Click the Wi-Fi icon in the taskbar, pick your network again, and re-enter the password.

Forgetting a network only removes your saved password and settings for it — nothing else on the PC is affected.

## Fix 3: Toggle airplane mode

This forces the Wi-Fi adapter to fully power down and back up.

1. Open **Settings → Network & internet → Airplane mode**.
2. Turn airplane mode **on**, wait about ten seconds, then turn it **off**.
3. Reconnect to your Wi-Fi network and test.

It sounds too simple, but a full adapter restart clears a surprising number of stuck connections. If your PC doesn't have an airplane mode toggle, restarting the PC does the same thing.

## Fix 4: Flush the DNS cache

Windows keeps a list of recent website-address lookups so it doesn't have to ask every time. A corrupt or outdated entry can leave you unable to load sites even though the connection looks fine.

1. Press the **Start** button and type **cmd**.
2. Right-click **Command Prompt** (or Terminal) and choose **Run as administrator**.
3. Type this command and press Enter:
   `ipconfig /flushdns`
4. Restart your browser and test.

While you're in there, these two commands renew your IP address and are worth running in the same order:

`ipconfig /release`
`ipconfig /renew`

## Fix 5: Turn off the VPN

If you use a VPN, turn it off and test again. A VPN routes all your traffic through another server, and when that server is down or your VPN connection is half-broken, you get exactly this symptom: connected to Wi-Fi, no internet.

- Open the VPN app and disconnect, then try loading a page.
- Windows' built-in VPN connections are in **Settings → Network & internet → VPN** — disconnect any that are active.

If the internet works with the VPN off, the problem is the VPN service, not your PC or network.

## Fix 6: Run the network troubleshooter

Windows has a built-in diagnostic that walks through common network problems automatically.

1. Open **Settings → System → Troubleshoot → Other troubleshooters**.
2. Find **Network and Internet** and click **Run**.
3. Follow the prompts. If it finds a fix, it applies it and asks you to test.

It won't fix everything, but it's free, safe, and sometimes catches something you'd never think to check.

## Fix 7: Reset network settings

When nothing above works, Windows can reinstall its network stack completely. This is the big hammer — it removes saved networks, VPNs, and custom DNS settings, so have your Wi-Fi password handy.

1. Open **Settings → Network & internet → Advanced network settings**.
2. Click **Network reset**.
3. Click **Reset now** and confirm. Your PC will restart.
4. After it comes back, reconnect to your Wi-Fi and test.

A network reset fixes most cases of "connected but no internet" that the gentler fixes miss, because it starts the network side of Windows from scratch.

## Wrapping up

Work the ladder in order: restart, forget and rejoin, toggle airplane mode, flush DNS, check the VPN, run the troubleshooter, and reset the network only if you have to. If your internet is genuinely down across every device — not just this PC — then the issue is upstream, and our guide to [fixing Wi-Fi that's slow or dropping](/articles/wifi-not-working-fixes) covers the router-side causes.

Once you're back online, it's a good time to make sure the rest of the PC is running smoothly — our [speed-up guide for Windows 11](/articles/speed-up-windows-11-pc) is a quick read. And for more Windows help, see the rest of our [Windows articles](/articles/category/windows).
