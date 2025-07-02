import { sign } from "./jwt/sign";

const token = sign({
  exp: Date.now() + (24 * 60 * 60 * 1000), // Expiration time set to 24 hours from now
  data: {
    sub: "@viniciusrbr", 
  },
  secret:'secret_key_123' // Secret key used for signing
})

console.log(token);