---
title: "SmartSubAI: Revolutionizing Subdomain Enumeration with AI-Powered Risk Assessment"
description: "Discover SmartSubAI — an AI-powered subdomain enumeration tool that combines high-speed DNS scanning with intelligent risk assessment for smarter, more efficient cybersecurity reconnaissance."
author: "oceanofanything"
date: 2025-05-01 10:00:00 +0530
categories: [cybersecurity, subdomain-enumeration]
tags: [subdomain, enumeration, recon, dns, ai, cohere, risk-assessment, penetration-testing, bug-bounty, cybersecurity, hacking, ethical-hacking, reconnaissance, automation, dns-records]
image:
  path: https://oceanofanything.github.io/SmartSubAI/docs/images/SMARTSUBAI.png
  lqip: data:image/octet-stream;base64,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
  alt: SmartSubAI
---

# Introduction to SmartSubAI

Ever found yourself tangled in endless lists of subdomains during reconnaissance, wishing there was a smarter way to filter out the noise and prioritize threats?

**SmartSubAI** is an innovative tool that combines traditional subdomain enumeration with **AI-driven risk assessment**. It brings automation and intelligence together to help you identify and prioritize high-risk assets effortlessly.

In today's cybersecurity landscape, effective subdomain enumeration is essential for robust reconnaissance and risk mitigation. SmartSubAI introduces a game-changing approach by merging traditional DNS enumeration with AI-powered risk assessment, offering cybersecurity professionals an intelligent way to identify and prioritize vulnerable subdomains. Whether you're into penetration testing, bug bounty hunting, or managing digital assets, SmartSubAI streamlines your workflow with automation, precision, and actionable insights—making it the go-to tool for ethical hackers and security analysts in 2025.

## 📚 Table of Contents

- [Introduction to SmartSubAI](#introduction-to-smartsubai)
  - [📚 Table of Contents](#-table-of-contents)
  - [🧠 Introduction to SmartSubAI](#-introduction-to-smartsubai)
  - [🚀 Key Features of SmartSubAI](#-key-features-of-smartsubai)
    - [🔍 Advanced Subdomain Enumeration](#-advanced-subdomain-enumeration)
    - [🤖 AI-Powered Risk Assessment](#-ai-powered-risk-assessment)
    - [📊 Comprehensive Reporting System](#-comprehensive-reporting-system)
  - [🛠️ Installation Guide](#️-installation-guide)
    - [📂 Cloning the Repository](#-cloning-the-repository)
    - [🧪 Setting Up a Virtual Environment](#-setting-up-a-virtual-environment)
    - [📦 Installing Required Dependencies](#-installing-required-dependencies)
    - [🔐 Configuring Your API Key](#-configuring-your-api-key)
  - [🧪 Using SmartSubAI](#-using-smartsubai)
    - [⚙️ Basic Usage Explained](#️-basic-usage-explained)
    - [⚡ Advanced Command-Line Options](#-advanced-command-line-options)
  - [⚙️ Deep Dive into Configuration](#️-deep-dive-into-configuration)
  - [🧾 Real-World Usage Examples](#-real-world-usage-examples)
    - [✅ Standard Scan](#-standard-scan)
    - [📝 Custom Wordlist](#-custom-wordlist)
    - [🚀 High-Performance Mode](#-high-performance-mode)
    - [🎯 Limited Enumeration](#-limited-enumeration)
  - [💡 Benefits of Using SmartSubAI](#-benefits-of-using-smartsubai)
  - [🔬 Behind the Scenes](#-behind-the-scenes)
    - [Cohere AI Integration](#cohere-ai-integration)
    - [DNS Resolution Engine](#dns-resolution-engine)
  - [🤝 Contribution Guidelines](#-contribution-guidelines)
  - [📄 Licensing and Acknowledgments](#-licensing-and-acknowledgments)
  - [🏁 Conclusion](#-conclusion)
  - [❓ FAQs](#-faqs)
    - [What makes SmartSubAI different from other tools?](#what-makes-smartsubai-different-from-other-tools)
    - [Is SmartSubAI suitable for beginners?](#is-smartsubai-suitable-for-beginners)
    - [Does it support private DNS servers?](#does-it-support-private-dns-servers)
    - [Can I integrate it into CI/CD pipelines?](#can-i-integrate-it-into-cicd-pipelines)
    - [Is AI risk scoring customizable?](#is-ai-risk-scoring-customizable)

---

## 🧠 Introduction to SmartSubAI

Ever found yourself tangled in endless lists of subdomains during reconnaissance, wishing there was a smarter way to filter out the noise and prioritize threats?

**SmartSubAI** is an innovative tool that combines traditional subdomain enumeration with **AI-driven risk assessment**. It brings automation and intelligence together to help you identify and prioritize high-risk assets effortlessly.

---

## 🚀 Key Features of SmartSubAI

### 🔍 Advanced Subdomain Enumeration

- Multi-threaded scanning for faster results  
- Support for custom wordlists  
- DNS record discovery including A, AAAA, CNAME, and more  

### 🤖 AI-Powered Risk Assessment

- Uses **Cohere AI** for contextual analysis  
- Generates **intelligent risk scores**  
- Offers detailed, human-readable threat explanations  

### 📊 Comprehensive Reporting System

- Interactive and clean HTML reports  
- JSON exports for automation  
- Visual and logical breakdowns of DNS and risk data  

---

## 🛠️ Installation Guide

### 📂 Cloning the Repository

```bash
git clone https://github.com/OCEANOFANYTHING/SmartSubAI.git
cd SmartSubAI
```

### 🧪 Setting Up a Virtual Environment

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

### 📦 Installing Required Dependencies

```bash
pip install -r requirements.txt
```

### 🔐 Configuring Your API Key

- Get a key from [Cohere](https://cohere.com/)
- Add it to `config/settings.ini`{:.filepath}

---

## 🧪 Using SmartSubAI

### ⚙️ Basic Usage Explained

```bash
python smartsubai.py -d example.com
```

### ⚡ Advanced Command-Line Options

```bash
python smartsubai.py -d example.com -w wordlist.txt --threads 20 --limit 100
```

**Flags:**

- `-d`: Domain name (required)  
- `-w`: Custom wordlist  
- `--threads`: Number of threads  
- `--limit`: Max subdomains  
- `--no-limit`: Disable limit  
- `--test`: Use mock data  
- `--output-dir`: Custom output directory  

---

## ⚙️ Deep Dive into Configuration

```ini
[AI]
cohere_api_key = your_api_key_here
model = command-r7b-12-2024

[DNS]
timeout = 1
retries = 2
nameservers = 8.8.8.8,8.8.4.4,1.1.1.1,1.0.0.1

[Scanning]
max_threads = 10
max_subdomains = 200
```

---

## 🧾 Real-World Usage Examples

### ✅ Standard Scan

```bash
python smartsubai.py -d example.com
```

### 📝 Custom Wordlist

```bash
python smartsubai.py -d example.com -w wordlists/custom.txt
```

### 🚀 High-Performance Mode

```bash
python smartsubai.py -d example.com --threads 20 --no-limit
```

### 🎯 Limited Enumeration

```bash
python smartsubai.py -d example.com --limit 50
```

---

## 💡 Benefits of Using SmartSubAI

- ⚡ **Blazing fast** multi-threaded scans  
- 🧠 **AI intelligence** for risk awareness  
- 🧩 **Automation-friendly** outputs for CI/CD pipelines  

---

## 🔬 Behind the Scenes

### Cohere AI Integration

SmartSubAI uses **Cohere**’s large language model to make intelligent decisions about subdomain importance.

### DNS Resolution Engine

Powered by `dnspython`, it performs **resilient and precise lookups** with fallback and timeout handling.

---

## 🤝 Contribution Guidelines

- Fork, clone, and create feature branches  
- Follow best practices and lint your code  
- See [CONTRIBUTING.md](CONTRIBUTING.md) for more  

---

## 📄 Licensing and Acknowledgments

- **License:** MIT  
- **Thanks To:**  
  - [Cohere AI](https://cohere.com/)  
  - [dnspython](https://www.dnspython.org/)  
  - All contributors and the open-source community  

---

## 🏁 Conclusion

SmartSubAI blends speed, accuracy, and intelligence to deliver the future of subdomain enumeration. It's the perfect companion for professionals who want smarter, actionable reconnaissance.

---

## ❓ FAQs

### What makes SmartSubAI different from other tools?

SmartSubAI offers intelligent AI-based risk scoring in addition to traditional scanning.

### Is SmartSubAI suitable for beginners?

Absolutely. It's designed to be easy to install, use, and customize.

### Does it support private DNS servers?

Yes! Just edit the `settings.ini` file to add your preferred nameservers.

### Can I integrate it into CI/CD pipelines?

Yes. JSON outputs are perfect for automation workflows.

### Is AI risk scoring customizable?

Yes, from model type to scoring thresholds via configuration.

