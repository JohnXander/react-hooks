
const DiceRoll = () => {
    const generateNum = () => Math.floor(Math.random() * 6) + 1

    const addEmoji = (num) => {
        switch (num) {
            case 6:
                return `${num} 🔥`
                break;
            case 1:
                return `${num} 😭`
                break;
            default:
                return num
                break;
        }
    }

    return (
        <>
            <div className="dice-roll">
                <h1>Dice Roll App</h1>
                <div className="roll-results">
                    <p>{addEmoji(generateNum())}</p>
                    <p>{addEmoji(generateNum())}</p>
                    <p>{addEmoji(generateNum())}</p>
                </div>
            </div>
        </>
    )
}

export default DiceRoll