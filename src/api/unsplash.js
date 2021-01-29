import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID aGcvLASpMhT_2kV5qfnkXp7MBtevJ1mHMqcrm4w7YPs",
  },
});
