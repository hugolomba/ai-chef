import chefLogo from '../images/chef-logo.png';

export default function Header() {
    return(
           <header>
        <img src={chefLogo} alt="logo of a chef" />
        <h1>AI Chef</h1>
      
      </header>
    )
}