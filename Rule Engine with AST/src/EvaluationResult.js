// src/components/EvaluationResult.js

import React from 'react';

const EvaluationResult = ({ result, onEvaluate }) => {
    return (
        <div>
            <button onClick={onEvaluate}>Evaluate</button>
            {result !== null && (
                <h2>Evaluation Result: {result ? "Eligible" : "Not Eligible"}</h2>
            )}
        </div>
    );
};

export default EvaluationResult;
