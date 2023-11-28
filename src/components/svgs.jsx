import { useSnippetStore } from "../store/snippetsStore";

function SettingsSVG({ onClick }) {
  return (
    <svg
      className="flex gap-2"
      onClick={onClick}
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#969696"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
        stroke="#969696"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowLeft() {
  const { setSlideBarIsVisible } = useSnippetStore();

  return (
    <svg
      onClick={() => setSlideBarIsVisible()}
      width="40px"
      height="40px"
      viewBox="0 -0.5 17 17"
      version="1.1"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(1.000000, 0.000000)" fill="#434343">
          <path d="M0,8.041 C0,3.652 3.582,0.082 7.985,0.082 C12.386,0.082 15.968,3.652 15.968,8.041 C15.968,12.43 12.386,16 7.985,16 C3.582,16 0,12.43 0,8.041 L0,8.041 Z M14.057,8.041 C14.057,4.708 11.342,1.996 8.006,1.996 C4.669,1.996 1.954,4.708 1.954,8.041 C1.954,11.374 4.67,14.086 8.006,14.086 C11.343,14.086 14.057,11.374 14.057,8.041 L14.057,8.041 Z" />
          <path d="M7.975,5.02 L4.071,8.022 L7.976,10.973 L7.976,8.97 L11.116,8.97 C11.461,8.97 11.907,8.646 11.907,8.015 C11.907,7.385 11.424,7.04 11.081,7.04 L7.976,7.04 L7.976,5.02 L7.975,5.02 Z" />
        </g>
      </g>
    </svg>
  );
}

function ArrowRight() {
  const { setSlideBarIsVisible } = useSnippetStore();

  return (
    <svg
      onClick={() => setSlideBarIsVisible()}
      width="40px"
      height="40px"
      viewBox="0 -0.5 17 17"
      version="1.1"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(1.000000, 0.000000)" fill="#434343">
          <path
            d="M15.969,8.041 C15.969,12.43 12.387,16 7.983,16 C3.583,16 0.001,12.43 0.001,8.041 C0.001,3.652 3.583,0.082 7.983,0.082 C12.387,0.082 15.969,3.652 15.969,8.041 L15.969,8.041 Z M1.969,8.041 C1.969,11.346 4.681,14.037 8.014,14.037 C11.347,14.037 14.061,11.346 14.061,8.041 C14.061,4.736 11.348,2.045 8.014,2.045 C4.68,2.045 1.969,4.736 1.969,8.041 L1.969,8.041 Z"
            className="si-glyph-fill"
          />
          <path
            d="M8.057,10.969 L11.961,7.967 L8.056,5.016 L8.056,7.019 L4.793,7.019 C4.447,7.019 4.002,7.343 4.002,7.974 C4.002,8.604 4.485,8.949 4.828,8.949 L8.057,8.949 L8.057,10.969 L8.057,10.969 Z"
            className="si-glyph-fill"
          />
        </g>
      </g>
    </svg>
  );
}

function Feather() {
  return (
    <svg
      width="120px"
      fill="#6366F1"
      viewBox="0 -0.11 33.736 33.736"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <g transform="translate(-287.982 -577.197)">
          <path d="M288.983,610.716a1,1,0,0,1-.528-1.85c.141-.088,14.151-8.859,17.653-17.833a1,1,0,0,1,1.863.727c-3.745,9.6-17.863,18.434-18.462,18.8A.993.993,0,0,1,288.983,610.716Z"></path>
          <path d="M292.256,607.871l-.017-1.09a28.119,28.119,0,0,1,4.178-14.957l.3-.441h3.806L299.6,588.4l.293-.4c5.611-7.734,15.292-10.108,19.194-10.77a2.261,2.261,0,0,1,2.621,2.408c-1.791,25.095-28.105,28.1-28.371,28.125Zm5.547-14.488a26.983,26.983,0,0,0-3.554,12.23c4.909-.811,23.983-5.3,25.469-26.121a.275.275,0,0,0-.09-.232.224.224,0,0,0-.2-.06c-3.59.608-12.393,2.752-17.614,9.575l.776,2.529a1.607,1.607,0,0,1-1.536,2.079Z"></path>
        </g>
      </g>
    </svg>
  );
}

export { SettingsSVG, ArrowLeft, ArrowRight, Feather };
