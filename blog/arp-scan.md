---
slug: arp-scan
title: ARP Scan
authors: aneesh
tags: [arp, arp-poisoning, man-in-the-middle]
---

## ARP

- Address Resolution Protocol
  - Basic ARP identifies MAC addresses and maps them to the IP addresses
  - the thing where it stores MAC address is known as ARP cache
- arp-scan is a command-line tool that uses the ARP protocol to discover and fingerprint IP hosts on the local network
- arp-cache consists of associations our computer has learned about MAC addresses and IP addresses on the network
  - initially we may get the one to the default gateway only
- `arp -a` we get all the entries in the arp cache
  - ex: ![](https://i.imgur.com/amp52LY.png)
  - static type means it has been feeded statically whereas dynamic type means, it had to learn about it
  - physical address is the mapped MAC addresses
- we can delete a specific entry by `arp -d <entry ip>`
- but what if we want to send arp requests to an external web server
  - we send it through the default gateway, that is in our case is the router
  - then router sends its mac address to the requester and then the requester sends the external web IP address to router and the router handles the rest
- `sudo arp-scan -l` we get all the information about hosts in the network (but with arp cache, we may not still learn all the new info about computer)
- but `-l` is very noisy and can be easily detectable
- tools like netdiscover are used for stealthy scans
- [[ARP Poisoning]] is a type of MITM where hacker utilizes these ARP requests to steal info

## ARP Poisoning

- let this be our initial system ![](https://i.imgur.com/koBbVfx.png)
- then B turned out to be a hacker ![](https://i.imgur.com/kaPi0rs.png)
- observe A's intial ARP cache for default gateway which points to the router
- now the hacker sends specific ARP requests to A where he changes the default gateway of A to his address, so now if A wants to communicate with the router, it sends requests to its IP in which it follows the MAC address from ARP Cache, but our hacker B has changed that IP address mapping of router in the ARP cache to his address, so all the requests will be redirected to him and first he grabs the information and then sends to the router
- This is called Man In The Middle Attack ![](https://i.imgur.com/V6G5qfr.png)
- We again do in such a way where we want the router to send result back to us instead of A first
- In Kali we use Ettercap to perform this attack
- [Procedure video](https://www.youtube.com/watch?v=A7nih6SANYs) From 3:38
- Using [[DNS Cache Poisoning]] you can make this attack more better
