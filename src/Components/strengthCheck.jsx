import React from "react";

const PasswordStrengthIndicator = ({ password = "" }) => {
    const getPasswordStrength = () => {
        const passwordLength = password.length;

        if (passwordLength < 1) {
            return "";
        } else if (passwordLength < 4) {
            return "Weak";
        } else if (passwordLength < 8) {
            return "Moderate";
        } else if (passwordLength < 12) {
            return "Strong";
        } else {
            return "Very Strong";
        }
    };

    const passwordStrength = getPasswordStrength();
    if (!passwordStrength) {
        return <React.Fragment />;
    }

    return (
        <div className="passwordStrength">
            Strength: <span>{passwordStrength}</span>
        </div>
    );
};

export default PasswordStrengthIndicator;