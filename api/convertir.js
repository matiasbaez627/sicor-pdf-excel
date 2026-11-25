export default function handler(req, res) {
  res.status(200).json({
    estado: "ok",
    mensaje: "El servidor SICOR está funcionando"
  });
}
