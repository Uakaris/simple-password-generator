import React from "react";

const PasswordStrengthIndicator = ({ password = "" }) => {
    const getPasswordStrength = () => {
        const length = password.length;
        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChars = /[!@#$%^&*()]/.test(password);

        if (length === 0) return "";

        let score = 0;

        if (hasLowerCase) score++;
        if (hasUpperCase) score++;
        if (hasNumbers) score++;
        if (hasSpecialChars) score++;
        if (length >= 8) score++;
        if (length >= 12) score++;

        if (score <= 2) {
            return "Weak";
        } else if (score === 3) {
            return "Moderate";
        } else if (score === 4) {
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
