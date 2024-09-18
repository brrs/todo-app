export interface IconProps {
    className: string
}

export function BellIcon({ className }: IconProps) {
    return (
        <svg className={`${className}`} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.3704 15.4889C10.3704 15.6068 10.3246 15.7199 10.2432 15.8032C10.1618 15.8866 10.0514 15.9334 9.93627 15.9334H5.30585C5.19072 15.9334 5.0803 15.8866 4.99889 15.8032C4.91748 15.7199 4.87175 15.6068 4.87175 15.4889C4.87175 15.3711 4.91748 15.258 4.99889 15.1747C5.0803 15.0913 5.19072 15.0445 5.30585 15.0445H9.93627C10.0514 15.0445 10.1618 15.0913 10.2432 15.1747C10.3246 15.258 10.3704 15.3711 10.3704 15.4889ZM14.2852 13.0445C14.1975 13.2027 14.0701 13.3342 13.9162 13.4253C13.7624 13.5165 13.5876 13.564 13.4098 13.563H1.83304C1.65499 13.5626 1.48019 13.5142 1.32625 13.4226C1.1723 13.331 1.04466 13.1995 0.956185 13.0413C0.867707 12.8831 0.821519 12.7039 0.822275 12.5216C0.823031 12.3393 0.870704 12.1604 0.960491 12.003C1.36927 11.2815 1.97774 9.24745 1.97774 6.60004C1.97774 5.06768 2.5723 3.59808 3.63063 2.51454C4.68896 1.43099 6.12436 0.822266 7.62106 0.822266C9.11776 0.822266 10.5532 1.43099 11.6115 2.51454C12.6698 3.59808 13.2644 5.06768 13.2644 6.60004C13.2644 9.24671 13.8736 11.2815 14.2831 12.003C14.3738 12.1607 14.4219 12.3404 14.4223 12.5234C14.4226 12.7065 14.3753 12.8864 14.2852 13.0445ZM13.5321 12.4519C12.9844 11.4889 12.3962 9.24301 12.3962 6.60004C12.3962 5.30343 11.8931 4.05992 10.9976 3.14308C10.1021 2.22623 8.8875 1.71115 7.62106 1.71115C6.35462 1.71115 5.14005 2.22623 4.24454 3.14308C3.34903 4.05992 2.84594 5.30343 2.84594 6.60004C2.84594 9.24375 2.25701 11.4889 1.70932 12.4519C1.69662 12.4744 1.68993 12.5 1.68993 12.526C1.68993 12.552 1.69662 12.5775 1.70932 12.6C1.72123 12.6227 1.739 12.6416 1.76069 12.6547C1.78238 12.6678 1.80715 12.6745 1.83231 12.6741H13.4091C13.4342 12.6745 13.459 12.6678 13.4807 12.6547C13.5024 12.6416 13.5202 12.6227 13.5321 12.6C13.5448 12.5775 13.5515 12.552 13.5515 12.526C13.5515 12.5 13.5448 12.4744 13.5321 12.4519Z"
            />
        </svg>
    )
}

export function DashboardIcon({ className }: IconProps) {
    return (
        <svg className={`${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3333 8V0H24V8H13.3333ZM0 13.3333V0H10.6667V13.3333H0ZM13.3333 24V10.6667H24V24H13.3333ZM0 24V16H10.6667V24H0Z" />
        </svg>
    )
}

export function VitalIcon({ className }: IconProps) {
    return (
        <svg className={`${className}`} viewBox="0 0 8 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.875 0C2.84729 0 1.86166 0.408258 1.13496 1.13496C0.408258 1.86166 0 2.84729 0 3.875C0 6.795 1.207 10.427 1.813 12.074C1.96964 12.4942 2.25167 12.8561 2.62086 13.1106C2.99006 13.3651 3.42858 13.5 3.877 13.497C4.781 13.497 5.616 12.955 5.94 12.079C6.546 10.439 7.75 6.825 7.75 3.875C7.75 2.84729 7.34174 1.86166 6.61504 1.13496C5.88834 0.408258 4.90271 0 3.875 0ZM3.876 14.998C3.21269 14.998 2.57655 15.2615 2.10753 15.7305C1.6385 16.1996 1.375 16.8357 1.375 17.499C1.375 18.1623 1.6385 18.7984 2.10753 19.2675C2.57655 19.7365 3.21269 20 3.876 20C4.53931 20 5.17545 19.7365 5.64447 19.2675C6.1135 18.7984 6.377 18.1623 6.377 17.499C6.377 16.8357 6.1135 16.1996 5.64447 15.7305C5.17545 15.2615 4.53931 14.998 3.876 14.998Z" />
        </svg>
    )
}

export function MyTaskIcon({ className }: IconProps) {
    return (
        <svg className={`${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 22H19C20.103 22 21 21.103 21 20V5C21 3.897 20.103 3 19 3H17C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2H8C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3H5C3.897 3 3 3.897 3 5V20C3 21.103 3.897 22 5 22ZM5 5H7V7H17V5H19V20H5V5Z" />
            <path d="M11 13.586L9.20697 11.793L7.79297 13.207L11 16.414L16.207 11.207L14.793 9.79297L11 13.586Z" />
        </svg>

    )
}

export function TaskCategoryIcon({ className }: IconProps) {
    return (
        <svg className={`${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.65329 19.7143H24V21.4286H9.65329V19.7143ZM2.65414 20.5714L0.0102479 22.7829L1.45517 24L5.55423 20.5714L1.45517 17.1429L0 18.3514L2.65414 20.5714ZM9.65329 11.1429H24V12.8571H9.65329V11.1429ZM2.65414 12L0.0102479 14.2114L1.45517 15.4286L5.55423 12L1.45517 8.57143L0 9.78L2.65414 12ZM9.65329 2.57143H24V4.28571H9.65329V2.57143ZM2.65414 3.42857L0.0102479 5.64L1.45517 6.85714L5.55423 3.42857L1.45517 0L0 1.20857L2.65414 3.42857Z" />
        </svg>

    )
}

export function SettingsIcon({ className }: IconProps) {
    return (
        <svg className={`${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.71642 24L8.23881 20.16C7.9801 20.06 7.73612 19.94 7.50687 19.8C7.27761 19.66 7.05393 19.51 6.83582 19.35L3.28358 20.85L0 15.15L3.07463 12.81C3.05473 12.67 3.04478 12.5348 3.04478 12.4044V11.5956C3.04478 11.4652 3.05473 11.33 3.07463 11.19L0 8.85L3.28358 3.15L6.83582 4.65C7.05473 4.49 7.28358 4.34 7.52239 4.2C7.76119 4.06 8 3.94 8.23881 3.84L8.71642 0H15.2836L15.7612 3.84C16.0199 3.94 16.2639 4.06 16.4931 4.2C16.7224 4.34 16.9461 4.49 17.1642 4.65L20.7164 3.15L24 8.85L20.9254 11.19C20.9453 11.33 20.9552 11.4652 20.9552 11.5956V12.4044C20.9552 12.5348 20.9353 12.67 20.8955 12.81L23.9701 15.15L20.6866 20.85L17.1642 19.35C16.9453 19.51 16.7164 19.66 16.4776 19.8C16.2388 19.94 16 20.06 15.7612 20.16L15.2836 24H8.71642ZM12.0597 16.2C13.2139 16.2 14.199 15.79 15.0149 14.97C15.8308 14.15 16.2388 13.16 16.2388 12C16.2388 10.84 15.8308 9.85 15.0149 9.03C14.199 8.21 13.2139 7.8 12.0597 7.8C10.8856 7.8 9.89532 8.21 9.08896 9.03C8.28259 9.85 7.8798 10.84 7.8806 12C7.8806 13.16 8.28338 14.15 9.08896 14.97C9.89453 15.79 10.8848 16.2 12.0597 16.2Z" />
        </svg>

    )
}

export function HelpIcon({ className }: IconProps) {
    return (
        <svg className={`${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.94 19.2C12.36 19.2 12.7152 19.0548 13.0056 18.7644C13.296 18.474 13.4408 18.1192 13.44 17.7C13.44 17.28 13.2952 16.9248 13.0056 16.6344C12.716 16.344 12.3608 16.1992 11.94 16.2C11.52 16.2 11.1652 16.3452 10.8756 16.6356C10.586 16.926 10.4408 17.2808 10.44 17.7C10.44 18.12 10.5852 18.4752 10.8756 18.7656C11.166 19.056 11.5208 19.2008 11.94 19.2ZM10.86 14.58H13.08C13.08 13.92 13.1552 13.4 13.3056 13.02C13.456 12.64 13.8808 12.12 14.58 11.46C15.1 10.94 15.51 10.4448 15.81 9.9744C16.11 9.504 16.26 8.9392 16.26 8.28C16.26 7.16 15.85 6.3 15.03 5.7C14.21 5.1 13.24 4.8 12.12 4.8C10.98 4.8 10.0548 5.1 9.3444 5.7C8.634 6.3 8.1392 7.02 7.86 7.86L9.84 8.64C9.94 8.28 10.1652 7.89 10.5156 7.47C10.866 7.05 11.4008 6.84 12.12 6.84C12.76 6.84 13.24 7.0152 13.56 7.3656C13.88 7.716 14.04 8.1008 14.04 8.52C14.04 8.92 13.92 9.2952 13.68 9.6456C13.44 9.996 13.14 10.3208 12.78 10.62C11.9 11.4 11.36 11.99 11.16 12.39C10.96 12.79 10.86 13.52 10.86 14.58ZM12 24C10.34 24 8.78 23.6848 7.32 23.0544C5.86 22.424 4.59 21.5692 3.51 20.49C2.43 19.41 1.5752 18.14 0.9456 16.68C0.316 15.22 0.0008 13.66 0 12C0 10.34 0.3152 8.78 0.9456 7.32C1.576 5.86 2.4308 4.59 3.51 3.51C4.59 2.43 5.86 1.5752 7.32 0.9456C8.78 0.316 10.34 0.0008 12 0C13.66 0 15.22 0.3152 16.68 0.9456C18.14 1.576 19.41 2.4308 20.49 3.51C21.57 4.59 22.4252 5.86 23.0556 7.32C23.686 8.78 24.0008 10.34 24 12C24 13.66 23.6848 15.22 23.0544 16.68C22.424 18.14 21.5692 19.41 20.49 20.49C19.41 21.57 18.14 22.4252 16.68 23.0556C15.22 23.686 13.66 24.0008 12 24Z" />
        </svg>

    )
}

export function LogOutIcon({ className }: IconProps) {
    return (
        <svg className={`${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.6667 6.66667L16.8 8.53333L18.9333 10.6667H8V13.3333H18.9333L16.8 15.4667L18.6667 17.3333L24 12L18.6667 6.66667ZM2.66667 2.66667H12V0H2.66667C1.2 0 0 1.2 0 2.66667V21.3333C0 22.8 1.2 24 2.66667 24H12V21.3333H2.66667V2.66667Z" />
        </svg>

    )
}