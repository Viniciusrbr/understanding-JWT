import { generateSignature } from "./generateSignature";

interface IVerifyOptions {
  token: string;          // JWT token to be verified
  secret: string;        // Secret key used for verification
}

export function verify({ token, secret }: IVerifyOptions) {
  const [headerSent, payloadSent, signatureSent] = token.split('.');

  const signature = generateSignature({
    header: headerSent,
    payload: payloadSent,
    secret,
  });

  // Check if the signature matches the one sent in the token
  if (signature !== signatureSent) {
    throw new Error("Invalid JWT token.");
  }

  // Decode the payload
  const decodedPayload = JSON.parse(
    Buffer.from(payloadSent, 'base64url').toString('utf-8')
  )

  if (decodedPayload.exp < Date.now()) {
    throw new Error("JWT token has expired.");
  }

  return decodedPayload;
}