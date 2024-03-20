import axios from 'axios';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  const {
    id, 
    price,
    email,
    advcake_track_id,
    advcake_track_url,
    promocode
  } = req.body;

  try {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    
    const advCakeEncoded = encodeURIComponent(advcake_track_url)

      const newresponse =await axios.post(
        `https://api.ekacvda.com/postback/mipinstitute?id=${id}&totalPrice=${price || 0}&coupon=${promocode || ''}&clientType=new&trackId=${advcake_track_id}&url=${advCakeEncoded}&email=${email}&timeLastChanged=${formattedDate}&status=1`
      )
      res.status(200).json({ 
        success: true, 
        data: newresponse?.data
      });

  } catch (err) {
    console.log(err.data);
    res.status(200).json({ success: false});
  }
}