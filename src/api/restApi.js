const getData = async (url) => {
  const data = await fetch(url);
  return await data.json();
};

export const getGameSettings = async (mode) => {
  const baseUrl = `${process.env.baseUrl}game-settings/${mode}`;
  return await getData(baseUrl);
};

export const getWinners = async ()=>{
  const baseUrl = `${process.env.baseUrl}winners`;
  return await getData(baseUrl);
};
