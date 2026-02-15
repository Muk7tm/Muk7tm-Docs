---
title: Windows-ISO-Files
---

# Windows-ISO-Files

Metadata-focused repository for Windows ISO links and checksum verification guidance.

## Quick Links

- [GitHub Repository](https://github.com/Muk7tm/Windows-ISO-Files)
- [ISO Links List](https://github.com/Muk7tm/Windows-ISO-Files/blob/main/links/ISO_LINKS.md)

## Scope

- Official Microsoft Windows 10/11 links
- Additional unofficial LTSC-related references
- SHA256 checksum verification workflow
- Link + metadata publishing model only

## Checksum Verification

PowerShell:

```powershell
(Get-FileHash Path\To\File.iso -Algorithm SHA256).Hash
```

Compare output with published checksum values before using the ISO.

## Publishing Notes

- ISO binaries are not committed to git.
- Repository stores links and checksums.
- Large image formats are ignored by `.gitignore`.

## Warning

Treat unofficial ISO links carefully and always verify checksums.
