function Hello({spalva, size, skaicius}) {

    return(<h1 style={
        {
            color: spalva,
            fontSize: +size *3 +'px'
        }
    }> Hello {11 + skaicius}</h1>)
}
export default Hello;