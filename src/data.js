import { v4 as uuidv4 } from "uuid";

function Chillhops() {
  return [
    {
        name: "Night Fishing",
        cover: "https://chillhop.com/wp-content/uploads/2022/03/1a32362ec1ba749448678975a905ae2b66caf80f-1024x1024.jpg",
        artist: "C Y G N",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=31591",
        color: ["#c5c8f5","#6db166"],
        id: uuidv4(),
        active: false
    },
    {
        name: "Somber Sky",
        cover: "https://chillhop.com/wp-content/uploads/2022/01/c8729f09c7a1bf1143edf05091027770837d9e10-1024x1024.jpg",
        artist: "oddfish",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=30295",
        color: ["#e0b900", "#354168"],
        id: uuidv4(),
        active: false
    },
    {
        name: "Ending",
        cover: "https://chillhop.com/wp-content/uploads/2022/01/0ac63dcdc4e16e6bb979f6ea2c9d0a394ee9e386-1024x1024.jpg",
        artist: "sadtoi, Relyae",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=31589",
        color: ["#5d7981","#846092"],
        id: uuidv4(),
        active: false
    },
    {
        name: "la zona",
        cover: "https://chillhop.com/wp-content/uploads/2021/11/3ff29a35be582c8dc0222273cb9c401ea6b209dc-1024x1024.jpg",
        artist: "Maydee",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=27455",
        color: ["#b5c6da","#a57514"],
        id: uuidv4(),
        active: false
    },
    {
      name: "Parasol",
      cover: "https://chillhop.com/wp-content/uploads/2022/04/c46e7efae453e56f839e3683926e809639f167b0-1024x1024.jpg",
      artist: "Plusma, Guillaume Muschalle, Thomas Renwick",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=28901",
      color: ["#6d776d","#fbdfba"],
      id: uuidv4(),
      active: false
    },
    {
      name: "Embers",
      cover: "https://chillhop.com/wp-content/uploads/2022/01/d7c0bd347f56540babd9dd85454b93a89df84a15-1024x1024.jpg",
      artist: "Molly McPhaul, Enluv",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30135",
      color: ["#e77158","#60bfab"],
      id: uuidv4(),
      active: false
    },
    {
      name: "Polaroid",
      cover: "https://chillhop.com/wp-content/uploads/2021/09/501327d9a200bed56717f5f4a0fa7e4517c491c9-1024x1024.jpg",
      artist: "Makzo, Mama Aiuto",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24767",
      color: ["#cde1e8","#86a0ad"],
      id: uuidv4(),
      active: false
    }
  ]
}

export default Chillhops