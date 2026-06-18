export default function Footer() {
    return (
        <footer className="w-full bg-[#1a1a1a] text-gray-400 text-center py-6 text-sm">
            <p>
                © {new Date().getFullYear()}{" "}
                <span className="text-[#FFD200] font-medium">Bruma Rotas</span>
                {" "}— Explore Brumadinho do seu jeito.
            </p>
        </footer>
    );
}
