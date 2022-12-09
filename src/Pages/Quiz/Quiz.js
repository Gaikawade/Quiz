import { useEffect, useState } from "react";

const Quiz = (name, score, questions, setQuestions, setScore) => {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);

    useEffect(() => {
        console.log(questions);

        setOptions(
            questions &&
                handleSuffle([
                    questions[currQues]?.correct_answer,
                    ...questions[currQues]?.incorrect_answer,
                ])
        );
    }, [questions]);
    console.log(options);

    const handleSuffle = (opt) => {
        return opt.sort(() => Math.random() - 0.5);
    };

    return (
        <div>
            <span className="subtitle">Welcome, {}</span>
        </div>
    );
};

export default Quiz;
