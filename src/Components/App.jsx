import { useState, useCallback } from "react";
import PasswordStrengthIndicator from "./strengthCheck.jsx";
import usePasswordGenerator from "../Hooks/usePasswordGenerator";

const App = () => {
    const [length, setLength] = useState(4);
    const [checkBoxData, setCheckBoxData] = useState([
        { title: "Include Uppercase Letters", checked: false },
        { title: "Include Lowercase Letters", checked: false },
        { title: "Include Numbers", checked: false },
        { title: "Include Special Characters", checked: false },
    ]);
    const [copied, setCopied] = useState(false);

    const handleCheckBoxChange = (index) => {
        const newCheckBoxData = [...checkBoxData];
        newCheckBoxData[index].checked = !newCheckBoxData[index].checked;
        setCheckBoxData(newCheckBoxData);
    };

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(password);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    });

    const { password, errorMessage, generatePassword } = usePasswordGenerator();

    return (
        <div className="container">
            {password && (
                <div className="header">
                    <div className="title">{password}</div>
                    <button className="copyBtn" onClick={handleCopy}>
                        {copied ? "Copied" : "Copy"}
                    </button>
                </div>
            )}
            {/* character length slider */}
            <div className="charLength">
                <span>
                    <label>Character Length</label>
                    <label>{length}</label>
                </span>
                <input
                    type="range"
                    min="4"
                    max="32"
                    value={length}
                    onChange={(event) => setLength(event.target.value)}
                />
            </div>
            {/* checkboxes for uppercase, lowercase, numbers, and special characters */}
            <div className="checkBoxes">
                {checkBoxData.map((data, index) => (
                    <div key={index}>
                        <input
                            type="checkbox"
                            checked={data.checked}
                            onChange={() => handleCheckBoxChange(index)}
                        />
                        <label>{data.title}</label>
                    </div>
                ))}
            </div>
            {/* password strenthg meter */}
            <PasswordStrengthIndicator password={password} />
            {/* error handling */}
            {errorMessage && <div className="error">{errorMessage}</div>}
            {/* password input */}
            <button
                className="generateBtn"
                onClick={() => generatePassword(checkBoxData, length)}
            >
                Generate Password
            </button>
        </div>
    );
};

export default App;
