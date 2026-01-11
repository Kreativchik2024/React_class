const Header = ({text="Пишу полную чепуху", title="Вроде начинаю разбираться"}) => {
    
    return (
        <header className = "header">{text} {title}</header>
    )
}

export default Header