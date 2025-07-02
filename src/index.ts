import { sign } from "./jwt/sign";
import { verify } from "./jwt/verify";

const secret = 'secret_key_123'

const token = sign({
  exp: Date.now() + (24 * 60 * 60 * 1000), // Expiration time set to 24 hours from now
  data: {
    sub: "@viniciusrbr",
  },
  secret,
})

const decoded = verify({
  token,
  secret
})

console.log({ decoded });