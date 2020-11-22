const getData = async (url:string) => {
  const data = await fetch(url);
  return await data.json();
};

export const getGameSettings = async (mode='easy') => {
  const baseUrl = `http://localhost:3000/game-settings/`+mode;
  return await getData(baseUrl);
};

export const getWinners = async ()=>{
  const baseUrl = `${process.env.baseUrl}winners`;
  return await getData(baseUrl);
};
