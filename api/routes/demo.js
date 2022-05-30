const express = require("express")
const router = express.Router()
const db = require("./firebase")
const {getDocs, addDoc, setDoc, collection, serverTimestamp} = require("firebase/firestore")

router.get("/info", async (req, res, next) => {
  let messages = [];
  console.log(req.query)
  const docs = await getDocs(collection(db, "responses"))
  docs.forEach((doc) => (console.log(doc.data()), messages.push(doc.data())))
  res.json({result: messages})
})

router.get("/info/:id", async (req, res, next) => {
  console.log(req.params)  // shows the path params (stuff after /info/)
  res.sendStatus(200)  // say OK without sending data back
})

router.post("/post", async (req, res, next) => {
  let request = req.body;
  request["dateCreated"] = serverTimestamp();
  await addDoc(collection(db, "responses"), request);
  console.log(request)
  res.send(request)
})

/*
router.put("/edit", async (req, res, next) => {
  let id = req.body.id;
  await setDoc(doc(db, "responses", id), req.body);
})
*/

module.exports = router