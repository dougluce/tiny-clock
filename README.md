# tiny-clock

Floating tiny clock.

For use with auto-hiding menus. Floats just about where the iStat
menus clock appears when re-hiding menus.

## Getting started

Clone the repo.

```bash
git clone https://github.com/dougluce/tiny-clock.git
```

Install dependencies

```bash
cd tiny clock && yarn
```

### Dev

Run the Electron app in Development

```bash
ELECTRON_ENABLE_LOGGING=1 yarn start
```

### Build

Build the app for macOS
```bash
yarn build
```


TO add eventually:


Options:
    1) Position (corners or by pixel)
    2) Color
    3) Font/size/etc
    4) Check for updates y/n
    5) Remove from dock
    6) More time formats
    7) Start on login

Colors: foreground/background. -- transparent backgorund/foreground
Rounded Y/N

"hide on mouseover for XX seconds"
"move out of the way to position x, y [relative/absolute toggle] on mouse over for XXX seconds"

Also find a better icon at some point. This one looks like a white circle on the menu bar.
