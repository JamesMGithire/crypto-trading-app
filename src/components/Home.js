import { useThemeContext } from "./context/Theme"

export default function Home() {
    const { currentTheme } = useThemeContext();
    return (
        <div style={currentTheme}>
            <h1>Learn, buy & sell crypto easily</h1>
        </div>
    )
}