---
title: MWD
---

# MWD (Muk7tm's Windows Debloater)

Fork of winutil using PowerShell + WPF to provide debloat, configuration, install, and update control workflows on Windows.

## Quick Links

- [GitHub Repository](https://github.com/Muk7tm/MWD)
- [Security Policy](https://github.com/Muk7tm/MWD/blob/main/SECURITY.md)

## Requirements

- Windows 10 or 11
- Run as Administrator
- PowerShell 5.1+ (PowerShell 7 recommended)

## Build and Run

- Build:
  `powershell -ExecutionPolicy Bypass -File .\Compile.ps1`
- Run:
  `powershell -ExecutionPolicy Bypass -File .\MWD.ps1`
- Dev bootstrap:
  `powershell -ExecutionPolicy Bypass -File .\windev.ps1`

## Main Workflow Tabs

- Install
- Tweaks
- Config
- Updates

## Operations and Notes

- Search filtering and keyboard shortcuts across major tabs
- Import/export JSON config support
- Runspace-based execution for responsive UI during long actions
- Advanced tweaks include high-risk options and require caution

## CLI Parameters

`MWD.ps1` supports:

- `-Debug`
- `-Config <path-to-json>`
- `-Run`
