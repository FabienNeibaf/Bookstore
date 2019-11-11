const rand = () => Math.floor(Math.random() * 10);

const uuid = () =>
  `${rand()}${rand()}${rand()}${rand()}${rand()}${rand()}${rand()}`;

export default uuid;
