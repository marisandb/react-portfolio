import React from 'react';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  return (
    <header className="flex-row px-1">
    <h2 className="">
            <a data-testid="link" href="/">Marisa Bartelt - Full-Stack Web Developer</a>
    </h2>
    <nav>
        <ul className="flex-row">
        {categories.map((category) => (
            <li className={`mx-2 ${currentCategory.name === category.name? 'navActive':'hoverable'
              }`}
            key={category.name}
            >
                <span
                    onClick={() => {
                        setCurrentCategory(category);
                    }}
                >
                    {category.name}
                </span>
            </li>
        ))}
        </ul>
    </nav>
</header>
  );
}

export default Nav;
