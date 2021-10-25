import axios from 'axios';

const getImages = async () => {
  
  const urlImages = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ7demMawTixkBUMRcJf3k_k0SgnZ0S7_qXw&usqp=CAU`;

  const res = await axios.get(urlImages);
  const photos = res.data.results.map((image) => ({
    id: image.id,
    thumb: image.urls.thumb,
    full: image.urls.full,
    user: {
      username: image.user.username,
      link: image.user.links.html,
    },
  }));
  return photos;
};

export { getImages };
