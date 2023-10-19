function FunctionParenthesisAndParameters() {
    const square = a => a * a;
    const plusOne = a => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return (
        <>
            <h3>Parenthesis And Parameters</h3>
            twoSquared = { twoSquared }<br />
            square(2) = { square(2, 4) }<br />
            threePlusOne = { threePlusOne }<br />
            plusOne(2) = { plusOne(3) }<br />
        </>
    )
}

export default FunctionParenthesisAndParameters;
