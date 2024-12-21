import axios from 'axios';

export const chartJsToImage = async (chartConfig: unknown) => {
  const encoderUri = encodeURIComponent(JSON.stringify(chartConfig));
  const chartUrl = `https://quickchart.io/chart?c=${encoderUri}`;
  const response = await axios.get(chartUrl, { responseType: 'arraybuffer' });
  return `data:image/png;base64,${Buffer.from(response.data).toString('base64')}`;
};
