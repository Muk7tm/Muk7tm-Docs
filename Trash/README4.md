# Windows ISO Catalog

This repository contains **unofficial** download links for Windows ISO files that are currently unavailable to **unauthorized** users. It also includes **official** links for those who may not know how to find the official download sources.

## Catalog

Download from [ISO_LINKS.md](https://github.com/Muk7tm/Windows-ISO-Files/blob/main/links/ISO_LINKS.md) or directly from here:

- Windows 10 ISO (Official) | [Download](https://www.microsoft.com/en-us/software-download/windows10)
- Windows 10 Enterprise LTSC 2021 x64 ISO (Unofficial) | [Download](https://archive.org/details/en-us_windows_10_enterprise_ltsc_2021_x64_202301)
- Windows 10 IoT Enterprise LTSC 2021 x64 -dvd_257ad90f- ISO (Unofficial) | [Download](https://archive.org/details/en-us_windows_10_iot_enterprise_ltsc_2021_x64_dvd_257ad90f_20250730)
- Windows 11 ISO (Official) | [Download](https://www.microsoft.com/en-us/software-download/windows11)
- Windows 11 Enterprice LTSC ISO (Official) | [Download](https://www.microsoft.com/en-us/evalcenter/evaluate-windows-11-enterprise)
- Windows 11 IoT Enterprice LTSC ISO (Official) | [Download](https://www.microsoft.com/en-us/evalcenter/download-windows-11-iot-enterprise-ltsc-eval)

**Important:** If any link is not working, please open an issue to request a new link or a direct ISO file.

**Warning:** Don't forget to check the SHA256 hashes of each iso file to verify it.

## Checksums

SHA256 checksums are tracked in checksums/SHA256SUMS.txt.

Verify a local ISO in PowerShell:

    (Get-FileHash Path\\To\\File.iso -Algorithm SHA256).Hash

## Download Links

Update links/ISO_LINKS.md with hosted URLs for each file.

## Publishing Notes

- This repository stores metadata only. ISO binaries are not committed to git because GitHub rejects files above 2 GiB per Git LFS object.
- .gitignore blocks *.iso, *.img, and *.wim.
- Keep binaries in external storage and commit only links + checksums.
