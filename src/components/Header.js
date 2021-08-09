function Header(props) {
  return (
    <div className="mx-4 py-6">
      <img className="h-8 inline-block" src="./images/logo.svg" alt="snapshot logo"></img>
      <div className="float-right flex">
        <img src="./images/search.svg" alt="search"></img>
        <img src="./images/account.svg" alt="account"></img>
      </div>
    </div>
  );
}

export default Header;
