// src/utils/ruleEngine.js

const sanitizeRule = (rule) => {
    // Replace logical operators with JavaScript equivalents and convert single equals (=) to double equals (==)
    return rule
        .replace(/\bAND\b/g, '&&')
        .replace(/\bOR\b/g, '||')
        .replace(/(?<!\!)=/g, '==') // Convert '=' to '==' if it's not '!='
        .replace(/==>/g, '=='); // Avoid transforming '==' if already present
};

const evaluateCondition = (condition, data) => {
    const sanitizedCondition = sanitizeRule(condition);

    // Using 'with' to evaluate the condition against the provided data
    try {
        const evaluate = new Function('data', `with(data) { return ${sanitizedCondition}; }`);
        const result = evaluate(data);

        // Ensure the result is a boolean (true or false)
        if (typeof result !== 'boolean') {
            throw new Error('Condition does not evaluate to a boolean');
        }

        return result;
    } catch (error) {
        throw new Error(`Error evaluating condition: ${error.message}`);
    }
};

// Function to evaluate a rule (can be a combined rule)
const evaluateRule = (rule, data) => {
    try {
        return evaluateCondition(rule, data);
    } catch (error) {
        throw new Error(`Error evaluating rule: ${error.message}`);
    }
};

// Function to create a rule (simple version, just return the input rule as a string)
const createRule = (ruleInput) => {
    return ruleInput.trim();
};

// Function to combine rules into a single rule using logical AND
const combineRules = (rules) => {
    if (rules.length === 0) {
        throw new Error('No rules to combine');
    }
    return rules.map((rule) => `(${rule})`).join(' && '); // Wrap each rule in parentheses for safety
};

// Wrapper function for evaluating combined rules
const evaluateRuleWrapper = (combinedRule, data) => {
    return evaluateRule(combinedRule, data);
};

export { createRule, evaluateRuleWrapper, combineRules };
