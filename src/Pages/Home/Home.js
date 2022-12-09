import { Button, MenuItem, TextField, } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import Categories from "../../Data/Categories";
import "./Home.css";

const Home = ({ name, setName, fetchQuestions }) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const history = useNavigate();

    const handleSubmit = () => {
        if(!category || !difficulty || !name){
            setError(true);
            return;
        } else {
            setError(false);
            fetchQuestions(category, difficulty);
            history('/quiz');
        }
    };

    return (
        <div className="content">
            <div className="settings">
                <span style={{ fontSize: 30 }}>Quiz Settings</span>
                <div className="settings_select">
                    {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
                    <TextField
                        style={{ marginBottom: 25 }}
                        label="Enter Your Name"
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        select
                        style={{ marginBottom: 30 }}
                        label="Select Category"
                        variant="outlined"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    >
                        {Categories.map((cat) => (
                            <MenuItem key={cat.category} value={cat.value}>
                                {cat.category}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        select
                        style={{ marginBottom: 30 }}
                        label="Select Difficulty"
                        variant="outlined"
                        onChange={(e) => setDifficulty(e.target.value)}
                        value={difficulty}
                    >
                        <MenuItem key="Easy" value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                            Medium
                        </MenuItem>
                        <MenuItem key="Difficulty" value="difficulty">
                            Difficulty
                        </MenuItem>
                    </TextField>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleSubmit}
                    >
                        Start Quiz
                    </Button>
                </div>
            </div>
            <img src="/quiz.svg" className="banner" />
        </div>
    );
};

export default Home;
