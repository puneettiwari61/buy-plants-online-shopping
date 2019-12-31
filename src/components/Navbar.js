import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo2.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class componentName extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5' style={{background:'#333'}}>
        {/* 
        https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <Link to='/'>
          <img src={logo} alt='store' className='navbar-brand' />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>products</Link>
          </li>
        </ul>
        <h3 style={{textAlign:'center', paddingLeft:'20rem', fontWeight:'bolder', fontSize:'3rem', color:'white' }}>Let's Make Bageecha</h3>
        <Link to='/cart' className='ml-auto'>
        <ButtonContainer>
            <i className='fas fa-cart-plus'/>
            my cart
        </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}


const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform: capitalize;
  }
`