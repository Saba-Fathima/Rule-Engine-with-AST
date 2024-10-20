// src/App.js

import React, { useState } from 'react';
import { createRule, evaluateRuleWrapper, combineRules } from './utils/ruleEngine';
import RuleDisplay from './RuleDisplay';
import './App.css'; // You can create your own styles

const App = () => {
    const [rules, setRules] = useState([]);
    const [evaluationResult, setEvaluationResult] = useState(null);
    const [dataInput, setDataInput] = useState('');
    const [ruleInput, setRuleInput] = useState('');

    const handleAddRule = () => {
        if (ruleInput.trim() === '') {
            alert('Please enter a valid rule.');
            return;
        }

        const rule = createRule(ruleInput);
        setRules([...rules, rule]);
        alert(`Rule added: ${ruleInput}`);
        setRuleInput('');
    };

    const handleEvaluate = () => {
        if (rules.length === 0) {
            alert('No rules available for evaluation.');
            return;
        }

        let data;
        try {
            data = JSON.parse(dataInput);
        } catch (e) {
            alert('Invalid JSON format for attributes.');
            return;
        }

        const combinedRule = combineRules(rules);
        let result;

        try {
            result = evaluateRuleWrapper(combinedRule, data);
            setEvaluationResult(result);
        } catch (error) {
            alert(`Error evaluating rule: ${error.message}`);
        }
    };

    return (
        <div className="app-container">
            <h1 className="app-title">Rule Engine</h1>
            <div className="input-section">
                <h2>Add Rule</h2>
                <input
                    type="text"
                    className="rule-input"
                    placeholder="Enter rule (e.g., (age < 40 AND department = 'Marketing'))"
                    value={ruleInput}
                    onChange={(e) => setRuleInput(e.target.value)}
                />
                <button className="add-button" onClick={handleAddRule}>Add Rule</button>
            </div>
            <div className="input-section">
                <h2>Attributes</h2>
                <textarea
                    className="data-input"
                    placeholder='{"age": 32, "department": "Sales", "salary": 60000, "experience": 6}'
                    value={dataInput}
                    onChange={(e) => setDataInput(e.target.value)}
                />
            </div>
            <button className="evaluate-button" onClick={handleEvaluate}>Evaluate</button>
            <RuleDisplay rules={rules} />
            {evaluationResult !== null && (
                <h2 className="result-message">
                    Evaluation Result: {evaluationResult ? '✅ True' : '❌ False'}
                </h2>
            )}
        </div>
    );
};

export default App;
