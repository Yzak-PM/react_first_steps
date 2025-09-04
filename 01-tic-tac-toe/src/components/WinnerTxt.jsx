export function WinnerTxt({winner}){
    if(winner === null) return null

    const winnerTitle = winner === false ? 'Empate' : 'El ganador es: '

    return (
        <section className="txtGanador">
            <h1>{ winnerTitle } { winner }</h1>
        </section>
        
    )
}