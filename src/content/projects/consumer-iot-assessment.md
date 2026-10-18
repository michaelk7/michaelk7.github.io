---
title: Consumer IoT security assessment
summary: Led a UL 1376 assessment on an unreleased consumer device, finding critical firmware vulnerabilities that were fixed before it shipped.
year: 2025
tags: [firmware, binwalk, UART, UL 1376]
order: 1
featured: true
---

## Context

A consumer electronics manufacturer needed its connected product assessed against **UL 1376** before launch. The client and device are confidential.

## Approach

- Reviewed the device's attack surface: network services, companion app traffic and physical debug interfaces.
- Extracted and unpacked the firmware image with `binwalk` and analyzed the filesystem for hardcoded secrets, outdated components and insecure update handling.
- Mapped findings to the UL 1376 requirements and wrote them up for the manufacturer's engineering team.

## Outcome

Identified **critical firmware vulnerabilities** before the product shipped, and the manufacturer fixed them ahead of release.

In contracted testing like this, the client owns all findings and test data, so vulnerabilities are reported to them rather than disclosed publicly or filed as CVEs.

<!-- TODO: add anything you can share publicly: the class of bugs found, tools used, or how fixes were verified. -->
