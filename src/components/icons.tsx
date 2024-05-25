import * as React from "react"
import {
  AlertCircle,
  AlignJustify,
  ArrowDownWideNarrow,
  ArrowUpFromDot,
  AudioWaveform,
  Ban,
  BarChart3,
  Bookmark,
  BookMarked,
  BookOpen,
  Check,
  CheckSquare,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  ChevronUp,
  Circle,
  CircleUserRound,
  Clock,
  EllipsisVertical,
  Expand,
  Eye,
  EyeOff,
  File,
  FilePen,
  FileTerminal,
  Filter,
  GalleryVerticalEnd,
  Globe,
  History,
  Home,
  Laptop2,
  Loader2,
  LogIn,
  Moon,
  MoveHorizontal,
  MoveVertical,
  Play,
  Search,
  Settings,
  Star,
  SunMedium,
  User,
  Users,
  X,
  ZoomIn,
  ZoomOut,
  type IconNode as LucideIcon,
  type LucideProps,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  close: X,
  user: User,
  users: Users,
  check: Check,
  terminal: FileTerminal,
  expand: Expand,
  all: GalleryVerticalEnd,
  ban: Ban,
  filePen: FilePen,
  moveHorizontal: MoveHorizontal,
  history: History,
  moveVertical: MoveVertical,
  settings: Settings,
  spinner: Loader2,
  checkSquare: CheckSquare,
  arrowUp: ChevronUp,
  arrowDown: ChevronDown,
  arrowRight: ChevronRight,
  arrowLeft: ChevronLeft,
  arrowDownWideNarrow: ArrowDownWideNarrow,
  view: Eye,
  hide: EyeOff,
  alignJustify: AlignJustify,
  circle: Circle,
  star: Star,
  circleUserRound: CircleUserRound,
  ellipsisVertical: EllipsisVertical,
  bookmark: Bookmark,
  barChart3: BarChart3,
  play: Play,
  alertCircle: AlertCircle,
  home: Home,
  login: LogIn,
  clock: Clock,
  arrowUpVote: ArrowUpFromDot,
  globe: Globe,
  filter: Filter,
  search: Search,
  laptop: Laptop2,
  bookOpen: BookOpen,
  chevronsUpDown: ChevronsUpDown,
  audioWaveform: AudioWaveform,
  bookmarks: BookMarked,
  file: File,
  zoomIn: ZoomIn,
  zoomOut: ZoomOut,
  logo: (props: LucideProps) => (
    <svg
      viewBox="0 0 78 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H10V10H5V20H10V30H0V20H5V10H0V0ZM15 0H25V30H15V0ZM30 0H40V10H35V20H40V30H30V20H35V10H30V0ZM45 0H55V30H45V0ZM60 0H70V30H60V0ZM75 0H85V10H80V20H85V30H75V20H80V10H75V0Z"
        fill="white"
      ></path>
    </svg>
  ),
  notify: ({ ...props }: LucideProps) => (
    <svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M4 3h12l2 4v10H2V7l2-4zm.236 4H8v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7h3.764l-1-2H5.236l-1 2zM16 9h-2.17A3.001 3.001 0 0 1 11 11H9a3.001 3.001 0 0 1-2.83-2H4v6h12V9z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  whispers: ({ ...props }: LucideProps) => (
    <svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M7.828 13 10 15.172 12.172 13H15V5H5v8h2.828zM10 18l-3-3H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2l-3 3z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  google: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="google"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 488 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
      ></path>
    </svg>
  ),
  facebook: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
      <path
        fill="currentColor"
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      />
    </svg>
  ),
  twitter: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
    </svg>
  ),
  discord: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
      <path
        fill="currentColor"
        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
      />
    </svg>
  ),
  channel: ({ ...props }: LucideProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M7 2a4 4 0 0 0-1.015 7.87A1.334 1.334 0 0 1 4.667 11 2.667 2.667 0 0 0 2 13.667V18h2v-4.333c0-.368.298-.667.667-.667A3.32 3.32 0 0 0 7 12.047 3.32 3.32 0 0 0 9.333 13c.369 0 .667.299.667.667V18h2v-4.333A2.667 2.667 0 0 0 9.333 11c-.667 0-1.22-.49-1.318-1.13A4.002 4.002 0 0 0 7 2zM5 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"
        clipRule="evenodd"
      ></path>
      <path d="M12 8h4v1.51V9l2-1v4l-2-1v1h-4V8z"></path>
    </svg>
  ),
  videoProducer: ({ ...props }: LucideProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path d="M17 8.268a2 2 0 1 1-2 0V2h2v6.268zM15 14v4h2v-4h-2zm-3-8a2 2 0 0 0-1-1.732V2H9v2.268A2 2 0 1 0 12 6zm-3 4v8h2v-8H9zM3 8.268V2h2v6.268a2 2 0 1 1-2 0zM3 14v4h2v-4H3z"></path>
    </svg>
  ),
  creatorDashboard: ({ ...props }: LucideProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path d="M7 10h2v4H7v-4zm6-4h-2v8h2V6z"></path>
      <path
        fillRule="evenodd"
        d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm12 2H4v12h12V4z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  privacy: ({ ...props }: LucideProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M14.001 5.99A3.992 3.992 0 0 0 10.01 2h-.018a3.992 3.992 0 0 0-3.991 3.99V8H3.999v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8h-1.998V5.99zm-2 2.01V5.995A1.996 1.996 0 0 0 10.006 4h-.01a1.996 1.996 0 0 0-1.995 1.995V8h4z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  safety: ({ ...props }: LucideProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M5.003 3.947A10 10 0 0 0 9.519 2.32L10 2l.48.32A10 10 0 0 0 16.029 4H17l-.494 5.641a9 9 0 0 1-4.044 6.751L10 18l-2.462-1.608a9 9 0 0 1-4.044-6.75L3 4h.972c.346 0 .69-.018 1.031-.053zm.174 1.992.309 3.528a7 7 0 0 0 3.146 5.25l1.368.894 1.368-.893a7 7 0 0 0 3.146-5.25l.309-3.529A12 12 0 0 1 10 4.376 12 12 0 0 1 5.177 5.94z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  emoteContribution: ({ ...props }: LucideProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path d="M4 10v.7c0 3 2.4 5.3 5.3 5.3h1.4a1.9 1.9 0 0 0 1.9-1.9v-.3a3 3 0 0 1 1-2.1l1.8-1.7c.4-.4.6-.9.6-1.4V8l1.6-1.6c.3.7.4 1.4.4 2.2a4 4 0 0 1-1.3 2.9L15 13.2a1 1 0 0 0-.3.6v.3a3.9 3.9 0 0 1-4 3.9H9.4c-4 0-7.3-3.3-7.3-7.3V10a8 8 0 0 1 8-8h1.4c2 0 3.7.8 5 2.2l-.4.3-2 2-2 1.6V9a3 3 0 0 1-3 3H6l.7-.7c.3-.3.5-.8.5-1.3a3 3 0 0 1 3-3h.7l1.6-2 .5-.5.2-.2c-.6-.2-1.1-.3-1.8-.3H10a6 6 0 0 0-6 6Z"></path>
    </svg>
  ),
  logout: ({ ...props }: LucideProps) => (
    <svg
      width="100%"
      height="100%"
      version="1.1"
      viewBox="0 0 20 20"
      x="0px"
      y="0px"
      {...props}
    >
      <g>
        <path d="M16 18h-4a2 2 0 01-2-2v-2h2v2h4V4h-4v2h-2V4a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2z"></path>
        <path d="M7 5l1.5 1.5L6 9h8v2H6l2.5 2.5L7 15l-5-5 5-5z"></path>
      </g>
    </svg>
  ),
  expandArrow: ({ ...props }: LucideProps) => (
    <svg
      width="100%"
      height="100%"
      version="1.1"
      viewBox="0 0 20 20"
      x="0px"
      y="0px"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g>
        <path d="M4 16V4H2v12h2zM13 15l-1.5-1.5L14 11H6V9h8l-2.5-2.5L13 5l5 5-5 5z"></path>
      </g>
    </svg>
  ),
  collapse: ({ ...props }: LucideProps) => (
    <svg
      width="100%"
      height="100%"
      version="1.1"
      viewBox="0 0 20 20"
      x="0px"
      y="0px"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g>
        <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path>
      </g>
    </svg>
  ),
  followedCollapse: ({ ...props }: LucideProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M9.171 4.171A4 4 0 0 0 6.343 3H6a4 4 0 0 0-4 4v.343a4 4 0 0 0 1.172 2.829L10 17l6.828-6.828A4 4 0 0 0 18 7.343V7a4 4 0 0 0-4-4h-.343a4 4 0 0 0-2.829 1.172L10 5l-.829-.829zm.829 10 5.414-5.414A2 2 0 0 0 16 7.343V7a2 2 0 0 0-2-2h-.343a2 2 0 0 0-1.414.586L10 7.828 7.757 5.586A2 2 0 0 0 6.343 5H6a2 2 0 0 0-2 2v.343a2 2 0 0 0 .586 1.414L10 14.172z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  recommendedCollapse: ({ ...props }: LucideProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M12.002 3.999a2 2 0 0 1 2 2v2L18 6v8l-3.998-2v2a2 2 0 0 1-2 1.999h-8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8zM12 6H4v8h8V6z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  starBling: ({ ...props }: LucideProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      {...props}
      fill={"currentColor"}
    >
      <path d="M13.39 4.305 12 5l1.404.702a2 2 0 0 1 .894.894L15 8l.702-1.404a2 2 0 0 1 .894-.894L18 5l-1.418-.709a2 2 0 0 1-.881-.869L14.964 2l-.668 1.385a2 2 0 0 1-.907.92z"></path>
      <path
        fillRule="evenodd"
        d="M5.404 9.298a2 2 0 0 0 .894-.894L8 5h1l1.702 3.404a2 2 0 0 0 .894.894L15 11v1l-3.404 1.702a2 2 0 0 0-.894.894L9 18H8l-1.702-3.404a2 2 0 0 0-.894-.894L2 12v-1l3.404-1.702zm2.683 0 .413-.826.413.826a4 4 0 0 0 1.789 1.789l.826.413-.826.413a4 4 0 0 0-1.789 1.789l-.413.826-.413-.826a4 4 0 0 0-1.789-1.789l-.826-.413.826-.413a4 4 0 0 0 1.789-1.789z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
}
