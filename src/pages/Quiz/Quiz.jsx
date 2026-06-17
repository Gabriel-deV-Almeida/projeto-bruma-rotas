import React, { useState } from "react";

export default function Quiz() {
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);

    return (
        <div>
            <h1>Quiz</h1>
            <p>Esta é uma página de quiz.</p>
        </div>
    );
}