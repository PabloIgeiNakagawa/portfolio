export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { token } = req.body || {};
  console.log("verify-recaptcha body:", req.body);

  if (!token) {
    return res.status(400).json({ success: false, message: "Missing token" });
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return res.status(500).json({ success: false, message: "Secret key not configured" });
  }

  try {
    const params = new URLSearchParams();
    params.append("secret", secret);
    params.append("response", token);

    const r = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      body: params
    });

    const data = await r.json();
    console.log("google verify response:", data);

    if (data.success) {
      return res.status(200).json({ success: true, data });
    } else {
      return res.status(400).json({ success: false, data });
    }
  } catch (err) {
    console.error("verify-recaptcha error:", err);
    return res.status(500).json({ success: false, message: "Verification failed" });
  }
}
