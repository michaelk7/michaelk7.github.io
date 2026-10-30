---
title: "Sample write-up: dumping SPI flash"
description: A template post showing how write-ups render. Replace it with your first real post.
date: 2026-10-17
kind: research
tags: [firmware, hardware]
draft: true
---

This post is a **draft template** and only appears in `npm run dev`. Copy it to start a new write-up, then set `draft: false` to publish.

## Setup

Inline code looks like `flashrom -p ch341a_spi`, and code blocks get syntax highlighting:

```bash
# Read the chip twice and make sure the dumps match
flashrom -p ch341a_spi -r dump1.bin
flashrom -p ch341a_spi -r dump2.bin
sha256sum dump1.bin dump2.bin
binwalk -e dump1.bin
```

## Findings

| Offset | Content |
| --- | --- |
| `0x000000` | U-Boot |
| `0x040000` | Kernel (LZMA) |
| `0x200000` | SquashFS root |

> Blockquotes work well for callouts and caveats.

## Takeaways

1. Numbered lists work.
2. So do [links](https://michaelkelnar.com).
