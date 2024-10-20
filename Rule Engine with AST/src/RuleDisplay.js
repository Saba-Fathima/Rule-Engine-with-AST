import React from 'react';

const RuleDisplay = ({ combinedAST }) => {
    // Check if combinedAST is valid
    if (!combinedAST) {
        return <div>No rules to display.</div>;
    }

    const renderNode = (node) => {
        if (!node) return null;

        if (node.type === 'operator') {
            return (
                <div>
                    <span>({renderNode(node.left)} {node.value} {renderNode(node.right)})</span>
                </div>
            );
        } else if (node.type === 'operand') {
            return <span>{node.value}</span>;
        }

        return null;
    };

    return (
        <div>
            <h2>Combined AST</h2>
            {renderNode(combinedAST)}
        </div>
    );
};

export default RuleDisplay;
