import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FiChevronRight, FiChevronLeft, FiGrid } from 'react-icons/fi';
import { soft, footerGlow } from '../utils/theme';
import { media } from '../utils/media';

const ProjectNav = styled.div`
  bottom: 0;
  left: 50%;
  position: fixed;
  display: grid;
  grid-template-columns: [first] 1fr [second] 1fr [third] 1fr;
  justify-content: space-between;
  pointer-events: none;
  z-index: 1;
  transform: translateX(-50%);
  width: 100%;
  border-top: 1px solid ${soft};
  background-color: white;
  height: 65px;
  box-shadow: 0 -2px 8px hsla(280, 40%, 10%, 0.05);
  @media ${media.s} {
    border-top: none;
    box-shadow: none;
    top: auto;
    bottom: 1.7em;
    width: auto;
    background-color: transparent;
    height: auto;
    grid-template-columns: [first] auto [second] auto [third] auto;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
    color: #fff;
    transition: all 0.25s ease;
    padding: 0.5em;
    width: 100%;
    height: 65px;
    background-color: white;
    @media ${media.s} {
      align-items: flex-end;
      height: auto;
      background-color: transparent;
      &:hover {
        svg {
          stroke: #fff;
          background-color: #222;
          box-shadow: 0 6px 12px rgba(16, 20, 103, 0.25);
        }
      }
    }
    svg {
      display: block;
      width: 2em;
      height: 2em;
      stroke: #222;
      background-color: white;
      border-radius: 3px;
      transition: all 0.25s ease;
      @media ${media.s} {
        box-shadow: 0 3px 6px rgba(16, 20, 103, 0.05);
      }
    }
  }
`;

const PrevLink = styled(Link)`
  grid-column-start: first;
`;

const NextLink = styled(Link)`
  grid-column-start: third;
`;

const LinkAll = styled(Link)`
  grid-column-start: second;
  svg {
    padding: 4px;
  }
`;

const Pagination = ({ prev, next }) => (
  <ProjectNav>
    {prev && (
      <PrevLink to={prev.slug}>
        <FiChevronLeft />
      </PrevLink>
    )}
    <LinkAll to="/">
      <FiGrid />
    </LinkAll>
    {next && (
      <NextLink to={next.slug}>
        <FiChevronRight />
      </NextLink>
    )}
  </ProjectNav>
);

export default Pagination;
