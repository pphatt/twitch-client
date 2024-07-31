import { DayPicker } from "react-day-picker"
import styled from "styled-components"

export const DayPickerWrapper = styled(DayPicker)`
  padding: 0.75rem;

  .months {
    display: flex;
    flex-direction: column;

    @media (min-width: 640px) {
      flex-direction: row;
    }
  }

  .month {
    //margin-top: 1rem;
  }

  .caption {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 0.25rem;
  }

  .caption-label {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
  }

  .nav {
    display: flex;
    align-items: center;
  }

  .nav-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;

    width: 1.75rem;
    height: 1.75rem;

    border-radius: calc(0.5rem - 2px);
    border-color: hsl(var(--input));
    border-width: 1px;

    padding: 0;

    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;

    cursor: pointer;

    opacity: 0.5 !important;

    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;

    &[disabled] {
      opacity: 0.5;
      pointer-events: none;
    }

    &:hover {
      opacity: 1;
    }

    &:not([disabled]) {
      &:hover {
        color: hsl(var(--accent-foreground));
        background-color: hsl(var(--accent));
      }
    }

    &:focus-visible {
      outline: 2px solid transparent;
      outline-offset: 2px;

      box-shadow:
        0 0 0 2px hsl(var(--background)),
        0 0 0 4px hsl(var(--ring)),
        0 0 #000;
    }
  }

  .nav-button-previous {
    position: absolute;
    left: 0.25rem;
  }

  .nav-button-next {
    position: absolute;
    right: 0.25rem;
  }

  .table {
    width: 100%;

    margin-top: 16px;

    border-collapse: collapse;
  }

  .head-row {
    display: flex;
  }

  .head-cell {
    color: hsl(var(--muted-foreground));

    width: 2.25rem;

    border-radius: calc(0.5rem - 2px);

    font-size: 0.8rem;
    font-weight: 400;
  }

  .row {
    display: flex;

    width: 100%;

    margin-top: 0.5rem;
  }

  .cell {
    position: relative;

    width: 2.25rem;
    height: 2.25rem;

    padding: 0;

    font-size: 0.875rem;
    line-height: 1.25rem;

    text-align: center;
  }

  .day {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    color: initial;
    background-color: transparent;

    width: 2.25rem;
    height: 2.25rem;

    border-radius: calc(0.5rem - 2px);

    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;

    cursor: pointer;

    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;

    &[disabled] {
      opacity: 0.5;
      pointer-events: none;
    }

    &:hover {
      color: hsl(var(--accent-foreground));
      background-color: hsl(var(--accent));
    }

    &:focus-visible {
      outline: 2px solid transparent;
      outline-offset: 2px;

      box-shadow:
        0 0 0 2px hsl(var(--background)),
        0 0 0 4px hsl(var(--ring)),
        0 0 #000;
    }
  }

  .day-selected {
    color: hsl(var(--primary-foreground)) !important;
    background-color: hsl(var(--primary)) !important;

    &:hover,
    &:focus {
      color: hsl(var(--primary-foreground)) !important;
      background-color: hsl(var(--primary)) !important;
    }
  }

  .day-today {
    color: hsl(var(--accent-foreground)) !important;
    background-color: hsl(var(--accent)) !important;
  }

  .day-outside {
    color: hsl(var(--muted-foreground)) !important;

    opacity: 0.5;

    [aria-selected="true"] {
      color: hsl(var(--muted-foreground)) !important;
      background-color: hsl(var(--accent) / 0.5) !important;

      opacity: 0.3;
    }
  }

  .day-disabled {
    color: hsl(var(--muted-foreground)) !important;

    opacity: 0.5;
  }

  .day-range-middle {
    [aria-selected="true"] {
      color: hsl(var(--accent-foreground));
      background-color: hsl(var(--accent));
    }
  }

  .day-hidden {
    visibility: hidden;
  }

  .calendar-icon {
    width: 1rem;
    height: 1rem;
  }
`
