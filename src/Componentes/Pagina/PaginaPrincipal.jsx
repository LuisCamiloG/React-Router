import React from 'react'
import { Link } from 'react-router-dom'
import '../Pagina/Pagina.css'

function PaginaPrincipal() {
    return (
        <div className='container-principal'>
            <h1 className='title'>PAGINA PRINCIPAL</h1>
            <div className='subtitle'>
                <Link className='links' to='/'>Home</Link>
                <Link className='links' to='/BillGates'>Bill Gates</Link>
                <Link className='links' to='/AdaLovelace'>Ada Lovelace</Link>
                <Link className='links' to='/StevenWozniak'>Steven Wozniak</Link>
                <Link className='links' to='/MarkZuckerberg'>Mark Zuckerberg</Link>
                <Link className='links' to='/GraceHopper'>GraceHopper</Link>
            </div>
        </div>
    )
}

export default PaginaPrincipal