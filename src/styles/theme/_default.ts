// -----------------------------------------------------------------------------
// When having several themes, this file contains everything related to the
// default one.
// -----------------------------------------------------------------------------

import { createGlobalStyle } from "styled-components"

export const GlobalColorTheme = createGlobalStyle`
    :root {
        // font
        --font-base: "Inter", "Roobert", "Helvetica Neue", Helvetica, Arial, sans-serif;
        --font-display: "Roobert", "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
        --font-mono: monospace;
        
        // color
        --color-error: var(--color-red);

        --color-background-success: var(--color-green);

        --color-fill-live: var(--color-red);
        --color-fill-recording: var(--color-red);

        --background: 240 6% 10%; // #18181b
        --foreground: 240 7% 94%; // #efeff1

        --background-alt: 240 6% 13%; // #1f1f23
        --foreground-alt: 240 8% 88%; // #dedee3

        --background-alt-2: 240 7% 16%; // #26262c
        --foreground-alt-2: 240 7% 70%; // #adadb8

        --color-twitch-orange-11: 12 100% 63%; // #ff6740
        --color-twitch-orange-12: 12 84% 56%; // #ed5732

        --color-red-9: 1 100% 46%; // #eb0400
        --color-red-11: 1 100% 75%; // #ff8280

        --color-hinted-grey-1: 240 7% 6%; // #0e0e10
        --color-hinted-grey-14: 240 7% 94%; // #efeff1
        --color-hinted-grey-15: 240 7% 97%; // #f7f7f8

        --color-background-interactable-hover: var(--color-opac-gd-2);
        --color-background-interactable-active: 240, 7%, 35%, 0.55; // #53535f, rgba(83, 83, 95, 0.55)

        --color-border-base: var(--color-opac-gd-2);

        --color-opac-gl-1: 240, 7%, 70%, 0.22; // #ADADB838, rgba(173, 173, 184, 0.22)
        --color-opac-gd-1: 240, 7%, 35%, 0.38; // #53535f60, rgba(83, 83, 95, 0.38)
        --color-opac-gd-2: 240, 7%, 35%, 0.48; // #53535f7a,  rgba(83, 83, 95, 0.48)

        --color-red: 1 100% 46%; // #eb0400

        --color-green: 156 100% 48%; // #00f593

        --card: 0 0% 100%;
        --card-foreground: 240 10% 3.9%;
        --popover: 0 0% 100%;
        --popover-foreground: 240 10% 3.9%;
        --primary: 240 5.9% 10%;
        --primary-foreground: 0 0% 98%;
        --secondary: 240 4.8% 95.9%;
        --secondary-foreground: 240 5.9% 10%;
        --muted: 240 4.8% 95.9%;
        --muted-foreground: 240 3.8% 46.1%;
        --accent: 240 4.8% 95.9%;
        --accent-foreground: 240 5.9% 10%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 0 0% 98%;
        --border: 240 5.9% 90%;
        --border-hover: 240 2.1% 71.96%;
        --input: 240 5.9% 90%;
        --ring: 240 5% 64.9%;

        --admin-background: 0 0% 100%;
        --admin-foreground: 222.2 84% 4.9%;
        --admin-card: 0 0% 100%;
        --admin-card-foreground: 222.2 84% 4.9%;
        --admin-popover: 0 0% 100%;
        --admin-popover-foreground: 222.2 84% 4.9%;
        --admin-primary: 222.2 47.4% 11.2%;
        --admin-primary-foreground: 210 40% 98%;
        --admin-secondary: 210 40% 96.1%;
        --admin-secondary-foreground: 222.2 47.4% 11.2%;
        --admin-muted: 210 40% 96.1%;
        --admin-muted-foreground: 215.4 16.3% 46.9%;
        --admin-accent: 210 40% 96.1%;
        --admin-accent-foreground: 222.2 47.4% 11.2%;
        --admin-destructive: 0 84.2% 60.2%;
        --admin-destructive-foreground: 210 40% 98%;
        --admin-border: 214.3 31.8% 91.4%;
        --admin-input: 214.3 31.8% 91.4%;
        --admin-ring: 222.2 84% 4.9%;
        --admin-radius: 0.5rem;
        --admin-chart-1: 20 48% 72%;
        --admin-chart-2: 173 58% 39%;
        --admin-chart-3: 197 37% 24%;
        --admin-chart-4: 43 74% 66%;
        --admin-chart-5: 27 87% 67%;
        --admin-sidebar-background: 0 0% 100%;
        --admin-sidebar-foreground: 240 5.3% 26.1%;
        --admin-sidebar-primary: 240 5.9% 10%;
        --admin-sidebar-primary-foreground: 0 0% 98%;
        --admin-sidebar-accent: 20 25% 86%;
        --admin-sidebar-accent-foreground: 240 5.9% 10%;
        --admin-sidebar-border: 220 13% 91%;
        --admin-sidebar-ring: 217.2 91.2% 59.8%;

        --radius: 4px;
    }
`
