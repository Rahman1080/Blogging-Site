---
title: "Wi-Fi Network Not Showing Up or Won't Connect on One Device"
description: "Your Wi-Fi works on every device except one? The problem is almost certainly that device, not your router. Here's how to fix a network that won't show up or connect."
author: "Info 24/7 Editorial Team"
pubDate: 2026-08-23
lastReviewed: 2026-08-23
category: "internet"
tags: ["wifi", "internet", "troubleshooting", "tips"]
type: "troubleshooting"
draft: false
featured: false
featuredImage:
  src: "/images/covers/wifi-network-not-showing-up.jpg"
  alt: "Laptop showing a wifi list with one network missing and a question mark"
seo:
  title: "Wi-Fi Not Showing Up on One Device? Fixes to Try"
  description: "One device can't find or won't join your Wi-Fi while others connect fine? Try these fixes in order — restart, forget network, check airplane mode, encryption."
  primaryKeyword: "wifi network not showing up"
  keywords: ["wifi not showing on laptop", "phone won't connect to wifi", "device can't find wifi network", "wifi works on some devices not others"]
  longTail:
    - "why is my wifi not showing up on my laptop"
    - "phone connects to wifi but other devices don't"
    - "how to fix a device that can't find the wifi"
  relatedQuestions:
    - "Why does my Wi-Fi work on some devices but not others?"
    - "How do I fix a laptop that can't find my Wi-Fi network?"
    - "Can old devices fail to connect to a newer network?"
    - "What do I do if my phone won't connect to Wi-Fi?"
  entities: ["Wi-Fi", "router", "WPA2", "WPA3"]
related:
  - "wifi-connected-no-internet-windows"
  - "wifi-not-working-fixes"
faq:
  - question: "Why does my Wi-Fi work on some devices but not others?"
    answer: "If every other device connects fine, the problem is almost always the single device — a stuck network stack, airplane mode left on, a forgotten password, or hardware too old for your router's security settings. The router is fine if it's working for everything else, so focus your fixes on the one device."
  - question: "Can an old device fail to connect to a newer network?"
    answer: "Yes. If your router is set to WPA3-only, devices made before WPA3 became common may not support it and won't connect. Switching the router to WPA2/WPA3 mixed mode usually fixes it, at the cost of letting older devices use the older standard. Very old devices may also not support the newer 5 GHz band and only appear on 2.4 GHz."
  - question: "How do I fix a laptop that can't find my Wi-Fi network?"
    answer: "Toggle Wi-Fi off and on, restart the laptop, then check that Wi-Fi isn't disabled in the network settings (Windows has a Wi-Fi toggle and sometimes a physical switch or function key; Macs rarely have one). Updating the wireless driver or checking for a macOS update also fixes many cases where a network won't appear."
  - question: "What do I do if my phone won't connect to Wi-Fi?"
    answer: "Forget the network in Wi-Fi settings and rejoin it with the password, and make sure airplane mode is off. If it still fails, restart the phone. On Android, also check Settings → Network → Wi-Fi to confirm the adapter is on. A phone that still won't connect after a restart may have a software issue worth an update."
---

# Wi-Fi Network Not Showing Up or Won't Connect on One Device

Here's the most useful fact about this problem: if every other device in your home connects to your Wi-Fi and only one doesn't, your router is fine. The fault is on that single device — which is good news, because it means the fix is local and usually simple.

Work through these in order. Most people are back online within a few minutes.

## Rule out the obvious (and the embarrassing)

Before you touch settings, check the two things that cause a surprising share of "my Wi-Fi disappeared" cases:

- **Airplane mode.** On phones and laptops, confirm it's off. It's designed to turn off all wireless — and it's remarkably easy to toggle accidentally.
- **Wi-Fi switch.** Some laptops have a physical switch or a function-key shortcut that turns Wi-Fi on and off. Windows laptops in particular have a Wi-Fi toggle in the network quick settings; Macs don't usually have one, but check the menu bar icon.
- **The network name.** Make sure you're looking for the right name. If you recently changed the network name or got a new router, your device may still be looking for the old one. Refresh the Wi-Fi list and scan for anything unfamiliar.

## 1. Toggle Wi-Fi off and on

The quickest reset: turn Wi-Fi off, wait a few seconds, turn it back on, and give the network list a moment to refresh.

- **iPhone:** Settings → Wi-Fi, toggle off, then on.
- **Android:** open the quick settings and toggle Wi-Fi off and on (or Settings → Network & internet → Wi-Fi).
- **Windows:** click the network icon in the taskbar and toggle Wi-Fi.
- **Mac:** click the Wi-Fi icon in the menu bar and turn Wi-Fi off, then on.

If the network appears after this, you're done. If not, move on — don't keep toggling.

## 2. Restart the device

A stuck network component clears with a proper restart. Restart the device (full shutdown and power on, not just the screen), then open the Wi-Fi list again. This resolves a large share of "network missing" cases, because the network stack starts fresh.

## 3. Forget the network and reconnect

If the network shows up but won't connect — or shows up with a weak signal and fails — your device may be holding a stale connection profile with an old password or old settings.

1. Open the Wi-Fi settings.
2. Find your network name and choose **Forget This Network** (iPhone/Mac) or **Forget** (Android).
3. Rejoin from the network list and enter the password again.

This forces the device to start over with the network instead of using a corrupted saved profile. It fixes "connects but no internet," "keeps saying wrong password," and "won't join" more often than people expect.

## 4. Check the wireless adapter (laptops)

On laptops, the Wi-Fi hardware itself can drop out or get disabled:

- **Windows:** open **Device Manager** → **Network adapters**, find your Wi-Fi adapter. If it's marked with a down arrow, right-click and **Enable**. You can also right-click and **Uninstall** (Windows reinstalls the driver on restart — this is a standard fix, not a risky one), or check for a driver update.
- **Mac:** check for a macOS update under **System Settings** → **General** → **Software Update**, since macOS updates often include wireless fixes. If Wi-Fi is missing entirely from the menu bar, restart your Mac or reset the network settings.

A driver update on Windows or a system update on a Mac resolves most cases where a laptop simply can't see a network that everyone else sees.

## 5. Old device vs modern security settings

Here's the common one that isn't the device's fault. If your network is set to **WPA3-only** security, devices made before WPA3 became standard may not support it — and they'll either show the network but refuse to join, or not show it at all.

The same goes for bands. Very old devices may not support 5 GHz, so they only see the 2.4 GHz network. If your router broadcasts both under the same name, an old device can appear to have "lost" the network when it's really just incompatible with the band it can't use.

Fixes:

1. Log into the router's admin page.
2. In the wireless security settings, switch from **WPA3-only** to **WPA2/WPA3 mixed**.
3. If you use one name for both bands, consider giving the 2.4 GHz band a separate name so older devices can find it.
4. Rescan on the problem device.

This is also worth knowing if you've just bought a shiny new router and your older laptop, game console, or smart device suddenly can't connect. Our [router setup guide](/articles/how-to-set-up-a-new-router) covers where these settings live.

## 6. Hidden network names

If you (or someone in the household) hid the network name (SSID) so it doesn't broadcast, it won't appear in the Wi-Fi list on *any* device — and new devices can't find it at all. On the device that already knows the network, it may still connect. On a device that doesn't have it saved, you must add it manually:

1. Open the Wi-Fi settings and choose **Add Network** or **Other Network**.
2. Type the exact network name (including any punctuation or spaces).
3. Choose the security type and enter the password.

If you didn't intend to hide the network, uncheck the "hide SSID" option in the router's wireless settings — hidden networks cause more confusion than they prevent.

## 7. When it's actually the router (rarely)

The one-device-only rule has a couple of exceptions worth knowing:

- If a *new* device can't connect while everything else does, the router may be rejecting it via a device list or MAC filter. Check the router's settings for a blacklist.
- If the device connected fine for a while and suddenly stopped, and it works on other networks (like a phone hotspot), the problem is the home network's relationship with that device — forget-and-reconnect is the best first fix.

If the whole house loses Wi-Fi at once, that's a router problem, not a device problem — work through our [Wi-Fi connection fixes](/articles/wifi-not-working-fixes) instead. And once you're connected, if the device shows Wi-Fi but no actual internet, the [Wi-Fi connected but no internet](/articles/wifi-connected-no-internet-windows) guide has the next steps.

## Wrapping up

When one device can't see or join your Wi-Fi, suspect the device, not the router. Check airplane mode and the Wi-Fi switch, restart, forget and reconnect, and update the adapter or system. If the device is old, look at your router's security mode and bands before you replace anything.

In the vast majority of cases it's a five-minute fix. If your network is suddenly missing on *everything*, that's a different problem — and you'll find the full set of [Wi-Fi troubleshooting guides](/articles/category/internet) waiting.
