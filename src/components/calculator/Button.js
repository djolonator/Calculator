
export default function Button({symbol, onClick}){

    return (<button className='button' onClick={() => onClick(symbol)}>
        {symbol}
        </button>);
}