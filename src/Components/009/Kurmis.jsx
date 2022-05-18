function Kurmis() {
    const zxz = 12;
    return (
        <>
            <h2 style = {
                {
                    color: 'darkblue',
                    backgroundColor:'skyblue',
                    padding:zxz+'px'
                }
            }>Kurmis</h2>
            <span>kurmis yra urvinis padaras Nr. {zxz>20 ? 'jaja23' : 'noNumber'}</span>
        </>
    )
}
export default Kurmis;