---
title: "How to Find Your IP Address (Windows, Mac, Phone)"
description: "Every device has two IP addresses: a private one on your home network and a public one the internet sees. Here's how to find both on Windows, Mac, iPhone, and Android."
author: "Info 24/7 Editorial Team"
pubDate: 2026-08-23
lastReviewed: 2026-08-23
category: "internet"
tags: ["internet", "wifi", "tips", "how-to"]
type: "how-to"
draft: false
featured: false
featuredImage:
  src: "/images/covers/how-to-find-your-ip-address.jpg"
  alt: "Laptop showing a network settings screen with an IP address field"
  caption: "McGill University computer network map"
  credit: "Photo via Flickr (CC BY)"
seo:
  title: "How to Find Your IP Address (Windows, Mac, Phone)"
  description: "Find your IP address on Windows, Mac, iPhone, and Android. Learn the difference between public and private IPs and where to look on each device."
  primaryKeyword: "how to find your IP address"
  keywords: ["what is my IP address", "find local IP address", "public IP vs private IP", "check IP on iPhone and Android"]
  longTail:
    - "how to find my IP address on Windows 11"
    - "how to check your IP address on a phone"
    - "difference between public and private IP address"
  relatedQuestions:
    - "What's the difference between my public and private IP address?"
    - "How do I find my IP address on Windows 11?"
    - "Can I find my IP address on a phone?"
    - "Is my IP address the same on every device?"
  entities: ["IP address", "Windows 11", "macOS", "router"]
related:
  - "how-to-set-up-a-new-router"
  - "wifi-not-working-fixes"
faq:
  - question: "What's the difference between my public and private IP address?"
    answer: "Your public IP address is what the internet sees — one address for your whole home, assigned by your internet provider. Your private IP address is the one your router hands out to each device on your network, like a room number in a building. Every device in your home has a different private IP but shares one public IP."
  - question: "Is my IP address the same on every device?"
    answer: "No. Your private IP address is different on each device, because the router assigns each one its own. Your public IP address is the same for every device in your home, since it's the address of your whole network as seen from the internet."
  - question: "Can I find my IP address on a phone?"
    answer: "Yes. On iPhone, go to Settings → Wi-Fi, tap the network you're on, and look at the IP address. On Android, it varies by manufacturer but is usually under Settings → Wi-Fi, tap the connected network, or under Settings → About phone → Status."
  - question: "Does my IP address change?"
    answer: "It can. Most home internet providers assign a public IP that changes occasionally, and private IPs change when devices reconnect or the router restarts. A changing address is normal and not a sign of a problem."
---

# How to Find Your IP Address (Windows, Mac, Phone)

You've been told you need your IP address for a printer, a game server, or a support call, and now you're staring at a settings menu wondering which number it is. It's easier than it looks — once you understand that you actually have two of them.

Here's the difference, then exactly where to find each one on Windows, Mac, iPhone, and Android.

## Private vs public IP: the one-paragraph version

Think of the internet like a mail system. Your **public IP address** is your home's street address — one address that the whole world uses to reach you. It's assigned by your internet provider, and every device in your house shares it.

Your **private IP address** is your room number inside the building — the address your router gives each device so it can sort local mail. Your phone, laptop, and TV each have their own private IP, typically in a range your router manages automatically.

When someone asks for "your IP address," they usually want the private one — the one on your device. When a website or tool shows you "your IP," it's showing your public one.

## Find your private IP on Windows

The fastest route in Windows 11 (and Windows 10):

1. Open **Settings** (the Start menu gear icon) → **Network & internet**.
2. Click **Wi-Fi** if you're wireless, or **Ethernet** if you're on a cable.
3. Click the network you're connected to (on Wi-Fi, click the properties link for your network name).
4. Scroll to **IPv4 address** — that's your private IP.

There's also the classic command-line method, which works on any Windows version:

1. Press **Windows key + R**, type `cmd`, and press Enter.
2. Type `ipconfig` and press Enter.
3. Look at the adapter you're using (Wi-Fi or Ethernet) and read **IPv4 Address**.

Both show the same thing — the second is just faster once you've done it once.

## Find your private IP on a Mac

On modern macOS:

1. Open **System Settings** → **Network**.
2. Select your active connection (**Wi-Fi** or **Ethernet**) on the left.
3. Click **Details** (next to the network name) and find **IP Address**.

That's it. The number shown, usually starting with 192.168, is your private IP.

## Find your private IP on iPhone and Android

**iPhone:**

1. Open **Settings** → **Wi-Fi**.
2. Tap the "i" (info) button next to the network you're connected to.
3. The **IP Address** field is listed under IPv4.

**Android:** the exact menu varies by manufacturer, which is normal. Try either of these:

1. Open **Settings** → **Wi-Fi**, tap the connected network (or the gear icon next to it), and look for **IP address**.
2. Or open **Settings** → **About phone** (sometimes under **System**) → **Status**, and read the **IP address** line.

## Find your public IP (any device)

Your public IP is the address the whole internet sees, and you don't need any settings menus for it — the router knows it, but so does any website you visit.

1. Open a browser on any device.
2. Search for "what is my IP" — most search engines show it right at the top of the results.
3. Or visit a simple website that displays it (many free services do exactly this).

That number is your public IP, the same for every device in your home. If your IP changed between yesterday and today, don't worry — most home plans get a new public IP from time to time, and it's normal.

## Why you'd ever need this

The most common reasons people hunt for an IP address:

- **Printer or device setup.** Your home printer shares the network, and you may need its IP (found in the printer's own settings, by the way, not your phone's).
- **Router settings.** The address to log into your router is a private IP — and it's printed on the router's own sticker if you can't recall it.
- **Gaming and servers.** Hosting a game or a local server sometimes asks for your local IP so other devices can find it.
- **Tech support.** A support agent may ask for your public IP to look up your connection, or your private IP to check how your device connects.

One distinction worth knowing so you don't chase the wrong number: an IP address is not the same thing as a device's MAC address. An IP address is a locator — where a device sits on a network — and it can change. A MAC address is a permanent hardware identifier stamped on the network card itself, and it's used to tell devices apart on the local network. When a router lists "connected devices," it often shows both. If a support agent asks for a "MAC address," that's the hardware one — not the IP you'll find in these steps.

If a request for your IP comes with a demand for passwords or payment, pause — that's not how legitimate support works. Scammers use IP addresses to sound technical. Our [guide to spotting phishing](/articles/how-to-spot-phishing-email) covers the telltale signs, and understanding your network (like how to [set up a router](/articles/how-to-set-up-a-new-router)) makes you much harder to fool.

## Wrapping up

One public IP for your whole home, one private IP per device. Find the private one in your device's network settings (or with `ipconfig` on Windows), and find the public one by searching "what is my IP" from any device. It's a five-minute skill, and it comes up far more often than you'd expect.

If your Wi-Fi is misbehaving while you're in these settings — or if a device can't connect to the network at all — start with our [Wi-Fi fixes](/articles/wifi-not-working-fixes) before anything else. The rest of your home networking answers live in the [internet category](/articles/category/internet).
