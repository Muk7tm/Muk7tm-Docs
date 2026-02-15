# MWD (Muk7tm's Windows Debloater)

MWD is a **fork** of [winutil](https://github.com/ChrisTitusTech/winutil) by ChrisTitusTech a PowerShell + WPF tool for Windows 10/11 that combines debloat, system hardening, configuration, app install management, and repair utilities in one interface.

## Requirements
- Windows 10 or Windows 11
- Run as Administrator
- PowerShell 5.1+ (PowerShell 7 recommended for best compatibility)

## Build and Run
Build from source:

```powershell
powershell -ExecutionPolicy Bypass -File .\Compile.ps1
```

Run generated script:

```powershell
powershell -ExecutionPolicy Bypass -File .\MWD.ps1
```

Run via local bootstrapper:

```powershell
powershell -ExecutionPolicy Bypass -File .\windev.ps1
```

## Interface and Workflow Features
- 4-tab interface:
  - Install
  - Tweaks
  - Config
  - Updates
- Search bar filtering for Install and Tweaks tabs
- Selected-app counter and popup list
- Theme modes:
  - Auto
  - Dark
  - Light
- Font scaling control
- Import/export configuration files (JSON)
- Keyboard shortcuts:
  - `Alt+I` Install tab
  - `Alt+T` Tweaks tab
  - `Alt+C` Config tab
  - `Alt+U` Updates tab
  - `Ctrl+F` focus search
  - `Esc` clear search
  - `Ctrl+Q` close app
- Taskbar progress and status overlays during long-running actions
- Runspace-based execution to keep UI responsive

## Install Tab Features

### Install Actions
- Install/Upgrade Applications
- Uninstall Applications
- Upgrade All Applications
- Package manager selection:
  - Winget
  - Chocolatey
- Selection controls:
  - Collapse All Categories
  - Expand All Categories
  - Clear Selection
  - Select MWD App Pack
  - Get Installed
  - Selected Apps summary

### Curated Application Catalog
- Discord
- Malwarebytes
- Brave
- LibreWolf
- Oracle VirtualBox
- Steam
- Epic Games Launcher
- Rockstar Games Launcher
- Roblox
- NVIDIA App
- VS Code
- Spotify

## Tweaks Tab Features

### Essential Tweaks
- Create Restore Point
- Delete Temporary Files
- Disable Activity History
- Disable ConsumerFeatures
- Disable Explorer Automatic Folder Discovery
- Disable Hibernation
- Disable Location Tracking
- Disable Powershell 7 Telemetry
- Disable Telemetry
- Disable Windows Platform Binary Table (WPBT)
- Enable End Task With Right Click
- Remove Widgets
- Run Disk Cleanup
- Set Services to Manual

### Customize Preferences
- Bing Search in Start Menu
- Center Taskbar Items
- Cross-Device Resume
- Dark Theme for Windows
- Detailed BSoD
- Disable Multiplane Overlay
- Mouse Acceleration
- New Outlook
- NumLock on Startup
- Recommendations in Start Menu
- Remove Settings Home Page
- S3 Sleep
- Search Button in Taskbar
- Show File Extensions
- Show Hidden Files
- Sticky Keys
- Task View Button in Taskbar
- Verbose Messages During Logon

### Performance Plans
- Add and Activate Ultimate Performance Profile
- Remove Ultimate Performance Profile

### Advanced Tweaks (Caution)
- Adobe Network Block
- Block Razer Software Installs
- Brave Debloat
- Disable Background Apps
- Disable Fullscreen Optimizations
- Disable IPv6
- Disable Microsoft Copilot
- Disable Notification Tray/Calendar
- Disable Storage Sense
- Disable Teredo
- DNS
- Edge Debloat
- Prefer IPv4 over IPv6
- Remove ALL MS Store Apps - NOT RECOMMENDED
- Remove Gallery from explorer
- Remove Home from Explorer
- Remove Microsoft Edge
- Remove OneDrive
- Remove Xbox & Gaming Components
- Run OO Shutup 10
- Set Classic Right-Click Menu
- Set Display for Performance
- Set Time to UTC (Dual Boot)

### Tweak Operations
- Run Tweaks
- Undo Selected Tweaks
- Get Installed Tweaks
- Presets:
  - Standard
  - Minimal
  - Clear

## Config Tab Features

### Windows Features
- All .Net Framework (2,3,4)
- HyperV Virtualization
- Legacy Media (WMP, DirectPlay)
- Windows Subsystem for Linux
- NFS - Network File System
- Enable Daily Registry Backup Task 12.30am
- Enable Legacy F8 Boot Recovery
- Disable Legacy F8 Boot Recovery
- Windows Sandbox
- Install Features

### Fixes and Repair Tools
- Set Up Autologin
- Reset Windows Update
- Reset Network
- System Corruption Scan
- WinGet Reinstall
- Remove Adobe Creative Cloud

### Legacy Windows Panels
- Control Panel
- Computer Management
- Network Connections
- Power Panel
- Printer Panel
- Region
- Windows Restore
- Sound Settings
- System Properties
- Time and Date

### Remote Access and Profile
- Install PowerShell Profile (PowerShell 7+)
- Uninstall PowerShell Profile (PowerShell 7+)
- Enable OpenSSH Server

## Updates Tab Features
- Default Settings:
  - Reset Windows Update configuration to defaults
- Security Settings:
  - Balanced update policy profile
- Disable All Updates:
  - Full update disable mode (high risk, use with care)

## Automation and CLI Parameters
`MWD.ps1` supports:
- `-Debug`
- `-Config <path-to-json>`
- `-Run`

Example:

```powershell
powershell -ExecutionPolicy Bypass -File .\MWD.ps1 -Config C:\Path\config.json -Run
```

## Local Optional Assets
Some actions can use local offline assets when available:
- `offline-tools\Autologon.exe`
- `offline-tools\OOSU10.exe`
- `offline-tools\AdobeCreativeCloudCleanerTool.exe`
- `offline-tools\adobe-hosts.txt`

## Important
- [SECURITY](https://github.com/Muk7tm/MWD/blob/main/SECURITY.md)
