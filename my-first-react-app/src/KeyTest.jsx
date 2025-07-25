function KeyTest() {
    let myKey = crypto.randomUUID();
    return (
        <h1>
            {myKey}
        </h1>
    )
}

export default KeyTest