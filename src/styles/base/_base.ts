// -----------------------------------------------------------------------------
// This file contains very basic styles.
// -----------------------------------------------------------------------------

import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: inherit;
        border: 0 solid hsl(var(--border));
        text-size-adjust: 100%;

        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;

        &::-webkit-scrollbar {
            width: 6px;
        }

        &::-webkit-scrollbar-corner {
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: hsla(0, 0%, 100%, 0.5);
        }

        &::-webkit-scrollbar-track {
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb,
        &::-webkit-scrollbar-track {
            border-radius: 7px;
            border: 4px solid transparent;
            //background-clip: padding-box;
        }
    }

    *[data-radix-popper-content-wrapper] {
        z-index: 51 !important;
    }

    html,
    body {
        min-height: 100vh;
        max-width: 100vw;
        //overflow-x: hidden;
        background-color: rgb(11, 14, 15);

        font-family: var(--font-base);
    }

    img {
        max-width: 100%;
        height: auto;
    }

    img,
    svg {
        display: block;
        vertical-align: middle;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    p {
        font-size: 13px;
        line-height: 1.5;
    }

    ol,
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        list-style-position: inside;
    }

    @media (prefers-color-scheme: dark) {
        html {
            color-scheme: dark;
        }
    }

    button:hover {
        cursor: pointer;
    }
`
