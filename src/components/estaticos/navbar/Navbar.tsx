import React from 'react';
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { addToken } from '../../../store/tokens/action';
import {toast} from 'react-toastify';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



// local storage: Usado para guardarmos dados não sensiveis do usuário, como token por exemplo

function Navbar() {

  let navigate = useNavigate();

  const dispatch = useDispatch();//responsavel por enviar o token

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state)=> state.tokens
  )

  function goLogout() {
    dispatch(addToken(''));
    toast.info('usuário deslogado',{
        position: 'top-right',
        autoClose: 2000,//tempo que a notificacao sera exibida
        hideProgressBar: false,
        closeOnClick: true,//pra fechar a notificacao com um click no X
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
    navigate('/login')
}


  var navbarComponent;
  if(token!= ""){ navbarComponent = 




  <nav>
    <input type="checkbox" id="check" />
    <label htmlFor="check" className='check-response-btn' >
    <h4 className="fa fa-bars"><FontAwesomeIcon icon={faBars} /> </h4>
    </label>
    <ul>
      <li><a><Link to="/home">Home</Link></a></li>
      <li><a><Link to="/postagens">Postagem</Link></a></li>
      <li><a><Link to="/temas">Temas</Link></a></li>
      <li><a><Link to="/formularioTema">Cadastrar Projeto</Link></a></li>
      <li><a className="active" onClick={goLogout}>Logout</a></li>
    </ul>
</nav>







}
    return (
      <>
      {navbarComponent}
      </>
    );
    }
export default Navbar;