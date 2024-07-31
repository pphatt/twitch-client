import { keyframes } from "styled-components"

export const enterKeyframes = keyframes`
    0% {
        opacity: var(--tw-enter-opacity, 1);
        transform: translate3d(
                var(--tw-enter-translate-x, 0),
                var(--tw-enter-translate-y, 0),
                0
        ) scale3d(
                var(--tw-enter-scale, 1),
                var(--tw-enter-scale, 1),
                var(--tw-enter-scale, 1)
        ) rotate(var(--tw-enter-rotate, 0));
    }
`

export const exitKeyframes = keyframes`
    100% {
        opacity: var(--tw-exit-opacity, 1);
        transform: translate3d(
                var(--tw-exit-translate-x, 0),
                var(--tw-exit-translate-y, 0),
                0
        ) scale3d(
                var(--tw-exit-scale, 1),
                var(--tw-exit-scale, 1),
                var(--tw-exit-scale, 1)
        ) rotate(var(--tw-exit-rotate, 0));
    }
`

export const spinKeyframes = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
