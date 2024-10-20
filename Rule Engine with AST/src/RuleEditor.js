import React from 'react';

const RuleEditor = ({ ruleInput, setRuleInput, onAddRule }) => {
    const handleAdd = () => {
        if (ruleInput.trim() === '') {
            alert("Please enter a valid rule.");
            return;
        }
        onAddRule(ruleInput); // Call the passed function
        setRuleInput(''); // Clear the input field
    };

    return (
        <div>
            <h2>Rule Editor</h2>
            <textarea
                rows={5}
                value={ruleInput}
                onChange={(e) => setRuleInput(e.target.value)}
                placeholder="Enter rule here..."
            />
            <button onClick={handleAdd}>Add Rule</button>
        </div>
    );
};

export default RuleEditor;
