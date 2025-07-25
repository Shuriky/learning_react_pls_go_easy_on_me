import React, { useState } from 'react';

function StateTest() {
    let count = 0;

    return (
        <div>
        <button type = 'button' onClick={() => count = count + 1}>
            Your score is: {count}
            </button>
        </div>
    );
}

export default StateTest;