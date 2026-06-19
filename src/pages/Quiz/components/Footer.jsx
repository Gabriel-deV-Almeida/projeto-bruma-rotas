import { Icon } from "./Icons"

export default function Footer() {
    return (
        <footer className="w-full bg-[#4D2708] text-[#FCC650] font-dovetail px-5 py-12 flex gap-4">
            <span>
                <div>
                    <Icon
                        name="logo"
                        size={76}
                    />
                </div>
            </span>
            <span className="min-w-19 text-heading-4">
                <ul className="flex flex-col gap-1.5">
                    <li className="font-bold leading-2.5">Central de ajuda</li>
                    <li className="text-[8px]"> <a href="" className="">Dúvidas frequentes</a> </li>
                    <li className="text-[8px]"> <a href="" className="">Chat de suporte</a> </li>
                </ul>
            </span>
            <span className="min-w-15.5 text-heading-4">
                <ul className="flex flex-col gap-1.5">
                    <li className="font-bold leading-2.5">Sobre nós</li>
                    <li className="text-[8px]"> <a href="" className="">Nossa missão</a> </li>
                    <li className="text-[8px]"> <a href="" className="">Blog</a> </li>
                </ul>
            </span>
            <span className="min-w-15.5 text-heading-4">
                <ul className="flex flex-row flex-wrap gap-0.5 gap-y-1.5">
                    <li className="w-full font-bold leading-2.5">Redes sociais</li>
                    <li><a href="">
                        <Icon
                            name="instagram"
                            size={13}
                            color="#fcc650"
                        />
                    </a></li>
                    <li><a href="">
                        <Icon
                            name="x"
                            size={13}
                            color="#fcc650"
                        />
                    </a></li>
                    <li><a href="">
                        <Icon
                            name="mail"
                            size={13}
                            color="#fcc650"
                        />
                    </a></li>
                </ul>
            </span>
        </footer>
    );
}
