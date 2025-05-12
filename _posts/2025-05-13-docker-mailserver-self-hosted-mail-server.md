---
title: "docker-mailserver: Self-Hosted, Full-Featured Mail Solution with Docker"
description: "Explore docker-mailserver, a production-ready, secure, and flexible mail server that runs in Docker. Perfect for privacy and control."
author: oceanofanything
date: 2025-05-13 13:00:00
categories: [GitHub Projects, Self-Hosting, Email Server]
tags: [docker, docker-mailserver, self-hosted email, mail server, smtp, imap, email security, linux server, email hosting, dkim, spf, dmarc, postfix, dovecot, opensource, docker-compose, mailserver setup, email privacy, sysadmin, devops, system administration, email configuration, tls ssl, ldap integration, spam filtering]
image:
  path: https://scriptxeno.github.io/2025-05-13-docker-mailserver-self-hosted-mail-server-images/2025-05-13-docker-mailserver-self-hosted-mail-server.webp
  alt: docker-mailserver secure self-hosted mail server with docker
  lqip: data:image/octet-stream;base64,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
---

# **docker-mailserver: Self-Hosted, Full-Featured Mail Solution with Docker**

Are you tired of relying on third-party email providers? Want full control of your mail environment without giving up convenience or security? You’re not alone.

{%raw%}
<script async="async" data-cfasync="false" src="https://pl26616663.profitableratecpm.com/93500646ba3c9ecea0b1bd094d136131/invoke.js"></script>
<div id="container-93500646ba3c9ecea0b1bd094d136131"></div>
{%endraw%}

Welcome to the world of **docker-mailserver** – a powerful, production-ready mail server that works entirely in Docker, no rocket science required.

---

## Why You Need a Self-Hosted Mail Server

Let’s face it – handing over your emails to companies like Google or Microsoft means sacrificing privacy. Whether you're running a startup, freelancing, or just value your digital freedom, hosting your own email server gives you complete control over your data.

And yes, self-hosted email doesn’t have to be a nightmare.

---

## Meet docker-mailserver

[**docker-mailserver**](https://shrinkme.ink/OzP2B2) is a fully-fledged, feature-rich, and secure mail server setup – all containerized and easy to deploy. With over **11K GitHub stars** and contributions from hundreds of developers, it’s one of the most trusted open-source mail server stacks.

It combines the best open-source tools into a seamless Docker-based experience.

> 🚀 Built for production use, docker-mailserver lets you go from zero to a working mail system in under 10 minutes.

---

## Key Highlights of the Project

- One-click deployment via Docker or Docker Compose  
- Supports SMTP, IMAP, POP3 out of the box  
- Spam filtering, antivirus, DKIM, SPF, and DMARC  
- Scripted user management  
- Lightweight and production-grade  
- Secure by default  

---

## Getting Started

Setting up a mail server can be intimidating. Not with this one.

### Prerequisites

- Docker Engine (v20+ recommended)  
- Docker Compose (for ease of use)  
- A domain name (e.g., `mail.yourdomain.com`)  
- Some basic Linux know-how  

### Supported Operating Systems and Environments

- Ubuntu (18.04, 20.04, 22.04)  
- Debian (10, 11, 12)  
- Red Hat-based distros (CentOS, Rocky, AlmaLinux)  
- Runs great on VPS providers like DigitalOcean, Linode, Hetzner, and AWS EC2  

### System Requirements

- At least 1 vCPU  
- 2 GB RAM minimum  
- 10+ GB disk space (email storage dependent)  
- Static public IP address is a plus  

---

## Core Features of docker-mailserver

### Modular & Configurable Mail Server

Behind the scenes, docker-mailserver uses:

- **Postfix** (SMTP)  
- **Dovecot** (IMAP/POP3)  
- **Rspamd** (Spam Filtering)  
- **Amavis / ClamAV** (Antivirus)  
- **OpenDKIM / OpenDMARC** (Email Authentication)  
- **Fail2Ban** (Intrusion Prevention)  

Every component is fine-tuned to work right out of the box, but highly customizable if you want to dive deeper.

### Out-of-the-Box Security

- TLS encryption with Let’s Encrypt  
- Optional SSL cert mounting  
- Firewall and brute-force protection  
- SpamAssassin-style filtering  
- Authenticated SMTP with SASL  

### Fully Scripted Installation

Managing users, setting up aliases, configuring DKIM? All of that is handled with easy scripts like:

```bash
./setup.sh email add john@yourdomain.com
./setup.sh alias add hello@yourdomain.com john@yourdomain.com
./setup.sh config dkim
```

Simple, right?

### Dockerized Deployment

Everything runs in containers, meaning:

- Minimal host dependencies
- Easy updates
- Isolation and portability
- Easy backup/restore

---

## Why docker-mailserver is a Game Changer

### Comparisons with Traditional Mail Servers

| Feature              | docker-mailserver  | Traditional Setup   |
| :--------------------|: ----------------- | -----------------:  |
| Ease of Setup        | ✅ Easy CLI setup  | ❌ Manual configs  |
| TLS/DKIM/SPF Support | ✅ Pre-configured  | ❌ Manual setup    |
| Resource Isolation   | ✅ Dockerized      | ❌ Host-dependent  |
| Update Process       | ✅ Docker pull     | ❌ Complex upgrade |
| Portability          | ✅ High            | ❌ Low             |

### Hassle-Free Admin Experience

From adding users to setting up complex filters, everything is done with scripts. There’s no need to manually edit Postfix or Dovecot configs – unless you want to.

### Privacy and Control Over Your Mail

Self-hosting gives you peace of mind that your emails aren’t being scanned or monetized. docker-mailserver lets you **own your infrastructure**.

---

## Architecture Overview

### System Components

Here's how it all fits together:

- `Postfix`: Handles sending and receiving mails
- `Dovecot`: Manages mailbox storage and retrieval
- `Rspamd`: Scans for spam
- `ClamAV`: Catches malware
- `OpenDKIM`: Ensures your mail is verifiable
- `Fail2Ban`: Keeps brute-force bots away

### Docker Compose Integration

Sample `docker-compose.yml` for quick start:

```yaml
version: '3.8'

services:
  mail:
    image: docker.io/mailserver/docker-mailserver:latest
    hostname: mail
    domainname: yourdomain.com
    container_name: mailserver
    env_file: mailserver.env
    volumes:
      - ./data:/var/mail
      - ./config:/tmp/docker-mailserver/
    ports:
      - "25:25"
      - "587:587"
      - "993:993"
    restart: always
```

## Mail Flow Diagram (Explained)

1. Mail arrives via `SMTP` (port 25 or 587)
2. Filtered by Rspamd and ClamAV
3. Stored by Dovecot in `/var/mail`
4. Retrieved securely by clients via IMAP or POP3

{%raw%}
<script type="text/javascript">
	atOptions = {
		'key' : 'e790d6d5d53ad675ad53d13f5dcff8e8',
		'format' : 'iframe',
		'height' : 50,
		'width' : 320,
		'params' : {}
	};
</script>
<script type="text/javascript" src="https://wirelessbin.com/e790d6d5d53ad675ad53d13f5dcff8e8/invoke.js"></script>
{%endraw%}

---

## How to Add Users and Manage Mailboxes

Managing users is simplified with `setup.sh`, which is included in the repository. Here are some of the most common commands:

### ✅ Add a New Mail User

```bash
./setup.sh email add john@example.com
```

### ✅ Change a User Password

```bash
./setup.sh email update john@example.com
```

### ✅ Create an Alias

```bash
./setup.sh alias add info@example.com john@example.com
```

### ✅ Remove a User

```bash
./setup.sh email del john@example.com
```

These scripts eliminate complex configurations and make day-to-day operations extremely admin-friendly.

---

## Advanced Features You’ll Love

### 🔒 **Two-Factor Authentication (2FA)**

docker-mailserver supports SASL authentication mechanisms and can be integrated with 2FA systems for added security.

### 📚 **LDAP and Active Directory Support**

You can configure the server to use LDAP or AD for centralized user management – perfect for larger teams or organizations.

### 🗂️ **Automatic TLS via Let's Encrypt**

Zero-configuration SSL with Let’s Encrypt. Just mount your certs or let the system handle it.

### 📜 **Logs & Monitoring**

Integrated with Docker logging mechanisms, you can monitor your mail flow using standard Docker tools or external services like ELK Stack or Promtail + Grafana.

---

## Community & Documentation

One of the best things about docker-mailserver is its **strong documentation and active community**.

- 📖 [Official Docs](https://shrinkme.ink/0qQtFv)
- 💬 [GitHub Discussions](https://shrinkme.ink/Hii5j)
- 🐛 [Issue Tracker](https://shrinkme.ink/3ema)
- 🌟 [GitHub Stars](https://shrinkme.ink/OzP2B2)

The documentation is thorough, versioned, and constantly maintained – whether you’re a beginner or a sysadmin, everything is explained clearly.

---

## Real-World Use Cases

- **Freelancers and Small Teams:** Own your brand domain and email without paying monthly fees to third-party services.
- **Privacy Enthusiasts:** Host your mail on your terms, with no tracking or surveillance.
- **Startups:** Custom domains, secure email, and no vendor lock-in.
- **Developers & Sysadmins:** Easily script, backup, and automate your entire mail flow.

---

## Final Thoughts: Is docker-mailserver Worth It?

If you’ve ever wanted full control over your mail system without pulling your hair out, docker-mailserver is your answer.

It’s modern, secure, and incredibly flexible. Whether you’re a dev who wants a reliable inbox or a sysadmin tired of managing clunky mail stacks, this project will save you time, money, and frustration.

> 🧠 **Pro Tip:** Combine it with tools like Traefik, Watchtower, and GitOps workflows to supercharge your self-hosted infrastructure.
{: .prompt-info }

---

## Useful Resources

- [Official GitHub Repository](https://shrinkme.ink/OzP2B2)
- [Project Website and Docs](https://shrinkme.ink/0qQtFv)
- [Docker Hub Image](https://shrinkme.ink/diBQMKY)
- [Quick Start Guide](https://shrinkme.ink/ALXln)

---

## Conclusion

docker-mailserver empowers you to take back control of your inbox. With Docker simplicity, enterprise-level features, and robust community support, it’s more than just a mail server — it’s a self-hosted email revolution.

So, whether you're launching a SaaS or just want to say goodbye to Gmail snooping — spin up docker-mailserver today and start sending secure, self-hosted email in minutes.

---

> 📨 Still using Gmail for your domain? It's time to level up. Try docker-mailserver and own your emails — completely.
{:.prompt-tip}
