import { useTheme } from "./ThemeProvider";

const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer className={theme === 'dark' ? "border-t border-gray-700 p-4 text-xs text-gray-500 flex justify-between" : "border-t border-gray-300 p-4 text-xs text-gray-500 flex justify-between"}>
            <span>© 2025 Growby by Sprouto InfoSolutions Pvt Ltd.</span>
            <div className="flex gap-4">
              <a href="#">Support</a>
              <a href="#">Docs</a>
              <a href="#">API Status</a>
            </div>
        </footer>
    );
}

export default Footer;