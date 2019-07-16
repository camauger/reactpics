import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 5a71f1bfd02d39c57b802973f02ffa43eadaff7d24caadaa0194d191d4b157d4"
  }
});
