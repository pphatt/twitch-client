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
  // ChevronLeft,
  // ChevronRight,
  ChevronsUpDown,
  ChevronUp,
  Circle,
  CircleGauge,
  CirclePlus,
  CircleUserRound,
  Clock,
  Copy,
  Dot,
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
  Layers,
  Loader2,
  LogIn,
  Moon,
  MoveHorizontal,
  MoveVertical,
  Newspaper,
  Play,
  Search,
  Settings,
  Sheet,
  Slash,
  Star,
  SunMedium,
  User,
  UserCog,
  Users,
  X,
  ZoomIn,
  MessageCircle,
  ZoomOut,
  Bold,
  Italic,
  Underline,
  MessageSquareText,
  CircleHelp,
  Strikethrough,
  IdCard,
  type IconNode as LucideIcon,
  type LucideProps,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  messageSquareText: MessageSquareText,
  close: X,
  idCard: IdCard,
  messageCircle: MessageCircle,
  dot: Dot,
  copy: Copy,
  newspaper: Newspaper,
  bold: Bold,
  italic: Italic,
  underline: Underline,
  strikethrough: Strikethrough,
  circleHelp: CircleHelp,
  user: User,
  users: Users,
  dashboard: CircleGauge,
  check: Check,
  userCog: UserCog,
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
  circlePlus: CirclePlus,
  slash: Slash,
  arrowUp: ChevronUp,
  arrowDown: ChevronDown,
  sheet: Sheet,
  // arrowRight: ChevronRight,
  // arrowLeft: ChevronLeft,
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
  layers: Layers,
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
  success: ({ ...props }: LucideProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3 5 1.5 1.5L9 14l-3.5-3.5L7 9l2 2 4-4z"
        clipRule="evenodd"
      ></path>
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
  expandArrowFromLine: ({ ...props }: LucideProps) => (
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
  closeX: ({ ...props }: LucideProps) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28 6.99204L25.008 4L16 12.9973L6.99204 4L4 6.99204L12.9973 16L4 25.008L6.99204 28L16 19.0027L25.008 28L28 25.008L19.0027 16L28 6.99204Z"
        fill="current"
      ></path>
    </svg>
  ),
  hideNavigator: ({ ...props }: LucideProps) => (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M17 7H3V5h14v2zm0 4H3V9h14v2zM3 15h14v-2H3v2z"></path>
    </svg>
  ),
  stream: ({ ...props }: LucideProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path d="M11.414 8.586c.362.362.586.862.586 1.414 0 .552-.224 1.052-.586 1.414l1.414 1.415A3.987 3.987 0 0 0 14 10a3.987 3.987 0 0 0-1.172-2.828l-1.414 1.414zM5.757 5.757 4.343 4.343A7.975 7.975 0 0 0 2 10c0 2.21.895 4.21 2.343 5.657l1.414-1.414A5.981 5.981 0 0 1 4 10c0-1.657.672-3.157 1.757-4.243zm1.415 7.072 1.414-1.415A1.994 1.994 0 0 1 8 10c0-.552.224-1.052.586-1.414L7.172 7.172A3.987 3.987 0 0 0 6 10c0 1.105.448 2.105 1.172 2.829zm7.071 1.414 1.414 1.414A7.975 7.975 0 0 0 18 10a7.975 7.975 0 0 0-2.343-5.657l-1.414 1.414A5.981 5.981 0 0 1 16 10a5.981 5.981 0 0 1-1.757 4.243z"></path>
    </svg>
  ),
  expandArrow: ({ ...props }: LucideProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path d="M6.5 5.5 11 10l-4.5 4.5L8 16l6-6-6-6-1.5 1.5z"></path>
    </svg>
  ),
  analytics: ({ ...props }: LucideProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path d="M7 10h2v4H7v-4zm6-4h-2v8h2V6z"></path>
      <path
        fillRule="evenodd"
        d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm12 2H4v12h12V4z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  smallArrow: ({ ...props }: LucideProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path d="M6.5 5.5 11 10l-4.5 4.5L8 16l6-6-6-6-1.5 1.5z"></path>
    </svg>
  ),
  community: ({ ...props }: LucideProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M7 5a3 3 0 1 1 4 2.83v.503c0 .369.299.667.667.667.736 0 1.333.597 1.333 1.333V18H7v-7.667C7 9.597 7.597 9 8.333 9A.667.667 0 0 0 9 8.333V7.83A3.001 3.001 0 0 1 7 5zm3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM9 16v-5.084c.37-.095.71-.268 1-.5.29.232.63.405 1 .5V16H9z"
        clipRule="evenodd"
      ></path>
      <path d="M3 7.5a1.5 1.5 0 1 1 2 1.415V18H2v-6.667C2 10.597 2.597 10 3.333 10A.667.667 0 0 0 4 9.333v-.418A1.5 1.5 0 0 1 3 7.5zM15.5 6a1.5 1.5 0 0 1 .5 2.915v.418c0 .369.299.667.667.667.736 0 1.333.597 1.333 1.333V18h-3V8.915A1.5 1.5 0 0 1 15.5 6z"></path>
    </svg>
  ),
  closePanel: ({ ...props }: LucideProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      focusable="false"
      aria-hidden="true"
      role="presentation"
      {...props}
    >
      <path d="M8.5 10 4 5.5 5.5 4 10 8.5 14.5 4 16 5.5 11.5 10l4.5 4.5-1.5 1.5-4.5-4.5L5.5 16 4 14.5 8.5 10z"></path>
    </svg>
  ),
  arrowUpDashboard: ({ ...props }: LucideProps) => (
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
        <path d="M5.5 13.5L10 9l4.5 4.5L16 12l-6-6-6 6 1.5 1.5z"></path>
      </g>
    </svg>
  ),
  arrowDownDashboard: ({ ...props }: LucideProps) => (
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
        <path d="M14.5 6.5L10 11 5.5 6.5 4 8l6 6 6-6-1.5-1.5z"></path>
      </g>
    </svg>
  ),
  addPanelPlus: ({ ...props }: LucideProps) => (
    <svg
      width="20px"
      height="20px"
      version="1.1"
      viewBox="0 0 20 20"
      x="0px"
      y="0px"
      {...props}
    >
      <g>
        <path
          fillRule="evenodd"
          d="M9 11v5h2v-5h5V9h-5V4H9v5H4v2h5z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  ),
  explainationMark: ({ ...props }: LucideProps) => (
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
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 8V6h2v2H9zm0 6V9h2v5H9z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  ),
  verifiedPartner: ({ ...props }: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-label="Verified Partner"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12.5 3.5 8 2 3.5 3.5 2 8l1.5 4.5L8 14l4.5-1.5L14 8l-1.5-4.5ZM7 11l4.5-4.5L10 5 7 8 5.5 6.5 4 8l3 3Z"
        clipRule="evenodd"
      ></path>
      <path fill="#fff" d="M11.5 6.5 7 11 4 8l1.5-1.5L7 8l3-3 1.5 1.5Z"></path>
    </svg>
  ),
  heart: ({ ...props }: LucideProps) => (
    <svg
      width="20px"
      height="20px"
      version="1.1"
      viewBox="0 0 20 20"
      x="0px"
      y="0px"
      {...props}
    >
      <g>
        <path
          fillRule="evenodd"
          d="M9.171 4.171A4 4 0 006.343 3H6a4 4 0 00-4 4v.343a4 4 0 001.172 2.829L10 17l6.828-6.828A4 4 0 0018 7.343V7a4 4 0 00-4-4h-.343a4 4 0 00-2.829 1.172L10 5l-.829-.829zm.829 10l5.414-5.414A2 2 0 0016 7.343V7a2 2 0 00-2-2h-.343a2 2 0 00-1.414.586L10 7.828 7.757 5.586A2 2 0 006.343 5H6a2 2 0 00-2 2v.343a2 2 0 00.586 1.414L10 14.172z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  ),
  heartFill: ({ ...props }: LucideProps) => (
    <svg
      width="20px"
      height="20px"
      version="1.1"
      viewBox="0 0 20 20"
      x="0px"
      y="0px"
      {...props}
    >
      <g>
        <path
          fillRule="evenodd"
          d="M9.171 4.171A4 4 0 006.343 3H6a4 4 0 00-4 4v.343a4 4 0 001.172 2.829L10 17l6.828-6.828A4 4 0 0018 7.343V7a4 4 0 00-4-4h-.343a4 4 0 00-2.829 1.172L10 5l-.829-.829z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  ),
  viewer: ({ ...props }: LucideProps) => (
    <svg
      width="20px"
      height="20px"
      version="1.1"
      viewBox="0 0 20 20"
      x="0px"
      y="0px"
      {...props}
    >
      <g>
        <path
          fillRule="evenodd"
          d="M5 7a5 5 0 116.192 4.857A2 2 0 0013 13h1a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-1a3.99 3.99 0 01-3-1.354A3.99 3.99 0 017 15H6a1 1 0 00-1 1v2H3v-2a3 3 0 013-3h1a2 2 0 001.808-1.143A5.002 5.002 0 015 7zm5 3a3 3 0 110-6 3 3 0 010 6z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  ),
  share: ({ ...props }: LucideProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      focusable="false"
      aria-hidden="true"
      role="presentation"
      {...props}
    >
      <path d="M2 16v-3h2v3h12v-3h2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm13-9-1.5 1.5L11 6v7H9V6L6.5 8.5 5 7l5-5 5 5z"></path>
    </svg>
  ),
  reddit: ({ ...props }: LucideProps) => (
    <svg
      width="30px"
      height="30px"
      version="1.1"
      viewBox="0 0 20 20"
      x="0px"
      y="0px"
      {...props}
    >
      <path d="M12.543 3.563a2.083 2.083 0 1 0-.013-.902 3.364 3.364 0 0 0-2.999 3.341v.01c-1.83.078-3.503.6-4.83 1.423a2.918 2.918 0 1 0-3.021 4.953c.096 3.388 3.787 6.114 8.327 6.114s8.235-2.729 8.327-6.12a2.92 2.92 0 0 0-1.252-5.556c-.668 0-1.284.226-1.776.605-1.34-.83-3.03-1.35-4.88-1.42v-.008c0-1.24.922-2.27 2.117-2.439v-.002Zm-7.96 8.034c.05-1.059.752-1.871 1.57-1.871.816 0 1.441.858 1.392 1.917-.049 1.058-.659 1.443-1.477 1.443-.818 0-1.533-.43-1.484-1.49Zm9.28-1.871c.817 0 1.52.812 1.568 1.87.049 1.06-.668 1.49-1.485 1.49-.817 0-1.428-.384-1.476-1.443-.05-1.059.574-1.917 1.392-1.917Zm-.973 4.32c.153.016.251.175.191.317a3.332 3.332 0 0 1-6.149 0 .231.231 0 0 1 .191-.317c.898-.09 1.87-.14 2.884-.14 1.014 0 1.984.05 2.883.14Z"></path>
    </svg>
  ),
  threeDotVertical: ({ ...props }: LucideProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      focusable="false"
      aria-hidden="true"
      role="presentation"
      {...props}
    >
      <path d="M10 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"></path>
    </svg>
  ),
  popup: ({ ...props }: LucideProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path d="M12 4h2.586L9.293 9.293l1.414 1.414L16 5.414V8h2V2h-6v2z"></path>
      <path d="M4 4h6v2H4v10h10v-6h2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path>
    </svg>
  ),
  arrowRight: ({ ...props }: LucideProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path d="M6.5 5.5 11 10l-4.5 4.5L8 16l6-6-6-6-1.5 1.5z"></path>
    </svg>
  ),
  pen: ({ ...props }: LucideProps) => (
    <svg
      width="30px"
      height="30px"
      version="1.1"
      viewBox="0 0 20 20"
      x="0px"
      y="0px"
      {...props}
    >
      <g>
        <path
          fillRule="evenodd"
          d="M17.303 4.303l-1.606-1.606a2.4 2.4 0 00-3.394 0L2 13v5h5L17.303 7.697a2.4 2.4 0 000-3.394zM4 16v-2.171l7.207-7.208 2.172 2.172L6.172 16H4zm10.793-8.621l1.096-1.096a.4.4 0 000-.566l-1.606-1.606a.4.4 0 00-.566 0l-1.096 1.096 2.172 2.172z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  ),
  pauseVideo: ({ ...props }: LucideProps) => (
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
        <path d="M8 3H4v14h4V3zM16 3h-4v14h4V3z"></path>
      </g>
    </svg>
  ),
  playVideo: ({ ...props }: LucideProps) => (
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
        <path d="M5 17.066V2.934a.5.5 0 01.777-.416L17 10 5.777 17.482A.5.5 0 015 17.066z"></path>
      </g>
    </svg>
  ),
  fullscreen: ({ ...props }: LucideProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      focusable="false"
      aria-hidden="true"
      role="presentation"
      {...props}
    >
      <path d="M7 3H2v5h2V5h3V3zm11 5V3h-5v2h3v3h2zm-5 9v-2h3v-3h2v5h-5zm-9-5H2v5h5v-2H4v-3z"></path>
    </svg>
  ),
  exitFullscreen: ({ ...props }: LucideProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      focusable="false"
      aria-hidden="true"
      role="presentation"
      {...props}
    >
      <path d="M8 8V3H6v3H2v2h6zm4 0h6V6h-4V3h-2v5zm0 9v-5h6v2h-4v3h-2zm-4-5H2v2h4v3h2v-5z"></path>
    </svg>
  ),
  smallMute: ({ ...props }: LucideProps) => (
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
        <path d="M5 7l4.146-4.146a.5.5 0 01.854.353v13.586a.5.5 0 01-.854.353L5 13H4a2 2 0 01-2-2V9a2 2 0 012-2h1zM14 10a2 2 0 00-2-2v4a2 2 0 002-2z"></path>
      </g>
    </svg>
  ),
  largeMute: ({ ...props }: LucideProps) => (
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
      <path d="M5 7l4.146-4.146a.5.5 0 01.854.353v13.586a.5.5 0 01-.854.353L5 13H4a2 2 0 01-2-2V9a2 2 0 012-2h1zM12 8.414L13.414 7l1.623 1.623L16.66 7l1.414 1.414-1.623 1.623 1.623 1.623-1.414 1.414-1.623-1.623-1.623 1.623L12 11.66l1.623-1.623L12 8.414z"></path>
    </svg>
  ),
  unmute: ({ ...props }: LucideProps) => (
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
        <path d="M9.146 2.853L5 7H4a2 2 0 00-2 2v2a2 2 0 002 2h1l4.146 4.146a.5.5 0 00.854-.353V3.207a.5.5 0 00-.854-.353zM12 8a2 2 0 110 4V8z"></path>
        <path d="M12 6a4 4 0 010 8v2a6 6 0 000-12v2z"></path>
      </g>
    </svg>
  ),
  smallArrowDown: ({ ...props }: LucideProps) => (
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
        <path d="M11 11l1.5-1.5L14 11l-4 4-4-4 1.5-1.5L9 11V5h2v6z"></path>
      </g>
    </svg>
  ),
  pencil: ({ ...props }: LucideProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      focusable="false"
      aria-hidden="true"
      role="presentation"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="m17.303 4.303-1.606-1.606a2.4 2.4 0 0 0-3.394 0L2 13v5h5L17.303 7.697a2.4 2.4 0 0 0 0-3.394zM4 16v-2.171l7.207-7.208 2.172 2.172L6.172 16H4zm10.793-8.621 1.096-1.096a.4.4 0 0 0 0-.566l-1.606-1.606a.4.4 0 0 0-.566 0l-1.096 1.096 2.172 2.172z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  siteHeaderSettings: ({ ...props }: LucideProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path d="M10 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
      <path
        fillRule="evenodd"
        d="M9 2h2a2.01 2.01 0 0 0 1.235 1.855l.53.22a2.01 2.01 0 0 0 2.185-.439l1.414 1.414a2.01 2.01 0 0 0-.439 2.185l.22.53A2.01 2.01 0 0 0 18 9v2a2.01 2.01 0 0 0-1.855 1.235l-.22.53a2.01 2.01 0 0 0 .44 2.185l-1.415 1.414a2.01 2.01 0 0 0-2.184-.439l-.531.22A2.01 2.01 0 0 0 11 18H9a2.01 2.01 0 0 0-1.235-1.854l-.53-.22a2.009 2.009 0 0 0-2.185.438L3.636 14.95a2.009 2.009 0 0 0 .438-2.184l-.22-.531A2.01 2.01 0 0 0 2 11V9c.809 0 1.545-.487 1.854-1.235l.22-.53a2.009 2.009 0 0 0-.438-2.185L5.05 3.636a2.01 2.01 0 0 0 2.185.438l.53-.22A2.01 2.01 0 0 0 9 2zm-4 8 1.464 3.536L10 15l3.535-1.464L15 10l-1.465-3.536L10 5 6.464 6.464 5 10z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  post: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#ed5631"
      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm600-160H240v60h480v-60Zm-480-60h480v-60H240v60Zm0-140h480v-240H240v240Zm0 200v60-60Zm0-60v-60 60Zm0-140v-240 240Zm0 80v-80 80Zm0 120v-60 60Z" />
    </svg>
  ),
  image: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#ed5631"
      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z" />
    </svg>
  ),
  categorySearch: ({ ...props }: LucideProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M13.192 14.606a7 7 0 1 1 1.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 1 1 4 9a5 5 0 0 1 10 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  admin: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      {...props}
    >
      <path d="M680-280q25 0 42.5-17.5T740-340q0-25-17.5-42.5T680-400q-25 0-42.5 17.5T620-340q0 25 17.5 42.5T680-280Zm0 120q31 0 57-14.5t42-38.5q-22-13-47-20t-52-7q-27 0-52 7t-47 20q16 24 42 38.5t57 14.5ZM480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v227q-19-8-39-14.5t-41-9.5v-147l-240-90-240 90v188q0 47 12.5 94t35 89.5Q310-290 342-254t71 60q11 32 29 61t41 52q-1 0-1.5.5t-1.5.5Zm200 0q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM480-494Z" />
    </svg>
  ),
  postImage: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Zm140-360q25 0 42.5-17.5T400-620q0-25-17.5-42.5T340-680q-25 0-42.5 17.5T280-620q0 25 17.5 42.5T340-560Z" />
    </svg>
  ),
  plus: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      {...props}
    >
      <path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
    </svg>
  ),
  like: ({ ...props }: LucideProps) => (
    <svg
      data-id="3"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 10v12"></path>
      <path
        d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
    </svg>
  ),
  love: ({ ...props }: LucideProps) => (
    <svg
      data-id="6"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    </svg>
  ),
  haha: ({ ...props }: LucideProps) => (
    <svg
      data-id="9"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"></path>
      <line x1="9" x2="9.01" y1="9" y2="9"></line>
      <line x1="15" x2="15.01" y1="9" y2="9"></line>
    </svg>
  ),
  sad: ({ ...props }: LucideProps) => (
    <svg
      data-id="15"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
      <line x1="9" x2="9.01" y1="9" y2="9"></line>
      <line x1="15" x2="15.01" y1="9" y2="9"></line>
    </svg>
  ),
  angry: ({ ...props }: LucideProps) => (
    <svg
      data-id="18"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
      <path d="M7.5 8 10 9"></path>
      <path d="m14 9 2.5-1"></path>
      <path d="M9 10h0"></path>
      <path d="M15 10h0"></path>
    </svg>
  )
}
