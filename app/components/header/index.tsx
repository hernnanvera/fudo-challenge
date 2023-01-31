interface HeaderProps {
    logo?: string
    logoAlt?: string
}

export default function Header({ logo, logoAlt }: HeaderProps): JSX.Element {
    const showLogo = !!logo;
    return (
        <header>
            <div className="header-container">
                <div className="header-container__logo">
                    {showLogo && < img src={logo} alt={logo} width={160} height={40} />}
                </div>
            </div>
        </header>
    )
}