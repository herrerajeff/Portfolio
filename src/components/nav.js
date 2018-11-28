import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { media } from '../utils/media';
import { primary, text, header } from '../utils/theme';

const NavListContainer = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
    background: #222;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    padding: 9em 1.5em 2em 2em;
    transition: all 0.25s ease-in-out;
    opacity: ${props => (props.open ? '1' : '0')};
    pointer-events: ${props => (props.open ? 'auto' : 'none')};
    ul {
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
    }
    li {
      &:first-of-type {
        flex-direction: column;
        order: 4;
        margin-top: 4em;
        transition: all 0.25s 0.25s ease-in-out;
        opacity: ${props => (props.open ? '1' : '0')};
        transform: ${props => (props.open ? 'translateX(0)' : 'translateX(10px)')};
        p {
          display: block;
          color: rgba(255,255,255,0.8);
          text-align: right;
          margin-bottom: 3em;
          svg {
            path {
              fill: white;
            }
          }
        }
        span {
          display: none;
        }
      }
      &:not(:nth-of-type(2)) {
        margin-left: 0 !important;
      }
      &:not(:nth-of-type(1)) {
        font-size: 3em;
        transition: all 0.25s 0.15s ease-in-out;
        opacity: ${props => (props.open ? '1' : '0')};
        transform: ${props => (props.open ? 'translateX(0)' : 'translateX(10px)')};
      }
    }
    a {
      color: #FFF !important;
    }
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: ${text};
  li {
    display: inline;
    margin-bottom: 0;
    &:not(:nth-of-type(2)) {
      margin-left: 1em;
    }
  }
  a {
    font-family: 'IBM Plex Sans Condensed';
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: ${header};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all 0.25s ease-in-out;
    &:hover {
      border-bottom: 1px solid ${header};
    }
  }
`;

const SocialLink = styled.a`
  border: none !important;
  &:first-of-type {
    margin-left: 1em;
  }
`;

const Separator = styled.span`
  margin: 0 1em;
  font-size: 1em;
`;

const NavSub = styled.li`
  font-size: 12px;
  letter-spacing: 0.05em;
  position: relative;
  // top: -3px;
  text-align: right;
  opacity: 0.55;
  transition: all .3s ease;
  @media ${media.s}{
    font-size: 0.7em;
  }
  &:hover{
    opacity: 1;
  }
  p {
    margin-bottom: 0;
    display: inline;
    letter-spacing: 0.05em;
    color: ${text};
  }
  a {
    display: inline-block;
    line-height: 1.1em;
    svg {
      margin: 0 0.5em;
    }
    letter-spacing: 0.05em;
    &:last-of-type {
      margin-right: 0;
    }
  }
  svg {
    width: 1.625em !important;
    position: relative;
    top: 4px;
    path {
      transition: all 0.25s ease;
      fill: ${header};
    }
    &:hover {
      border: none !important;
      path {
        fill: ${primary};
      }
    }
  }
`;

const Hamburger = styled.svg`
  display: block;
  position: absolute;
  top: 50%;
  right: 50%;
  transition: all 0.25s ease;
  opacity: ${props => (props.open ? '0' : '1')};
  transform: ${props => (props.open ? 'translateX(2em)' : 'translateX(0)')};
  width: 25px;
  margin-top: -10px;
  margin-right: -12.5px;
  z-index: 6;
  path {
    fill: ${header};
  }
`;

const CloseBtn = styled.svg`
  display: block;
  position: absolute;
  top: 50%;
  right: 50%;
  margin-top: -0.81em;
  margin-right: -0.81em;
  transition: all 0.25s ease;
  opacity: ${props => (props.open ? '1' : '0')};
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-1em)')};
  width: 1.625em;
  path {
    fill: white;
  }
`;

const MainLink = styled(Link)`
font-size: 44px;
font-weight: 500;
  @media ${media.s} {
    font-size: 16px;
  }
`;

const NavLink = props => (
  <li>
    <MainLink to={props.to}>{props.children}</MainLink>
  </li>
);

const NavToggle = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  height: 3em;
  width: 3em;
  background-color: transparent;
  padding: 3.63em;
  display: none;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export default class Nav extends Component {
  state = {
    open: false,
  };

  toggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    return (
      <div>
        <NavToggle onClick={this.toggle}>
          <Hamburger open={this.state.open} viewBox="0 0 16.13 12">
            <path d="M0 0h16v2H0zm.12 5h16v2h-16zM0 10h16v2H0z" />
          </Hamburger>
          <CloseBtn open={this.state.open} viewBox="0 0 13.41 13.41">
            <path d="M1.41 13.41l5.3-5.29L12 13.41 13.41 12 8.12 6.71l5.29-5.3L12 0 6.71 5.29 1.41 0 0 1.41l5.29 5.3L0 12l1.41 1.41z" />
          </CloseBtn>
        </NavToggle>
        <NavListContainer open={this.state.open}>
          <NavList>
            <NavSub>
              <p>
                FOLLOW
                <SocialLink href="https://www.twitter.com/isthatjeff" alt="Twitter">
                  <svg
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="1.414"
                    clipRule="evenodd"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="nonzero"
                      d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z"
                    />
                  </svg>
                </SocialLink>
                <SocialLink href="https://www.instagram.com/_isthatjeff" alt="Instagram">
                  <svg
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="1.414"
                    clipRule="evenodd"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z" />
                  </svg>
                </SocialLink>
              </p>
              <Separator>/</Separator>
              <a href="mailto:herrera.jeffrey@gmail.com">CONTACT ME</a>
              <Separator>/</Separator>
            </NavSub>
            <NavLink to="/">Work</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </NavList>
        </NavListContainer>
      </div>
    );
  }
}
