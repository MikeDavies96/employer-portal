import Nav from "./Nav";
import Link from "next/link";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";
import LogoImage from "./assets/Haystack_full_white-01.png";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

// const Logo = styled.h1`
//   font-size: 4rem;
//   margin-left: 2rem;
//   position: relative;
//   z-index: 2;
//   transform: skew(-7deg);
//   a {
//     padding: 0.5rem 1rem;
//     background: ${(props) => props.theme.red};
//     color: white;
//     text-transform: uppercase;
//     text-decoration: none;
//   }
//   @media (max-width: 1300px) {
//     margin: 0;
//     text-align: center;
//   }
// `

const Logo = styled.div`
  img {
    padding: 20px 0px 20px 10px;
    margin-left: 2rem;
    width: 20%;
    height: 10%;
    vertical-align: middle;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;
const StyledHeader = styled.header`
  .bar {
    border-bottom: 1px solid ${props => props.theme.borderGrey};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    background: ${props => props.theme.midGrey};
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        {/* <Link href="/">
        <a href="">Haystack</a>
      </Link> */}
        <Link href="/">
          <a href="">
            <img src={LogoImage} />
          </a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </StyledHeader>
);

export default Header;
