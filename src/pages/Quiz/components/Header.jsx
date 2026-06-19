import { Icon } from "./Icons";

export default function Header() {
    return (
        <header className="w-full h-16 bg-[#4D2708] font-meursault text-white px-5 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-1">
                <Icon
                    name="logo"
                    size={98}
                    color="#fcc650"
                />
            </div>

            <nav>
                <ul className="flex items-center gap-3 text-sm">
                    <li>
                        <a href="/" className="text-heading-4 text-[#fcc650] flex items-center gap-0.75">
                            <Icon
                                name="menuHome"
                                size={12}
                                color="#fcc650"
                            />
                            Explore por categorias
                        </a>
                    </li>
                    <li>
                        <a href="/react.html" className="text-heading-4 text-[#fcc650] flex items-center gap-0.75">
                            <Icon
                                name="user"
                                size={8}
                                color="#fcc650"
                            />Login
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
