import { createHmac } from "crypto";

interface IGenerateSignature {
  header: string;
  secret: string;
  payload: string;
}

export function generateSignature({ header, secret, payload }: IGenerateSignature) {
  const hmac = createHmac('sha256', secret);

  return hmac.update(`${header}.${payload}`).digest('base64url');
}