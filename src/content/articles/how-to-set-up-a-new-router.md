---
title: "How to Set Up a New Router (Including Changing Settings)"
description: "Setting up a new router is a roughly 15-minute job: plug it in, log into the admin page, set a network name and password, and turn on encryption. Here's the whole process."
author: "Info 24/7 Editorial Team"
pubDate: 2026-08-23
lastReviewed: 2026-08-23
category: "internet"
tags: ["router", "wifi", "internet", "how-to"]
type: "how-to"
draft: false
featured: false
featuredImage:
  src: "/images/covers/how-to-set-up-a-new-router.jpg"
  alt: "New router with cables being connected to a modem"
  caption: "Ethernet RJ45 connector p1160054"
  credit: "Photo via Wikimedia Commons (CC BY-SA)"
seo:
  title: "How to Set Up a New Router (Step by Step)"
  description: "Set up a new Wi-Fi router in about 15 minutes: connect the hardware, open the admin page, choose a network name, and set a strong password."
  primaryKeyword: "how to set up a wifi router"
  keywords: ["router setup guide", "change wifi name and password", "router admin login", "configure router settings"]
  longTail:
    - "how to set up a new router at home"
    - "how to change your wifi password on the router"
    - "what is a router admin page"
  relatedQuestions:
    - "Where do I plug in the router during setup?"
    - "How do I log into my router's settings?"
    - "What should I name my Wi-Fi network?"
    - "How do I change my Wi-Fi password?"
  entities: ["router", "modem", "WPA3", "WPA2"]
related:
  - "how-to-secure-your-home-wifi-network"
  - "wifi-not-working-fixes"
faq:
  - question: "Where do I plug in the router during setup?"
    answer: "Connect the router's internet (WAN) port to your modem with the cable your provider supplied, then plug the router into power. If you have a combined modem-router from your provider, you may need to put it into bridge mode or call them before adding your own router."
  - question: "How do I log into my router's admin page?"
    answer: "Open a browser on a device connected to the router and type the address printed on the router's label — commonly something like 192.168.0.1 or 192.168.1.1. The same sticker lists the default username and password (often 'admin' and 'admin' or 'password'). Change that login password after you're in."
  - question: "What should I name my Wi-Fi network?"
    answer: "Pick something recognizable but not personally identifying — your family name, apartment number, or a random word work well. Avoid your full name and address, since the name is visible to anyone nearby."
  - question: "How do I change my Wi-Fi password?"
    answer: "In the router's admin page, open the Wireless or Wi-Fi settings, find the password or pre-shared key field, enter a long passphrase, and save. Devices already connected will drop and need to reconnect with the new password."
---

# How to Set Up a New Router (Including Changing Settings)

Setting up a new router sounds like a job for someone who "knows tech," but it's really a 15-minute task with about four steps: plug things in, find the router's settings page, name your network, and set a password. If you can follow a recipe, you can set up a router.

This guide walks through the whole process and shows you which settings actually matter — and which ones to leave alone.

## What you'll need

- Your new router.
- A modem (or an internet connection point) that already provides internet.
- A computer or phone.
- The router's setup card or the sticker on its underside — it lists the admin address and default login.

## Step 1: Connect the hardware in the right order

The order matters, so don't skip ahead.

1. Turn everything off or at least have the modem unplugged while you connect cables.
2. Connect the modem's internet port to the router's internet (WAN) port using the Ethernet cable that came with the router or your provider. Don't use a port labeled 1, 2, 3, or 4 for this — those are for your devices.
3. Plug the router into power.
4. Power on the modem, wait for its lights to settle, then power on the router.
5. Wait a couple of minutes for the router to fully start. Its status light should stop blinking.

If you have a combined modem-router from your internet provider, you have two options: use it in "bridge mode" so your new router does the Wi-Fi work, or just run the new router as an extra network. Bridge mode is cleaner but the menu name varies, so when in doubt, check with your provider.

## Step 2: Find the router's admin page

The router's settings live in an admin page — a plain website served by the router itself.

1. Connect a device to the router's Wi-Fi (or plug it in with an Ethernet cable).
2. Open a browser and type the address printed on the router's sticker. It's usually something like `192.168.0.1` or `192.168.1.1`. (The exact number doesn't matter — the sticker and the manual are the source of truth.)
3. Enter the default username and password from the same sticker. Common defaults are "admin" with "admin" or "password," but don't guess — read the label.

If the page won't load, make sure you're connected to the new router's network and not still on your old one, and try a hard refresh. Once you're in, the first thing to do is change that default admin login, because "admin/admin" is the first thing an attacker tries. Look for a "Change password" or "Administration" section.

## Step 3: Give your network a name (SSID)

The network name is the SSID — the name you see in your device's Wi-Fi list.

1. In the admin page, find the Wireless or Wi-Fi settings.
2. Find the SSID (or network name) field.
3. Type a name that's recognizable to you but not revealing — your family name or a random word beats your full name and house number, since neighbors can see it.
4. Save the settings.

If you want to force devices onto the fastest band, you can give the 2.4 GHz and 5 GHz bands separate names (like "Home" and "Home-5G"). If you keep them identical, your devices decide on their own — which is fine for most people.

## Step 4: Set a strong Wi-Fi password

This is the password your family and guests enter to join the network. It should be long and unguessable — a passphrase with a few words and numbers beats a short scramble.

1. In the same Wireless settings section, find the password or pre-shared key (PSK) field.
2. Enter a passphrase that's at least a dozen characters.
3. Save. Every device currently connected will disconnect and need the new password, which is normal.

Resist the urge to reuse an old password. Someone who knows it can use your connection for anything — and this is also the main reason strangers end up on home networks. If you want the full checklist of settings that keep people out, our [guide to securing your home Wi-Fi network](/articles/how-to-secure-your-home-wifi-network) covers the rest.

## Step 5: Turn on the right encryption

Your password only means anything if it's scrambled properly. In the Wi-Fi settings, look for "Security" or "Encryption" mode.

- Choose **WPA2 or WPA3** if available. WPA3 is the newest and best; WPA2 is still fine for older devices.
- Avoid **WEP** and **WPA** — both are old, slow, and easily broken.
- "Open" or "None" means no password at all. Never leave it there.

## Step 6: Update the firmware before you forget

Router manufacturers ship bug fixes and security patches as firmware updates. Do this during setup while you're already in the admin page:

1. Look for **Firmware Update** or **Administration → Update**.
2. Check for and install any update.
3. Let the router restart.

An unpatched router is one of the easiest entry points into a home network, so this step doubles as a security task.

## Step 7: Reconnect your devices

Now connect everything to the new network:

1. On each device, open the Wi-Fi list.
2. Select your new network name.
3. Enter the new password once, and the device remembers it from then on.

For phones and computers you rarely have to do more than this. If a device refuses to connect while others work, it may be an older device that doesn't support your new encryption — we cover that situation in [why a Wi-Fi network won't show up or connect](/articles/wifi-not-working-fixes).

## Wrapping up

New router setup is plugging in cables, visiting the address on the sticker, naming the network, setting a password, and turning on WPA2 or WPA3. Do those and you've done 95% of what a professional would. Change the admin login, update firmware, and you're ahead of most homes.

If anything still feels slow or flaky afterward, check placement and bands before you blame the router. For everything else about running a home network, browse the [internet category](/articles/category/internet).
