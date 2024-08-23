// -----------------------------------------------------------------------------
// When having several themes, this file contains everything related to the
// default one.
// -----------------------------------------------------------------------------

import { createGlobalStyle } from "styled-components"

export const GlobalColorTheme = createGlobalStyle`
    :root {
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

        --color-red-11: 1 100% 75%; // #ff8280

        --color-hinted-grey-1: 240 7% 6%; // #0e0e10
        --color-hinted-grey-14: 240 7% 94%; // #efeff1
        --color-hinted-grey-15: 240 7% 97%; // #f7f7f8

        --color-background-interactable-hover: var(--color-opac-gd-2);
        --color-background-interactable-active: 240, 7%, 35%, 0.55; // #53535f, rgba(83, 83, 95, 0.55)

        --color-border-base: var(--color-opac-gd-2);

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

        --radius: 4px;
    }
`
