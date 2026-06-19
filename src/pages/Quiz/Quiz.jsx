import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function Quiz() {
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);

    return (
        <div className="min-h-screen flex flex-col bg-[#FEFAE0]">
            <Header />

            <Content>
                {/* Exemplo de cards — substitua pelo conteúdo real do quiz */}
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-lg font-semibold text-[#2D5016] mb-2">🏞️ Natureza</h3>
                    <p className="text-gray-600 text-sm">Trilhas, cachoeiras e mirantes incríveis em Brumadinho.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-lg font-semibold text-[#2D5016] mb-2">🍽️ Gastronomia</h3>
                    <p className="text-gray-600 text-sm">Sabores da culinária mineira para todos os gostos.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-lg font-semibold text-[#2D5016] mb-2">🎨 Arte & Cultura</h3>
                    <p className="text-gray-600 text-sm">Inhotim e outras experiências artísticas imperdíveis.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-lg font-semibold text-[#2D5016] mb-2">🎨 Arte & Cultura</h3>
                    <p className="text-gray-600 text-sm">Inhotim e outras experiências artísticas imperdíveis.</p>
                </div>
            </Content>

            <Footer />
        </div>
    );
}